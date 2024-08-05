"use client";

import { UniSectionCard } from "@/components/uniCard";
import Image from "next/image";
import { useParams } from "next/navigation";

import { BlogSocialButtonGroup } from "@/components/blogSocialBtn";

import Loading from "@/components/loading";
import { formatDate } from "@/lib/utils";
import { createBlogComment, getAllBlogs, getBlogComments } from "@/utils/query";
import { useUser } from "@clerk/nextjs";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button, Form, Input } from "antd";
import Link from "next/link";

export function FullBlog() {
  const params = useParams<{ slug: string }>();

  const { isSignedIn, user, isLoaded } = useUser();

  console.log("This is user;s data : ", user);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const { data, isPending, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  const blog = data?.data.find((blog: any) => blog.slug === params?.slug);
  const slug = blog?.slug;
  console.log("this is blog: ", slug);

  const {
    data: comments,
    isPending: isLoadingBlogComments,
    error: commentsError,
  } = useQuery({
    queryKey: ["fetchBlogComments", slug],
    queryFn: () => getBlogComments(slug),
    enabled: !!slug,
  });

  const mutation = useMutation({
    mutationFn: (values) => createBlogComment(values),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["fetchBlogComments"],
      });
      form.resetFields();
    },
  });

  if (isPending)
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  if (error) return error?.message;
  console.log(data?.data, isPending, error);

  // check if the slug is present in the database and fetch it

  console.log(
    "comments associated with blog",
    comments?.data,
    isLoadingBlogComments,
    commentsError
  );

  const test = (testdata: any) => {
    console.log("testdata :", testdata);
    const data = {
      message: testdata.message,
      blogId: blog.id,
      slug: blog.slug,
      userId: user?.id || "",
      userImg: user?.imageUrl || "",
    };
    // @ts-ignore
    mutation.mutate(data);
  };
  return (
    <main className="container pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="grid md:grid-cols-6 gap-4">
        <div className="grid col-span-4 mx-auto w-full">
          <BlogSocialButtonGroup blog={blog} />

          <h2 className="pt-8">{blog.title.rendered}</h2>
          <p className=" pb-8">{`Posted on ${formatDate(blog.date)}`}</p>
          <div className="">
            <div
              className=""
              contentEditable="false"
              dangerouslySetInnerHTML={{ __html: blog.content.rendered }}
            />
          </div>

          <h3 className="font-light text-3xl text-gray-600 pb-12">
            <hr className="mt-24 mb-12 border-[0.5] border-slate-500" />
            Add a Comment
          </h3>
          <div className="w-full ">
            <Form
              onFinish={test}
              // action={createBlogComment}
              className=""
              form={form}
            >
              <Form.Item name="userImg" hidden>
                <Input
                  hidden
                  name="userImg"
                  type="text"
                  value={user?.imageUrl}
                />
              </Form.Item>
              <label htmlFor="simple-search" className="sr-only">
                Search
              </label>
              <div className="relative w-full flex items-center ">
                {/* <div className="inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={23}
                    height={23}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-message-circle text-gray-600"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                  </svg>
                </div> */}
                <Form.Item
                  name="message"
                  id="simple-search"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                >
                  <Input
                    className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                    placeholder="Write a comment..."
                    required
                  ></Input>
                </Form.Item>
              </div>
              {!isSignedIn ? (
                <Link href={"/sign-in"}>
                  <Form.Item>
                    {/* <Button
                      htmlType="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </Button> */}
                    <Button
                      htmlType="submit"
                      className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-secondary/80 rounded-lg focus:ring-4 focus:ring-primary-200 hover:bg-secondary/90"
                    >
                      Post comment
                    </Button>
                  </Form.Item>
                </Link>
              ) : (
                <Form.Item>
                  {/* <Button
                    htmlType="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    <span className="sr-only">Comment</span>
                  </Button> */}
                  <Button
                    htmlType="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                  >
                    Post comment
                  </Button>
                </Form.Item>
              )}
            </Form>
            <div className="pt-4">
              <BlogSocialButtonGroup blog={blog} />
              <svg className="h-36 w-44" viewBox="0 0 282 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.47518 1.21859C7.91705 0.517843 8.84332 0.307984 9.54406 0.749852L20.9634 7.95053C21.6641 8.3924 21.874 9.31867 21.4321 10.0194C20.9902 10.7202 20.0639 10.93 19.3632 10.4882L9.21272 4.08755L2.81211 14.238C2.37025 14.9388 1.44398 15.1486 0.74323 14.7068C0.0424877 14.2649 -0.167371 13.3386 0.274499 12.6379L7.47518 1.21859ZM108.358 42.4495C92.1859 48.7746 78.6089 53.0308 67.1377 54.9524C55.6659 56.8741 46.1876 56.4807 38.2858 53.3874C22.3949 47.1667 13.6269 30.3593 7.28107 2.35011L10.2069 1.68722C16.5425 29.6509 25.0407 44.9808 39.3794 50.5939C46.5925 53.4175 55.4699 53.8652 66.642 51.9937C77.8147 50.1221 91.1698 45.9508 107.265 39.6556L108.358 42.4495Z" fill="#4D4D4D" />
                <path d="M132.716 31.0909C132.631 30.3712 132.285 29.8125 131.679 29.4148C131.073 29.017 130.33 28.8182 129.449 28.8182C128.805 28.8182 128.241 28.9223 127.759 29.1307C127.28 29.339 126.906 29.6255 126.636 29.9901C126.371 30.3546 126.239 30.7689 126.239 31.233C126.239 31.6212 126.331 31.955 126.516 32.2344C126.705 32.509 126.946 32.7386 127.24 32.9233C127.534 33.1032 127.841 33.2524 128.163 33.3707C128.485 33.4844 128.781 33.5767 129.051 33.6477L130.528 34.0455C130.907 34.1449 131.329 34.2822 131.793 34.4574C132.261 34.6326 132.709 34.8717 133.135 35.1747C133.566 35.473 133.921 35.8565 134.2 36.3253C134.48 36.794 134.619 37.3693 134.619 38.0511C134.619 38.8371 134.413 39.5473 134.001 40.1818C133.594 40.8163 132.998 41.3205 132.212 41.6946C131.43 42.0687 130.481 42.2557 129.364 42.2557C128.322 42.2557 127.42 42.0876 126.658 41.7514C125.9 41.4152 125.304 40.9465 124.868 40.3452C124.437 39.7438 124.193 39.0455 124.136 38.25H125.955C126.002 38.7992 126.187 39.2538 126.509 39.6136C126.835 39.9687 127.247 40.2339 127.744 40.4091C128.246 40.5795 128.786 40.6648 129.364 40.6648C130.036 40.6648 130.64 40.5559 131.175 40.3381C131.71 40.1155 132.134 39.8078 132.446 39.4148C132.759 39.017 132.915 38.553 132.915 38.0227C132.915 37.5398 132.78 37.1468 132.51 36.8438C132.24 36.5407 131.885 36.2945 131.445 36.1051C131.004 35.9157 130.528 35.75 130.017 35.608L128.227 35.0966C127.091 34.7699 126.191 34.3035 125.528 33.6974C124.866 33.0914 124.534 32.2983 124.534 31.3182C124.534 30.5038 124.754 29.7936 125.195 29.1875C125.64 28.5767 126.236 28.1032 126.984 27.767C127.737 27.4261 128.578 27.2557 129.506 27.2557C130.443 27.2557 131.277 27.4238 132.006 27.7599C132.735 28.0914 133.313 28.5459 133.739 29.1236C134.17 29.7012 134.397 30.357 134.42 31.0909H132.716ZM138.964 35.4375V42H137.288V27.4545H138.964V32.7955H139.106C139.362 32.232 139.745 31.7846 140.257 31.4531C140.773 31.117 141.459 30.9489 142.316 30.9489C143.06 30.9489 143.711 31.098 144.27 31.3963C144.828 31.6899 145.261 32.142 145.569 32.7528C145.882 33.3589 146.038 34.1307 146.038 35.0682V42H144.362V35.1818C144.362 34.3153 144.137 33.6454 143.687 33.1719C143.242 32.6937 142.624 32.4545 141.833 32.4545C141.284 32.4545 140.792 32.5705 140.356 32.8026C139.925 33.0346 139.584 33.3731 139.333 33.8182C139.087 34.2633 138.964 34.803 138.964 35.4375ZM152.315 42.2557C151.623 42.2557 150.996 42.1255 150.433 41.8651C149.869 41.5999 149.422 41.2188 149.09 40.7216C148.759 40.2197 148.593 39.6136 148.593 38.9034C148.593 38.2784 148.716 37.7718 148.962 37.3835C149.209 36.9905 149.538 36.6828 149.95 36.4602C150.362 36.2377 150.816 36.072 151.313 35.9631C151.815 35.8494 152.319 35.7595 152.826 35.6932C153.489 35.608 154.026 35.544 154.438 35.5014C154.855 35.4541 155.158 35.3759 155.347 35.267C155.541 35.1581 155.638 34.9687 155.638 34.6989V34.642C155.638 33.9413 155.447 33.3968 155.063 33.0085C154.684 32.6203 154.109 32.4261 153.337 32.4261C152.537 32.4261 151.91 32.6013 151.455 32.9517C151.001 33.3021 150.681 33.6761 150.496 34.0739L148.906 33.5057C149.19 32.8428 149.568 32.3267 150.042 31.9574C150.52 31.5833 151.041 31.3229 151.604 31.1761C152.173 31.0246 152.731 30.9489 153.281 30.9489C153.631 30.9489 154.033 30.9915 154.488 31.0767C154.947 31.1572 155.39 31.3253 155.816 31.581C156.247 31.8366 156.604 32.2225 156.888 32.7386C157.173 33.2547 157.315 33.946 157.315 34.8125V42H155.638V40.5227H155.553C155.44 40.7595 155.25 41.0128 154.985 41.2827C154.72 41.5526 154.367 41.7822 153.927 41.9716C153.487 42.161 152.949 42.2557 152.315 42.2557ZM152.57 40.75C153.233 40.75 153.792 40.6198 154.246 40.3594C154.706 40.099 155.051 39.7628 155.283 39.3509C155.52 38.9389 155.638 38.5057 155.638 38.0511V36.517C155.567 36.6023 155.411 36.6804 155.17 36.7514C154.933 36.8177 154.658 36.8769 154.346 36.929C154.038 36.9763 153.737 37.0189 153.444 37.0568C153.155 37.09 152.921 37.1184 152.741 37.142C152.305 37.1989 151.898 37.2912 151.519 37.419C151.145 37.5421 150.842 37.7292 150.61 37.9801C150.383 38.2263 150.269 38.5625 150.269 38.9886C150.269 39.571 150.485 40.0114 150.915 40.3097C151.351 40.6032 151.903 40.75 152.57 40.75ZM160.374 42V31.0909H161.993V32.7386H162.107C162.306 32.1989 162.666 31.7609 163.186 31.4247C163.707 31.0885 164.294 30.9205 164.948 30.9205C165.071 30.9205 165.225 30.9228 165.409 30.9276C165.594 30.9323 165.734 30.9394 165.828 30.9489V32.6534C165.772 32.6392 165.641 32.6179 165.438 32.5895C165.239 32.5563 165.028 32.5398 164.806 32.5398C164.275 32.5398 163.802 32.651 163.385 32.8736C162.973 33.0914 162.647 33.3944 162.405 33.7827C162.168 34.1662 162.05 34.6042 162.05 35.0966V42H160.374ZM167.815 42V31.0909H169.491V42H167.815ZM168.668 29.2727C168.341 29.2727 168.059 29.1615 167.822 28.9389C167.59 28.7164 167.474 28.4489 167.474 28.1364C167.474 27.8239 167.59 27.5563 167.822 27.3338C168.059 27.1113 168.341 27 168.668 27C168.994 27 169.274 27.1113 169.506 27.3338C169.742 27.5563 169.861 27.8239 169.861 28.1364C169.861 28.4489 169.742 28.7164 169.506 28.9389C169.274 29.1615 168.994 29.2727 168.668 29.2727ZM174.238 35.4375V42H172.561V31.0909H174.181V32.7955H174.323C174.578 32.2415 174.967 31.7964 175.488 31.4602C176.008 31.1193 176.681 30.9489 177.505 30.9489C178.243 30.9489 178.89 31.1004 179.444 31.4034C179.998 31.7017 180.428 32.1562 180.736 32.767C181.044 33.3731 181.198 34.1402 181.198 35.0682V42H179.522V35.1818C179.522 34.3248 179.299 33.6572 178.854 33.179C178.409 32.696 177.798 32.4545 177.022 32.4545C176.487 32.4545 176.008 32.5705 175.587 32.8026C175.17 33.0346 174.841 33.3731 174.6 33.8182C174.358 34.2633 174.238 34.803 174.238 35.4375ZM188.664 46.3182C187.854 46.3182 187.158 46.214 186.576 46.0057C185.994 45.8021 185.508 45.5322 185.12 45.196C184.737 44.8646 184.431 44.5095 184.204 44.1307L185.539 43.1932C185.691 43.392 185.882 43.6193 186.114 43.875C186.346 44.1354 186.664 44.3603 187.066 44.5497C187.473 44.7438 188.006 44.8409 188.664 44.8409C189.545 44.8409 190.272 44.6278 190.844 44.2017C191.417 43.7756 191.704 43.108 191.704 42.1989V39.983H191.562C191.439 40.1818 191.263 40.428 191.036 40.7216C190.814 41.0104 190.492 41.2685 190.07 41.4957C189.654 41.7183 189.09 41.8295 188.38 41.8295C187.499 41.8295 186.709 41.6212 186.008 41.2045C185.312 40.7879 184.76 40.1818 184.353 39.3864C183.951 38.5909 183.749 37.625 183.749 36.4886C183.749 35.3712 183.946 34.3982 184.339 33.5696C184.732 32.7363 185.279 32.0923 185.979 31.6378C186.68 31.1785 187.49 30.9489 188.408 30.9489C189.119 30.9489 189.682 31.0672 190.099 31.304C190.52 31.536 190.842 31.8011 191.065 32.0994C191.292 32.393 191.467 32.6345 191.59 32.8239H191.761V31.0909H193.38V42.3125C193.38 43.25 193.167 44.0123 192.741 44.5994C192.319 45.1913 191.751 45.6245 191.036 45.8991C190.326 46.1785 189.535 46.3182 188.664 46.3182ZM188.607 40.3239C189.28 40.3239 189.848 40.17 190.312 39.8622C190.776 39.5545 191.129 39.1117 191.37 38.5341C191.612 37.9564 191.732 37.2652 191.732 36.4602C191.732 35.6742 191.614 34.9806 191.377 34.3793C191.14 33.7779 190.79 33.3068 190.326 32.9659C189.862 32.625 189.289 32.4545 188.607 32.4545C187.897 32.4545 187.305 32.6345 186.832 32.9943C186.363 33.3542 186.01 33.8371 185.773 34.4432C185.541 35.0492 185.425 35.7216 185.425 36.4602C185.425 37.2178 185.544 37.8878 185.781 38.4702C186.022 39.0478 186.377 39.5024 186.846 39.8338C187.319 40.1605 187.906 40.3239 188.607 40.3239ZM202.073 42V31.0909H203.749V42H202.073ZM202.925 29.2727C202.599 29.2727 202.317 29.1615 202.08 28.9389C201.848 28.7164 201.732 28.4489 201.732 28.1364C201.732 27.8239 201.848 27.5563 202.08 27.3338C202.317 27.1113 202.599 27 202.925 27C203.252 27 203.531 27.1113 203.763 27.3338C204 27.5563 204.119 27.8239 204.119 28.1364C204.119 28.4489 204 28.7164 203.763 28.9389C203.531 29.1615 203.252 29.2727 202.925 29.2727ZM214.547 33.5341L213.041 33.9602C212.946 33.7093 212.806 33.4654 212.622 33.2287C212.442 32.9872 212.196 32.7884 211.883 32.6321C211.571 32.4759 211.171 32.3977 210.683 32.3977C210.015 32.3977 209.459 32.5516 209.014 32.8594C208.574 33.1624 208.353 33.5483 208.353 34.017C208.353 34.4337 208.505 34.7628 208.808 35.0043C209.111 35.2457 209.584 35.447 210.228 35.608L211.848 36.0057C212.823 36.2424 213.55 36.6046 214.028 37.0923C214.506 37.5753 214.745 38.1979 214.745 38.9602C214.745 39.5852 214.565 40.1439 214.206 40.6364C213.85 41.1288 213.353 41.517 212.714 41.8011C212.075 42.0852 211.332 42.2273 210.484 42.2273C209.371 42.2273 208.45 41.9858 207.721 41.5028C206.992 41.0199 206.53 40.3144 206.336 39.3864L207.927 38.9886C208.079 39.5758 208.365 40.0161 208.787 40.3097C209.213 40.6032 209.769 40.75 210.456 40.75C211.237 40.75 211.857 40.5843 212.316 40.2528C212.78 39.9167 213.012 39.5142 213.012 39.0455C213.012 38.6667 212.88 38.3494 212.615 38.0938C212.35 37.8333 211.942 37.6392 211.393 37.5114L209.575 37.0852C208.576 36.8485 207.842 36.4815 207.373 35.9844C206.909 35.4825 206.677 34.8551 206.677 34.1023C206.677 33.4867 206.85 32.9422 207.196 32.4688C207.546 31.9953 208.022 31.6236 208.623 31.3537C209.229 31.0838 209.916 30.9489 210.683 30.9489C211.762 30.9489 212.61 31.1856 213.225 31.6591C213.846 32.1326 214.286 32.7576 214.547 33.5341ZM234.825 32H233.064C232.96 31.4934 232.777 31.0483 232.517 30.6648C232.261 30.2812 231.949 29.9593 231.58 29.6989C231.215 29.4337 230.81 29.2348 230.365 29.1023C229.92 28.9697 229.456 28.9034 228.973 28.9034C228.092 28.9034 227.295 29.1259 226.58 29.571C225.869 30.0161 225.304 30.6719 224.882 31.5384C224.465 32.4048 224.257 33.4678 224.257 34.7273C224.257 35.9867 224.465 37.0497 224.882 37.9162C225.304 38.7827 225.869 39.4384 226.58 39.8835C227.295 40.3286 228.092 40.5511 228.973 40.5511C229.456 40.5511 229.92 40.4848 230.365 40.3523C230.81 40.2197 231.215 40.0232 231.58 39.7628C231.949 39.4976 232.261 39.1733 232.517 38.7898C232.777 38.4015 232.96 37.9564 233.064 37.4545H234.825C234.693 38.1979 234.451 38.8632 234.101 39.4503C233.75 40.0374 233.315 40.5369 232.794 40.9489C232.273 41.3561 231.688 41.6662 231.04 41.8793C230.396 42.0923 229.707 42.1989 228.973 42.1989C227.732 42.1989 226.629 41.8958 225.663 41.2898C224.697 40.6837 223.938 39.822 223.384 38.7045C222.83 37.5871 222.553 36.2614 222.553 34.7273C222.553 33.1932 222.83 31.8674 223.384 30.75C223.938 29.6326 224.697 28.7708 225.663 28.1648C226.629 27.5587 227.732 27.2557 228.973 27.2557C229.707 27.2557 230.396 27.3622 231.04 27.5753C231.688 27.7884 232.273 28.1009 232.794 28.5128C233.315 28.92 233.75 29.4171 234.101 30.0043C234.451 30.5866 234.693 31.2519 234.825 32ZM240.654 42.2557C239.963 42.2557 239.336 42.1255 238.772 41.8651C238.209 41.5999 237.761 41.2188 237.43 40.7216C237.099 40.2197 236.933 39.6136 236.933 38.9034C236.933 38.2784 237.056 37.7718 237.302 37.3835C237.548 36.9905 237.877 36.6828 238.289 36.4602C238.701 36.2377 239.156 36.072 239.653 35.9631C240.155 35.8494 240.659 35.7595 241.166 35.6932C241.829 35.608 242.366 35.544 242.778 35.5014C243.195 35.4541 243.498 35.3759 243.687 35.267C243.881 35.1581 243.978 34.9687 243.978 34.6989V34.642C243.978 33.9413 243.787 33.3968 243.403 33.0085C243.024 32.6203 242.449 32.4261 241.677 32.4261C240.877 32.4261 240.25 32.6013 239.795 32.9517C239.341 33.3021 239.021 33.6761 238.836 34.0739L237.245 33.5057C237.529 32.8428 237.908 32.3267 238.382 31.9574C238.86 31.5833 239.381 31.3229 239.944 31.1761C240.512 31.0246 241.071 30.9489 241.62 30.9489C241.971 30.9489 242.373 30.9915 242.828 31.0767C243.287 31.1572 243.73 31.3253 244.156 31.581C244.587 31.8366 244.944 32.2225 245.228 32.7386C245.512 33.2547 245.654 33.946 245.654 34.8125V42H243.978V40.5227H243.893C243.779 40.7595 243.59 41.0128 243.325 41.2827C243.06 41.5526 242.707 41.7822 242.267 41.9716C241.826 42.161 241.289 42.2557 240.654 42.2557ZM240.91 40.75C241.573 40.75 242.132 40.6198 242.586 40.3594C243.046 40.099 243.391 39.7628 243.623 39.3509C243.86 38.9389 243.978 38.5057 243.978 38.0511V36.517C243.907 36.6023 243.751 36.6804 243.51 36.7514C243.273 36.8177 242.998 36.8769 242.686 36.929C242.378 36.9763 242.077 37.0189 241.784 37.0568C241.495 37.09 241.261 37.1184 241.081 37.142C240.645 37.1989 240.238 37.2912 239.859 37.419C239.485 37.5421 239.182 37.7292 238.95 37.9801C238.723 38.2263 238.609 38.5625 238.609 38.9886C238.609 39.571 238.824 40.0114 239.255 40.3097C239.691 40.6032 240.243 40.75 240.91 40.75ZM248.714 42V31.0909H250.333V32.7386H250.447C250.646 32.1989 251.005 31.7609 251.526 31.4247C252.047 31.0885 252.634 30.9205 253.288 30.9205C253.411 30.9205 253.565 30.9228 253.749 30.9276C253.934 30.9323 254.074 30.9394 254.168 30.9489V32.6534C254.112 32.6392 253.981 32.6179 253.778 32.5895C253.579 32.5563 253.368 32.5398 253.146 32.5398C252.615 32.5398 252.142 32.651 251.725 32.8736C251.313 33.0914 250.987 33.3944 250.745 33.7827C250.508 34.1662 250.39 34.6042 250.39 35.0966V42H248.714ZM256.155 42V31.0909H257.831V42H256.155ZM257.007 29.2727C256.681 29.2727 256.399 29.1615 256.162 28.9389C255.93 28.7164 255.814 28.4489 255.814 28.1364C255.814 27.8239 255.93 27.5563 256.162 27.3338C256.399 27.1113 256.681 27 257.007 27C257.334 27 257.614 27.1113 257.846 27.3338C258.082 27.5563 258.201 27.8239 258.201 28.1364C258.201 28.4489 258.082 28.7164 257.846 28.9389C257.614 29.1615 257.334 29.2727 257.007 29.2727ZM262.577 35.4375V42H260.901V31.0909H262.521V32.7955H262.663C262.918 32.2415 263.307 31.7964 263.827 31.4602C264.348 31.1193 265.021 30.9489 265.844 30.9489C266.583 30.9489 267.229 31.1004 267.783 31.4034C268.337 31.7017 268.768 32.1562 269.076 32.767C269.384 33.3731 269.538 34.1402 269.538 35.0682V42H267.862V35.1818C267.862 34.3248 267.639 33.6572 267.194 33.179C266.749 32.696 266.138 32.4545 265.362 32.4545C264.826 32.4545 264.348 32.5705 263.927 32.8026C263.51 33.0346 263.181 33.3731 262.94 33.8182C262.698 34.2633 262.577 34.803 262.577 35.4375ZM277.004 46.3182C276.194 46.3182 275.498 46.214 274.916 46.0057C274.333 45.8021 273.848 45.5322 273.46 45.196C273.076 44.8646 272.771 44.5095 272.544 44.1307L273.879 43.1932C274.03 43.392 274.222 43.6193 274.454 43.875C274.686 44.1354 275.003 44.3603 275.406 44.5497C275.813 44.7438 276.346 44.8409 277.004 44.8409C277.885 44.8409 278.611 44.6278 279.184 44.2017C279.757 43.7756 280.044 43.108 280.044 42.1989V39.983H279.902C279.779 40.1818 279.603 40.428 279.376 40.7216C279.154 41.0104 278.832 41.2685 278.41 41.4957C277.993 41.7183 277.43 41.8295 276.72 41.8295C275.839 41.8295 275.048 41.6212 274.348 41.2045C273.652 40.7879 273.1 40.1818 272.693 39.3864C272.29 38.5909 272.089 37.625 272.089 36.4886C272.089 35.3712 272.286 34.3982 272.679 33.5696C273.072 32.7363 273.618 32.0923 274.319 31.6378C275.02 31.1785 275.83 30.9489 276.748 30.9489C277.458 30.9489 278.022 31.0672 278.439 31.304C278.86 31.536 279.182 31.8011 279.404 32.0994C279.632 32.393 279.807 32.6345 279.93 32.8239H280.1V31.0909H281.72V42.3125C281.72 43.25 281.507 44.0123 281.081 44.5994C280.659 45.1913 280.091 45.6245 279.376 45.8991C278.666 46.1785 277.875 46.3182 277.004 46.3182ZM276.947 40.3239C277.619 40.3239 278.188 40.17 278.652 39.8622C279.116 39.5545 279.468 39.1117 279.71 38.5341C279.951 37.9564 280.072 37.2652 280.072 36.4602C280.072 35.6742 279.954 34.9806 279.717 34.3793C279.48 33.7779 279.13 33.3068 278.666 32.9659C278.202 32.625 277.629 32.4545 276.947 32.4545C276.237 32.4545 275.645 32.6345 275.172 32.9943C274.703 33.3542 274.35 33.8371 274.113 34.4432C273.881 35.0492 273.765 35.7216 273.765 36.4602C273.765 37.2178 273.884 37.8878 274.12 38.4702C274.362 39.0478 274.717 39.5024 275.186 39.8338C275.659 40.1605 276.246 40.3239 276.947 40.3239Z" fill="#303030" />
              </svg>
            </div>
          </div>

          {/* Comment */}
          {comments?.data.map((comment: any) => (
            <div
              key={crypto.randomUUID()}
              className="flex items-start gap-2.5 pl-7 pt-4"
            >
              <Image
                className="w-8 h-8 rounded-full object-cover "
                src={comment.userImg}
                height={12}
                width={12}
                alt="Jese image"
              />
              <div className="flex flex-col gap-1 w-[90%]">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                  {/* <span className="text-sm font-semibold text-gray-900 ">
                    Bonnie Green
                  </span> */}
                  <span className="text-sm font-normal text-gray-500 ">
                    {formatDate(comment.createdAt)}
                  </span>
                </div>
                <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
                  <p className="text-sm mt-0 font-normal text-gray-900 ">
                    {comment.message}
                  </p>
                </div>
                {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        11.50
      </span> */}
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:col-span-2 ">
          <UniSectionCard title={"Recommended Articles"} />
        </div>
      </div>
    </main>
  );
}

export default FullBlog;

{
  /* <article className="">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-xl md:text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                {blog?.title}
              </h1>

              <BlogSocialButtonGroup blog={blog} />
            </header>
            <p className="lead">{blog?.description}</p>
          </article>
          <div className="w-full py-7 space-y-4">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 ">
                <img
                  className="mr-4 w-12 h-12 rounded-full"
                  src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                  alt="Jese Leos"
                />
                <div className="flex flex-col gap-0.5">
                  <a
                    href="#"
                    rel="author"
                    className="md:text-lg font-bold text-gray-900"
                  >
                    Jese Leos
                  </a>
                  <p className="text-sm  text-gray-500">
                    Graphic Designer, educator &amp; CEO Flowbite
                  </p>
                  <p className="text-sm text-gray-500 ">
                    <time dateTime={blog?.date}>{blog?.date}</time>
                  </p>
                </div>
              </div>
            </address>
            <h3 className="font-semibold text-gray-600">Add a Comment</h3>
            <div className="w-full ">
              <form className="flex items-center">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle text-gray-600"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Post your thoughts ..."
                  />
                </div>
                {!isSignedIn ? (
                  <Link href={"/sign-in"}>
                    <button
                      type="submit"
                      className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-send"
                      >
                        <path d="m22 2-7 20-4-9-9-4Z" />
                        <path d="M22 2 11 13" />
                      </svg>
                      <span className="sr-only">Comment</span>
                    </button>
                  </Link>
                ) : (
                  <button
                    type="submit"
                    className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-send"
                    >
                      <path d="m22 2-7 20-4-9-9-4Z" />
                      <path d="M22 2 11 13" />
                    </svg>
                    <span className="sr-only">Comment</span>
                  </button>
                )}
              </form>
            </div>

            {/* Comment */
}
//   <div className="flex items-start gap-2.5 pl-7 pt-4">
//     <Image
//       className="w-8 h-8 rounded-full object-cover "
//       src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
//       height={12}
//       width={12}
//       alt="Jese image"
//     />
//     <div className="flex flex-col gap-1 w-[90%]">
//       <div className="flex items-center space-x-2 rtl:space-x-reverse">
//         <span className="text-sm font-semibold text-gray-900 ">
//           Bonnie Green
//         </span>
//         <span className="text-sm font-normal text-gray-500 ">
//           11:46
//         </span>
//       </div>
//       <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
//         <p className="text-sm mt-0 font-normal text-gray-900 ">
//           That&apos;s awesome. I think our users will really
//           appreciate the improvements.
//         </p>
//       </div>
//       {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
//         11.50
//       </span> */}
//     </div>
//   </div>

//   <div className="flex items-start gap-2.5 pl-7">
//     <Image
//       className="w-8 h-8 rounded-full object-cover"
//       src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
//       height={12}
//       width={12}
//       alt="Jese image"
//     />
//     <div className="flex flex-col gap-1 w-[90%]">
//       <div className="flex items-center space-x-2 rtl:space-x-reverse">
//         <span className="text-sm font-semibold text-gray-900 ">
//           Bonnie Green
//         </span>
//         <span className="text-sm font-normal text-gray-500 ">
//           11:46
//         </span>
//       </div>
//       <div className="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl">
//         <p className="text-sm mt-0 font-normal text-gray-900 ">
//           That&apos;s awesome. I think our users will really
//           appreciate the improvements.
//         </p>
//       </div>
//       {/* <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
//         11.50
//       </span> */}
//     </div>
//   </div>
// </div> */}

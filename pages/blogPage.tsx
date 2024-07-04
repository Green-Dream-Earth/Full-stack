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
              contentEditable="true"
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

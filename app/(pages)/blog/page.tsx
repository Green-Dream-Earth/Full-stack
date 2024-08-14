"use client";

import { H1 } from "@/components/heading";

import { useQuery } from "@tanstack/react-query";
import { getAllBlogs } from "@/utils/query";
import Loading from "@/components/loading";
import { BlogArticleCard } from "@/components/blogArticleCard";

export default function BlogPage() {
  //   const posts = allPosts
  //     .filter((post) => post.published)
  //     .sort((a, b) => {
  //       return compareDesc(new Date(a.date), new Date(b.date));
  //     });

  const { data, isPending, error } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });

  if (isPending)
    return (
      <div className="min-h-screen">
        <Loading />
      </div>
    );
  if (error) return error?.message;
  console.log(data?.data, isPending, error);

  return (
    <main className="container">
      <section className="py-12 flex flex-col items-center justify-center">
        <div className="">
          <H1 className="text-center">Blogs</H1>
          <p className="text-lg text-gray-500 text-muted-foreground mt-5">
            Find blogs that will help your study abroad journey!
          </p>
        </div>
      </section>

      <section className="grid gap-10 grid-cols-1 md:grid-cols-3 pb-12">
        {data?.data.map((post: any) => {
          console.log(post);
          return (
            // <h2 className="">hi there!!!</h2>

            <BlogArticleCard key={post.id} post={post} />
          );
        })}
      </section>
    </main>
  );
}

"use client";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BlogArticleCardProps {
  title: string;
  imageSrc: string;
  description: string;
  date: string;
  slug: string;
}

export const extractImgSrc = (htmlString: string) => {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML string into a DOM Document
  const doc = parser.parseFromString(htmlString, "text/html");
  // Find the img tag
  const imgTag = doc.querySelector("img");
  // If img tag exists, get the src attribute
  if (imgTag) {
    return imgTag.getAttribute("src");
  }
  return "";
};

export const extractFirstPContent = (htmlString: string) => {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML string into a DOM Document
  const doc = parser.parseFromString(htmlString, "text/html");
  // Find the first p tag
  const pTag = doc.querySelector("p");
  // If p tag exists, get its text content
  if (pTag) {
    return pTag.textContent;
  }
  return "";
};

export const extractSecondPContent = (htmlString: string) => {
  // Create a new DOMParser instance
  const parser = new DOMParser();
  // Parse the HTML string into a DOM Document
  const doc = parser.parseFromString(htmlString, "text/html");
  // Find all p tags
  const pTags = doc.querySelectorAll("p");
  // Check if there are at least two p tags
  if (pTags.length > 1) {
    // Get the text content of the second p tag
    return pTags[1].textContent;
  }
  return "";
};


export const BlogArticleCard = ({ post }: { post: any }) => {
  const router = useRouter();

  const blogContentDescription = extractSecondPContent(post.content.rendered);
  
  // const src = extractImgSrc(post.content.rendered);
  const src = post.jetpack_featured_media_url;

  return (
    <article
      onClick={() => router.push("/blog/" + post.slug)}
      className="group justify-between relative flex flex-col space-y-2 p-4 bg-slate-100 rounded-lg border hover:cursor-pointer hover:scale-[1.02] shadow-lg hover:shadow-2xl hover:shadow-primary/20 transform transition ease-in-out delay-100"
    >
      {/* {post.image && ( */}
      <Image
        src={src || ""}
        alt={"img"}
        style={{ objectFit: "cover" }}
        width={804}
        height={452}
        className="rounded-md border bg-muted transition-colors h-48"
      />
      {/* )} */}
      <h2 className="text-xl font-extrabold">{post.title.rendered}</h2>

      <p className="text-muted-foreground text-sm line-clamp-3">
        {/* {post.description.slice(0, 100) + "..."} */}
        {blogContentDescription}
      </p>
      <div className="flex flex-row justify-between items-center bottom-0">
        <p className="text-sm text-muted-foreground">
          {formatDate(post.modified)}
        </p>
        {/* <div className="text-center mt-2 leading-none flex justify-center ">
          <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx={12} cy={12} r={3} />
            </svg>
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <svg
              className="w-4 h-4 mr-1"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
            </svg>
            6
          </span>
          
        </div> */}
        <p className="text-light text-sm text-center text-gray-400">
          2 minute read
        </p>
      </div>
    </article>
  );
};

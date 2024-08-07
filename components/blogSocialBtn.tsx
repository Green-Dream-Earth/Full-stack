"use client";

import { usePathname } from "next/navigation";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

export const BlogSocialButtonGroup = ({ blog }: { blog: any }) => {
  console.log("from blogSocialbtns ",blog?.title.rendered);
  const pathname = "https://helpstudyabroad.com" + usePathname();
  console.log("ppathname ",pathname);
  return (
    <div className="flex items-center space-x-2">
      <LinkedinShareButton title={blog?.title.rendered} url={pathname || ""}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton title={blog?.title.rendered} url={pathname || ""}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton title={blog?.title.rendered} url={pathname || ""}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

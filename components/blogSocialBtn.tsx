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
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="flex items-center space-x-2">
      <LinkedinShareButton title={blog?.title} url={pathname || ""}>
        <LinkedinIcon size={32} round={true} />
      </LinkedinShareButton>
      <FacebookShareButton title={blog?.title} url={pathname || ""}>
        <FacebookIcon size={32} round={true} />
      </FacebookShareButton>
      <WhatsappShareButton title={blog?.title} url={pathname || ""}>
        <WhatsappIcon size={32} round={true} />
      </WhatsappShareButton>
    </div>
  );
};

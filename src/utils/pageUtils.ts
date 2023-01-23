import { FaNewspaper, FaRegWindowMaximize, FaStickyNote } from "react-icons/fa";

export const pageTypeOptions = [
  {
    label: "Full page",
    description: "Web page with images, title, content and related pages",
    value: "full-page",
    icon: FaRegWindowMaximize
  },
  {
    label: "Page content",
    value: "page-content",
    description: "Just a page content, used as a block in full page",
    icon: FaStickyNote
  },
  {
    label: "Blog",
    value: "blog",
    icon: FaNewspaper,
    description:
      "Used as article, a blog have a category with all full page fields"
  }
] as const;

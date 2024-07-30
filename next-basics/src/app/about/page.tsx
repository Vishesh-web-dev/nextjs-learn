"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links = [
  {
    name: "First",
    path: "/about/first"
  },
  {
    name: "Second",
    path: "/about/second"
  }
]
function about() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div>
      About Page
      {links.map((link) => {
      return(
        <Link href={link.path} key={link.path} className="links">{link.name}</Link>
      )})}
    </div>
  )
}

export default about;
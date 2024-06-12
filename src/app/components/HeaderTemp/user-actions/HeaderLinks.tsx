"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";

interface HeaderLinksProps {
  value: string;
  href: string;
  id: number;
}

const HeaderLinks: FC<HeaderLinksProps> = ({ value, href }) => {
  const route: string = usePathname();
  return (
    <Link href={href} className="underline">
      <li>
        {value.startsWith("#") ? (
          <span
            className={`${
              route === href
                ? " dark:text-white cursor-default"
                : "text-dark dark:text-gray"
            } dark:hover:text-white text-[1rem] `}>
            <span className="text-main font-semibold">#</span>
            {value.slice(1)}
          </span>
        ) : (
          <span
            className={`${
              route === href
                ? " dark:text-white cursor-default"
                : "text-dark dark:text-gray"
            } dark:hover:text-white`}>
            {value}
          </span>
        )}
      </li>
    </Link>
  );
};

export default HeaderLinks;

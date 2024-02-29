import { FC } from "react";
import { Logo } from "../Icons/Logo";
import Link from "next/link";

interface BrandProps {}

const Brand: FC<BrandProps> = ({}) => {
  return (
    <div className="flex items-center">
      <Logo />
      <Link href="/">
        <h1 className="font-bold text-gray underline text-xl">Victor Raguin</h1>
      </Link>
    </div>
  );
};

export default Brand;

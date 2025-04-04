import Link from "next/link";
import { AiFillCode } from "react-icons/ai";

const Logo = () => {
  return (
    <Link
      href="#"
      className="text-7xl cursor-pointer hover:text-primary hover:scale-105"
    >
      <AiFillCode />
    </Link>
  );
};

export default Logo;

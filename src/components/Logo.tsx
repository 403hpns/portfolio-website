import Link from "next/link";
import { AiFillCode } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="text-7xl cursor-pointer hover:text-primary hover:scale-105">
      <Link href="#">
        <AiFillCode />
      </Link>
    </div>
  );
};

export default Logo;

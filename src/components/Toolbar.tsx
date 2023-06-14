import Icon from "./ui/Icon";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { BiCoffeeTogo } from "react-icons/bi";

const Toolbar = () => {
  return (
    <div className="hidden lg:flex md:gap-4 md:text-3xl">
      <Icon element={<AiFillGithub />} />
      <Icon element={<AiFillLinkedin />} />
      <Icon element={<AiFillTwitterCircle />} />
      <Icon element={<BiCoffeeTogo />} />
    </div>
  );
};

export default Toolbar;

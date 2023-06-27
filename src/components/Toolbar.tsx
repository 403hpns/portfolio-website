import Icon from "./ui/Icon";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { BiCoffeeTogo } from "react-icons/bi";
import Button from "./ui/Button";

const Toolbar = () => {
  return (
    <div className="hidden lg:flex md:gap-4 md:text-3xl">
      <Button icon={false} variant="navigation" className="text-base">
        Resume
      </Button>
      <Icon element={<AiFillGithub />} href="https://github.com/403hpns" />
      <Icon
        element={<AiFillLinkedin />}
        href="https://www.linkedin.com/in/jakub-kor%C5%BC/"
      />
      <Icon
        element={<AiFillTwitterCircle />}
        href="https://twitter.com/403hpns"
      />
      <Icon
        element={<BiCoffeeTogo />}
        href="https://www.buymeacoffee.com/403hpns"
      />
    </div>
  );
};

export default Toolbar;

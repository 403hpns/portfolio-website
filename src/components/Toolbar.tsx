import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BiCoffeeTogo } from "react-icons/bi";

import Button from "./ui/Button";
import Icon from "./ui/Icon";

const Toolbar = () => {
  return (
    <div className="hidden lg:flex md:gap-4 md:text-3xl">
      <Button as="a" href="#" variant="navigation" className="text-base">
        Resume
      </Button>
      <Icon href="https://github.com/403hpns">
        <AiFillGithub />
      </Icon>
      <Icon href="https://www.linkedin.com/in/jakub-kor%C5%BC/">
        <AiFillLinkedin />
      </Icon>
      <Icon href="https://twitter.com/403hpns">
        <AiFillTwitterCircle />
      </Icon>
      <Icon href="https://www.buymeacoffee.com/403hpns">
        <BiCoffeeTogo />
      </Icon>
    </div>
  );
};

export default Toolbar;

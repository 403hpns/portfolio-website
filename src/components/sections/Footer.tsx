import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import Logo from "../Logo";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import { BiCoffeeTogo } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="relative flex justify-between items-center p-10 text-center bg-black/10 before:absolute before:inset-0 before:w-full before:h-full before:backdrop-blur-md before:-z-50">
      <div className="w-full lg:max-w-[30%] xl:max-w-[20%] flex justify-center items-center gap-4 text-justify">
        <Logo />
        Made with 💜 in Poland by Jakub &apos;403hpns&apos; Korż. All rights
        reserved.
      </div>

      <div className="hidden lg:block">
        <p>Collaboration</p>
        <Button
          className="bg-zinc-800 text-base"
          variant="navigation"
          href="https://github.com/403hpns"
        >
          Visit GitHub
        </Button>
      </div>
      <div className="hidden lg:block">
        <p>Wanna watch my content?</p>
        <Button
          className="bg-zinc-800 text-base"
          variant="navigation"
          href="https://www.twitch.tv/403hpns"
        >
          Watch me on Twitch
        </Button>
      </div>

      <div className="hidden lg:flex lg:flex-col">
        <p>Are you a recruiter?</p>
        <Button
          icon={false}
          className="bg-zinc-800 text-base"
          variant="navigation"
          href="https://403hpns.dev/resume/eng"
        >
          Check my CV
        </Button>
      </div>

      <div className="hidden xl:flex flex-col gap-4">
        <div className="flex items-center gap-4 text-4xl">
          <Icon element={<AiFillGithub />} href="https://github.com/403hpns" />
          <Icon
            element={<AiFillLinkedin />}
            href="https://www.linkedin.com/in/jakub-kor%C5%BC/"
          />
          <Icon
            element={<RiTwitterXFill />}
            href="https://twitter.com/403hpns"
          />
          <Icon
            element={<BiCoffeeTogo />}
            href="https://www.buymeacoffee.com/403hpns"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;

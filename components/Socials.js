//links
import Link from "next/link";

//icons
import {
  RiMailLine,
  RiInstagramLine,
  RiGithubLine,
  RiLinkedinLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"mailto:pragatheeshmanipc@gmail.com"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiMailLine />
      </Link>
      <Link
        href={"https://www.instagram.com/ig_praki"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://www.linkedin.com/in/pragatheeshm/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://github.com/pragatheeshm"}
        target="_blank"
        className="hover:text-accent transition-all duration-300"
      >
        <RiGithubLine />
      </Link>
    </div>
  );
};

export default Socials;

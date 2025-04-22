import Link from "next/link";
import { FC } from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialLinkProps = {};
const socialLinks = [
  {
    href: "https://github.com/yourshop",
    icon: <FaGithub className="w-5 h-5" />,
  },
  {
    href: "https://linkedin.com/in/yourshop",
    icon: <FaLinkedin className="w-5 h-5" />,
  },
  {
    href: "https://instagram.com/yourshop",
    icon: <FaInstagram className="w-5 h-5" />,
  },
];

const SocialLink: FC<SocialLinkProps> = ({}) => {
  return (
    <>
      {socialLinks.map((social, index) => (
        <Link
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-500 transition-all duration-300"
        >
          {social.icon}
        </Link>
      ))}
    </>
  );
};

export default SocialLink;

import { FC } from "react";
import Logo from "../Logo";
import SocialLink from "./SocialIcon";
import QuickLinks from "../QuickLinks";
import ContactInfo from "../ContactInfo";

type FooterProps = {};

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer className="container mx-auto bg-brown-100 text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 py-12">
      {/* Logo Section */}
      <div className="text-center sm:text-left">
        <div className="flex justify-center sm:justify-start">
          <Logo />
        </div>
        <p className="mt-4 text-sm sm:text-base">
          Your trusted destination for authentic beauty.
        </p>
      </div>

      {/* Quick Links */}
      <QuickLinks />

      {/* Contact Info */}
      <ContactInfo />

      {/* Social Media */}
      <div className="text-center sm:text-left">
        <div className="mb-6">
          <h3 className="font-bold text-lg mb-4">Follow Me</h3>
          <div className="flex justify-center sm:justify-start gap-4">
            <SocialLink />
          </div>
        </div>
        <small className="text-sm">
          &copy; 2025 SaharShop. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;

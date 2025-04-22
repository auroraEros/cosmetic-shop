import { FC, ReactNode } from "react";

type ContactIconProps = {
  icon:ReactNode;
  className?:string;
  label:string;
};

const ContactIcon: FC<ContactIconProps> = ({icon,className="",label}) => {
  return (
    <div className={`flex items-center gap-x-2 ${className}`}>
   {icon}
    <span className="text-base">{label}</span>
  </div>
  );
};

export default ContactIcon;

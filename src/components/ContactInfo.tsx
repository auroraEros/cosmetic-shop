import { FC } from "react";
import ContactIcon from "./ui/ContactIcon";
import { Mail, MapPin, Phone } from "lucide-react";

type ContactInfoProps = {};

const ContactInfo: FC<ContactInfoProps> = ({}) => {
  return (
    <div className="text-center sm:text-left">
      <h3 className="font-bold text-lg mb-4">Stay in Touch</h3>
      <div className=" flex flex-col gap-y-3 items-center md:block md:space-y-3">
        <ContactIcon
          icon={<Mail className="w-4 h-4 text-primary-500" />}
          label="support@yourshop.com"
        />
        <ContactIcon
          icon={<Phone className="w-4 h-4 text-primary-500" />}
          label="+98 912 000 0000"
        />
        <ContactIcon
          icon={<MapPin className="w-4 h-4 text-primary-500" />}
          label="Tehran, Iran"
        />
      </div>
    </div>
  );
};

export default ContactInfo;

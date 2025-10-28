import React from "react";
import {
  Hash,
  MapPin,
  ShieldUser,
  CalendarDays,
  Home,
  Phone,
} from "lucide-react";
import InfoRow from "./InfoRow";

const AuthorityDetails = () => {
  const AUTHORITY_DETAILS = [
    {
      icon: <ShieldUser size={22} />,
      label: "Father's Name",
      value: "Subbaiah RengaSwamy",
    },
    {
      icon: <CalendarDays size={22} />,
      label: "D.O.B",
      value: "19-02-1967",
    },
    {
      icon: <Home size={22} />,
      label: "Plot No",
      value: "5/764-S",
    },
    {
      icon: <MapPin size={22} />,
      label: "Area",
      value: "Janani Nagar, Othaveedu",
    },
    {
      icon: <MapPin size={22} />,
      label: "Post",
      value: "Andarkottaram (Post)",
    },
    {
      icon: <Hash size={22} />,
      label: "Pincode",
      value: "625020",
    },
    {
      icon: <Phone size={22} />,
      label: "Contact",
      value: "+91 6369709080",
    },
  ];

  return (
    <div className=" glass-strong shadow-md rounded-xl p-6 max-w-full overflow-x-auto">
      <div className="inline-flex flex-col gap-6 pr-6 min-w-max">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-glow  mb-2">
          Official Identity Overview
        </h2>
        {AUTHORITY_DETAILS.map(({ icon, label, value }) => (
          <InfoRow key={label} icon={icon} label={label} value={value} />
        ))}
      </div>
    </div>
  );
};

export default AuthorityDetails;

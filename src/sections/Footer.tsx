import Image from "next/image";

import LogoIcon from "@/assets/logo.svg";
import FacebookLogo from "@/assets/facebooklogo.svg";
import TwitterLogo from "@/assets/twitterlogo.svg";
import LinkedinLogo from "@/assets/linkedinlogo.svg";

const linksSocialMedia = [
  { name: "Facebook", url: "https://www.facebook.com", icon: FacebookLogo },
  { name: "Twitter", url: "https://www.twitter.com", icon: TwitterLogo },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/giovannafalcon/",
    icon: LinkedinLogo,
  },
];

const courses = [
  "Classroom courses",
  "Virtual classroom courses",
  "E-learning courses",
  "Video Courses",
  "Offline Courses",
];

const community = [
  "Learners",
  "Parteners",
  "Developers",
  "Transactions",
  "Blog",
  "Teaching Center",
];

const quickLinks = [
  "Home",
  "Professional Education",
  "Courses",
  "Admissions",
  "Testimonial",
  "Programs",
];

const more = ["Press", "Investors", "Terms", "Privacy", "Help", "Contact"];

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-1 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-x-8">
        <div className="">
          <div className="flex justify-start items-center gap-x-4 ">
            <Image src={LogoIcon} alt="Logo Edudu" className="cursor-pointer"/>
            <h1 className="font-bold text-[22px] md:text-[26px] cursor-pointer text-[#333333]">
              Edudu
            </h1>
          </div>
          <div className="flex gap-3 mt-4">
            {linksSocialMedia.map((item) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:-translate-y-[2px] transition-transform duration-200"
              >
                <Image src={item.icon} alt={item.name} width={24} height={24}/>
              </a>
            ))}
          </div>
          <p className="text-sm text-[#1F1C14] mt-10">©2020 Edudu.co</p>
          <p className="text-sm text-[#1F1C14]">
            Edudu is a registered trademark of Edudu.co
          </p>
        </div>
        <div>
          <h3 className="font-bold mb-4">Courses</h3>
          <ul className="space-y-2 text-sm">
            {courses.map((item, i) => (
              <li key={i} className="hover:text-gray-900 cursor-pointer hover:font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Community</h3>
          <ul className="space-y-2 text-sm">
            {community.map((item, i) => (
              <li key={i} className="hover:text-gray-900 cursor-pointer hover:font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick links</h3>
          <ul className="space-y-2 text-sm">
            {quickLinks.map((item, i) => (
              <li key={i} className="hover:text-gray-900 cursor-pointer hover:font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">More</h3>
          <ul className="space-y-2 text-sm">
            {more.map((item, i) => (
              <li key={i} className="hover:text-gray-900 cursor-pointer hover:font-semibold">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

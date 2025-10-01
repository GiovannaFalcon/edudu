
import TeacherIcon from "@/assets/teachericon.svg";
import BookIcon from "@/assets/bookicon.svg";
import MoneyIcon from "@/assets/moneyicon.svg";

import { ChooseCard } from "@/Components/ChooseCard";

export function Choose() {
  const motives = [
    {
      icon: TeacherIcon,
      alt: "Teacher Icon",
      title: "Experienced teacher",
      description:
        "Instructors from all over the world, providing quality learning experiences and helping students develop their full potential.",
    },
    {
      icon: BookIcon,
      alt: "Book Icon",
      title: "Creative program",
      description:
        "Design curriculum based on each students ability and needs, engaging learning activities, continuous two-way interaction.",
    },
    {
      icon: MoneyIcon,
      alt: "Money Icon",
      title: "Appropriate cost",
      description:
        "Flexible payment, suitable to personal financial situation and study schedule. Pay monthly, by course or study now, pay later.",
    },
  ];

  return (
    <section className="relative bg-[#F9F9F9] pt-26 pb-20">
      <h1 className="text-center text-[26px] md:text-4xl lg:text-5xl font-bold mb-14 relative z-10">
        Why should you choose Edudu?
      </h1>
      <div className="px-5 grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-6xl justify-items-center items-stretch relative z-10">
        {motives.map((item, index) => (
          <ChooseCard
            key={index}
            icon={item.icon}
            alt={item.alt}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-66 bg-[#FAB900]"></div>
    </section>
  );
}

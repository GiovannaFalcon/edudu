import Image from "next/image";

import Image2 from "@/assets/img2.svg";
import CheckIcon from "@/assets/check.svg";

export function AfterStudying() {
  const benefits = [
    "Master program knowledge at school",
    "The ability to criticize knowledge increases",
    "Respond confidently when encountering difficult situations",
  ];

  return (
    <section className="py-10">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1 flex justify-center">
          <Image src={Image2}  alt="Image from AfterStudying" className="w-120 md:w-[440px] lg:w-[500px] xl:w-[600px] h-auto hover:-translate-y-[2px] transition-transform duration-200 "
            priority />
        </div>
        <div className="flex-1">
          <h1 className="font-extrabold text-[26px] leading-8 max-w-[400px] md:text-[32px] md:leading-10 lg:text-5xl lg:leading-14 lg:max-w-[540px] text-[#0A033C] mb-8">
            What will your child get after studying at Edudu?
          </h1>
          <ul className="space-y-4">
            {benefits.map((text, index) => (
              <li key={index} className="flex items-center gap-3">
                <Image src={CheckIcon} alt="Check Icon" width={20} height={20} />
                <p className="text-[#1F1C14]/80 md:text-lg">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

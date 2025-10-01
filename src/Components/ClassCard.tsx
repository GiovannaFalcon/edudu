import Image, { StaticImageData } from "next/image";

interface ClassCardProps {
  icon: StaticImageData;
  alt: string;
  bgColor: string;
  title: string;
}

export function ClassCard({ icon, alt, bgColor, title }: ClassCardProps) {
  return (
    <div className="w-full max-w-[300px] px-4 py-4 bg-white flex items-center rounded-xl gap-x-3 shadow-md hover:-translate-y-[3px] transition-transform duration-300 hover:shadow-xl">
      <div className={`rounded-2xl p-3 ${bgColor}`}>
        <Image src={icon} alt={alt} width={20} height={20} />
      </div>
      <span className="text-[18px] sm:text-base text-[#1F1C14] font-bold">
        {title}
      </span>
    </div>
  );
}

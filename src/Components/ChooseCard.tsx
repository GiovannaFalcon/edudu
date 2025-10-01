import Image, { StaticImageData } from "next/image";

interface ChooseCardProps {
  icon: StaticImageData;
  alt: string;
  title: string;
  description: string;
}

export function ChooseCard({ icon, alt, title, description }: ChooseCardProps) {
  return (
    <div className="w-full max-w-sm sm:max-w-md px-6 py-5 pb-14 bg-white rounded-xl shadow-md hover:-translate-y-[3px] transition-transform duration-300 hover:shadow-xl flex flex-col h-full">
      <div className="rounded-2xl pt-4 flex justify-center">
        <Image src={icon} alt={alt} className="w-auto h-48 top-1/2 -translate-y-[48px]" />
      </div>
      <div className="flex flex-col flex-1 justify-start mt-5">
        <h2 className="text-center sm:text-lg text-[#1F1C14] font-bold mb-2">
          {title}
        </h2>
        <p className="text-center text-sm sm:text-base text-[#1F1C14]/80 mt-1">
          {description}
        </p>
      </div>
    </div>
  );
}

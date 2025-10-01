import MathIcon from "@/assets/mathicon.svg";
import LiteratureIcon from "@/assets/literatureicon.svg";
import EnglishIcon from "@/assets/englishicon.svg";
import ArtIcon from "@/assets/art.svg";
import { LessonsCard } from "@/Components/LessonsCard";

export function Lessons() {
  return (
    <section className="mt-10 mb-10 py-10 pb-60 bg-gradient-to-t from-[#f9f9f9] to-white h-160 md:h-120 lg:h-120">
      <div className="py-10 ">
        <h1 className="text-center font-bold text-2xl md:text-[28px] lg:text-4xl text-[#0A033C]">
          Lessons revolve around 4 areas
        </h1>
        <p className="mt-2 ml-1 text-center text-[#1F1C14]/70 md:text-[18px] lg:text-[20px]">
          Diverse lessons around 4 subjects: Math, literature, English, drawing
          help <br/> children improve their comprehensive knowledge
        </p>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-6 mx-auto">
        <LessonsCard
          icon={MathIcon}
          alt="Math Icon"
          bgColor="bg-[#EFEEFF]"
          title="Math"
        />
        <LessonsCard
          icon={LiteratureIcon}
          alt="Literature Icon"
          bgColor="bg-[#FFF8E8]"
          title="Literature"
        />
        <LessonsCard
          icon={EnglishIcon}
          alt="English Icon"
          bgColor="bg-[#FFECEC]"
          title="English"
        />
        <LessonsCard
          icon={ArtIcon}
          alt="Art Icon"
          bgColor="bg-[#EDFFFD]"
          title="Art"
        />
      </div>
    </section>
  );
}

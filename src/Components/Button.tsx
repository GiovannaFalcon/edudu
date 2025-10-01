import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode; 
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="mt-10 cursor-pointer font-bold text-[#362B0E] text-[16px] bg-[#FAB900] rounded-2xl py-4 px-10 hover:bg-[#362B0E] hover:border-[#FAB900] hover:text-[#FFFFFF] hover:font-bold hover:shadow-lg lg:py-4 lg:px-20 lg:text-[18px]">
      {children}
    </button>
  );
}

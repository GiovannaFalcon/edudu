import { AfterStudying } from "@/sections/AfterStudying";
import { Choose } from "@/sections/Choose";
import { Class } from "@/sections/Class";
import { Footer } from "@/sections/Footer";
import { Form } from "@/sections/Form";
import { Hero } from "@/sections/Hero";
import { Lessons } from "@/sections/Lessons";
import { NavBar } from "@/sections/Navbar";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Lessons />
      <AfterStudying />
      <Choose />
      <Class />
      <Form />
      <Footer />
    </>
  );
}

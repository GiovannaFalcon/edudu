import { Button } from "@/Components/Button";

export function Form() {
  return (
    <section className="mt-20 mb-20">
      <div className="bg-[#211903] rounded-2xl py-12 px-10  max-w-5xl ml-4 mr-4 md:mx-auto lg:mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">
            Do you still have any questions?
          </h1>
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto">
            Don't hesitate to leave us your phone number. We will contact you to
            discuss any questions you may have
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="gap-3 max-w-lg bg-[#FFFFFF]/10 rounded-2xl overflow-hidden text-start">
            <input
              type="tel"
              name="telephone"
              id="phonenumber"
              placeholder="Enter your phone number"
              className="flex-1 px-4 pr-30 py-3 text-white outline-none rounded-full focus:text-white"
            />
            <button className="cursor-pointer font-semibold text-[#362B0E] bg-[#FAB900] hover:font-bold hover:shadow-lg py-4 rounded-r-2xl px-5">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
}

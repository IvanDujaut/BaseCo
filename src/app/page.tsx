import { clients, products } from "@/lib/constant";
import { ContainerScroll } from "../components/global/container-scroll-animation";
import { HeroParallax } from "@/components/global/connect-parallax";
import { InfiniteMovingCards } from "../components/global/infinite-moving-cards";
import Image from "next/image";
import { AnimatedGradientText } from "@/components/global/animate-gradient";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NavbarDemo } from "@/components/global/navbar";

export default function Home() {
  return (
    <main className="flex items-center justify-center flex-col bg-neutral-950">
      <NavbarDemo>
        <section
          className="h-screen w-full 
      bg-neutral-950 rounded-md !overflow-visible 
      relative flex flex-col items-center antialiased"
        >
          <div
            className="absolute inset-0 
        h-full w-full items-center px-5 py-24
        [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"
          ></div>
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col gap-8">
                  {/* <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                    Start For Free Today
                  </span>
                </Button> */}
                  <div className="group cursor-pointer relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f] ">
                    <span
                      className={cn(
                        "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
                      )}
                      style={{
                        WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        WebkitMaskComposite: "destination-out",
                        mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                        maskComposite: "subtract",
                        WebkitClipPath: "padding-box",
                      }}
                    />
                    <AnimatedGradientText className="text-lg font-medium">Introducing BaseCo</AnimatedGradientText>
                    <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                  </div>
                  <h1 className="text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                    Stop Begging Banks, Start Tokenization
                  </h1>
                </div>
              }
            >
              <Image
                src={`/banner.png`}
                alt="hero"
                height={720}
                width={1400}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </section>
        <section className="md:mt-[8rem] mt-[-100px]">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold z-10">
              Trusted by major industries
            </h3>
            <InfiniteMovingCards items={clients} direction="right" speed="normal" />
          </div>
        </section>
        <section className="w-full">
          <HeroParallax products={products} />
        </section>
        {/* <section className="w-full h-screen">
        <AnimatedBeamMultipleOutput className="border-none transition-all duration-300 ease-out" />
      </section> */}
      </NavbarDemo>
    </main>
  );
}

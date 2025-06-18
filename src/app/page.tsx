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
    <main className="flex items-center justify-center flex-col bg-neutral-950 gap-10">
      <NavbarDemo>
        <section
          className="h-full w-full 
      rounded-md !overflow-visible 
      relative flex flex-col items-center antialiased"
        >
          <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
            <ContainerScroll
              titleComponent={
                <div className="flex items-center flex-col gap-8">
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
        <section className="md:mt-[8rem] mt-[-100px] relative">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-base md:text-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold z-10">
              Trusted by major industries
            </h3>
            <InfiniteMovingCards items={clients} direction="left" speed="normal" />
          </div>
        </section>
        <section className="w-full h-full">
          <HeroParallax products={products} />
        </section>
        {/* <section className="w-full h-screen">
        <AnimatedBeamMultipleOutput className="border-none transition-all duration-300 ease-out" />
      </section> */}
      </NavbarDemo>
    </main>
  );
}

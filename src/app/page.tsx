import { AnimatedShinyTextButton } from "@/components/animations/animated-shiny-text";
import { BackgroundGradientAnimation } from "@/components/backgrounds/background-gradient-animation";
import { clients, products } from "@/lib/constant";
import { ContainerScroll } from "@/components/animations/container-scroll-animation";
import { HeroParallax } from "@/components/ui/connect-parallax";
import { InfiniteMovingCards } from "@/components/animations/infinite-moving-cards";
import { NavbarDemo } from "@/components/navigation/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 0, 0)"
      gradientBackgroundEnd="rgb(10, 10, 10)"
      firstColor="2, 6, 23"
      secondColor="17, 24, 39"
      thirdColor="23, 37, 84"
      fourthColor="17, 24, 39"
      fifthColor="2, 6, 23"
      pointerColor="23, 37, 84"
      size="50%"
      blendingValue="soft-light"
      interactive={true}
      containerClassName="min-h-screen overflow-visible"
      className="overflow-visible"
    >
      <main className="flex items-center justify-center flex-col relative z-10">
        <NavbarDemo>
          <section
            className="h-full w-full 
        rounded-md !overflow-visible 
        relative flex flex-col items-center antialiased"
          >
            <div className="flex flex-col pt-20 md:pt-32">
              <ContainerScroll
                titleComponent={
                  <div className="flex items-center flex-col gap-8">
                    <AnimatedShinyTextButton className="text-lg font-medium">
                      ✨ Introducing BaseCo
                    </AnimatedShinyTextButton>
                    <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
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
          <section className="pt-20 md:py-16 relative">
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
    </BackgroundGradientAnimation>
  );
}

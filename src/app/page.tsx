import { AnimatedGradientText } from "@/components";
import { AnimatedShinyTextButton } from "@/components/animations/animated-shiny-text";
import { BackgroundGradientAnimation } from "@/components/backgrounds/background-gradient-animation";
import { clients, products } from "@/lib/constant";
import { ContainerScroll } from "@/components/animations/container-scroll-animation";
import { HeroParallax } from "@/components/ui/connect-parallax";
import { InfiniteMovingCards } from "@/components/animations/infinite-moving-cards";
import { NavbarDemo } from "@/components/navigation/navbar";
import { WobbleCard } from "@/components/ui/wobble-card";
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
              {/* <AnimatedGradientText className="text-lg md:text-lg bg-clip-text text-transparent font-sans font-bold z-10">
                Trusted by major industries
              </AnimatedGradientText> */}
              <h3 className="text-base md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold z-10">
                Trusted by major industries
              </h3>
              <InfiniteMovingCards items={clients} direction="left" speed="normal" />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
            <AnimatedGradientText className="text-lg font-medium">Problem</AnimatedGradientText>
            <h2 className="text-center text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans z-10">
              Your assets are valuable — but they&apos;re not working for you.
            </h2>
            <h3 className="text-center text-balance text-base md:text-lg text-neutral-400 max-w-4xl">
              The capital is there — in your land, property, or development — but it&apos;s stuck. Traditional financing
              doesn&apos;t give you the tools to activate it when you need it most.
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-5xl mx-auto w-full">
              <WobbleCard
                containerClassName="col-span-1 lg:col-span-2 h-full bg-neutral-900/50 backdrop-blur-sm min-h-[500px] lg:min-h-[300px]"
                className=""
              >
                <div className="max-w-xs">
                  <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Barriers to Accessing Capital
                  </h2>
                  <p className="mt-4 text-left  text-base/6 text-balance text-neutral-200">
                    Raising funds often means dealing with banks, collateral demands, endless timelines, and strict
                    requirements that shut out the businesses that need growth the most.
                  </p>
                </div>
                <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-neutral-900/50 backdrop-blur-sm">
                <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                  Locked-In Assets
                </h2>
                <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-balance text-neutral-200">
                  Fields, properties, and development projects remain illiquid until fully sold — leaving capital
                  trapped when your business needs it most.
                </p>
              </WobbleCard>
              <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-neutral-900/50 backdrop-blur-sm min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-xs lg:max-w-lg">
                  <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Long and Bureaucratic Processes
                  </h2>
                  <p className="mt-4 max-w-[26rem] text-left text-base/6 text-balance text-neutral-200">
                    From legal steps to institutional rounds, every layer adds friction, drives up costs, and slows you
                    down while your competitors move forward.
                  </p>
                </div>
                <Image
                  src="/linear.webp"
                  width={500}
                  height={500}
                  alt="linear demo image"
                  className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
                />
              </WobbleCard>
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

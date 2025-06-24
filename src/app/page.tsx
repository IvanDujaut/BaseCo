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
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Ripple } from "@/components/ui/ripple";
import { Safari } from "@/components/ui/safari";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

const features = [
  {
    name: "End-to-End Regulatory Support",
    description:
      "We guide you through tax, financial, and compliance needs, and we handle the entire legal setup and regulatory approval so your project is solid, secure, and ready to go.",
    href: "#",
    className: "md:col-span-1 xl:col-span-1 hover:bg-red-500/10",
  },
  {
    name: "Access to a Real Investor Network",
    description:
      "Your tokenized project is distributed through broker networks, institutional investors, and private communities — no need to build your own network.",
    href: "#",
    className: "md:col-span-1 xl:col-span-1 hover:bg-blue-500/10",
  },
  {
    name: "Market Launch & Liquidity",
    description:
      "We manage your go-to-market strategy, pricing, and secondary listing so your asset gains visibility, traction, and adoption from day one.",
    href: "#",
    className: "md:col-span-1 md:row-span-2 xl:col-span-1 xl:row-span-2 hover:bg-orange-500/10",
    background: (
      <>
        <FlickeringGrid
          className="absolute inset-0 z-0 h-full w-full [mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
          squareSize={4}
          gridGap={6}
          color="#60A5FA"
          maxOpacity={0.5}
          flickerChance={0.1}
          height={800}
          width={800}
        />
        <div className="inset-0 absolute z-10">
          <Safari
            width={1400}
            height={720}
            imageSrc="/dashboard.png"
            mode="simple"
            className=" ml-12 mt-64 h-full px-4 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] group-hover:translate-x-[-10px] transition-all duration-300"
          />
        </div>
      </>
    ),
  },
  {
    name: "White-Label Investment Platform",
    description:
      "Launch under your brand with a ready-to-use platform: onboarding (KYC/AML), wallet creation, token issuance, investor dashboard, and secondary market access — all included.",
    className: "md:col-span-2 xl:col-span-2 hover:bg-green-500/10",
    href: "#",
    background: (
      <div>
        <div className="inset-0 [mask-image:linear-gradient(to_bottom,rgb(255,255,255,0.5),transparent)] absolute -bottom-full z-10">
          <Ripple />
        </div>
        <Safari
          width={1400}
          height={720}
          imageSrc="/dashboard.png"
          mode="simple"
          className="hidden md:block absolute -mb-64 w-full left-3/4 -translate-x-1/2 select-none drop-shadow-[0_0_28px_rgba(0,0,0,.1)] transition-all duration-300 group-hover:translate-y-[-10px] z-20"
        />
      </div>
    ),
  },
];

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
            <div className="flex flex-col pt-20">
              <ContainerScroll
                titleComponent={
                  <div className="flex items-center flex-col gap-8">
                    <AnimatedShinyTextButton className="text-lg font-medium">
                      ✨ Introducing BaseCo
                    </AnimatedShinyTextButton>
                    <h1 className="text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold">
                      Stop Begging Banks, <br /> Start Tokenization
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
              {/* <AnimatedGradientText className="text-lg md:text-lg bg-clip-text text-transparent font-bold z-10">
                Trusted by major industries
              </AnimatedGradientText> */}
              <h3 className="text-base md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold z-10">
                Trusted by major industries
              </h3>
              <InfiniteMovingCards items={clients} direction="left" speed="normal" />
            </div>
          </section>
          <section className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
            <AnimatedGradientText className="text-lg font-medium">Problem</AnimatedGradientText>
            <h2 className="text-center text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 z-10">
              Your assets are valuable — but they&apos;re not working for you.
            </h2>
            <h3 className="text-center text-balance text-base md:text-lg text-neutral-400 max-w-4xl">
              The capital is there — in your land, property, or development — but it&apos;s stuck. Traditional financing
              doesn&apos;t give you the tools to activate it when you need it most.
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
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
          <section className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
            <AnimatedGradientText className="text-lg font-medium">Solution</AnimatedGradientText>
            <h2 className="text-center text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 z-10">
              Stop losing time, money, and control to a system that wasn&apos;t built for you.
            </h2>
            <h3 className="text-center text-balance text-base md:text-lg text-neutral-400 max-w-4xl">
              Traditional financing is slow, exclusive, and bureaucratic. While your assets sit idle, opportunities pass
              you by. We give you a smarter, faster way to unlock capital — built around your business, not the banks.
            </h3>
            <BentoGrid className="max-w-sm md:max-w-3xl xl:max-w-6xl mx-auto w-full">
              {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
              ))}
            </BentoGrid>
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

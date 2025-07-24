import { AnimatedGradientText } from "@/presentation/pages/landing/components";
// import { AnimatedShinyTextButton } from "@/components/animations/animated-shiny-text";
import { BackgroundGradientAnimation } from "@/presentation/pages/landing/components/backgrounds/background-gradient-animation";
import { clients } from "@/shared/constants/clients";
// import { ContainerScroll } from "@/components/animations/container-scroll-animation";
// import { HeroParallax } from "@/components/ui/connect-parallax";
import { InfiniteMovingCards } from "@/presentation/pages/landing/components/animations/infinite-moving-cards";
import { NavbarDemo } from "@/presentation/pages/landing/components/navigation/navbar";
import { WobbleCard } from "@/presentation/components/ui/wobble-card";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/presentation/components/ui/bento-grid";
import { Ripple } from "@/presentation/components/ui/ripple";
import { Safari } from "@/presentation/components/ui/safari";
import { FlickeringGrid } from "@/presentation/components/ui/flickering-grid";
import { StickyScroll } from "@/presentation/components/ui/sticky-scroll-reveal";
import { FileText, Shield, Rocket, Target, TrendingUp } from "lucide-react";
import { HeroSectionOne } from "@/presentation/pages/landing/components/hero.section";

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

const content = [
  {
    icon: <FileText className="!w-6 !h-6" />,
    title: "1. Share your project",
    description:
      "Tell us about your asset, your goals, and your target audience. We assess its viability and define the best tokenization approach for your business.",
    image: (
      <div className="flex h-full w-full items-center justify-center bg-transparent">
        <Image
          src="/dashboard.png"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Project dashboard"
        />
      </div>
    ),
  },
  {
    icon: <Shield className="!w-6 !h-6" />,
    title: "2. Legal & technical setup",
    description:
      "We structure your project legally and operationally — drafting contracts, creating the token model, and ensuring full regulatory alignment.",
    image: (
      <div className="flex h-full w-full items-center justify-center bg-transparent">
        <div className="text-center p-6">
          <Shield className="w-16 h-16 mx-auto mb-4 text-blue-600" />
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100">Legal & Technical</h3>
          <p className="text-sm text-blue-700 dark:text-blue-300">Contracts • Compliance • Architecture</p>
        </div>
      </div>
    ),
  },
  {
    icon: <Rocket className="!w-6 !h-6" />,
    title: "3. Launch your branded platform",
    description:
      "We deploy your own investment platform with your brand identity, including investor onboarding, wallets, smart contracts, and token management.",
    image: (
      <div className="flex h-full w-full items-center justify-center bg-transparent">
        <Image
          src="/dashboard.png"
          width={400}
          height={300}
          className="h-full w-full object-cover rounded-xl"
          alt="Branded platform"
        />
      </div>
    ),
  },
  {
    icon: <Target className="!w-6 !h-6" />,
    title: "4. Prepare for launch",
    description:
      "We develop a compelling whitepaper and support your marketing and investor outreach strategy to ensure visibility and trust from day one.",
    image: (
      <div className="flex h-full w-full items-center justify-center bg-transparent">
        <div className="text-center p-6">
          <Target className="w-16 h-16 mx-auto mb-4 text-orange-600" />
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100">Launch Strategy</h3>
          <p className="text-sm text-orange-700 dark:text-orange-300">Marketing • Outreach • Whitepaper</p>
        </div>
      </div>
    ),
  },
  {
    icon: <TrendingUp className="!w-6 !h-6" />,
    title: "5. Go live & raise capital",
    description:
      "Your project goes live on your platform, fully integrated into our investor network, with support for liquidity, secondary markets, and scalability.",
    image: (
      <div className="flex h-full w-full items-center justify-center bg-transparent">
        <div className="text-center p-6">
          <TrendingUp className="w-16 h-16 mx-auto mb-4 text-green-600" />
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100">Capital Raised</h3>
          <p className="text-sm text-green-700 dark:text-green-300">Live Platform • Investors • Growth</p>
        </div>
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
          <section id="home">
            <HeroSectionOne />
          </section>
          <section className="pt-20 md:py-16 relative">
            <div className="flex flex-col items-center justify-center">
              <h3 className="text-base md:text-2xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-bold z-10">
                Trusted by major industries
              </h3>
              <InfiniteMovingCards items={clients} direction="left" speed="normal" />
            </div>
          </section>
          <section id="problem" className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
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
          <section id="solutions" className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
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
          <section id="how-it-works" className="flex flex-col items-center justify-center pt-20 md:py-16 gap-8">
            <AnimatedGradientText className="text-lg font-medium">How it works</AnimatedGradientText>
            <h2 className="text-center text-balance text-base md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 z-10">
              Tokenize your asset and unlock capital in 5 simple steps
            </h2>
            <h3 className="text-center text-balance text-base md:text-lg text-neutral-400 max-w-4xl">
              No friction. No technical barriers. We handle everything so your project reaches real investors in just
              weeks.
            </h3>
            <StickyScroll content={content} />
          </section>
          <section id="contact" className="pt-20 md:py-16 relative">
            {/* ...contenido de Contact... */}
          </section>
        </NavbarDemo>
      </main>
    </BackgroundGradientAnimation>
  );
}

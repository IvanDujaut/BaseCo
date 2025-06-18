// import { MenuIcon } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import React from "react";

// // Asincrono porque es un server component
// const Navbar = async () => {
//   return (
//     <header
//       className="fixed right-0 left-0 top-0 py-4 px-4 bg-black/40
//     backdrop-blur-lg z-[100] flex items-center border-b-[1px]
//     border-neutral-900 justify-between"
//     >
//       <aside className="flex items-center gap-[2px]">
//         <p className="text-3xl font-bold">Vol</p>
//         <Image src="/fuzzieLogo.png" alt="NewCo" width={32} height={32} className="shadow-sm" />
//         <p className="text-3xl font-bold">mart</p>
//       </aside>
//       <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
//         <ul className="flex items-center gap-4 list-none">
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Pricing
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Clients
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Resources
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Documentation
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:text-neutral-400 transition-colors">
//               Enterprise
//             </Link>
//           </li>
//         </ul>
//       </nav>
//       <aside className="flex items-center gap-4">
//         <Link
//           href="/dashboard"
//           className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
//         >
//           <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
//           <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
//             {true ? "Dashboard" : "Get Started"}
//           </span>
//         </Link>
//         {/* {user ? <UserButton afterSignOutUrl="/" /> : null} */}
//         <MenuIcon className="md:hidden" />
//       </aside>
//     </header>
//   );
// };

// export default Navbar;

"use client";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "./resizable-navbar";
import { useState } from "react";

export function NavbarDemo({ children }: { children?: React.ReactNode }) {
  const navItems = [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Pricing",
      link: "#pricing",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="secondary">Login</NavbarButton>
            <NavbarButton variant="primary">Book a call</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Login
              </NavbarButton>
              <NavbarButton onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Book a call
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      {children}
    </div>
  );
}

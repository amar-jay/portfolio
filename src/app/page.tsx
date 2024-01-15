import Link from "next/link";
import React from "react";
import Particles from "@/components/particles";
import { Dosis } from "next/font/google";

interface Navigation {
  name: string,
  href: string,
  }
const navigation:Navigation[] = [
];

const font = Dosis({weight: '400', subsets: ['latin'] })
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-slate-800 to-black">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in w-screen h-screen"
        quantity={100}
      />
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation?.map((item, key) => (
            <Link
              key={key}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <h1 className={"z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text " + font.className}>
         Amar Jay
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-sm text-zinc-500 ">
        Just a normal guy
        </h2>
      </div>


      <div className="my-16 text-center animate-fade-in-late">
        <h2 className="text-sm text-zinc-500 ">
        <a href="mailto:abdmananjnr@gmail.com"> 
          abdmananjnr@gmail.com 
        </a>{" "}|{" "}
        <a href="https://github.com/amar-jay"> 
          github.com/amar-jay
        </a> 
        </h2>
      </div>
    </div>
  );

} 

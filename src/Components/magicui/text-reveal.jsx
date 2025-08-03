"use client";;
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { cn } from "@/lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh] m-[-50vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[75%] items-center bg-transparent px-[1rem] py-[5rem] "
        }>
        <span
          ref={targetRef}
          className={
            "flex flex-wrap p-5 text-lg font-bold text-white md:p-8 md:text-lg lg:p-10 lg:text-lg xl:text-lg text-justify"
          }>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  //let rres = progress-()
  
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <p className="flex flex-wrap text-justify text-base md:text-lg leading-none tracking-wide text-foreground">
    <span className="xl:lg-3 relative mx-1 lg:mx-1.5">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity: opacity }} className={"text-white"}>
        {children}
      </motion.span>
    </span>
    </p>
  );
};

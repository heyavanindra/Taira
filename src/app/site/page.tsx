"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/contants";
import { cn } from "@/lib/utils";
import { Check, Scissors } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
export default function Home() {
  const ref = useRef<HTMLImageElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  console.log();
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  return (
    <main>
      <div className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:4rem_4rem]"></div>
        <div className="max-sm:h-" ref={ref}>
          <p className="text-center">Run Your Agency in one place</p>
          <motion.div
            style={{
              y: textY,
            }}
            className="from-primary to-secondary-foreground relative bg-gradient-to-r bg-clip-text text-center text-9xl text-transparent"
          >
            <h1 className="text-9xl font-bold md:text-[300px]">Taira</h1>
          </motion.div>
          <motion.div
            style={{
              y: imageY,
            }}
            className="relative mt-[-25px] flex w-full items-center justify-center md:mt-[-70px]"
          >
            <Image
              src={"/assests/preview.png"}
              alt="preview"
              width={1200}
              height={1200}
              className="border-muted pointer-events-none rounded-2xl border-2"
            ></Image>
          </motion.div>
        </div>
        <section className="max-md:mt-[-60px] flex flex-col items-center justify-center gap-4 !mt-[60px]">
          <h1 className="text-center text-4xl font-semibold">
            Choose what fits you right
          </h1>
          <p className="text-muted-foreground mt-4 text-center text-lg">
            Simplify your workflow with an all-in-one platform for agencies.
            Empower your team, manage clients, and scale your business
            effortlessly.
          </p>

          <motion.div
            className="mt-6 flex w-full flex-wrap justify-center gap-2"
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            viewport={{
              once: true,
            }}
          >
            {pricingCards.map((price, idx) => (
              <Card
                className={cn("w-full max-w-xs", {
                  "border-primary border-2": price.title === "Unlimited Saas",
                })}
                key={idx}
              >
                <CardHeader>
                  <CardTitle
                    className={cn("text-4xl", {
                      "text-muted-foreground": price.title !== "Unlimited Saas",
                    })}
                  >
                    {price.title}
                  </CardTitle>
                  <CardDescription>{price.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <span className="text-4xl font-bold">{price.price}</span>
                  <span>/m</span>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-4">
                  <motion.div className="w-full">
                    {price.features.map((feature, idx) => (
                      <div
                        key={idx + feature}
                        className="flex items-center gap-2"
                      >
                        <Check></Check>
                        <p>{feature}</p>
                      </div>
                    ))}
                  </motion.div>
                  <Link
                    href={"/agency"}
                    className={cn(
                      "bg-primary w-full rounded-md p-2 text-center text-white",
                      {
                        "bg-muted-foreground": price.title === "Unlimited Saas",
                      },
                    )}
                  >
                    Get Started
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </motion.div>
        </section>
      </div>
    </main>
  );
}

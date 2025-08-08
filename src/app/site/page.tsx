import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative flex h-full w-full flex-col items-center justify-center pt-36">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] bg-[size:4rem_4rem]"></div>
        <p>Run Your Agency in one place</p>
        <div className="from-primary to-secondary-foreground relative bg-gradient-to-r bg-clip-text text-9xl text-transparent">
          <h1 className="text-9xl font-bold md:text-[300px]">Taira</h1>
        </div>
        <div className="relative flex w-full items-center justify-center md:mt-[-70px]">
          <Image
            src={"/assests/preview.png"}
            alt="preview"
            width={1200}
            height={1200}
            className="border-muted rounded-2xl border-2"
          ></Image>
        </div>
      </div>
    </main>
  );
}

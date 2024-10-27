import Image from "next/image";

export default function Design() {
  return (
    <div className = "p-4">
        <h1 className = "py-5 text-5xl text-bold justify-center items-center flex"  >Design</h1>
        <h2 className = "py-3 text-2xl justify-center items-center flex" >A collection of designs I've created over the years!</h2>
        <Image
        //   className="dark:invert"
          src="/circuit_design.png"
          alt="Vercel logomark"
          width={200}
          height={200}
        />

    </div>
  );
}

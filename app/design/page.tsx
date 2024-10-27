import Image from "next/image";

export default function Design() {
  return (
    <div>
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

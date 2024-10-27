import Image from "next/image";

export default function Design() {
  return (
    <div>
        <h1 className = "py-5 text-5xl text-bold justify-center items-center flex"  >Design</h1>
        <h2 className = "py-3 text-2xl justify-center items-center flex" >A collection of designs I've created over the years!</h2>
        <div className = "background-color-orange justify-center flex">
          {/* row 1 */}
          <div>
            <Image
              className=" w-64 h-64 object-cover object-center"
              src="/circuit_design.png"
              alt="Vercel logomark"
              width={500}
              height={500}
            />
            <p className = "w-64 h-64">
            oerm ipsum dolor sit amet, consectetur adipiscing elit. Donec
            </p>
          </div>

        </div>

    </div>
  );
}

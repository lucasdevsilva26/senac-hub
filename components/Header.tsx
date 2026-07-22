import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-center w-full px-10 h-26 bg-neutral-200 border-b-6 border-orange-400">
      <div className="flex h-8/10 aspect-7/2 relative">
        <Image src={"/senacLogo.png"} alt="aa" fill></Image>
      </div>
    </header>
  );
}

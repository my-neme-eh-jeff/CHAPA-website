import { Search } from "lucide-react";
import NavigationTabComponents from "./NavigationTabComponents";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex h-10 w-full items-stretch justify-between border-b bg-white text-xl sm:h-12 md:h-auto">
      <div className="hidden p-4 md:flex">
        <NavigationTabComponents />
      </div>
      <div className="flex items-center">LOGO</div>
      <div className="flex justify-stretch">
        <Link
          href={"/login"}
          className="flex items-center self-stretch border bg-amber-200 px-5"
        >
          Login \ SignUp
        </Link>
        <button className="flex items-center self-stretch bg-black px-6">
          <Search color="white" />
        </button>
      </div>
    </nav>
  );
}

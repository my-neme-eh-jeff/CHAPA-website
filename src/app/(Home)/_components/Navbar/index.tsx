import NavigationTabComponents from "./NavigationTabComponents";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl">
      <NavigationTabComponents />
      <div>LOGO</div>
      <button>LOGIN SignUp</button>
    </nav>
  );
}

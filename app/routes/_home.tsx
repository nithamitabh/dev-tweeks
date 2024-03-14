import { Link, Outlet } from "@remix-run/react";
import { useState } from "react";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";

export default function Home  ()  {
  const [isNavOpen, setNavIsOpen] = useState(false);
  return (
    <section className="w-full bg-white min-h-screen flex flex-col items-center" >
        <nav className="sticky top-0 z-50 flex w-full items-center bg-neutral-100  justify-between p-4 border-b border-zinc-200 flex-wrap md:flex-nowrap">
            <Link to ="/" className="flex items-center space-x-2">
               <AppLogo className="h-10 w-10 md:h-14 md:w-24 text-blue-800"/> 
               <h1 className="text-2xl font-semibold text-blue-700">Dev-tweeks</h1>
            </Link>
            <button onClick={() => setNavIsOpen(!isNavOpen)} className="md:hidden">
             {isNavOpen ? <span className="text-3xl">🞩</span> : <span className="text-3xl">☰</span>} 
            </button>
            <div className={`flex flex-row items-center space-y-4 md:space-y-0 md:space-x-4 ${isNavOpen ? "flex-col order-last w-full md:w-auto" : "hidden md:flex"}`}>
              <Link to={`/profiles/amitabh`}>@amitabh_nith</Link>
              <img src="https://avatars.githubusercontent.com/u/96220322?v=4" alt="Profile" className="rounded-full" height="50" width="50" style={{aspectRatio: "50/50", objectFit: "cover"}} />
              <Button>Logout</Button>
            </div>
        </nav> 
        <Outlet/>
    </section>
  );
}

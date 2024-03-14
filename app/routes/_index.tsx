import { Link } from "@remix-run/react";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";

export default function Index() {
  return (
    <section className="w-full bg-white flex flex-col">
      <nav className="flex items-center space-x-2 p-4">
        <AppLogo className="h-10 w-10 md:h-14 md:w-24 text-blue-800"/>
        <h1 className="font-semibold text-blue-700 text-2xl ">Dev-tweeks</h1>
      </nav>
      <div className="mt-16 container md:flex justify-center items-center px-4 md:px-6 flex-1">
       <div className="flex flex-col items-center space-y-4 text-center p-4 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
          A{" "}
          <span className="font-extrabold bg-gradient-to-r from-orange-600 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Social Platform for Developers
          </span>{"  "}
          Build specially 😊 for Techies ✨
        </h1>
        <p className="text-gray-500 text-xl">
          Powered by{" "}
          <span className="text-blue-700 font-bold mt-4">Remix</span> and{" "}
          <span className="text-green-700 font-bold mt-4">Supabase</span>{" "}
          <br />
          <span className="font-bold text-neutral-800 mt-6 ">Feel free to contribute 🫡</span>
        </p>
        <Button asChild>
          <Link to="/login">Get Started</Link>
        </Button>
        <Button asChild>
          <a href="https://github.com/nithamitabh/">Contribute😻</a>
        </Button>
        </div> 
        <Card className="relative group overflow-hidden rounded-lg md:w-1/2">
          <CardContent className="p-1">
            <video className="h-full w-full rounded-lg" autoPlay  loop muted>
              <source src="assets/videos/demo.mp4" type="video/mp4" />
            </video>
          </CardContent>
        </Card>
      </div>

    </section>
  );
}

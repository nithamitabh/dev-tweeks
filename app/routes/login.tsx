import { Link } from "@remix-run/react";
import { AppLogo } from "~/components/app-logo";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Github } from "lucide-react";

export default function Login() {
  return (
    <section className="w-full bg-white flex flex-col">
      <nav className="flex items-center space-x-2 p-4">
        <Link to="/">
        <AppLogo className="h-10 w-10 md:h-14 md:w-24 text-blue-800"/>
        </Link>
        <h1 className="font-semibold text-blue-700 text-2xl ">Dev-tweeks</h1>
      </nav>
      <div className="mt-16 container flex flex-col justify-start items-center px-4 md:px-6 flex-1">
       <div className="flex flex-col items-center space-y-4 text-center p-4 ">
        <h1 className="px-1 text-3xl md:text-5xl font-bold tracking-tighter">
            Log in Using <br/>
          <span className="font-extrabold bg-gradient-to-r from-orange-600 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
            Github
          </span>{"  "}
          <br /> and Discover More 🚀
        </h1>
        <p className="text-gray-500 text-xl">
          Our Posts and comments are powered by <span className="text-blue-600 font-bold italic">Markdown</span>
          <br />
          <span className="font-bold text-neutral-800 mt-6 ">Feel free to contribute 🫡</span>
        </p>
        
        <Button asChild>
          <a href="https://github.com/nithamitabh/">Contribute😻</a>
        </Button>
        </div> 
        <Card className="relative group overflow-hidden rounded-lg">
          <CardContent className="p-1 bg-gradient-to-r from-orange-600 via-blue-500 to-green-400 bg-300% animate-gradient">
            <Button onClick={() => {console.log("login")}}>
                <Github  className="mr-2 h-4 w-4" />
                Github
                </Button>
          </CardContent>
        </Card>
      </div>

    </section>
  );
}

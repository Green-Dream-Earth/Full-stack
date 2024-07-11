import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  SheetTrigger,
  SheetContent,
  Sheet,
  SheetClose,
} from "@/components/ui/sheet";
import { SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";
import AvatarDropdown from "./avatarDropdown";
import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 bg-white z-50 shadow-md">
      <div className="container flex h-16 items-center justify-between ">
        <div className="flex gap-6 md:gap-10">
          <Link className="flex items-center gap-2" href="/">
            {/* <MountainIcon className="h-6 w-6" /> */}
            {/* <div className="">
              <GraduationCap className="h-6 w-6 text-primary" />
              <span className="font-bold text-primary sm:inline-block">
                HelpStudyAbroad.com
              </span>
            </div> */}
            <Image
            className="-ml-7"
              src={"/HSA_Logo_Horizontal_Updated.svg"}
              width={240}
              height={120}
              alt="HelpStudyAbroad.com"
            />
          </Link>
          <div className="hidden lg:flex items-center gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/"
            >
              Home
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/universities"
            >
              Explore Universities
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/blog"
            >
              Blogs
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/ask-our-experts"
            >
              Ask our Experts
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4 text-slate-600"
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex">
          <SignedOut>
            <Link href={"/sign-in"}>
              <Button className="mr-4" size="sm" variant="outline">
                Sign In
              </Button>
            </Link>
            <Link href={"/sign-up"}>
              <Button size="sm" variant="outline">
                Sign Up
              </Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <AvatarDropdown />
            {/* <SignOutButton>
              
            </SignOutButton> */}
          </SignedIn>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="p-4" side="left">
            <div className="mt-12 grid gap-4">
              <SheetTrigger asChild>
                <Link
                  className="flex items-center justify-between font-medium hover:underline underline-offset-4"
                  href="/"
                >
                  Home
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className="flex items-center justify-between font-medium hover:underline underline-offset-4"
                  href="/universities"
                >
                  Explore Universities
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className="flex items-center justify-between font-medium hover:underline underline-offset-4"
                  href="/blog"
                >
                  Blogs
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className="flex items-center justify-between font-medium hover:underline underline-offset-4"
                  href="/ask-our-experts"
                >
                  Ask our Experts
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <Link
                  className="flex items-center justify-between font-medium hover:underline underline-offset-4"
                  href="/about"
                >
                  About
                  <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </SheetTrigger>
              <SheetTrigger asChild>
                <SignedOut>
                  <Link href={"/sign-in"}>
                    <Button
                      size="sm"
                      className="bg-secondary/80 text-slate-50 w-full"
                      variant="outline"
                    >
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>
              </SheetTrigger>
              <SheetTrigger asChild>
                <SignedIn>
                  {/* <AvatarDropdown /> */}
                  <SignOutButton>
                    <Button
                      size="sm"
                      className="bg-red-600 text-slate-50 w-full"
                      variant="outline"
                    >
                      Sign Out
                    </Button>
                  </SignOutButton>
                </SignedIn>
              </SheetTrigger>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function ChevronRightIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

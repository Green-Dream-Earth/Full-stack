import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SignIn } from "@clerk/nextjs";

export function SignupModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-secondary/80 rounded-lg border border-secondary/90 hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-send"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          <span className="sr-only">Comment</span>
        </button>
      </DialogTrigger>
      <DialogContent className="w-min m-0 p-0">
        <SignIn />
      </DialogContent>
    </Dialog>
  );
}

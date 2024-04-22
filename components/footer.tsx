import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex flex-col pt-12 md:pt-16 lg:pt-18">
      <footer className="w-full"> 
        <div className="aspect-[4/1] relative">
          <iframe 
          className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7198.662017705696!2d83.97258333791753!3d25.560652009914627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992759f05555555%3A0x4a863a6a5b907dbb!2sGreen%20Dream%20Earth!5e0!3m2!1sen!2sin!4v1713641992953!5m2!1sen!2sin"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="bg-gray-900 text-gray-50 dark:bg-gray-950 dark:text-gray-50 px-4 py-8 md:px-6 lg:px-8">
          <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="space-y-4 col-span-4">
              <h4 className="text-lg font-semibold">Green Dream Earth</h4>
              <div className="grid gap-2">
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  About
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  Careers
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  Blog
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="space-y-4 col-span-4">
              <h4 className="text-lg font-semibold">Services</h4>
              <nav className="grid gap-2">
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  Free Portfolio Review
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  Free 1:1 Consultation
                </Link>
                <Link
                  className="hover:underline hover:underline-offset-2"
                  href="#"
                >
                  And Many More!
                </Link>
              </nav>
            </div>
            <div className="space-y-4 col-span-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex items-center space-x-4">
                <Link className="text-gray-50 hover:text-gray-300" href="#">
                  <TwitterIcon className="h-6 w-6" />
                </Link>
                <Link className="text-gray-50 hover:text-gray-300" href="#">
                  <FacebookIcon className="h-6 w-6" />
                </Link>
                <Link className="text-gray-50 hover:text-gray-300" href="#">
                  <LinkedinIcon className="h-6 w-6" />
                </Link>
                <Link className="text-gray-50 hover:text-gray-300" href="#">
                  <InstagramIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
            <p className="text-sm text-gray-400">
              © 2024 Greendreamearth Org. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <Link
                className="text-sm hover:underline hover:underline-offset-2"
                href="#"
              >
                Privacy Policy
              </Link>
              <Link
                className="text-sm hover:underline hover:underline-offset-2"
                href="#"
              >
                Terms of Service
              </Link>
              <Link
                className="text-sm hover:underline hover:underline-offset-2"
                href="#"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

function FacebookIcon(props: any) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props: any) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterIcon(props: any) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

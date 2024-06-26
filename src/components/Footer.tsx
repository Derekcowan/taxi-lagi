import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full shrink-0 flex-col items-center justify-center gap-2 border-t px-4 py-6 sm:flex-row md:px-6">
      <p className="text-xs text-muted-foreground">© 2024 TAXI La Gi |</p>
      <p className="text-xs text-muted-foreground">
        <Link
          href="https://derekcowan.com"
          className="underline hover:text-primary"
        >
          Site Design by DerekCowan
        </Link>
      </p>
    </footer>
  );
};

export default Footer;

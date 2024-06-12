import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook } from "lucide-react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-14 items-center justify-between px-1 md:px-3 lg:px-6">
      <Link className="flex items-center justify-center" href="#">
        <Image
          alt="TAXI La Gi"
          height={60}
          src="/Taxi La Gi logo.svg"
          width={240}
        />
      </Link>
      <nav className="ml-auto flex flex-row">
        <Link
          href="https://www.tiktok.com/@hoangvuongthinh"
          aria-label="tiktok"
        >
          <Button variant="ghost" size="icon" aria-label="tiktok">
            <FontAwesomeIcon icon={faTiktok} width={20} height={20} />
          </Button>
        </Link>
        <Link
          href="https://www.facebook.com/taxilagithinh"
          aria-label="facebook"
        >
          <Button variant="ghost" size="icon" aria-label="facebook">
            <Facebook size={20} />
          </Button>
        </Link>
        <Link href="tel:0962325023" aria-label="phone number">
          <Button variant="ghost" size="icon" aria-label="phone">
            <Phone size={20} />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

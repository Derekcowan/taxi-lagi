import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Facebook } from "lucide-react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="flex h-14 items-center px-4 lg:px-6">
      <Link className="flex items-center justify-center" href="#">
        <Image
          alt="TAXI La Gi"
          height={60}
          src="/Taxi La Gi LogoV2.png"
          width={200}
        />
      </Link>
      <nav className="ml-auto flex gap-x-1">
        <Link href="https://www.tiktok.com/@hoangvuongthinh">
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faTiktok} width={24} height={24} />
          </Button>
        </Link>
        {/* need to add a username on Facebook */}
        <Link href="https://www.facebook.com/profile.php?id=61557017503980">
          <Button variant="ghost" size="icon">
            <Facebook />
          </Button>
        </Link>
        <Link href="tel:0962325023">
          <Button variant="ghost" size="icon">
            <Phone />
          </Button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;

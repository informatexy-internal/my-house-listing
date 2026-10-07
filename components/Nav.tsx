import { House } from "@phosphor-icons/react/ssr";
import { property } from "@/lib/property";
import ContactButtons from "./ContactButtons";

export default function Nav() {
  return (
    <nav className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-semibold text-pine-deep">
          <House size={24} weight="duotone" /> {property.brand}
        </a>
        <div className="flex items-center gap-5 text-sm">
          <a href="#photos" className="hidden hover:text-pine sm:inline">Photos</a>
          <a href="#how" className="hidden hover:text-pine sm:inline">How it works</a>
          <a href="#faq" className="hidden hover:text-pine sm:inline">FAQ</a>
          <ContactButtons label="WhatsApp" />
        </div>
      </div>
    </nav>
  );
}

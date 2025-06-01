import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "Agency Partners", href: "/partners" },
  { label: "Get Support", href: "/support" },
  { label: "More", href: "/more" },
];

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-14 py-4 sticky top-0 bg-white border-b border-b-gray-200  z-50">
      <Link href="/" className="flex items-center gap-2 cursor-pointer">
        <Image
          src="/images/logo.svg"
          alt="Monk Commerce Logo"
          width={48}
          height={48}
          className="h-12 w-auto"
        />
        <span className="text-base font-semibold">Monk Commerce</span>
      </Link>
      <div className="flex items-center gap-6">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={clsx(
              "text-base py-0.5 font-medium text-gray-700 hover:text-primary-600 transition duration-200 relative leading-5",
              "before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-primary-500 before:scale-x-0 before:transition-transform before:duration-200 hover:before:scale-x-100"
            )}
          >
            {item.label}
          </Link>
        ))}
        <button className="btn-primary">Book Demo</button>
      </div>
    </header>
  );
};

export default Header;

import Link from "next/link";

interface LinknbProps {
    href: string;
    title: string;
    setIsOpen?: (isOpen: boolean) => void;
    className?: string;
}

export default function Linknb({href, title, setIsOpen, className}: LinknbProps) {
  return (
    <Link
      href={href}
      onClick={() => setIsOpen?.(false)}
      className={`text-white hover:text-gray-300 transition-colors ${className}`}
    >
      {title}
    </Link>
  );
}

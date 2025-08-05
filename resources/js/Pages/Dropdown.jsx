import { useState, useRef, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

const Dropdown = ({label, items}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left w-full cursor-pointer" ref={wrapperRef}
    onClick={() => setIsOpen((prev) => !prev)}>
      {/* Custom trigger */}
        <span className="flex items-center gap-2 justify-between">

            <span>{label}</span>
        
            {isOpen ? (
            <ChevronDownIcon className="w-4 h-4" />
            ) : (
            <ChevronRightIcon className="w-4 h-4" />
            )}
        </span>

      {/* Dropdown content */}
      {isOpen && (
        <ul className="mt-2 ml-4 pl-2 border-l-2 border-amber-50 text-sm text-gray-200 space-y-1">
            {items.map((item, idx) =>(
                <li key={idx}><Link href={item.href} className="block px-2 py-1 hover:bg-gray-100 hover:text-black rounded">-- {item.label}</Link></li>
            ))}
          
        </ul>
      )}
    </div>
  );
};

export default Dropdown;

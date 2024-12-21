"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, Wrench, Info, GraduationCap, Mail, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type MobileSidebarProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function MobileSidebar({ isOpen, setIsOpen }: MobileSidebarProps): JSX.Element {
  const router = useRouter();

  const menuItems = [
    { icon: Home, text: "Home", link: "/" },
    { icon: Wrench, text: "Our Services", link: "/services" },
    { icon: Info, text: "About Us", link: "/about" },
    { icon: GraduationCap, text: "Mentorship", link: "/mentorship" },
    { icon: Mail, text: "Contact", link: "/contact" },
  ];

  const handleClick = (link: string) => {
    router.push(link);
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-y-0 right-0 w-64 bg-gray-900 text-white shadow-lg z-50"
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-xl font-bold">ITIK Solutions</h2>
            </div>

            <nav className="flex-grow py-4">
              <ul>
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.text}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="mb-2"
                  >
                    <div
                      onClick={() => handleClick(item.link)}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-primary hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      <item.icon size={20} className="mr-3" />
                      {item.text}
                      <ChevronRight size={16} className="ml-auto" />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <div className="p-4 border-t border-gray-700">
              <button className="w-full py-2 px-4 bg-primary hover:bg-primary-dark text-white font-bold rounded transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

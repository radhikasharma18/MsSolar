import { ReactNode } from "react";
import { IoAddSharp } from "react-icons/io5";

interface AccordionProps {
  title: string;
  children: ReactNode;
  open: boolean;
  onToggle: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ title, children, open, onToggle }) => {
  return (
    <div className="border-b border-gray-400">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-semibold text-lg p-4">{title}</span>

        <span
          className={
            "inline-flex transition-all duration-800 ease-out text-2xl bg-gray-200 text-amber-600 rounded-full p-2 " +
            (open ? "rotate-45" : "rotate-0")
          }
        >
          <IoAddSharp />
        </span>
      </button>

      {/* ANIMATED SECTION */}
      <div
        className={
          "overflow-hidden transition-all duration-600 ease-out " +
          (open ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0 py-0")
        }
      >
        <div className="text-gray-600 text-lg px-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;




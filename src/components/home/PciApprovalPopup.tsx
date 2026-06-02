import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import pciApprovedImage from "../../assets/images/home/pciapproved.jpeg";

const PciApprovalPopup = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999]  items-center justify-center bg-black/45 px-4 py-6  hidden sm:flex"
      role="dialog"
      aria-modal="true"
      aria-label="PCI approval advertisement"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="relative w-full max-w-[340px] sm:max-w-[380px]"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close PCI approval popup"
          className="absolute -right-3 -top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0f4a85] text-white shadow-lg transition-colors hover:bg-[#0a3764] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0f4a85]"
          onClick={() => setIsVisible(false)}
        >
          <IoClose className="h-5 w-5 cursor-pointer" aria-hidden="true" />
        </button>

        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <img
            src={pciApprovedImage}
            alt="PCI approved"
            className="block max-h-[78vh] w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PciApprovalPopup;

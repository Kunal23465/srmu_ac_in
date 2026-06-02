import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import pciApprovedImage from "../../assets/images/home/pciapproved.jpeg";
import { useNavigate } from "react-router-dom";

const PciApprovalPopup = () => {
  const navigate = useNavigate();
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
      className="fixed inset-0 z-[9999] hidden sm:flex items-center justify-end bg-black/45 px-4 py-6"
      onClick={() => setIsVisible(false)}
    >
      <div
        className="relative z-10 w-full max-w-[380px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute -right-3 -top-3 cursor-pointer !z-[9999] flex h-9 w-9 items-center justify-center rounded-full bg-[#0f4a85] text-white"
          onClick={(e) => {
            e.stopPropagation();
            setIsVisible(false);
          }}
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div
          className="overflow-hidden rounded-2xl bg-white shadow-2xl cursor-pointer"
          onClick={() => navigate("/recognition-approvals")}
        >
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

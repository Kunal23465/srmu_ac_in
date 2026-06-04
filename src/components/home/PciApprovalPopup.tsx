import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import pciApprovedImage from "../../assets/images/home/pciapproved.webp";

const PciApprovalPopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 15000);

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsVisible(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-end bg-black/45 px-4 py-6"
      onClick={() => setIsVisible(false)}
      role="dialog"
      aria-modal="true"
      aria-label="PCI Approval Popup"
    >
      <div
        className="relative w-full max-w-[280px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close popup"
          className="absolute -right-3 -top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#0f4a85] text-white"
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>

        <div
          className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={() => {
            navigate("/recognition-approvals");
            setIsVisible(false);
          }}
        >
          <img
            src={pciApprovedImage}
            alt="PCI Approved"
            className="block w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PciApprovalPopup;
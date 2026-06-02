import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import pciApprovedImage from "../../assets/images/home/pciapproved.jpeg";

const PciApprovalPopup = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isClosed = sessionStorage.getItem("pci-popup-closed");

    let timer: ReturnType<typeof setTimeout>;

    if (!isClosed) {
      timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000); // Show after 15 seconds
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup();
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);


  const closePopup = () => {
    sessionStorage.setItem("pci-popup-closed", "true");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] hidden sm:flex items-center justify-end bg-black/45 px-4 py-6"
      onClick={closePopup}
      role="dialog"
      aria-modal="true"
      aria-label="PCI Approval Popup"
    >
      <div
        className="relative z-10 w-full max-w-[280px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          aria-label="Close popup"
          className="absolute -right-3 -top-3 !z-[9999] flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#0f4a85] text-white shadow-lg hover:bg-[#0a3764]"
          onClick={(e) => {
            e.stopPropagation();
            closePopup();
          }}
        >
          <IoClose className="h-5 w-5" />
        </button>

        <div
          className="cursor-pointer overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={() => {
            navigate("/recognition-approvals");
            closePopup();
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
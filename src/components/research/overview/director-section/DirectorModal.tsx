import React, { useEffect, useState } from "react";
import { Modal } from "antd";

interface Props {
  open: boolean;
  onClose: () => void;
  content: {
    name: string;
    designation: string;
    title: string;
    titleSibling: string;
    content?: string;
    longContent: string;
    footerDesignation: string;
  };
}

const DirectorModal: React.FC<Props> = ({ open, onClose, content }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={"80%"} className="director-modal">
      <div className="p-6 max-h-[70vh] overflow-y-auto">
        <h2 className="text-xl font-extrabold mb-2">{content.name}</h2>
        <h2 className="text-lg text-[#ffb703] mb-4">{content.designation}</h2>
        <h2 className="text-2xl font-bold mb-4">{content.title}<br/>{content.titleSibling}</h2>

        <div className="text-gray-700 whitespace-pre-line leading-7 pr-1">{content.longContent}</div>

        <p className="mt-6 font-semibold">{content.footerDesignation}</p>
      </div>
    </Modal>
  );
};

export default DirectorModal;

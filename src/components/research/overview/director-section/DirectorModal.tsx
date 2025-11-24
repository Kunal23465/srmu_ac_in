import React from "react";
import { Modal } from "antd";

interface Props {
  open: boolean;
  onClose: () => void;
  content: {
    name: string;
    designation: string;
    title: string;
    content?: string;
    longContent: string;
    footerDesignation: string;
  };
}

const DirectorModal: React.FC<Props> = ({ open, onClose, content }) => {
  return (
    <Modal open={open} onCancel={onClose} footer={null} centered width={"80%"} className="director-modal">
      <div className="px-2 py-4 max-h-[70vh] overflow-y-auto">
        <h1 className="text-xl font-extrabold mb-2">{content.name}</h1>
        <h3 className="text-lg font-semibold mb-4">{content.designation}</h3>
        <h2 className="text-2xl font-bold mb-4">{content.title}</h2>

        <div className="text-gray-700 whitespace-pre-line leading-7 pr-1">{content.longContent}</div>

        <p className="mt-6 font-semibold">{content.footerDesignation}</p>
      </div>
    </Modal>
  );
};

export default DirectorModal;

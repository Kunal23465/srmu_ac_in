import React, { useEffect } from "react";
import EnquiryFormForModal from "../../components/admission-enquiry/EnquiryFormForModal";
import { useSelector } from "react-redux";
import { RootState, store } from "../../store";
import { useNavigate } from "react-router-dom";
import { resetResponseofEnquiry, submissionForEnquiry } from "../../store/submission/enquiry-submission-slice";
import { RxCross2 } from "react-icons/rx";

interface CustomFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  sourceId: number | null;

}

const CustomFormModal: React.FC<CustomFormModalProps> = ({
  isOpen,
  onClose,
  sourceId
}) => {
  if (!isOpen) return null;

    const { isError, isLoading, responseOfenquiry, resetAction } =
      useSelector((state: RootState) => state.createEnquiryForEnquiry);
  
    const navigate = useNavigate();
  
  const submitHandlerForAdmission = async (value: any) => {
    const { values, actions } = value;

  
    const payload = {
      name: values.firstName + " " + values.lastName,
      email: values.email,
      phone: values.phone,
      coreStateId: values.coreStateId,
      coreCityId: values.coreCityId,
      academicCareerId: values.academicCareerId,
      academicProgramId: values.academicProgramId,
      leadSourceId: sourceId,
    };
  
    try {
      // call API and wait for result
      await store.dispatch(submissionForEnquiry(payload)).unwrap();
  
      // ✅ CLEAR FORM (guaranteed)
      actions.resetForm();
     
  
     
  
    } catch (e) {
      // error toast already handled in slice (toast.promise)
    
      console.error(e);
    }
  };
  
    useEffect(() => {
      // ✅ SUCCESS CASE
      if (!isLoading && !isError && responseOfenquiry) {
        // 🔥 RESET FORM FIRST
        if (resetAction && typeof resetAction.resetForm === "function") {
          resetAction.resetForm();
        }

  
        // 🔥 Clear Redux response
        store.dispatch(resetResponseofEnquiry());
      }
    }, [isLoading, responseOfenquiry, isError, resetAction, navigate]);


    console.log("CustomFormModal rendered with sourceId:", sourceId);

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/50 px-4">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg ">
        
        {/* Header */}
        
         

          {/* Close Button */}
          <button
            onClick={onClose}
            className="flex absolute z-9999 top-1 right-5 cursor-pointer   transitioncursor-pointer text-gray-800"
          >
           <RxCross2 size={26} />
          </button>
       

        {/* Body */}
        <EnquiryFormForModal  onSubmitHandlerForAdmission={submitHandlerForAdmission} />
      </div>
    </div>
  );
};

export default CustomFormModal;
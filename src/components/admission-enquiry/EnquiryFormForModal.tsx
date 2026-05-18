import React, { useEffect, useState } from "react";
import Classes from "../../utils/styles/Global.module.css";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../store";
import { getAllCareer } from "../../store/api/get-allCareer-slice";
import { getAllState } from "../../store/api/get-allState-slice";
import { getAllProgramByCareerId } from "../../store/api/get-allprogram-byCareerId-slice";
import { getAllCityByStateId } from "../../store/api/get-allCity-byStateId-slice";

interface EnquiryFormProps {
  onSubmitHandlerForAdmission: (res: any) => void;
}

const EnquiryFormForModal: React.FC<EnquiryFormProps> = ({
  onSubmitHandlerForAdmission,
}) => {
  const dispatch = useDispatch<AppDispatch>();

  const [checkboxError, setCheckboxError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    coreStateId: "",
    coreCityId: "",
    academicCareerId: "",
    academicProgramId: "",
    authorize: false,
  });

  const { allCareerData } = useSelector(
    (state: RootState) => state.getAllCareerData
  );

  const { getProgramDataByCareerId } = useSelector(
    (state: RootState) => state.getAllProgramByCareerIdData
  );

  const { allStateData } = useSelector(
    (state: RootState) => state.getAllStateData
  );

  const { getCityDataByStateId } = useSelector(
    (state: RootState) => state.getAllCityByStateId
  );

  const careerData = allCareerData || [];
  const programData = getProgramDataByCareerId || [];
  const stateData = allStateData || [];
  const cityData = getCityDataByStateId || [];

  useEffect(() => {
    dispatch(getAllCareer());
    dispatch(getAllState());
  }, [dispatch]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleStateChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(e);
    dispatch(getAllCityByStateId(e.target.value));
  };

  const handleProgramChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    handleChange(e);
    dispatch(getAllProgramByCareerId(e.target.value));
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // ✅ Checkbox Validation
    if (!formData.authorize) {
      setCheckboxError(
        "Please authorize before submitting the form."
      );
      return;
    }

    // ✅ Clear Error
    setCheckboxError("");

    try {
      await onSubmitHandlerForAdmission({
        values: formData,
        actions: {
          resetForm: () =>
            setFormData({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              coreStateId: "",
              coreCityId: "",
              academicCareerId: "",
              academicProgramId: "",
              authorize: false,
            }),
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="">
      <div className={`${Classes["container"]}`}>
        <div className="relative mx-auto w-full max-w-[560px] rounded-[10px] bg-[#f5f2ee] p-3 md:p-4">

          {/* Heading */}
          <div className="mb-3 mt-5 rounded-[15px] bg-[#14284e] px-3 py-2 text-white">
            <h2 className="text-[20px] font-light leading-[28px]">
              Admissions Open For
            </h2>

            <h3 className="text-[28px] font-bold">
              Session 2026-27
            </h3>
          </div>

          <form onSubmit={handleSubmit}>
            
            {/* Name */}
            <div className="mb-3">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Name"
                className="
                  h-[32px]
                  w-full
                  border-b
                  border-[#a7a7a7]
                  bg-transparent
                  px-2
                  text-[14px]
                  text-[#333]
                  outline-none
                  placeholder:text-[#9d9d9d]
                "
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="
                  h-[32px]
                  w-full
                  border-b
                  border-[#a7a7a7]
                  bg-transparent
                  px-2
                  text-[14px]
                  text-[#333]
                  outline-none
                  placeholder:text-[#9d9d9d]
                "
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="
                  h-[32px]
                  w-full
                  border-b
                  border-[#a7a7a7]
                  bg-transparent
                  px-2
                  text-[14px]
                  text-[#333]
                  outline-none
                  placeholder:text-[#9d9d9d]
                "
              />
            </div>

            {/* Select Fields */}
            <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2">

              {/* Career */}
              <div className="relative">
                <select
                  name="academicCareerId"
                  value={formData.academicCareerId}
                  onChange={handleProgramChange}
                  className="
                    h-[32px]
                    w-full
                    appearance-none
                    border-b
                    border-[#a7a7a7]
                    bg-transparent
                    px-2
                    text-[14px]
                    text-[#333]
                    outline-none
                  "
                >
                  <option value="">–Select Career–</option>

                  {careerData?.map((item: any, index: number) => (
                    <option
                      key={index}
                      value={item.academicCareerId}
                    >
                      {item.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* Program */}
              <div className="relative">
                <select
                  name="academicProgramId"
                  value={formData.academicProgramId}
                  onChange={handleChange}
                  className="
                    h-[32px]
                    w-full
                    appearance-none
                    border-b
                    border-[#a7a7a7]
                    bg-transparent
                    px-2
                    text-[14px]
                    text-[#333]
                    outline-none
                  "
                >
                  <option value="">–Select Program–</option>

                  {programData?.map((item: any, index: number) => (
                    <option
                      key={index}
                      value={item.academicProgramId}
                    >
                      {item.description}
                    </option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div className="relative">
                <select
                  name="coreStateId"
                  value={formData.coreStateId}
                  onChange={handleStateChange}
                  className="
                    h-[32px]
                    w-full
                    appearance-none
                    border-b
                    border-[#a7a7a7]
                    bg-transparent
                    px-2
                    text-[14px]
                    text-[#333]
                    outline-none
                  "
                >
                  <option value="">–Select State–</option>

                  {stateData?.map((item: any, index: number) => (
                    <option
                      key={index}
                      value={item.coreStateId}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div className="relative">
                <select
                  name="coreCityId"
                  value={formData.coreCityId}
                  onChange={handleChange}
                  className="
                    h-[32px]
                    w-full
                    appearance-none
                    border-b
                    border-[#a7a7a7]
                    bg-transparent
                    px-2
                    text-[14px]
                    text-[#333]
                    outline-none
                  "
                >
                  <option value="">–Select City–</option>

                  {cityData?.map((item: any, index: number) => (
                    <option
                      key={index}
                      value={item.coreCityId}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Checkbox */}
            <div className="mt-5">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  name="authorize"
                  checked={formData.authorize}
                  onChange={(e) => {
                    handleChange(e);

                    if (e.target.checked) {
                      setCheckboxError("");
                    }
                  }}
                  className="mt-[5px] h-4 w-4 accent-[#f4ab18]"
                />

                <label className="text-[14px] text-[#333]">
                 I authorise SRMU and its representatives to Call, SMS, Email or WhatsApp me about its programmes and offers. This consent overrides any registration for DNC / NDNC
                </label>
              </div>

              {checkboxError && (
                <p className="mt-1 text-[12px] text-red-500">
                  {checkboxError}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="mt-3">
              <button
                type="submit"
                className="
                  flex
                  h-[42px]
                  w-full
                  items-center
                  justify-center
                  rounded-[18px]
                  bg-gradient-to-r
                  from-[#f4b223]
                  to-[#ff9800]
                  text-[16px]
                  font-semibold
                  text-white
                  cursor-pointer
                  transition
                  hover:scale-[1.01]
                "
              >
                Submit Application Interest
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EnquiryFormForModal;
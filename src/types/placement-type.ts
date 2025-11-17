export interface SelectOption {
  id: number;
  name: string;
  value: string;
}

// Interface for a single form field
export interface AlumniRegistrationField {
  id: number;
  labelname: string;
  name: keyof AlumniRegistrationFormValues; // keys of form values
  placeholder?: string;
  type: "text" | "email" | "select" | "checkbox";
  options?: SelectOption[]; // only for select fields
}

// Interface for form values
export interface AlumniRegistrationFormValues {
  name: string;
  contactNo: string;
  email: string;
  passingYear: string;
  courseLevel: string;
  program: string;
  currentEmployer: string;
}
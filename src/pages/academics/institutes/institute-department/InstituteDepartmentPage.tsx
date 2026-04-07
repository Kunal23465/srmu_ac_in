import React from 'react'
import { useLocation } from "react-router-dom";
import { institutes } from "../../../../data/academics/institute/institute-form-data";
import InstituteDepartment from '../../../../components/academics/institutes/institute-department/Institute-department/InstituteDepartment'

const normalizePath = (path: string) => {
  const normalizedPath = path.replace(/\/+$/, "");
  return normalizedPath || "/";
};

const InstituteDepartmentPage: React.FC = () => {
  const { pathname } = useLocation();

  const institute = institutes.find(
    (item) => normalizePath(item.path) === normalizePath(pathname)
  );

  return (
    <div>
      <InstituteDepartment data={institute?.departmentsData} />
    </div>
  )
}

export default InstituteDepartmentPage

export interface FacilityTypes {
    title: string;
    description: string;
    imageUrl: string;
    pdfUrl: string;
}

export interface CustomFacilitiesTypes {
    facilities: FacilityTypes[];
    layoutData: otherFacilitiesCardLayoutDataTypes;
}
export interface otherFacilitiesCardLayoutDataTypes {
    title: string;
    content: string;
}
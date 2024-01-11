// This file contains all type alias definitions so that all components can make use of them
export type TCompaniesData = {
    id: string;
    name: string;
    phone: string;
    state: string;
    catchPhrase: string;
    createdAt: string;
    updatedAt: string;
}
export type TCompaniesDataArray = {
    companies: TCompaniesData[];
}
export type TContactsProps = {
    companies: TCompaniesData[];
    idFromHash: string;
    isToggled: boolean;
    setToggle: (isToggled: boolean) => void;
    contactDetail: TCompaniesData | undefined;
    setContactDetail: (contactDetail: TCompaniesData | undefined) => void;
}
export type TContactDetailProps = {
    isToggled: boolean;
    setToggle: (isToggled: boolean) => void;
    contactDetail: TCompaniesData | undefined;
    setContactDetail: (contactDetail: TCompaniesData | undefined) => void;
}
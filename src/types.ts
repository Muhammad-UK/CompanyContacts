// This file contains all type alias definitions so that all components can make use of them
export type TCompaniesData = {
    id: string,
    name: string,
    phone: string,
    state: string,
    catchPhrase: string,
    createdAt: string,
    updatedAt: string
}
export type TCompaniesDataArray = {
    companies: TCompaniesData[];
}
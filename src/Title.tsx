import { TCompaniesDataArray } from "./types.ts" 

const Title = ({ companies }: TCompaniesDataArray) => {
    return <h1>Company Listings: { companies.length }</h1>
}

export default Title
import { TCompaniesDataArray } from "./types";

const Contacts = ({ companies }: TCompaniesDataArray) => {
    return (
        <div>
            {companies.map((company)=>{
                return (
                    <h2>{ company.name }</h2>
                );
            })}
        </div>
    );
}

export default Contacts;
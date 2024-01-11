import { TCompaniesData } from "./types.ts";
import { useEffect, useState } from "react";
import "./App.css";
import Title from "./Title.tsx";
import Contacts from "./Contacts.tsx";

function App() {
  const [companies, setCompanies] = useState<TCompaniesData[]>([]);
  const [contactDetail, setContactDetail] = useState<TCompaniesData>();
  const [isToggled, setToggle] = useState(false);
  const [idFromHash, setId] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const hashChange = () => {
      window.addEventListener("hashchange", () => {
        setId(window.location.hash.slice(1));
      });
      hashChange();
    };
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("https://www.acme-api.com/api/companies");
        const json = await response.json();
        setCompanies(json);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCompanies();
  }, []);
  console.log(idFromHash);
  return (
    <div className="appRoot">
      <Title companies={companies} />
      <Contacts
        companies={companies}
        idFromHash={idFromHash}
        contactDetail={contactDetail}
        setContactDetail={setContactDetail}
        isToggled={isToggled}
        setToggle={setToggle}
      />
    </div>
  );
}

export default App;

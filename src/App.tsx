import Title from "./Title.tsx"
import { TCompaniesData } from "./types.ts" 

import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [companies, setCompanies] = useState<TCompaniesData[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("https://www.acme-api.com/api/companies");
        const json = await response.json();
        setCompanies(json);
      } catch(error) {
        console.error(error);
      }
    }
    fetchCompanies();
  }, []);


  return (
    <div>
      <Title companies={ companies }/>
    </div>
  );
}

export default App

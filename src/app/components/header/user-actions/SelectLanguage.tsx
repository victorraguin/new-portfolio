import { useState } from "react";

const SelectLanguage = () => {

    const [language, setLanguage] = useState("EN");

    const handleLanguageChange = (
      event: React.ChangeEvent<HTMLSelectElement>
    ) => {
      setLanguage(event.target.value);
    };

    
    return (
        <li>
        <select value={language} onChange={handleLanguageChange} className="text-dark dark:text-gray bg-white dark:bg-dark py-3 pr-1">
          <option value="EN" className="">EN</option>
          <option value="FR">FR</option>
        </select>
      </li>
    )
}

export default SelectLanguage;
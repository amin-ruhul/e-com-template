import ChevronDown from "@/components/data-display/icons/chevron-down";
import React, { useState } from "react";
import DropDown from "@/components/navigation/drop-down";

function TopBar() {
  const [currency, setCurrency] = useState("USD");
  const [currencyToggle, setCurrencyToggle] = useState(false);
  const [language, setLanguage] = useState("English");
  const [languageToggle, setLanguageToggle] = useState(false);

  const handleCurrencyChange = (data) => {
    setCurrency(data);
    setCurrencyToggle(false);
  };

  const handleLanguageChange = (data) => {
    setLanguage(data);
    setLanguageToggle(false);
  };

  return (
    <div className="container flex items-center justify-between py-2">
      <div className="flex gap-6">
        <p>Become A seller</p>
        <p>Free Express Shipping</p>
      </div>
      <div>
        <ul className="flex items-center gap-6">
          <li className="relative">
            <button
              className="flex items-center gap-1"
              onClick={() => setCurrencyToggle(!currencyToggle)}
            >
              <p>{currency}</p>
              <ChevronDown />
            </button>
            <DropDown
              dropDownData={[
                { id: 1, value: "USD" },
                { id: 2, value: "BDT" },
              ]}
              isModalOpen={currencyToggle}
              handleItemChange={(data) => handleCurrencyChange(data)}
            />
          </li>
          <li className="relative">
            <button
              className="flex items-center gap-1"
              onClick={() => setLanguageToggle(!languageToggle)}
            >
              <p>{language}</p>
              <ChevronDown />
            </button>

            <DropDown
              dropDownData={[
                { id: 1, value: "English" },
                { id: 2, value: "Bangla" },
              ]}
              isModalOpen={languageToggle}
              handleItemChange={(data) => handleLanguageChange(data)}
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;

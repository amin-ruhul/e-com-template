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
    <div className="container flex items-center justify-between py-2 text-sm lg:text-base">
      <div className="flex items-center gap-6">
        <p className="rounded-full bg-primary-400 px-3 py-1 text-white">
          Become A seller
        </p>
        <p className="hidden lg:block">Free Express Shipping</p>
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

            <div className="absolute -left-0 top-0 md:-left-[5.5rem] lg:-left-[8.5rem]">
              <DropDown
                dropDownData={[
                  { id: 1, value: "English" },
                  { id: 2, value: "Bangla" },
                ]}
                isModalOpen={languageToggle}
                handleItemChange={(data) => handleLanguageChange(data)}
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopBar;

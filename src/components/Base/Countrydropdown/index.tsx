import { useState, useEffect, useRef } from "react";
import BaseImage from "@/components/Base/BaseImage";
import Span from "@/components/Base/Spanbadge";
import { twMerge } from "tailwind-merge";
import { Country } from "@/constants/Types/types";

interface CountryDropdownProps {
  label?: string;
  required?: boolean;
  labelClassName?: string;
  className?: string;
  countryList: Country[];
  selectedCountry: Country | null;
  setSelectedCountry: (country: Country) => void;
  disabled?: boolean;

}

const CountryDropdown: React.FC<CountryDropdownProps> = ({
  label,
  disabled = false,
  required,
  labelClassName,
  className,
  countryList,
  selectedCountry,
  setSelectedCountry,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!selectedCountry && countryList.length > 0) {
      setSelectedCountry(countryList[0]);
    }
  }, [countryList, selectedCountry, setSelectedCountry]);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={twMerge("relative w-full", className)}>
      {/* Label */}
      {label && (
        <label
        className={twMerge(
            "block text-[1.2rem] font-medium mb-2",
            required && "after:content-['*'] after:text-red-500 after:ml-1",
            labelClassName
          )}
        >
          {label}
        </label>
      )}
      <div className="flex items-center">
        <div className="relative flex-initial" >
          <button
          disabled={disabled}
           onClick={toggleDropdown}
            className="flex items-center border border-gray-300 rounded-l-lg px-3 py-2 transition-all duration-200 w-auto"
            style={{ minWidth: "100px" }}
          >
            {selectedCountry && (
              <>
                <BaseImage
                  src={selectedCountry.flag}
                  alt={selectedCountry.name}
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <Span className="text-secondary">{selectedCountry.code}</Span>
              </>
            )}
            <Span className="ml-auto text-secondary">&#9662;</Span>
          </button>

          {isOpen && (
            <ul
              className="absolute left-0 w-full mt-1 border border-gray-300 rounded-md bg-white shadow-lg z-10 transition-opacity duration-200"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              {countryList.map((country) => (
                <li
                  key={country.code}
                  onClick={() => handleCountrySelect(country)}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <BaseImage
                    src={country.flag}
                    alt={country.name}
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  <span>{country.code}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <input
         disabled={disabled}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          placeholder="0123456789"
          maxLength={10}
          className="px-3 py-2 w-full ml-0 border border-gray-300 rounded-r-lg focus:outline-none focus:ring-primary focus:border-primary"
          onInput={(e) => {
            e.currentTarget.value = e.currentTarget.value.replace(
              /[^0-9]/g,
              ""
            );
          }}
        />
      </div>
    </div>
  );
};

export default CountryDropdown;

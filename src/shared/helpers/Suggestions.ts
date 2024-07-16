import { SERVER_URL } from "../config/secret.ts";
import { partnerProps } from "../config/types";

export const fetchData = async (
  searchValue: string,
  warranty: boolean,
  setIsLoadingSuggestion: React.Dispatch<React.SetStateAction<boolean>>,
  setSuggestions: React.Dispatch<React.SetStateAction<partnerProps[]>>
) => {
  try {
    setIsLoadingSuggestion(true);
    const url = `${SERVER_URL}/nw-customer?warranty=${warranty}&searchTerm=${searchValue}`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.success) {
      const newSuggestions = data.data.map((result: partnerProps) => result);
      setSuggestions(newSuggestions);
    }
  } catch (error) {
    console.error("Error fetching suggestions:", error);
  }
  setIsLoadingSuggestion(false);
};

export const handleSuggestionClick = async (
  selected: partnerProps,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>,
  setSearchInput: React.Dispatch<React.SetStateAction<string | null>>,
  setSuggestions: React.Dispatch<React.SetStateAction<partnerProps[] | []>>
) => {
  setPartnerInfo((prevCustomerInfo: partnerProps) => ({
    ...prevCustomerInfo,
    contact_person: selected.name,
    contact_number: selected.contact_number,
    email: selected.email,
    address: selected.address,
  }));
  setSearchInput(null);
  setSuggestions([]);
};

//customerinfo state change function
export const handleChangeInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>
) => {
  const { name, value } = event.target;

  setPartnerInfo((prevCustomerInfo: partnerProps) => ({
    ...prevCustomerInfo,
    [name]: value,
  }));
};

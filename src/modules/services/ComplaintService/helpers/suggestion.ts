import { partnerProps } from "../config/types";

export const fetchData = async (searchValue: string,setIsLoadingSuggestion: React.Dispatch<React.SetStateAction<boolean>>,setSuggestions:React.Dispatch<React.SetStateAction<partnerProps[]>>) => {
    try {
      setIsLoadingSuggestion(true)
      const response = await fetch(
        `http://localhost:5000/api/v2/partners?searchTerm=${searchValue}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      );
      const data = await response.json();
      if (data.success) {

        const newSuggestions = data.data.map((result: partnerProps) => result);
        setSuggestions(newSuggestions);

      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);

    }
    setIsLoadingSuggestion(false)
  };



  export const handleSuggestionClick = async (selected:partnerProps,setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>,setSearchInput:React.Dispatch<React.SetStateAction<string | null>>,setSuggestions: React.Dispatch<React.SetStateAction<partnerProps[] | []>>) => {
    setPartnerInfo((prevCustomerInfo: partnerProps) => ({
      ...prevCustomerInfo,
      contact_person: selected.contact_person,
      email: selected.email,
      contactNo: selected.contactNo,
      address: selected.address,
    }));
    setSearchInput(null);
    setSuggestions([]);
  };

  //customerinfo state change function
  export const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>,setPartnerInfo:React.Dispatch<React.SetStateAction<partnerProps>>) => {
    const { name, value } = event.target;
    setPartnerInfo((prevCustomerInfo: partnerProps) => ({
      ...prevCustomerInfo,
      [name]: value,
    }));
  };

import { SERVER_URL } from "../config/secret.ts";
import { partnerProps } from "../config/types";
import swal from "sweetalert";

export const fetchData = async (
  searchValue: string,
  warranty: boolean,
  setIsLoadingSuggestion: React.Dispatch<React.SetStateAction<boolean>>,
  setSuggestions: React.Dispatch<React.SetStateAction<partnerProps[]>>
) => {
  try {
    setIsLoadingSuggestion(true);
    const url = `${SERVER_URL}/nw-customer?warranty=${warranty}&searchTerm=${searchValue}&limit=5`;
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
    swal("Error", error.message, "error");
  }
  setIsLoadingSuggestion(false);
};

export const handleSuggestionClick = async (
  selected: partnerProps,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>,
  setSearchInput: React.Dispatch<React.SetStateAction<string | null>>,
  setSuggestions: React.Dispatch<React.SetStateAction<partnerProps[] | []>>
) => {
  console.log("selected", selected);
  setPartnerInfo({
    brand_name: selected.brand_name,
    partner_name: selected.name,
    contact_number: selected.contact_number,
    email: selected.email,
    address: selected.address,
    status: selected?.status,
    partner_id: selected?.id,
  });
  setSearchInput(null);
  setSuggestions([]);
};

//customerinfo state change function
export const handleChangeInput = (
  event: React.ChangeEvent<HTMLInputElement>,
  setPartnerInfo: React.Dispatch<React.SetStateAction<partnerProps>>
) => {
  const { name, value } = event.target;

  setPartnerInfo({
    brand_name: [],
    partner_name: "",
    contact_number: "",
    email: "",
    address: "",
    status: "",
    id: "",
    [name]: value,
  });
};

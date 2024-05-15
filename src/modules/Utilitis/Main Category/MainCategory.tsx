import Button from "../../../common/components/Button";
import HeaderWithCrossBtn from "../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../common/components/Input";
import { handleFormReset } from "../../../common/widgets/FormResetFunction/FormResetFunction";
import Navbar from "../../../common/widgets/Navbar/Navbar";
import { useCreateMainCategoryMutation } from "../../../redux/features/api/Category";
import { showSwal } from "../../../shared/helpers/SwalShower.ts";
import { getFromLocalStorage } from "../../../shared/helpers/local_storage";
import { authKey } from "../../../shared/config/constaints";

const MainCategoryPage = () => {
  const token = getFromLocalStorage(authKey);
  const [createMainCategory, { isLoading }] = useCreateMainCategoryMutation();
  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const category = (form.elements.namedItem("brand") as HTMLInputElement)
      .value;

    const mainCategory = {
      value: category,
    };

    const result = await createMainCategory({ mainCategory, token });
    // form.reset();
    showSwal(result);
  };

  return (
    <div>
      <div className="py-5 px-5">
        <Navbar name="Add Main Category" />
      </div>
      <div className="flex items-center h-full">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Main Category" />
          <form onSubmit={handleAddCategory}>
            <div className="space-y-3 py-5">
              <Input required labelName="Category" inputName="brand" />
            </div>

            <div className="flex justify-center gap-20 items-center pt-8">
              <Button onClick={handleFormReset} danger sizeClass="px-8 py-2">
                Cancel
              </Button>
              <Button loading={isLoading} primary sizeClass="px-8 py-2">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainCategoryPage;

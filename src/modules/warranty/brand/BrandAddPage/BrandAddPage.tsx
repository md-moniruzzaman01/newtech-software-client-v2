import Button from "../../../../common/components/Button";
import HeaderWithCrossBtn from "../../../../common/components/HeaderWithCrossBtn/HeaderWithCrossBtn";
import Input from "../../../../common/components/Input";
import { handleFormReset } from "../../../../common/widgets/FormResetFunction/FormResetFunction";
import Navbar from "../../../../common/widgets/Navbar/Navbar";
import { useCreateBrandMutation } from "../../../../redux/features/api/Brand";


const BrandAddPage = () => {
  const [createBrand, { isLoading }] = useCreateBrandMutation();

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const brand = (form.elements.namedItem("brand") as HTMLInputElement).value;

    const brandData = {
      value: brand.toUpperCase(),
    };

    try {
      await createBrand(brandData);
      console.log("Brand added successfully");
      form.reset();
    } catch (error) {
      console.error("Error adding brand:", error);
    }
  };

  return (
    <div>
      <div className="py-5 px-5">
        <Navbar name="Add Brand" />
      </div>
      <div className="flex items-center h-full">
        <div className="w-2/3 mx-auto bg-solidWhite rounded-md p-8 ">
          <HeaderWithCrossBtn name="Add Brand" />
          <form onSubmit={handleAddCategory}>
            <div className="space-y-3 py-5">
              <Input required labelName="Brand" inputName="brand" />
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

export default BrandAddPage;

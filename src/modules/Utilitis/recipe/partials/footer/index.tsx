const FooterOfRecipe = ({ info }) => {
  return (
    <div className="absolute bottom-0">
      <div className=" flex justify-between text-center">
        <h2 className="w-72 border-t-2 border-black">Customer Signature</h2>
        <h2 className="w-72 border-t-2 border-black">Authorized Signature</h2>
      </div>
      <div className="mt-4">
        <p className="text-xs italic ">
          The warranty is not applicable to Headphones,Memory Card, Data Cable,
          Sticker removed items, Burnt and Physically damage items.{" "}
          {!info?.warranty &&
            "Please take delivery within three months, after that time the authority will not be responsible."}
          <span className="block">
            {info?.warranty ? (
              "Please take delivery within one month, after that time the authority will not be responsible."
            ) : (
              <span className="text-xs text-red-500 font-bold">
                <span>Note:</span>
                <span className="ml-1">
                  If the product is returned without repair, a diagnostic fee of
                  <span className="mx-1 ">{info?.total_charge}</span>
                  will be applied.
                </span>
              </span>
            )}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterOfRecipe;

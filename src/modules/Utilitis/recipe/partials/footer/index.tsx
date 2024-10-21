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
          Sticker removed items, Burnt and Physically damage items.
          <span className="block">
            {info?.warranty
              ? "Please take delivery within one month, after that time the authority will not be responsible."
              : ""}
            {/* need to change */}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FooterOfRecipe;

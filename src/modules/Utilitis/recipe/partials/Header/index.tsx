/* eslint-disable @typescript-eslint/no-explicit-any */



const HeaderOfRecipe = ({ copy, info }: any) => {
  const received_date = info?.received_date || new Date();
  const TaT_date = info?.turnaround_time || new Date();
  const receivedDate = new Date(received_date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  const turnaround_time = new Date(TaT_date).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div>
      <div className="relative  font-primary text-black">
        <div className="absolute ">
         <img src="../../../../../assets/NT-LOGO.png" height={300} width={300} alt="" />
        </div>
        <div className=" text-center">
          <h1 className=" text-2xl font-bold text-[#2f368f] font-secondary">
            NEWTECH TECHNOLOGY
          </h1>
          <p className="text-sm font-bold">Pioneer of service in Bangladesh</p>
          <div className="text-sm">
            {/* <p>{order?.branch}</p> */}
            {info?.branch === "02" && (
              <p>
                Suite-1406, Level-14, Multiplan Center{" "}
                <span>69-71 New Elephant Road, Dhaka-1205</span>
              </p>
            )}
            {info?.branch === "01" && (
              <p>
                House-03, Road-07, Block-F <span>Banani, Dhaka-1213</span>
              </p>
            )}
            {info?.branch === "03" && (
              <p>
                510, Level-4 (5th Floor), West World Shopping City
                <span>Jallarpara, Zindabazar, Sylhet-3100</span>
              </p>
            )}
            {info?.branch === "04" && (
              <p>
                M. Court (Old), Bashar Square (5/FL){" "}
                <span>108 Agrabad C/A, Chattagram-4100</span>
              </p>
            )}
            {info?.branch === "05" && (
              <p>
                3th Floor ,House-77
                <span> Road-07, Banani,Dhaka-1230</span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="my-3 uppercase relative flex justify-end">
        <h3 className=" text-center text-white font-semibold text-lg bg-red-600 w-48 ">
          {copy}
        </h3>
      </div>

      <section className="flex justify-between w-full text-xs font-bold p-1.5">
        <div className="flex w-6/12">
          <div className="w-4/12 space-y-1 uppercase">
            <p>Complaint ID : </p>

            <p>Status : </p>
           
          </div>
          <div className="space-y-1">
            <p className="text-primary">{info?.order_number}</p>

            <p>{info?.warranty ? "Warranty" : "NON warranty "}</p>
          
          </div>
        </div>

        <div className="flex w-7/12 justify-end items-end">
          <div className="w-3/12 space-y-1">
            <p>Name: </p>
            <p>contact no. : </p>
            <p>Receiving date : </p>
            <p>TAT : </p>
          </div>
          <div className="space-y-1">
            <p className="text-primary">
              {" "}
              {info?.customer?.company ? (
                <span className="ml-2 ">{info?.customer?.company}</span>
              ) : (
                <span className="ml-2">
                  {info?.Nonwarrentycustomer?.name}
                </span>
              )}
            </p>
            <p className="text-primary">
              {" "}
              {info?.customer?.contact_number ? (
                <span className="ml-2 ">
                  {info?.customer?.contact_number}
                </span>
              ) : (
                <span className="ml-2">
                  {info?.Nonwarrentycustomer?.contact_number}
                </span>
              )}
            </p>
            <p>{receivedDate}</p>
            <p className="text-red-600">{turnaround_time}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeaderOfRecipe;

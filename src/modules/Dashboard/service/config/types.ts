export type AdminDashboardTableProps = {
  HeaderData: TableHeaderProps[];
  itemData?: TableBodyProps[];
  Link?: string;
};

export type TableHeaderProps = string;
export type TableBodyProps = {
  _id?: string;
  order_number?: string;
  products?: {
    id?: string;
    model_number?: string;
    serial_number?: string;
  };
  Qc?: {
    id?: string;
    user_name?: string;
  };
  RepairItem?: {
    id?: string;
    user_name?: string;
  };
  Qa?: {
    id?: string;
    user_name?: string;
  };
  category_name?: string;
  customer?: { contact_person?: string };
  Nonwarrentycustomer?: { name?: string };
  brand_name?: string;
  partrequest?: string;
  repair_status?: string;
  received_date?: string;
};

type Months = "January" | "February" | "March" | "April" | "May" | "June" | "July" | "August" | "September" | "October" | "November" | "December";



export type IChartData ={
  month:Months
  Product_Received?:number
  Product_QC_OK?:number
  Product_Delivered?:number
  Product_Repair_Difficulty?:number
  Product_Leak_material?:number
  Product_Buffer?:number
  Product_Repaired?:number
  Product_QC_Failed?:number
  Product_Cancel?:number
  Product_Reject?:number
  Product_CN?:number
  Product_CID?:number
  Product_Completed?:number
  Product_QA_OK?:number
  Product_Not_Repairable?:number
}
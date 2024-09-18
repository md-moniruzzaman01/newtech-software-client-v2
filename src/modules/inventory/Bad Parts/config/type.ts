/* eslint-disable @typescript-eslint/no-explicit-any */
export type Item = {
  id: string;
  serial_number: any;
  products?: { serial_number: any };
  customer?: { contact_person: string };
  Nonwarrentycustomer?: { name: string };
  received_date?: Date;
};

export type DndTableProps = {
  data: Item[];
  checkedRows: Item[];
  setCheckedRows: any;
};

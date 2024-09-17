/* eslint-disable @typescript-eslint/no-explicit-any */
export type DraggableRowProps = {
  item: Item;
  index: number;
  checked: boolean;
  handleRowSelect: (item: Item) => void;
};

export type Item = {
  id: string;
  serial_number: any;
  products?: { serial_number: any };
  customer?: { contact_person: string };
  Nonwarrentycustomer?: { name: string };
  received_date?: Date;
};

export type Order = {
  name: string;
  logo: string;
  status: Status;
  date: string;
};

export type Status = {
  code: number;
  type: string;
};

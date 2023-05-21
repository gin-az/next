export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface IContact {
  name: string;
  email: string;
  address: IAddress;
}

export interface IPost {
  title: string;
  body: string;
}

export interface ISocials {
  id: number;
  icon: string;
  path: string;
}

export type SocialsProps = {
  socials: ISocials[];
};

interface Address {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip?: number;
}

export interface ContactsInterface {
  id?: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDay: Date;
  phone: string;
  age: number;
  address?: Address;
}

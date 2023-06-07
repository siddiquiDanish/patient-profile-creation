export class Patient {
    firstName: string;
    lastName: string;
    gender: string;
    dob: string;
    address: string;
    city: string;
    state: string;
    zipcode: string;
  
    constructor(data: any) {
      this.firstName = data.firstName || '';
      this.lastName = data.lastName || '';
      this.gender = data.gender || '';
      this.dob = data.dob || '';
      this.address = data.address || '';
      this.city = data.city || '';
      this.state = data.state || '';
      this.zipcode = data.zipcode || '';
    }
  }
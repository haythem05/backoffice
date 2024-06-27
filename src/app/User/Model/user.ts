export class User {
    userId!: number;
    firstName!: string;
    lastName!: string;
    email!: string;
    password!: string;
    image!: any;
    gender!: Gender;
    role!: Role;
    skillRate!: number;
    phone!:string;
    banned!:boolean;

  
  constructor() {}
  
  
  
  }
    export enum Gender {
      Male = 'Male',
      Female = 'Female'
    }
    
    export enum Role {
      Admin = 'Admin',
      ScrumMaster = 'ScrumMaster',
      ChefProjet = 'ChefProjet',
      Developpeur = 'Developpeur'
  
  
  }
  


interface nav {
    name:string,
    path:string
}

export  interface people {
  id?:number;
  name?:string;
  email?:string;
}

export interface Product {
  userId?: number;
  title?: string;
  id?:number;
  body?: string;
}

export const navLinks : nav[] = [
    { name: "Users", 
     path: "/Users" 
    },
    {
      name: "News",
      path: "/News",
    },
    {
      name: "Top Users",
      path: "/Topusers",
    }
  ];

  const a :number[] = [1,2,3]

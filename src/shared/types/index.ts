export interface Client {
  href: string;
  link: string;
}

export interface Product {
  title: string;
  link: string;
  thumbnail: string;
}

export interface Feature {
  name: string;
  description: string;
  href?: string;
  className?: string;
  background?: React.ReactNode;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "user";
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

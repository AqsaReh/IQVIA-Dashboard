/**
 * User type definition
 */
export interface User {
  id: string;
  email: string;
  password: string;
  name?: string;
  image?: string;
  [key: string]: any; // Allow additional properties
}

/**
 * Sample user data
 * Note: In production, passwords should be hashed and stored securely
 */
export const user: User[] = [
  {
    id: "1",
    email: "admin@example.com",
    password: "admin123",
    name: "Admin User",
  },
  {
    id: "2",
    email: "user@example.com",
    password: "user123",
    name: "Regular User",
  },
];


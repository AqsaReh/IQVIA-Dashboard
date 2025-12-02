/**
 * Comment type definition
 */
export interface Comment {
  id: string;
  taskId: string;
  content: string;
  [key: string]: any; // Allow additional properties
}



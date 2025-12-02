/**
 * Task type definition
 */
export interface Task {
  id: string;
  boardId: string;
  title: string;
  [key: string]: any; // Allow additional properties
}

/**
 * SubTask type definition
 */
export interface SubTask {
  id: string;
  taskId: string;
  title: string;
  completed?: boolean;
  assignDate?: string;
  [key: string]: any; // Allow additional properties
}



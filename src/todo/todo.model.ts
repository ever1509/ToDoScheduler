export interface ToDoItem {
  id: string;
  title: string;
  note: string;
  isDone: boolean;
  reminderDate: Date;
  priorityLevel: PriorityLevel;
}

export enum PriorityLevel {
  NONE = 'None',
  LOW = 'Low',
  MEDIUM = 'Medium',
  High = 'High',
}

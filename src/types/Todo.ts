import { User } from './User';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: number;
  //modal
  todo: Todo;
  user: User | null;
  isLoading: boolean;
  onClose: () => void;
  //filter
  onQueryChange: (query: string) => void;
  onStatusChange: (status: string) => void;
  onReset: () => void;
  //todolist
  todos: Todo[];
  onSelect: (todo: Todo) => void;
}

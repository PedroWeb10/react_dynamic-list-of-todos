import { Todo } from './Todo';

export interface TodoList {
  todos: Todo[];
  onSelect: (todo: Todo) => void;
}

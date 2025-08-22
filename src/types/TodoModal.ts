import { Todo } from './Todo';
import { User } from './User';

export interface TodoModal {
  todo: Todo;
  user: User;
  isLoading: boolean;
  onClose: () => void;
}

import React from 'react';
import { Loader } from '../Loader';
import { Todo } from '../../types/Todo';

export const TodoModal: React.FC<Todo> = ({
  todo,
  user,
  isLoading,
  onClose,
}) => {
  return (
    <div className="modal is-active" data-cy="modal">
      <div className="modal-background" onClick={onClose}>
        {isLoading ? (
          <Loader />
        ) : (
          <div className="modal-card">
            <header className="modal-card-head">
              <div
                className="modal-card-title has-text-weight-medium"
                data-cy="modal-header"
              >
                {todo.title}
              </div>

              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <button type="button" className="delete" data-cy="modal-close" />
            </header>

            <div className="modal-card-body">
              <p className="block" data-cy="modal-title">
                {todo.title}
              </p>

              <p className="block" data-cy="modal-user">
                {/* <strong className="has-text-success">Done</strong> */}
                <strong className="has-text-danger">
                  {todo.completed ? 'Completed' : 'Active'}
                </strong>
                <strong className="has-text-info">{user.name}</strong>
                <a href="mailto:Sincere@april.biz">{user.email}</a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

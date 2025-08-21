import React from 'react';
import { Todo } from '../../types/Todo';

export const TodoFilter: React.FC<Todo> = ({
  statusFilter,
  onStatusFilter,
  query,
  onQueryChange,
  onClearQuery,
}) => {
  return (
    <div className="field is-grouped">
      <p className="control">
        <span className="select">
          <select
            value={statusFilter}
            onChange={e => onStatusFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>
      <p className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
        />
      </p>

      {query && (
        <p className="control">
          <button className="button is-danger" onClick={onClearQuery}>
            <span className="icon">
              <i className="fas fa-times" />
            </span>
          </button>
        </p>
      )}
    </div>
  );
};

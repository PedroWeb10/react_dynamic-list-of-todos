import React from 'react';

interface TodoFilterProps {
  statusFilter: string;
  onStatusFilter: (status: string) => void;
  query: string;
  onQueryChange: (query: string) => void;
  onClearQuery: () => void;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
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

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          className="input"
          type="text"
          placeholder="Search..."
          value={query}
          onChange={e => onQueryChange(e.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>
        <span
          className="icon is-right"
          style={{ pointerEvents: 'all' }}
          onClick={onClearQuery}
        >
          {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}

          <button
            data-cy="clearSearchButton"
            onClick={onClearQuery}
            className="delete"
            type="button"
          />
        </span>
      </p>
    </div>
  );
};

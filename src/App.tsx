/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { TodoModal } from './components/TodoModal';
import { Loader } from './components/Loader';
import { User } from './types/User';
import { Todo } from './types/Todo';
import { getTodos, getUser } from './api';

export const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalLoading, setIsModalLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState('all');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .finally(() => setIsLoading(false));
  }, []);

  const handleShowTodo = (todo: Todo) => {
    setSelectedTodo(todo);
    setIsModalLoading(true);

    getUser(todo.userId)
      .then(setUser)
      .finally(() => setIsModalLoading(false));
  };

  const handleCloseModal = () => {
    setSelectedTodo(null);
    setUser(null);
  };

  const handleStatusFilter = (filter: string) => {
    setStatusFilter(filter);
  };

  const handleQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  const handleClearQuery = () => {
    setQuery('');
  };

  const filteredTodos = todos.filter(todo => {
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'completed' && todo.completed) ||
      (statusFilter === 'active' && !todo.completed);

    const matchesQuery = todo.title.toLowerCase().includes(query.toLowerCase());

    return matchesStatus && matchesQuery;
  });

  return (
    <>
      <div className="section">
        <div className="container">
          <div className="box">
            <h1 className="title">Todos:</h1>

            <div className="block">
              <TodoFilter
                onStatusChange={handleStatusFilter}
                onQueryChange={handleQuery}
                onReset={handleClearQuery}
              />
            </div>

            <div className="block">
              {isLoading ? (
                <Loader />
              ) : (
                <TodoList todos={filteredTodos} onShowTodo={handleShowTodo} />
              )}
            </div>
          </div>
        </div>
      </div>

      {selectedTodo && (
        <TodoModal
          todo={selectedTodo}
          user={user}
          isLoading={isModalLoading}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

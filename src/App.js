import React from 'react';
import AddTodo from './Components/AddTodo';
import TodoList from './Components/AddTodo/TodoList';

const App = () => {
  return (
    <div className='flex flex-col gap-y-2 mx-auto mt-10 px-4 md:px-20 p-5 max-w-screen-lg bg-gray-100'>
      <h1 className='text-2xl font-bold mb-4 text-center'>Todo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default App;

import React from 'react';
import TodoList from './components/TodoList';
import Layout from './components/Layout/Layout';

function App() {
 
  return (
    <div className="App">
      <Layout>
        <TodoList />
      </Layout>
    </div>
  );
}

export default App;

import React from 'react';
import TodoList from './components/TodoList';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Auth from './Auth/Auth';
import Register from './Register/Register';

function App() {
 
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path='/todolist' element={<TodoList />} />
          <Route path='/' element={<Auth />} />
          <Route path='/register' element={<Register />} />
        </Routes>  
      </Layout>
    </div>
  );
}

export default App;

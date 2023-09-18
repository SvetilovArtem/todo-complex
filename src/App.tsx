import React, { useState } from 'react';
import TodoList from './components/TodoList';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Register from './Register/Register';

function App() {

  const [isOpenAdminPanel, openAdminPanel] = useState(false)

  const openPanelHandler = () => openAdminPanel(!isOpenAdminPanel)
 
  return (
    <div className="App">
      <Layout isOpenPanel={isOpenAdminPanel} openAdminPanel={openPanelHandler}>
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

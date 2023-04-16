import React from 'react';
import logo from './logo.svg';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import HomePage from './components/pages/home/HomePage';
import LoginPage from './components/pages/login/LoginPage';
import NewPage from './components/pages/new/NewPage';
import ListPage from './components/pages/list/ListPage';
import SinglePage from './components/pages/single/SinglePage';
import styled from 'styled-components'
import { userInputs } from './components/formSource'

const Main = styled.div`
  
`

function App() {
  return (
    <Main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='users'>
              <Route index element={<ListPage />} />
              <Route path=':userId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path='products'>
              <Route index element={<ListPage />} />
              <Route path=':productId' element={<SinglePage />} />
              <Route path='new' element={<NewPage inputs={userInputs} title="Add New User" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

export default App;

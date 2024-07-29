import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.tsx';
import SearchBySource from './pages/SearchBySource.tsx';
import SearchByDestination from './pages/SearchByDestination.tsx';
import SearchById from './pages/SearchById.tsx';
import ModifySchedule from './pages/ModifySchedule.tsx';
import AddTrain from './pages/AddTrain.tsx';
import UpdateTrain from './pages/UpdateTrain.tsx';
import RemoveTrain from './pages/RemoveTrain.tsx';
import Layout from './pages/Layout.tsx';
import Header from './pages/Header.tsx';
import AboutUs from './pages/AboutUs.tsx';
import WrongPath from './pages/WrongPath';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getBySource" element={<SearchBySource />} />
          <Route path="/getByDestination" element={<SearchByDestination />} />
          <Route path="/getById" element={<SearchById />} />
          <Route path="/modify" element={<ModifySchedule />} />
          <Route path="/modify/addTrain" element={<AddTrain />} />
          <Route path="/modify/updateTrain" element={<UpdateTrain />} />
          <Route path="/modify/removeTrain" element={<RemoveTrain />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/*" element={<WrongPath />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
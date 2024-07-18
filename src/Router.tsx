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

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/getSourceByTime" element={<SearchBySource />} />
        <Route path="/getDestinationByTime" element={<SearchByDestination />} />
        <Route path="/getById" element={<SearchById />} />
        <Route path="/modify" element={<ModifySchedule />} />
        <Route path="/modify/addTrain" element={<AddTrain />} />
        <Route path="/modify/updateTrain" element={<UpdateTrain />} />
        <Route path="/modify/removeTrain" element={<RemoveTrain />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;

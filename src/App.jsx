import { HashRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Journeys from './pages/Journeys';
import JourneyDetail from './pages/JourneyDetail';
import About from './pages/About';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/journey/:slug" element={<JourneyDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

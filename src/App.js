import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Language from './pages/byLanugage/language';
import LanguageResult from './pages/byLanugage/result';
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Language />} />
        <Route path="/repositories/:language" element={<LanguageResult />} />
      </Routes>
    </Router>
  )
}
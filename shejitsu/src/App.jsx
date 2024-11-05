// src/App.jsx
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import CoursesPage from './pages/CoursesPage';
import './typography.css';



function App() {
  return (
    <div className="app">
      <Header />
      <CoursesPage />
      <BottomNav />
    </div>
  );
}

export default App;

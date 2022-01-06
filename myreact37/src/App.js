// import PageCounter from 'pages/PageCounter';
// import PageTodoList from 'pages/PageTodoList';
import TopNav from 'components/TopNav';
import PageCounter from 'pages/PageCounter';
import PageNotFound from 'pages/PageNotFound';
import PageReviewList from 'pages/PageReviewList';
import PageTodoList from 'pages/PageTodoList';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='app'>
      <TopNav />

      <Routes>
        <Route path="/" element={<div>대문</div>} />
        <Route path="/counter" element={<PageCounter />} />
        <Route path="/reviews" element={<PageReviewList />} />
        <Route path="/todos" element={<PageTodoList />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

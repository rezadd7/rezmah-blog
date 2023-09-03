//components
import { Routes, Route } from 'react-router-dom';

//Components
import HomePage from './components/home/HomePage';
import Layout from "./components/layout/index"
import AuthorPage from './components/author/AuthorPage';
import BlogPage from './components/blog/BlogPage';



function App() {

  return (
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/author/:slug" element={<AuthorPage />}/>
          <Route path="/blogs/:slug" element={<BlogPage />}/>
        </Routes>
      </Layout> 
  )
}

export default App;

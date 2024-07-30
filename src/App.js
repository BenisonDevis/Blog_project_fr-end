import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import BlogList from './page/BlogList';
import Layout from './page/Layout';
import BlogCreate from './page/BlogCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route index element={<BlogList/>}/>
          <Route path="/blog-create" element={<BlogCreate/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { Route, Routes } from 'react-router-dom'
import './App.css'
import './styles/main.scss'
import Categories from './components/Categories'
import Home  from './components/Home'
import Layout from './components/Layout'
import Category from './components/Category'
import Categoriesindex from './components/Categoriesindex'


function App() {


  return (
    <Layout>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="categories/*" element={<Categories/>}>
          <Route index element={<Categoriesindex />} />
        <Route path=':slug' element={<Category />}/>
          </Route>
      </Routes>
    </Layout>
  )
}

export default App

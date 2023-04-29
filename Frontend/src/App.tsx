import { useEffect, useState } from 'react'

import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import WebsiteLayout from './pages/layout/WebsiteLayout'
import ProjectDetailPage from './pages/ProductDetailPage'
import AdminLayout from './pages/layout/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductManagementPage from './pages/admin/ProductManagementPage'
import AddProjectPage from './pages/admin/AddProductPage'
import { addProduct, updateProduct} from './api/product'
import UpdateProductPage from './pages/admin/UpdateProduct'
import mongoose from 'mongoose'
import {create } from './controllers/product'


function App() {
 
  const [skills, setSkills] = useState([])
  const [products, setProducts] = useState([])
  const [testmonial, setTestmonial] = useState([])
  const [aboutme, setAboutme] = useState([])
  const [blogs, setBlogs] = useState([])
  
  useEffect(() => 
  {
   fetch(`http://localhost:8080/api/blogs`)
   .then(response => response.json())
   .then(data => setBlogs(data))  
  },[])

  useEffect(() => 
  {
   fetch(`http://localhost:8080/api/skills`)
   .then(response => response.json())
   .then(data => setSkills(data))  
  },[])

   useEffect(() => 
   {
    fetch(`http://localhost:8080/api/products`)
    .then(response => response.json())
    .then(data => setProducts(data))  
   },[])
   useEffect(() => 
   {
    fetch(`http://localhost:8080/api/aboutme`)
    .then(response => response.json())
    .then(data => setAboutme(data))  
   },[])

   

   const onHandleRemoveProject = (id) => {
    const confirmed = window.confirm("Xác nhận xóa?");
    if (confirmed) {
      fetch('http://localhost:8080/api/products/' + id, {
      method: 'DELETE'
    }).then(() => setProducts(products.filter(item => item.id != id)))
    }
    
  }

  const oneHandleAdd = (product) => 
  {
    addProduct (product)
  }

  const onHandleUpdate = (product) => { 
    updateProduct(product).then(() => setProducts(products.map((item) => item.id == product.id ? product : item)))
  }
  
  return (
    <div>
      <BrowserRouter>
      

      <Routes>
          {/* nested router - router lồng nhau */}
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage products={products} skills={skills} testmonial={testmonial} aboutme={aboutme} blogs={blogs} />} />
            <Route path='products'>
              <Route index element={<HomePage  />} />
              <Route path=':id' element={<ProjectDetailPage products={products}  />} />
            </Route>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<ProductManagementPage products={products} onRemove = {onHandleRemoveProject}  />} />
              <Route path='add' element={<AddProjectPage onAdd={oneHandleAdd}   />} />
              <Route path=':id/update' element={<UpdateProductPage products={products}  onUpdate={onHandleUpdate} />} />
            </Route>
    
            
          </Route>

         









      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App

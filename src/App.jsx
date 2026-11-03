import {Routes,Route,Navigate} from 'react-router-dom';
import List from "./List";
import ProductForm from "./ProductFrom";

function App(){
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/produits" />} />
      <Route path="/produits" element={<List />} />
      <Route path="/add" element={<ProductForm />} />
      <Route path="/edit/:id" element={<ProductForm />} />
    </Routes>
  );
}

export default App;
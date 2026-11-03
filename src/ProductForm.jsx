import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addProduct, editProduct} from './productSlice.js';
import {useNavigate, useParams} from 'react-router-dom';

const ProductForm=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const products=useSelector(state=>state.products.products);
    const product=products.find(p=>p.ref===id);

    const [form,setForm]=useState({
        ref: "",
        name: "",
        price: "",
        category: ""
        photo:""
    });

    useEffect(()=>{
        if (product){
            setForm(product);
        }
    },[product]);

    const handleChange=(e)=>{
        setForm({...form,[e.target.name]: e.target.value});
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if (id){
            dispatch(updateProduct({...form,prix:Number(form.prix)}));
        }else{
            dispatch(addProduct({...form,ref:Date.now().toString(),prix:Number(form.prix)}))
        }

        navigate("/produits");
    };

    return(
        <div className="container">
            <h2>{id?"Edit Product":"Add New Product"}</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="intitule" placeholder="intitulé" value={form.intitule} onChange={handleChange} required />
                <input type="number" name="prix" placeholder="prix" value={form.prix} onChange={handleChange} required />
                <input type="text" name="categorie" placeholder="categorie" value={form.categorie} onChange={handleChange} required />
                <input type="text" name="photo" placeholder="photo" value={form.photo} onChange={handleChange} required />
                <button type="submit">{id ? "Modifier" : "Ajouter"} Produit</button>
                <button type="button" onClick={()=>navigate("/produits")}>cancel</button>
            </form>
        </div>
    );
}

export default ProductForm;
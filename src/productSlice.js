import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  products: [
    {ref:"1", name: "Prod_1", price: 10, category: "A"},
    {ref:"2", name: "Prod_2", price: 20, category: "B"},
    {ref:"3", name: "Prod_3", price: 30, category: "C"}
  ],
  search: "",
  category: "",
};

const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        addProduct:(state,action)=>{
            state.products.push(action.payload);
        },
        deleteProduct:(state,action)=>{
            state.products=state.products.filter(p=>p.ref!==action.payload);
        },
        editProduct:(state,action)=>{
            const index=state.products.findIndex(p=>p.ref===action.payload.ref);
            if(index!==-1){
                state.products[index]=action.payload;
            }
        },
        setSearch:(state,action)=>{
            state.search=action.payload;
        }
    }
});

export const {addProduct, editProduct, deleteProduct, setSearch} = productSlice.actions;
export default productSlice.reducer;
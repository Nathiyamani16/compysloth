// import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// const initialState={
// products:[]
// }

// const ProductsSlice=createSlice({
//     name:"products",
//     initialState,
//     reducers:{},
//     extraReducers:builder =>{
//         builder
//         .addCase({

//         })
//     }


// })

// export default ProductsSlice.reducer




// import { createSlice} from '@reduxjs/toolkit';

// const initialState = {
// feature_products: [],
// };
// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//     .addCase(fetchProducts.fulfilled,(state,action)=>{
//         state.products=action.payload;
//         state.feature_products=action.payload.filter((product)=>product.featured === true);
        
//     })
//     //   .addCase(fetchProducts.fulfilled, (state, action) => {
//     //     state.products = action.payload;
//     //     state.feature_products = action.payload.filter((product) => product.featured === true);
//     //   })
     
//   },
// });

// // export const { openSidebar, closeSidebar } = productsSlice.actions;

// export default productsSlice.reducer;
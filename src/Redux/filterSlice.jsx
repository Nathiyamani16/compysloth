import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    filter_products:[],
    all_products:[],
    gridview: true,
    sort: 'price-lowest',

    filtersItem: {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: 0,
        shipping: false,
    }
};
const filterSlice = createSlice({
name: "filter",
    initialState,
    reducers: {
        getfilterProducts: (state, action) => {
            let maxprice = action.payload.map((p) => p.price);
            maxprice = Math.max(...maxprice)
            state.all_products = action.payload;
            state.filter_products = action.payload;
            state.filtersItem.max_price = maxprice;
            state.filtersItem.price = maxprice;
        },
        setGridview: (state) => {
            state.gridview = true
        },
        setListview: (state) => {
            state.gridview = false
        },
        updateSort: (state, action) => {
            state.sort = action.payload
        },
        sortProducts: (state) => {
            const { sort, filter_products } = state;
            const temProduct = [...filter_products];
            if (sort === 'price-lowest') {
                temProduct.sort((a, b) => a.price - b.price);
            }
            else if (sort === "price-highest") {
                temProduct.sort((a, b) => b.price - a.price)
            }
            else if (sort === 'name-a-z') {
                temProduct.sort((a, b) => a.name.localeCompare(b.name));
            }
            else if (sort === 'name-z-a') {
                temProduct.sort((a, b) => b.name.localeCompare(b.name));
            }
            state.filter_products = temProduct
        },
        updateFilters: (state, action) => {
            const { name, value } = action.payload;
            state.filtersItem[name] = value;
        },
        filterProducts: (state) => {
            const { all_products, filtersItem } = state;
            let { text, category, company, color, price, shipping } = filtersItem
            let temProduct = [...all_products]
            if (text) {
                temProduct = temProduct.filter((products) => {
                    products.name.toLowerCase()
                })
            }
            if (category !== 'all') {
                temProduct = temProduct.filter(
                    (products) => products.category === category
                );
            }
            if (company !== 'all') {
                temProduct = temProduct.filter(
                    (products) => products.company === company
                )
            }
            if (color !== 'all') {
                temProduct = temProduct.filter(
                    (products) => products.color === company
                )
            }

            temProduct = temProduct.filter(
                (products) => products.price <= price
            );
            if (shipping) {
                temProduct = temProduct.filter(
                    (products) => products.shipping === true
                );
            }
            state.filter_products = temProduct;
        },
        clearFilter(state){
            state. filtersItem= {
        text: "",
        category: "all",
        company: "all",
        color: "all",
        min_price: 0,
        max_price: 0,
        price: state.filters.max_price,
        shipping: false,
    }
        }
    }
})

export const {
    setGridview,
    getfilterProducts,
    sortProducts,
    setListview,
    updateSort,
    updateFilters,
    filterProducts,
    clearFilter

} = filterSlice.actions;

export default filterSlice.reducer



// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   filtered_products: [],
//   all_products: [],
//   grid_view: true,
//   sort: 'price-lowest',
//   filters: {
//     text: '',
//     company: 'all',
//     category: 'all',
//     color: 'all',
//     min_price: 0,
//     max_price: 0,
//     price: 0,
//     shipping: false,
//   },
// };

// const filterSlice = createSlice({
//   name: 'filter',
//   initialState,
//   reducers: {
// loadProducts(state, action) {
//     let maxPrice = action.payload.map((p) => p.price);
//     maxPrice = Math.max(...maxPrice);
//     state.all_products = action.payload;
//     state.filtered_products = action.payload;
//     state.filters.max_price = maxPrice;
//     state.filters.price = maxPrice;
// },
// setGridView(state) {
//     state.grid_view = true;
// },
// setListView(state) {
//     state.grid_view = false;
// },
// updateSort(state, action) {
//     state.sort = action.payload;
// },
// sortProducts(state) {
//     const { sort, filtered_products } = state;
//     let tempProducts = [...filtered_products];
//     if (sort === 'price-lowest') {
//         tempProducts.sort((a, b) => a.price - b.price);
//     } else if (sort === 'price-highest') {
//         tempProducts.sort((a, b) => b.price - a.price);
//     } else if (sort === 'name-a') {
//         tempProducts.sort((a, b) => a.name.localeCompare(b.name));
//     } else if (sort === 'name-z') {
//         tempProducts.sort((a, b) => b.name.localeCompare(a.name));
//     }
//     state.filtered_products = tempProducts;
// },
// updateFilters(state, action) {
//     const { name, value } = action.payload;
//     state.filters[name] = value;
// // },
// filterProducts(state) {
//     const { all_products, filters } = state;
//     const { text, category, company, color, price, shipping } = filters;
//     let tempProducts = [...all_products];
//     if (text) {
//         tempProducts = tempProducts.filter((product) =>
//             product.name.toLowerCase().startsWith(text)
//         );
//     }
//     if (category !== 'all') {
//         tempProducts = tempProducts.filter(
//             (product) => product.category === category
//         );
//     }
//     if (company !== 'all') {
//         tempProducts = tempProducts.filter(
//             (product) => product.company === company
//         );
//     }
//     if (color !== 'all') {
//         tempProducts = tempProducts.filter((product) =>
//             product.colors.includes(color)
//         );
//     }
//     tempProducts = tempProducts.filter(
//         (product) => product.price <= price
//     );
//     if (shipping) {
//         tempProducts = tempProducts.filter(
//             (product) => product.shipping === true
//         );
//     }
//     state.filtered_products = tempProducts;
// },
// clearFilters(state) {
//     state.filters = {
//         text: '',
//         company: 'all',
//         category: 'all',
//         color: 'all',
//         price: state.filters.max_price,
//         shipping: false,
//     };
// },
//   },
// });

// export const {
//     loadProducts,
//     setGridView,
//     setListView,
//     updateSort,
//     sortProducts,
//     updateFilters,
//     filterProducts,
//     clearFilters,
// } = filterSlice.actions;

// export default filterSlice.reducer;



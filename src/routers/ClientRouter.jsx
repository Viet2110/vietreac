import React from 'react';
import Main from '../components/Main';
import Todolist from '../pages/todolist/Todolist';
import Products from '../pages/products/Products';
import Categories from '../pages/categories/Categories';
import { Route, Routes } from 'react-router-dom';

function ClientRouter(props) {
    const routers = [
        {
            path: "/",
            element: <Main />
        },
        {
            path: "/todolist",
            element: <Todolist />
        },
        {
            path: "/products",
            element: <Products />
        },
        {
            path: "/categories",
            element: <Categories />
        }
    ]
    return (
        <Routes>
            {
                routers.map(item => (
                <Route path={item.path}   element={item.element} />
                ))
            }
        </Routes>
    );
}

export default ClientRouter;
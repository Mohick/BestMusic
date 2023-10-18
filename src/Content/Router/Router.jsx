import React from "react";
import { Routes, Route, RouterProvider } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import { useState, useEffect } from "react";

const LazyEnglishSongs = React.lazy(() => import("../Discover Page/Songs America"))
const LazyDiscover = React.lazy(() => import("../Discover Page/Discover Page"))
const LazyVNSongs = React.lazy(() => import("../Discover Page/Songs Viet Nam"))
const LazySetting = React.lazy(() => import("../Setting/Setting"))
import Product from "./Product";

export default function RouterPage() {




    let [pages, setPages] = useState([])


    useEffect(() => {
        let checkDiscover = true
        if (checkDiscover) {
            fetch("http://127.0.0.1:8000/discover/?format=json")
                .then((response) => response.json())
                .then((response) => setPages(response))

        }

        return () => checkDiscover = false
    }, [])

    return <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Discover" element={<React.Suspense fallback="loading..."><LazyDiscover /></React.Suspense>} />
        <Route path="/English Songs" element={<React.Suspense fallback="loading..."><LazyEnglishSongs /></React.Suspense>} />
        <Route path="/Viet Nam Songs" element={<React.Suspense fallback="loading..."><LazyVNSongs /></React.Suspense>} />
        <Route path="/Setting" element={<React.Suspense fallback="loading..."><LazySetting /></React.Suspense>} />
        {pages.map(page => {
            if (page.title == decodeURIComponent(location.pathname).slice(6)) {
                return <Route key={page.id} path={`/song ${page.title}`} element={
                    <React.Suspense fallback="loading...">
                        <Product>
                            {{ page: page, pages: pages }}
                        </Product>
                    </React.Suspense>
                } />
            } else {
                return <Route key={page.id} path={`/song ${page.title}`} element={
                    <React.Suspense fallback="loading...">
                        <Product>
                            {{ page: page, pages: pages }}
                        </Product>
                    </React.Suspense>
                } />
            }
        })}
    </Routes >


}
import { Routes, Route } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
export default function RouterPage() {

    return <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>


}
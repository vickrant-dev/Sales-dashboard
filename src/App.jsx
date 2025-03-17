import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import MainLayout from "./MainLayout";

export default function App() {

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", "velvetkitten");
    })

    return (
        <Router>
            <Routes>
                <Route path="/*" element={<MainLayout />} />
            </Routes>
        </Router>
    );

}
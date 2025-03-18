import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react";
import { useEffect } from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Overview";
import Products from "./Components/Products";
import Analytics from "./Components/Analytics";
import Sales from "./Components/Sales";
import Payments from "./Components/Payments";
import Refunds from "./Components/Refunds";
import Invoices from "./Components/Invoices";
import Returns from "./Components/Returns";
import AddProducts from "./Components/AddProduct";

export default function MainLayout() {

    return (
        <>
            <div id="main-container" className="flex h-screen">
                <div id="sidebar">
                    <Sidebar />
                </div>
                <div
                    id="content-main"
                    className="flex-1 pl-[278px] rounded-2xl pr-[1.75rem] overflow-auto overflow-x-hidden"
                    style={{
                        scrollbarWidth: "thin",
                        scrollbarColor: "#1c2737 transparent",
                    }}
                >
                    <div id="navbar">
                        <Navbar />
                    </div>
                    <div id="content">
                        <Suspense fallback={<div>Loading...</div>}>
                            <Routes>
                                <Route path="/" element={<Overview />} />
                                <Route
                                    path="/analytics"
                                    element={<Analytics />}
                                />
                                <Route
                                    path="/products"
                                    element={<Products />}
                                />
                                <Route 
                                    path="/sales" 
                                    element={<Sales />} 
                                />
                                <Route
                                    path="/payments"
                                    element={<Payments />}
                                />
                                <Route 
                                    path="/refunds" 
                                    element={<Refunds />} 
                                />
                                <Route
                                    path="/invoices"
                                    element={<Invoices />}
                                />
                                <Route 
                                    path="/returns" 
                                    element={<Returns />} 
                                />
                                <Route 
                                    path="/products/add" 
                                    element={<AddProducts />} 
                                />
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );

}
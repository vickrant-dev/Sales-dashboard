import "./App.css";
import { Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react";
import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Overview from "./Components/Main/Overview";
import Analytics from "./Components/Main/Analytics";
import Sales from "./Components/Main/Sales";
import Products from "./Components/Main/Products";
import Inventory from "./Components/Main/Inventory";
import Bills from "./Components/Transactions/Bills";
import AddBills from "./Components/AddBills";
import Paybills from "./Components/Transactions/Paybills";
import Invoices from "./Components/Transactions/Invoices";
import ReceivePayments from './Components/Transactions/ReceivePayments'
import Refunds from "./Components/Transactions/Refunds";
import Returns from "./Components/Transactions/Returns";
import AddProducts from "./Components/AddProduct";
import BarChart from "./Components/BarChart";

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
                                    path="/sales" 
                                    element={<Sales />} 
                                />
                                <Route
                                    path="/products"
                                    element={<Products />}
                                />
                                <Route 
                                    path="/products/add" 
                                    element={<AddProducts />} 
                                />
                                <Route 
                                    path="/inventory" 
                                    element={<Inventory />} 
                                />
                                <Route
                                    path="/bills"
                                    element={<Bills />}
                                />
                                <Route
                                    path="/bills/add"
                                    element={<AddBills />}                                
                                />
                                <Route
                                    path="/paybills"
                                    element={<Paybills />}
                                />
                                <Route
                                    path="/invoices"
                                    element={<Invoices />}
                                />
                                <Route
                                    path="/receive-payments"
                                    element={<ReceivePayments />}
                                />
                                <Route 
                                    path="/refunds" 
                                    element={<Refunds />} 
                                />
                                <Route 
                                    path="/returns" 
                                    element={<Returns />} 
                                />
                                
                                {/* Testing... */}
                                <Route 
                                    path="/barchart" 
                                    element={<BarChart />} 
                                />
                                
                            </Routes>
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );

}
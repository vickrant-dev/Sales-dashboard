import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import {
    EllipsisVertical,
    LayoutDashboard,
    ChartSpline,
    Store,
    ShoppingCart,
    HandCoins,
    Wallet,
    ReceiptText,
    Package,
    BellRing,
    MessageCircle,
    Settings,
    ToggleLeft,
    TicketSlash,
    RotateCcwSquareIcon,
} from "lucide-react";

export default function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <>
            <div
                id="sidebar-container"
                className="flex flex-col fixed h-screen w-[250px] pt-[1.5rem] pl-[1rem] pr-[.75rem] pb-[3rem]
                bg-base-100 text-base-content shadow-lg 
                overflow-y-auto scrollbar-thin"
                style={{ scrollbarWidth: "thin", scrollbarColor: "#1c2737 transparent" }}
            >
    
                {/* Sidebar Menu */}
                <div id="sidebar-lists" className="flex flex-col gap-10">
                    {/* Main Menu */}
                    <div id="main-menu">
                        <h4 className="select-none text-md text-primary font-semibold pb-4 pl-3.25">
                            Main Menu
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { icon: <LayoutDashboard size={24} />, label: "Overview", link: '/' },
                                { icon: <ChartSpline size={24} />, label: "Analytics", link: '/analytics' },
                                { icon: <Store size={24} />, label: "Products", link: '/products' },
                                { icon: <ShoppingCart size={24} />, label: "Sales", link: '/sales' },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className={`select-none group flex items-center gap-3 rounded-xl py-3.25 pl-3.5 
                                    cursor-pointer transition-all duration-150 ease-out
                                    ${location.pathname === item.link ? "bg-primary text-primary-content" : "hover:bg-primary hover:text-primary-content"}`}
                                    onClick={() => navigate(item.link)} 
                                >
                                    <div id="icon">{item.icon}</div>
                                    <p>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                    {/* Transactions Menu */}
                    <div id="transaction-menu">
                        <h4 className="select-none text-md text-primary font-semibold pb-4 pl-3.25">
                            Transactions
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                { icon: <Wallet size={24} />, label: "Payment", link: '/payments' },
                                { icon: <TicketSlash size={24} />, label: "Refunds", link: '/refunds' },
                                { icon: <ReceiptText size={24} />, label: "Invoices", link: '/invoices' },
                                { icon: <RotateCcwSquareIcon size={24} />, label: "Returns", link: '/returns' },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className={`select-none group flex items-center gap-3 rounded-xl py-3.25 pl-3.5 
                                    cursor-pointer hover:bg-primary hover:text-primary-content 
                                    transition-all duration-150 ease-out ${location.pathname === item.link ? "bg-primary text-primary-content" :  "hover:bg-primary hover:text-primary-content"} `}
                                    onClick={() => navigate(item.link)}
                                >
                                    <div id="icon">{item.icon}</div>
                                    <p>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
    
                    {/* General Menu */}
                    <div id="general-menu">
                        <h4 className="select-none text-md text-primary font-semibold pb-4 pl-3.25">
                            General
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {[
                                // { icon: <BellRing size={24} />, label: "Notifications" },
                                // { icon: <MessageCircle size={24} />, label: "Feedback" },
                                { icon: <Settings size={24} />, label: "Settings" },
                                // { icon: <ToggleLeft size={24} />, label: "Darkmode" },
                            ].map((item, index) => (
                                <li
                                    key={index}
                                    className={`select-none group flex items-center gap-3 rounded-xl py-3.25 pl-3.5 
                                    cursor-pointer hover:bg-primary hover:text-primary-content 
                                    transition-all duration-150 ease-out ${location.pathname === item.link ? "bg-primary text-primary-content" : "hover:bg-primary hover:text-primary-content"} `}
                                >
                                    <div id="icon">{item.icon}</div>
                                    <p>{item.label}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
    
}

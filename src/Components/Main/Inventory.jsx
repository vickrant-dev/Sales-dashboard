import "../../App.css";
import { ChevronDown, Pencil, Plus, Settings2, Trash } from 'lucide-react';
import { data, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from '../../utils/supabase';

export default function Inventory() {

    const navigate = useNavigate();

    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const { data, error } = await supabase
                .from("inventory")
                .select("*");
            if (error) {
                console.error("Error fetching inventory:", error.message);
            } else {
                setInventory(data);
            }
        };
        fetchProducts();
    }, []);

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <div className="heading pl-[16px]">
                    <h2 className="text-2xl font-semibold">Inventory</h2>
                </div>
                <div className="inventory-content">
                    <div className="header pb-7 pt-5 mt-5 pr-[16px] pl-[16px] w-full flex items-center">
                        <div className="search-sec flex items-center gap-4 w-200">
                            <label className="input">
                                <svg
                                    className="h-[1.25em] opacity-50"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <g
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="2.5"
                                        fill="none"
                                        stroke="currentColor"
                                    >
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.3-4.3"></path>
                                    </g>
                                </svg>
                                <input
                                    type="search"
                                    required
                                    placeholder="Search by name"
                                />
                            </label>
                            <div className="dropdown dropdown-start w-full">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn gap-2 font-normal bg-base-100"
                                >
                                    Select Category{" "}
                                    <ChevronDown
                                        className="mt-[1px]"
                                        size={20}
                                    />
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="dropdown-content menu bg-base-200 rounded-box z-1 w-52 p-2 shadow-sm gap-2"
                                >
                                    <li>
                                        <a>Fashion</a>
                                    </li>
                                    <li>
                                        <a>Electronics</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox rounded-lg"
                                        />
                                    </label>
                                </th>
                                <th>Name</th>
                                <th>Cateogory</th>
                                <th>Unit Price</th>
                                <th>Stock</th>
                                <th>Total value</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=" bg-base-200">
                            {inventory.map((inv) => (
                                <tr>
                                    <th>
                                        <label>
                                            <input
                                                type="checkbox"
                                                className="checkbox rounded-lg"
                                            />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div>
                                                <div
                                                    className="font-bold"
                                                    id="pro-name"
                                                >
                                                    {inv.product_name}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{inv.category ? inv.category : "N/A"}</td>
                                    <td>LKR {inv.unit_price}</td>
                                    <td>{inv.stock_quantity ? inv.stock_quantity : 0}</td>
                                    <td>{inv.total_value}</td>
                                    <td>
                                        <Settings2
                                            size={20}
                                            className="cursor-pointer"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
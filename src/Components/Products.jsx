import { createClient } from '@supabase/supabase-js'
import { ChevronDown, Pencil, Plus, Trash } from 'lucide-react';
import '../App.css'

export default function Products() {   

    const supabase = createClient('SUPABASE_URL', 'SUPABASE_ANON_KEY')

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <div className="heading pl-[16px]">
                    <h2 className='text-2xl font-semibold'>Products</h2>
                </div>
                <div className="product-content">
                    <div className="header pb-7 pt-5 mt-5 pr-[16px] pl-[16px] w-full flex items-center justify-between">
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
                                    <ChevronDown className="mt-[1px]" size={20} />
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
                        <div id="add-new-pro">
                            <button className="btn btn-primary">
                                <Plus size={20} />
                                Add New Product
                            </button>
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
                                <th>ID</th>
                                <th>Name</th>
                                <th>Cateogory</th>
                                <th>Buying Price</th>
                                <th>Stock</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody className=' bg-base-200'>
                            {/* row 1 */}
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox rounded-lg"
                                        />
                                    </label>
                                </th>
                                <td>1001</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div
                                                className="font-bold"
                                                id="pro-name"
                                            >
                                                MEN'S NIKE AIR MAX
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Fashion</td>
                                <td>$25.00</td>
                                <td>21</td>
                                <td><div className="badge bg-green-700/45 text-green-400">In Stock</div></td>
                                <td className="flex items-center gap-3">
                                    <Pencil
                                        size={34}
                                        className="text-neutral-200 p-1.75 hover:bg-base-300 rounded-md cursor-pointer"
                                    />
                                    <Trash
                                        className="text-red-500 p-1.75 hover:bg-red-700/40 rounded-md cursor-pointer"
                                        size={34}
                                    />
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox rounded-lg"
                                        />
                                    </label>
                                </th>
                                <td>1001</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div
                                                className="font-bold"
                                                id="pro-name"
                                            >
                                                MEN'S NIKE AIR MAX
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Fashion</td>
                                <td>$25.00</td>
                                <td>4</td>
                                <td><div className="badge bg-yellow-700/45 text-yellow-400">Low Stock</div></td>
                                <td className="flex items-center gap-3">
                                    <Pencil
                                        size={34}
                                        className="text-neutral-200 p-1.75 hover:bg-base-300 rounded-md cursor-pointer"
                                    />
                                    <Trash
                                        className="text-red-500 p-1.75 hover:bg-red-700/40 rounded-md cursor-pointer"
                                        size={34}
                                    />
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox rounded-lg"
                                        />
                                    </label>
                                </th>
                                <td>1001</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div
                                                className="font-bold"
                                                id="pro-name"
                                            >
                                                MEN'S NIKE AIR MAX
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Fashion</td>
                                <td>$25.00</td>
                                <td>0</td>
                                <td><div className="badge bg-red-700/45 text-red-400">Out of stock</div></td>
                                <td className="flex items-center gap-3">
                                    <Pencil
                                        size={34}
                                        className="text-neutral-200 p-1.75 hover:bg-base-300 rounded-md cursor-pointer"
                                    />
                                    <Trash
                                        className="text-red-500 p-1.75 hover:bg-red-700/40 rounded-md cursor-pointer"
                                        size={34}
                                    />
                                </td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox rounded-lg"
                                        />
                                    </label>
                                </th>
                                <td>1001</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div>
                                            <div
                                                className="font-bold"
                                                id="pro-name"
                                            >
                                                MEN'S NIKE AIR MAX
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>Fashion</td>
                                <td>$25.00</td>
                                <td>21</td>
                                <td><div className="badge bg-green-700/45 text-green-400">In Stock</div></td>
                                <td className="flex items-center gap-3">
                                    <Pencil
                                        size={34}
                                        className="text-neutral-200 p-1.75 hover:bg-base-300 rounded-md cursor-pointer"
                                    />
                                    <Trash
                                        className="text-red-500 p-1.75 hover:bg-red-700/40 rounded-md cursor-pointer"
                                        size={34}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
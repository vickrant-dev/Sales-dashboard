import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign, Package, ReceiptText,  Settings,  ShoppingBag, ChartSpline } from 'lucide-react'
import "../../App.css";

export default function Overview() {
    
    return (
        <>
            <div id="main-container" className="mt-10 mb-10" >
                <div id="header" className="flex items-center justify-between">
                    <div id="section-heading" className="flex flex-col">
                        <h4 className="text-2xl font-semibold pb-[3px]">
                            Overview
                        </h4>
                        <p className="text-md text-neutral-400">
                            Here is the summary of overall data
                        </p>
                    </div>
                    <div id="choose-date">
                        <div className="tabs tabs-box">
                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab"
                                aria-label="Day"
                            />
                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab"
                                aria-label="Week"
                                defaultChecked
                            />
                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab"
                                aria-label="Month"
                            />
                            <input
                                type="radio"
                                name="my_tabs_1"
                                className="tab"
                                aria-label="Year"
                            />
                        </div>
                    </div>
                </div>
                <div className="stats shadow flex items-center w-full mt-7">
                    <div className="stat pl-0">
                        <div className="stat-figure text-secondary">
                            <DollarSign
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Revenue</div>
                        <div className="stat-value">$31,000</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <ShoppingBag
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Sales</div>
                        <div className="stat-value">4,200</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />{" "}
                            400 (22%)
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <ReceiptText
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Average Order Value</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowDownRight
                                className="text-red-500"
                                size={17}
                            />{" "}
                            90 (14%)
                        </div>
                    </div>

                    <div className="stat pr-0">
                        <div className="stat-figure text-secondary">
                            <Package
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Active Inventory</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowDownRight
                                className="text-red-500"
                                size={17}
                            />
                            80 items low stock
                        </div>
                    </div>
                </div>
                <div className="overview-grid flex justify-between mt-7 w-full">
                    <div className="recent-orders bg-base-200 p-4 rounded-lg">
                        <div className="header flex items-center justify-between">
                            <div className="left">
                                <h4 className='font-semibold text-2xl' >Recent Orders</h4>
                                <p className='text-sm pt-1 text-neutral-400' >Latest customer orders</p>
                            </div>
                            <div className="right">
                                <button className="view-all flex items-center justify-center cursor-pointer text-secondary">View All <ArrowRight className='ml-2' size={18}/></button>
                            </div>
                        </div>
                        <div className="overflow-x-auto w-full mt-5">
                            <table className="table">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>Men's tracking shoes</td>
                                        <td>$99</td>
                                        <td>25 Jun 2024	</td>
                                        <td><span className='px-[9px] py-[1px] rounded-xl bg-green-950 text-green-300'>Delivered</span></td>
                                        <td className='flex items-center gap-2 cursor-pointer text-secondary'>View <ArrowRight size={17}/></td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>Choco's cookie</td>
                                        <td>$20</td>
                                        <td>21 Jun 2024</td>
                                        <td><span className='px-[9px] py-[1px] rounded-xl bg-orange-950 text-orange-300'>Pending</span></td>
                                        <td className='flex items-center gap-2 cursor-pointer text-secondary'>View <ArrowRight size={17}/></td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>Coconut Oil</td>
                                        <td>$47</td>
                                        <td>17 Jun 2024</td>
                                        <td><span className='px-[9px] py-[1px] rounded-xl bg-blue-950 text-blue-300'>Confirmed</span></td>
                                        <td className='flex items-center gap-2 cursor-pointer text-secondary'>View <ArrowRight size={17}/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="quick-actions-container flex flex-col bg-base-200 p-4 rounded-lg h-fit">
                        <div className="heading">
                            <h4 className='text-2xl font-semibold pb-1' >Quick Actions</h4>
                        </div>
                        <div className="description">
                            <p className='text-sm text-neutral-400'>Common tasks and operations.</p>
                        </div>
                        <div className="quick-action-btns mt-7 grid grid-cols-2 gap-5">
                            <button className="new-sale flex items-center gap-2 px-3.75 py-2.75 bg-base-100 rounded-md cursor-pointer transition-all duration-150 ease-out border border-b-2 border-base-300 hover:bg-base-300 "><ShoppingBag size={20}/>New Sale</button>
                            <button className="add-product flex items-center gap-2 px-3.75 py-2.75 bg-base-100 rounded-md cursor-pointer transition-all duration-150 ease-out border border-b-2 border-base-300 hover:bg-base-300"><Package size={20}/>Add Product</button>
                            <button className="view-reports flex items-center gap-2 px-3.75 py-2.75 bg-base-100 rounded-md cursor-pointer transition-all duration-150 ease-out border border-b-2 border-base-300 hover:bg-base-300"><ChartSpline size={20}/>View Reports</button>
                            <button className="new-sale flex items-center gap-2 px-3.75 py-2.75 bg-base-100 rounded-md cursor-pointer transition-all duration-150 ease-out border border-b-2 border-base-300 hover:bg-base-300"><Settings size={20}/>Settings</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
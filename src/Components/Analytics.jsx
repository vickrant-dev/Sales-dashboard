import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign, Package, ReceiptText,  Settings,  ShoppingBag, ChartSpline, HandCoins, Send, SendHorizonal } from 'lucide-react'
import '../App.css'

export default function Analytics() {

    return (
        <>
            <div className="analytics-sec mt-10">
                <div id="header" className="flex items-center justify-between">
                    <div id="section-heading" className="flex flex-col">
                        <h4 className="text-2xl font-semibold pb-[3px]">
                            Analytics
                        </h4>
                        <p className="text-md text-neutral-400">
                            Here is the analytics of your business
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
                                defaultChecked
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
                        <div className="stat-title">Total Profit</div>
                        <div className="stat-value">$31,000</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />
                            +20.1% from last year
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <HandCoins
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Total Income</div>
                        <div className="stat-value">$49,000</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />{" "}
                            +25.6% from last year
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <SendHorizonal
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Total Expenses</div>
                        <div className="stat-value">$18,000</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowDownRight
                                className="text-success"
                                size={17}
                            />{" "}
                            -6.2% from last year
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
            </div>
            <div className="recent-transactions bg-base-200 p-4 mt-10 mb-10 rounded-lg">
                <div className="header flex items-center justify-between">
                    <div className="left">
                        <h4 className="font-semibold text-2xl">
                            Top Performing Products
                        </h4>
                        <p className="text-sm pt-1 text-neutral-400">
                            Products with the highest revenue this year.
                        </p>
                    </div>
                </div>
                <div className="overflow-x-auto w-full mt-5">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Category</th>
                                <th>Unit Sold</th>
                                <th>Revenue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Men's tracking shoes</td>
                                <td>Fashion</td>
                                <td>410</td>
                                <td>$9911</td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>1</th>
                                <td>Men's tracking shoes</td>
                                <td>Fashion</td>
                                <td>410</td>
                                <td>$9911</td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>1</th>
                                <td>Men's tracking shoes</td>
                                <td>Fashion</td>
                                <td>410</td>
                                <td>$9911</td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>1</th>
                                <td>Men's tracking shoes</td>
                                <td>Fashion</td>
                                <td>410</td>
                                <td>$9911</td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>1</th>
                                <td>Men's tracking shoes</td>
                                <td>Fashion</td>
                                <td>410</td>
                                <td>$9911</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );

}
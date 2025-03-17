import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    DollarSign,
    Package,
    ReceiptText,
    Settings,
    ShoppingBag,
    ChartSpline,
    Landmark,
    LucideTicketCheck,
    LucideTicketX,
    RotateCcwSquareIcon,
    TicketSlash,
    Download,
    Settings2,
    RefreshCcw,
    TicketX,
    BookCheck,
    FileCheck,
    FileX,
    Printer,
} from "lucide-react";
import "../App.css";

export default function Invoices() {
    return (
        <>
            <div className="invoices-container">
                <div
                    id="header"
                    className="flex items-center justify-between mt-10"
                >
                    <div id="section-heading" className="flex flex-col">
                        <h4 className="text-2xl font-semibold pb-[3px]">
                            Invoices
                        </h4>
                        <p className="text-md text-neutral-400">
                            Here is your Invoices summary
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
                                defaultChecked
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
                            <ReceiptText
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Total Invoiced</div>
                        <div className="stat-value">$49,000.05</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-neutral-400" size={17} />
                            +20.1% from last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <FileCheck
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Paid Invoices</div>
                        <div className="stat-value">$32,456.78</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />
                            +15.3% from last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <RefreshCcw
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Pending Invoices</div>
                        <div className="stat-value">$10,567.32</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowDownRight
                                className="text-success"
                                size={17}
                            />
                            +5.7% from last month
                        </div>
                    </div>

                    <div className="stat pr-0">
                        <div className="stat-figure text-secondary">
                            <FileX
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Overdue Invoices</div>
                        <div className="stat-value">$2,207.79</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight
                                className="text-red-500"
                                size={17}
                            />
                            +2.5% from last month
                        </div>
                    </div>
                </div>
                <div className="recent-invoices-container mt-7 mb-7">
                    <div className="header flex items-center justify-between ">
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
                                placeholder="Search"
                            />
                        </label>
                        <div className="invoice-btns flex items-center gap-3">
                            <button className="btn btn-soft btn-secondary">
                                <Printer size={18} /> Print
                            </button>
                            <button className="btn btn-soft btn-secondary">
                                <Download size={18} /> Export
                            </button>
                            <button className="btn btn-primary">
                                <ReceiptText size={18} /> New Invoice
                            </button>
                        </div>
                    </div>
                    <div className="recent-invoices mt-7 p-4 border border-base-300 rounded-2xl">
                        <div className="header">
                            <h4 className="text-xl font-semibold pb-1">
                                Invoices
                            </h4>
                            <p className="text-sm text-neutral-400 pb-7">
                                Manage your customer invoices
                            </p>
                        </div>
                        <div className="overflow-x-auto border border-base-300 rounded-xl">
                            <table className="table table-zebra">
                                {/* head */}
                                <thead>
                                    <tr>
                                        {/* <th></th> */}
                                        <th>ID</th>
                                        <th>Date</th>
                                        <th>Customer</th>
                                        <th>Due Date</th>
                                        <th>Amount</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>1</td>
                                        <td>2023-04-15</td>
                                        <td>Cy Ganderton</td>
                                        <td>2023-04-15</td>
                                        <td>$999.00	</td>
                                        <td>
                                            <div className="badge bg-green-700/45 text-green-400">
                                                Paid
                                            </div>
                                        </td>
                                        <th>
                                            <Settings2 size={18} />
                                        </th>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>1</td>
                                        <td>2023-04-15</td>
                                        <td>Cy Ganderton</td>
                                        <td>2024-04-30</td>
                                        <td>$999.00	</td>
                                        <td>
                                            <div className="badge bg-red-700/45 text-red-400">
                                                Overdue
                                            </div>
                                        </td>
                                        <th>
                                            <Settings2 size={18} />
                                        </th>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <td>1</td>
                                        <td>2023-04-15</td>
                                        <td>Cy Ganderton</td>
                                        <td>2024-04-30</td>
                                        <td>$999.00	</td>
                                        <td>
                                            <div className="badge bg-yellow-700/45 text-yellow-400">
                                                Pending
                                            </div>
                                        </td>
                                        <th>
                                            <Settings2 size={18} />
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

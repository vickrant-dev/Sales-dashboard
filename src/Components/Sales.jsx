import { ArrowDownRight, ArrowRight, ArrowUpRight, DollarSign, Package, ReceiptText,  Settings,  ShoppingBag, ChartSpline } from 'lucide-react'
import '../App.css'

export default function Sales() {

    return (
        <>
            <div className="sales-container">
                <div id="header" className="flex items-center justify-between mt-10">
                    <div id="section-heading" className="flex flex-col">
                        <h4 className="text-2xl font-semibold pb-[3px]">
                            Sales
                        </h4>
                        <p className="text-md text-neutral-400">
                            Here is the overall sales of your business
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
                        <div className="stat-title">Total Sales</div>
                        <div className="stat-value">$31,000</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />
                            +3.1% from last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <ShoppingBag
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Average Order Value</div>
                        <div className="stat-value">$95.85</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />{" "}
                            +5.6% from last month
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <ReceiptText
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Conversion Rate</div>
                        <div className="stat-value">3.24%</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowDownRight
                                className="text-red-500"
                                size={17}
                            />
                            0.4% from last month
                        </div>
                    </div>

                    <div className="stat pr-0">
                        <div className="stat-figure text-secondary">
                            <Package
                                className="text-accent bg-accent-content py-1 px-1.5 rounded-3xl"
                                size={32}
                            />
                        </div>
                        <div className="stat-title">Total Orders</div>
                        <div className="stat-value">558</div>
                        <div className="stat-desc flex gap-1">
                            <ArrowUpRight className="text-success" size={17} />
                            +8.3% from last month
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
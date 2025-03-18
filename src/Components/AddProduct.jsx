import { createClient } from '@supabase/supabase-js'
import { ChevronLeft, Save  } from 'lucide-react';
import '../App.css'
import { useNavigate } from 'react-router-dom';

export default function AddProducts() {

    const navigate = useNavigate();

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <div className="navigation-btn pl-[16px] mb-10">
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => navigate("/products")}
                    >
                        <ChevronLeft size={20} /> Back to products
                    </button>
                </div>
                <div className="heading pl-[16px]">
                    <h2 className="text-2xl font-semibold">Add New Product</h2>
                    <p className="text-sm pt-1 text-neutral-400">
                        Create a new product in your inventory
                    </p>
                </div>
                <div className="add-new-product pl-[16px] mt-7 mb-10">
                    <div className="tabs tabs-lift">
                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab"
                            aria-label="Single Product"
                            defaultChecked
                        />
                        <div className="tab-content bg-base-100 border-base-300 p-6 rounded-b-xl rounded-tr-xl">
                            <fieldset className="fieldset w-2xl bg-base-200 border border-base-300 p-5 rounded-xl">
                                <h2 className="text-2xl font-semibold pb-3">
                                    Product Information
                                </h2>
                                <label className="fieldset-label text-sm">
                                    Product Name
                                </label>
                                <input
                                    type="text"
                                    className="input mb-3 w-full"
                                    placeholder="Enter Product Name"
                                />

                                <label className="fieldset-label text-sm">
                                    SKU
                                </label>
                                <input
                                    type="text"
                                    className="input mb-3 w-full"
                                    placeholder="Enter Product SKU"
                                />

                                <label className="fieldset-label text-sm">
                                    Category
                                </label>
                                <select
                                    defaultValue="Select a category"
                                    className="select mb-3 w-full"
                                >
                                    <option disabled={true}>
                                        Select a category
                                    </option>
                                    <option>Food and Beverages</option>
                                    <option>Electronics</option>
                                    <option>Clothing</option>
                                    <option>Home Goods</option>
                                    <option>Other</option>
                                </select>

                                <div className="selling-cost-price flex items-center justify-between gap-3">
                                    <div className="selling-price w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Selling Price ($)
                                        </label>
                                        <input
                                            type="text"
                                            className="input mb-3 w-full"
                                            placeholder="0.00"
                                        />
                                    </div>
                                    <div className="cost-price w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Cost Price ($)
                                        </label>
                                        <input
                                            type="text"
                                            className="input mb-3 w-full"
                                            placeholder="0.00"
                                        />
                                    </div>
                                </div>

                                <label className="fieldset-label text-sm">
                                    Initial Stock
                                </label>
                                <input
                                    type="text"
                                    className="input mb-3 w-full"
                                    placeholder="0"
                                />

                                <label className="fieldset-label text-sm">
                                    Product Description
                                </label>
                                <textarea
                                    className="textarea w-full"
                                    placeholder="Enter Product Description"
                                ></textarea>

                                <div className="barcode-tax flex items-center justify-between gap-3 mt-3">
                                    <div className="barcode w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Barcode
                                        </label>
                                        <input
                                            type="text"
                                            className="input mb-3 w-full"
                                            placeholder="Enter Barcode"
                                        />
                                    </div>
                                    <div className="tax w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Tax rate (%)
                                        </label>
                                        <input
                                            type="text"
                                            className="input mb-3 w-full"
                                            placeholder="Enter Tax Rate"
                                        />
                                    </div>
                                </div>

                                <div className="footer-btns flex items-center justify-between mt-5">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => navigate("/products")}
                                    >
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary">
                                        <Save size={20} /> Save Product
                                    </button>
                                </div>
                            </fieldset>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab"
                            aria-label="Bulk Product"
                        />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            Tab content 2
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
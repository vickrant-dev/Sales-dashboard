import { ChevronLeft, Save } from "lucide-react";
import "../App.css";
import { useEffect, useState } from "react";
import { supabase } from '../utils/supabase.js' 
import { data } from "react-router-dom";

export default function AddBills() {

    const [vendors, setVendors] = useState([]);
    const [VendorId, setVendorId] = useState(null);
    const [suggestions, setSuggestions] = useState([]);
    const [dropDownData, setDropDownData] = useState({});

    const [billForm, setBillForm] = useState({
        vendor_name: '',
        bill_date: '',
        bill_number: '',
        parent_barcode: '',
        total_amount: '',
        amount_due: '',
        payment_status: '',
    });

    const [billItems, setBillItems] = useState([]);

    const calculateTotal = () => {
        
        const totalPrice = billItems.map((bill) => {
            return bill.quantity ? bill.quantity * bill.unit_cost : 0;
        }).reduce((sum, billTotal) => sum + billTotal, 0);

        const formattedTotalPrice = totalPrice.toLocaleString('en-US');
        console.log(formattedTotalPrice);

        billForm.total_amount = formattedTotalPrice;
    
    }

    const handleBillChange = (e) => {

        const { name, value } = e.target

        setBillForm((prevBillForm) => ({ ...prevBillForm, [name]: value }));
        
        if(name === "vendor_name"){
            setSuggestions(name);
            const filteredResults = vendors
            .map((item) => item[name] || "")
            .filter((val, index, self) => val && self.indexOf(val) === index)
            .filter(val => val.toLowerCase().includes(value.toLowerCase()))
            .sort((a, b) => {
                const aStartsWithInput = a.toLowerCase().startsWith(value.toLowerCase());
                const bStartsWithInput = b.toLowerCase().startsWith(value.toLowerCase());

                if (aStartsWithInput && !bStartsWithInput) return -1;
                if (!aStartsWithInput && bStartsWithInput) return 1;
                return a.localeCompare(b);
            });

            setDropDownData({...dropDownData, [name]: filteredResults});
        } // ⭐
        
    }

    const handleBillItemsChange = (e) => {

        const { name, value } = e.target

        setBillItems((prevBillItems) => ({ ...prevBillItems, [name]: value }));

    }

    const handleParentBarcode = (e) => {

        const { name, value } = e.target;

        setBillForm((prevBillForm) => ({...prevBillForm, [name]: value}));
        
        const pro_model = value.split('-');
        const pro_qty = pro_model[1].split('_');
        const barcodeID = pro_model[0];
        const barcode = pro_qty[0];
        const qty = pro_qty[1];

        fetchProductsData(barcodeID, qty);
        calculateTotal();

    }    

    const fetchProductsData  = async (barcodeID, qty) => {
        try {
            const { data, error } = await supabase
                .from("products")
                .select("*")
                .eq('barcode_id', barcodeID);
            if (error) {
                console.error("Error fetching inventory:", error.message);
            } else {
                if (data && data.length > 0) {
                    console.log(data);
                    setBillItems((prevBillItems) => [
                        ...prevBillItems,
                        {
                            product_name: data[0].product_name,
                            product_desc: data[0].product_desc,
                            unit_cost: data[0].unit_price,
                            quantity: qty,
                        },
                    ]);
                } else {
                    console.log(
                        "Product not found for barcode:",
                        barcodeID
                    );
                    return null;
                }
            }
            console.log(billItems);
        } 
        catch (error) {
            alert(error.message);
            return;
        }
    }

    const handleSelectDropDown = (field, vendorName, index) => {

        setBillForm((prevBillForm) => ({ ...prevBillForm, [field]: vendorName }));

        const selectedVendor = vendors.find(vendor => vendor.vendor_name === vendorName);

        if (selectedVendor) {
            setVendorId(selectedVendor.id);
        }
        else {
            console.warn('Vendor not found:', vendorName);
        }

    }

    useEffect(() => {
        const fetchVendors = async () => {
            try {
                const { data, error } = await supabase
                    .from("vendors")
                    .select("*");
                if (error) {
                    console.error("Error fetching inventory:", error.message);
                } else {
                    setVendors(data);
                }
            }
            catch(error){
                alert(error.message);
                return;
            }
        };
        fetchVendors();
    }, []); // Fetching vendors   

    return (
        <>
            <div className="overflow-x-auto mt-10">
                <div className="navigation-btn pl-[16px] mb-10">
                    <button
                        className="btn btn-outline btn-secondary"
                        onClick={() => navigate("/products")}
                    >
                        <ChevronLeft size={20} /> Back to bills
                    </button>
                </div>
                <div className="heading pl-[16px]">
                    <h2 className="text-2xl font-semibold">Add New Bill</h2>
                    <p className="text-sm pt-1 text-neutral-400">
                        Enter the details for the new vendor bill
                    </p>
                </div>
                <div className="add-new-bill pl-[16px] mt-7 mb-10">
                    <div className="tabs tabs-lift">
                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab"
                            aria-label="Bill"
                            defaultChecked
                        />
                        <div className="tab-content bg-base-100 border-base-300 p-6 rounded-b-2xl rounded-tr-2xl">
                            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-5 rounded-xl">
                                <h2 className="text-2xl font-semibold pb-3">
                                    Bill Information
                                </h2>

                                <div className="vendor-date-due grid grid-cols-3 items-center gap-4">
                                    <div className="w-full">
                                        {["vendor_name"].map((field) => (
                                            <>
                                                <label className="fieldset-label text-sm pb-1.75">
                                                    Vendor Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name={field}
                                                    value={billForm[field]}
                                                    onChange={handleBillChange}
                                                    onBlur={() =>
                                                        setTimeout(() => {
                                                            setSuggestions(null);
                                                        }, 100)
                                                    }
                                                    className="input mb-3 w-full"
                                                    placeholder="Enter vendor name"
                                                />

                                                {suggestions === field &&
                                                    dropDownData[field]
                                                        ?.length > 0 && (
                                                        <div className="relative">
                                                            <ul className="absolute dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                                {dropDownData[field]
                                                                    .slice(0, 5)
                                                                    .map(
                                                                        (
                                                                            item,
                                                                            index
                                                                        ) => (
                                                                            <li className=""
                                                                                key={
                                                                                    index
                                                                                }
                                                                                onClick={() =>
                                                                                    handleSelectDropDown(
                                                                                        field,
                                                                                        item, index
                                                                                    )
                                                                                }
                                                                            >
                                                                                {
                                                                                    <a className="py-3">{item}</a>
                                                                                }
                                                                            </li>
                                                                        )
                                                                    )}
                                                            </ul>
                                                        </div>
                                                    )}
                                            </>
                                        ))}
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Bill Date
                                        </label>
                                        <input
                                            type="date"
                                            name="bill_date"
                                            value={billForm.bill_date}
                                            onChange={handleBillChange}
                                            placeholder="Pick a date"
                                            className="input mb-3"
                                        />
                                    </div>
                                </div>

                                <div className="bill-number-barcode grid grid-cols-3 items-center gap-4">
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Bill Number
                                        </label>
                                        <input
                                            type="text"
                                            name="bill_number"
                                            value={billForm.bill_number}
                                            onChange={handleBillChange}
                                            placeholder="Vendor bill number"
                                            className="input mb-3"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Barcode
                                        </label>
                                        <input
                                            type="text"
                                            name="parent_barcode"
                                            value={billForm.parent_barcode}
                                            onChange={handleParentBarcode}
                                            className="input mb-3 w-full"
                                            placeholder="Enter your product barcode"
                                        />
                                    </div>
                                </div>

                                <label className="fieldset-label text-sm">
                                    Bill Items
                                </label>
                                <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Description</th>
                                                <th>Quantity</th>
                                                <th>Unit Cost</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {billItems.length > 0 && billItems.map((bill, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="product_name"
                                                            value={
                                                                bill.product_name ? bill.product_name : ''
                                                            }
                                                            placeholder="Product name"
                                                            className="input"
                                                            onChange={(e) => handleBillItemsChange(e, index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="product_desc"
                                                            value={
                                                                bill.product_desc ? bill.product_desc : ''
                                                            }
                                                            placeholder="Product Description"
                                                            className="input"
                                                            onChange={(e) => handleBillItemsChange(e, index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="quantity"
                                                            value={
                                                                bill.quantity ? bill.quantity : ''
                                                            }
                                                            placeholder="Qty"
                                                            className="input"
                                                            onChange={(e) => handleBillItemsChange(e, index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <input
                                                            type="text"
                                                            name="unit_cost"
                                                            value={
                                                                bill.unit_cost ? bill.unit_cost : ''
                                                            }
                                                            placeholder="Unit cost"
                                                            className="input"
                                                            onChange={(e) => handleBillItemsChange(e, index)}
                                                        />
                                                    </td>
                                                    <td>
                                                        {bill.quantity ? bill.quantity *
                                                            bill.unit_cost : 0}
                                                    </td>
                                                </tr>
                                            ))
                                            }
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bill-amount flex flex-col items-end justify-end gap-3 mt-3">
                                    <div className="subtotal flex text-sm gap-26.5">
                                        <p>Subtotal: </p>
                                        <p>${billForm.total_amount}</p>
                                    </div>
                                    <div className="total flex text-lg gap-27">
                                        <p>Total:</p>
                                        <p>${billForm.total_amount}</p>
                                    </div>
                                </div>

                                <div className="footer-btns flex items-center justify-between mt-5">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => navigate("/bills")}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleSaveBillPaid}
                                    >
                                        Save Bill
                                    </button>
                                </div>
                            </fieldset>
                        </div>

                        <input
                            type="radio"
                            name="my_tabs_3"
                            className="tab"
                            aria-label="Credit"
                        />
                        <div className="tab-content bg-base-100 border-base-300 p-6">
                            <fieldset className="fieldset w-full bg-base-200 border border-base-300 p-5 rounded-xl">
                                <h2 className="text-2xl font-semibold pb-3">
                                    Bill Information
                                </h2>

                                <div className="vendor-date-due grid grid-cols-3 items-center gap-4">
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Vendor Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            // value={addFormS.name}
                                            // onChange={handleInputChange}
                                            className="input mb-3 w-full"
                                            placeholder="Enter vendor name"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Bill Date
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Pick a date"
                                            className="input mb-3"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Due Date
                                        </label>
                                        <input
                                            type="date"
                                            placeholder="Pick a date"
                                            className="input mb-3"
                                        />
                                    </div>
                                </div>

                                <div className="bill-number-barcode grid grid-cols-3 items-center gap-4">
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Bill Number
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Vendor bill number"
                                            className="input mb-3"
                                        />
                                    </div>
                                    <div className="w-full">
                                        <label className="fieldset-label text-sm pb-1.75">
                                            Barcode
                                        </label>
                                        <input
                                            type="text"
                                            name="barcode"
                                            // value={addFormS.unit_price}
                                            // onChange={handleInputChange}
                                            className="input mb-3 w-full"
                                            placeholder="Enter your product barcode"
                                        />
                                    </div>
                                </div>

                                <label className="fieldset-label text-sm">
                                    Bill Items
                                </label>
                                <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Description</th>
                                                <th>Quantity</th>
                                                <th>Unit Cost</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="Product name"
                                                        className="input"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="Product Description"
                                                        className="input"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="Qty"
                                                        className="input"
                                                    />
                                                </td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        placeholder="Unit cost"
                                                        className="input"
                                                    />
                                                </td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className="bill-amount">
                                    <div className="subtotal">
                                        <p>Subtotal:</p>
                                        <p>$0.00</p>
                                    </div>
                                    <div className="total">
                                        <p>Total:</p>
                                        <p>$0.00</p>
                                    </div>
                                </div>

                                <div className="footer-btns flex items-center justify-between mt-5">
                                    <button
                                        className="btn btn-outline"
                                        onClick={() => navigate("/bills")}
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        // onClick={handleSaveBillCredit}
                                    >
                                        Save Bill
                                    </button>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

import { ChevronLeft, Save  } from 'lucide-react';
import '../App.css'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase.js' 

export default function AddProducts() {

    const navigate = useNavigate();
    const [addFormS, setaddFormS] = useState({
        name: '',
        category: '',
        desc: '',
        unit_price: '',
        barcode_id: '',
    });
    const [inventory, setInventory] = useState([]);

    const handleInputChange = (e) => {

        const { name, value } = e.target;

        setaddFormS((prevForm) => ({ ...prevForm, [name]: value }));
    
    }

    useEffect(() => {
        console.log(inventory);
    },[inventory]); // debugging - remove upon publishing

    const handleAddProductS = async () => {

        try {
            
            let newEntries = [];

            newEntries.push({
                product_name: addFormS.name,
                category: addFormS.category,
                unit_price: parseFloat(addFormS.unit_price), // Ensure it's a number
                product_desc: addFormS.desc,
                barcode_id: addFormS.barcode_id,
            });    
            
            const { data: existingData, error: fetchError } = await supabase
                .from('products')
                .select('barcode_id')
                .in('barcode_id', newEntries.map(entry => entry.barcode_id));

            if (fetchError){
                console.error('Error fetching existing barcodeID:', fetchError.message);
                return;
            }

            const existingBarcode = new Set(existingData?.map(item => item.barcode_id) || []);

            newEntries = newEntries.filter(entry => !existingBarcode.has(entry.barcode_id));

            if(newEntries.length === 0) {
                alert("BarcodeID already exists. No new products were added.");
                return;
            }

            const { data, error } = await supabase
                .from('products')
                .insert(newEntries)
                .select()

            if (error) {
                console.error('Error adding product:', error.message)
                alert('Error adding entry. Ensure barcode is unique')
            } else {
                setInventory([...inventory, ...data]);
                setaddFormS({
                    name: '',
                    category: '',
                    desc: '',
                    unit_price: '',
                    barcode_id: '',
                })
            }


        } catch (error) {
            console.error('Error adding:', error.message);
        }

    }


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
                    <fieldset className="fieldset w-2xl bg-base-200 border border-base-300 p-5 rounded-xl">
                        <h2 className="text-2xl font-semibold pb-3">
                            Product Information
                        </h2>
                        <label className="fieldset-label text-sm">
                            Product Name
                        </label>
                        <input
                            type="text"
                            name='name'
                            value={addFormS.name}
                            onChange={handleInputChange}
                            className="input mb-3 w-full"
                            placeholder="Enter Product Name"
                        />

                        <label className="fieldset-label text-sm">
                            Category
                        </label>
                        <select
                            className="select mb-3 w-full"
                            name='category'
                            value={addFormS.category}
                            onChange={handleInputChange}
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

                        <label className="fieldset-label text-sm">
                            Product Description
                        </label>
                        <textarea
                            className="textarea w-full mb-3"
                            name="desc"
                            value={addFormS.desc}
                            onChange={handleInputChange}
                            placeholder="Enter Product Description"
                        ></textarea>

                        <label className="fieldset-label text-sm">
                            Unit Cost ($)   
                        </label>
                        <input
                            type="text"
                            name="unit_price"
                            value={addFormS.unit_price}
                            onChange={handleInputChange}
                            className="input mb-3 w-full"
                            placeholder="0.00"
                        />

                        <label className="fieldset-label text-sm">
                            BarcodeID
                        </label>
                        <input
                            type="text"
                            name="barcode_id"
                            value={addFormS.barcode_id}
                            onChange={handleInputChange}
                            className="input mb-3 w-full"
                            placeholder="Enter Barcode"
                        />

                        <div className="footer-btns flex items-center justify-between mt-5">
                            <button
                                className="btn btn-outline"
                                onClick={() => navigate("/products")}
                            >
                                Cancel
                            </button>
                            <button
                                className="btn btn-primary"
                                onClick={handleAddProductS}
                            >
                                <Save size={20} /> Save Product
                            </button>
                        </div>
                    </fieldset>
                </div>
            </div>
        </>
    );

}
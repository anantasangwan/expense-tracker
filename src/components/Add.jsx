// ========  input transaction + creates transaction object + saves transaction in localStorage ==========
import { useRef, useState } from 'react'

const Add = ({ setIncome, setExpense }) => {
    const desRef = useRef();
    const amtRef = useRef();
    const [type, setType] = useState("");

    // --- handle radio input selection ---
    const handleChange = (event) => {
        setType(event.target.value);
    }

    // --- handle submission of new transaction details ---
    const handleClick = () => {
        const des = desRef.current.value.trim();
        const amt = Number(amtRef.current.value.trim());

        if (des && !Number.isNaN(amt) && amt > 0 && type) 
        {
            // =======  Save transaction to localStorage =======
            // -- Create transaction object --
            const transaction = {
                "description": des,
                "amount": amt,
                "type": type,
                "date": new Date().toLocaleString().split(",")[0]
            };

            const history = JSON.parse(localStorage.getItem("history")) || [];

            localStorage.setItem(
                "history",
                JSON.stringify([transaction, ...history])
            );  // so that newest transactions appear first


            // ==== Update income/expense state and localStorage ====
            if (type === "income") {
                setIncome(prev => {
                    const updated = prev + amt;
                    localStorage.setItem("income", updated);
                    return updated;
                });
            }
            else if (type === "expense") {
                setExpense(prev => {
                    const updated = prev + amt;
                    localStorage.setItem("expense", updated);
                    return updated;
                });
            }

            // --- reset all input fields ---
            desRef.current.value = "";
            amtRef.current.value = "";

            // --- trigers checked={false} to reset radio buttons ---
            setType("");
        }
        else
            alert("Please fill in all transaction details correctly.");
    }

    return (
        <>
            <div className="mt-3.5 space-y-2.5">
                <h3 className="text-black-txt font-semibold mb-3">Add Transaction</h3>

                <div className="description space-y-1">
                    <p className="text-black-txt text-sm font-semibold">Description :</p>
                    <input ref={desRef} type="text" name="description" placeholder='Enter description' className="input" />
                </div>

                <div className="amount space-y-1">
                    <p className="text-sm font-semibold text-black-txt">Amount <span className="text-xs text-grey-txt">(enter in digits)</span> :</p>
                    <input ref={amtRef} type="text" name="amount" placeholder='Enter amount' className="input" />
                </div>

                <div className="type flex items-center gap-1.5">
                    <label className="text-sm text-black-txt font-semibold mr-5">Type : </label>

                    <label htmlFor="income" className="text-grey-txt font-medium text-sm mr-2.5 flex items-center gap-0.5">
                        <input onChange={handleChange} checked={type === "income"} type="radio" name="type" value="income" id="income"/>
                        <span>Income</span>
                    </label>

                    <label htmlFor="expense" className="text-grey-txt font-medium text-sm flex items-center gap-0.5">
                        <input onChange={handleChange} checked={type === "expense"} type="radio" name="type" value="expense" id="expense"/>
                        <span>Expense</span>
                    </label>
                </div>
            </div>

            <button onClick={handleClick} className="btn">Add Transaction</button>
        </>
    )
}

export default Add

import { useRef, useState } from 'react'
import Balance from './Balance.jsx';
import Add from './Add.jsx';
import Cards from './Cards.jsx';
import Table from './Table.jsx';

const Content = () => {
    const [income, setIncome] = useState(Number(localStorage.getItem("income")) || 0);
    const [expense, setExpense] = useState(Number(localStorage.getItem("expense")) || 0);

    // --- handle income input on first load of page ---
    const inputRef = useRef();
    const handleClick = () => {
        const value = Number(inputRef.current.value.trim());

        if (!Number.isNaN(value) && value > 0) {
            localStorage.setItem("income", value);
            localStorage.setItem("expense", 0);
            setIncome(Number(value));
        }
        else
            alert("Please fill in income details correctly.");
    }

    // --- initial content when user hasn't specified his/her income yet ---
    if (!localStorage.getItem("income"))
        return (
            <div className="self-center flex flex-col bg-income-bg rounded-lg shadow-md px-6 py-4 mt-5 mb-10">
                <h3 className="text-black-txt font-bold mb-2">Enter your income <span className="text-xs">(in digits)</span> :</h3>
                <input ref={inputRef} type="text" name="income" placeholder='e.g. 50000' className="input" />
                <button onClick={handleClick} className="btn self-center">Confirm</button>
            </div>
        )

    // --- main content once user's income input is saved ---
    else return (
        <>
            <Balance balance={income - expense} />

            <Cards income={income} expense={expense} />

            {/* ---- A callback function passed from the parent to the child as a prop, allows the child to trigger the parent's state update & helps to re-render the parent ---- */}
            <Add setIncome={setIncome} setExpense={setExpense} />

            <div className="table mt-4">
                <Table />
            </div>
        </>
    )
}

export default Content

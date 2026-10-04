const Cards = ({income, expense}) => {
    return (
        <div className="cards flex gap-2">
            <div className="income bg-income-bg p-3 w-[50%] rounded-lg shadow-md flex flex-col gap-1.5 cursor-pointer">
                <h3 className="font-bold text-grey-txt self-center">Income</h3>
                <p className="text-lg font-bold self-center">${income.toLocaleString("en-US")}</p>
            </div>
            <div className="expense bg-expense-bg p-3 w-[50%] rounded-lg shadow-md flex flex-col gap-1.5 cursor-pointer">
                <h3 className="font-bold text-grey-txt self-center">Expense</h3>
                <p className="text-lg font-bold self-center">${expense.toLocaleString("en-US")}</p>
            </div>
        </div>
    )
}

export default Cards

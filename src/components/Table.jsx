// ========= reads + displays transaction history from localStorage to UI ===========
import './Table.css'

const Table = () => {
    const transactions = JSON.parse(localStorage.getItem("history"));
    // history --> [{trans1}, {trans2}, {trans3}, ....] 

    if (transactions)
        return (
            <>
                <h3 className="font-bold text-primary-txt text-lg">Transaction History</h3>

                <table className="w-full table-fixed shadow-lg shadow-black/20 rounded-lg mt-2">
                    <thead>
                        <tr>
                            <th className="bg-headerbg text-black-txt py-1.5 w-1/4 rounded-tl-lg max-sm:text-sm">Date</th>
                            <th className="bg-headerbg text-black-txt py-1.5 w-1/2 max-sm:text-sm">Description</th>
                            <th className="bg-headerbg text-black-txt py-1.5 w-1/4 rounded-tr-lg max-sm:text-sm">Amount</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            transactions.map((trans, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{trans.date}</td>
                                        <td>{trans.description}</td>
                                        <td className={trans.type}>{trans.type === "income" ? "+" : "-"} ${trans.amount.toLocaleString("en-US")}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    
    return null;
}

export default Table;

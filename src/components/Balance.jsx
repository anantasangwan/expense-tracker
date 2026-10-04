import React from 'react'

const Balance = ({balance}) => {
    return (
        <div className="balance self-center flex flex-col cursor-pointer">
            <p className="text-xl text-black-txt max-sm:text-[19px] font-bold self-center">Your Balance</p>
            <p className="text-primary-txt font-bold self-center">{balance < 0? "- " : "" } ${Math.abs(balance).toLocaleString("en-US")}</p>
        </div>
    )
}

export default Balance

import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'

export default function Dashboard() {
    return(
        <div className='flex gap-4 flex-col'>
            <DashboardStartsGrid/>
            <div className='flex flex-row gap-4 w-full'>
                <TransactionChart/>
                <BuyerProfileChart/>
            </div>
        </div>
    )
}

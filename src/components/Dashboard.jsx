import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionChart from './TransactionChart'

export default function Dashboard() {
    return(
        <div className='flex gap-4 flex-col'>
            <DashboardStartsGrid/>
            <TransactionChart/>
        </div>
    )
}

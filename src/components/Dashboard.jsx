import React from 'react'
import DashboardStartsGrid from './DashboardStartsGrid'
import TransactionChart from './TransactionChart'
import BuyerProfileChart from './BuyerProfileChart'
import RecentOrders from './RecentOrders'
import PopularProducts from './PopularProducts'

export default function Dashboard() {
    return(
        <div className='flex gap-4 flex-col'>
            <DashboardStartsGrid />
            <div className='flex flex-row gap-4 w-full'>
                <TransactionChart />
                <BuyerProfileChart />
            </div>
            <div className='flex flex-row gap-4 w-full'>
                <RecentOrders/>
                <PopularProducts/>
            </div>
        </div>
    )
}

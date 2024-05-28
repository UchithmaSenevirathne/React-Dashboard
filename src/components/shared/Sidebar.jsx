import React from 'react'
import { FcBullish } from 'react-icons/fc'
import { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/Navigation'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { HiOutlineLogout } from 'react-icons/hi'

const linkClasses = 'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base'

export default function Sidebar() {
    return(
        <div className='flex flex-col p-3 bg-neutral-900 w-60 text-white'>
            <div className='flex items-center gap-2 px-1 py-3'>
                <FcBullish fontSize={24}/>
                <span className='text-neutral-100 text-lg'>OpenShop</span>
            </div>
            <div className='flex-1 py-8 flex flex-col gap-0.5'>
                {DASHBOARD_SIDEBAR_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
            </div>
            <div className='flex flex-col gap-0.5 pt-2 border-t border-neutral-700'>
                {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
                    <SidebarLink key={item.key} item={item}/>
                ))}
                <div className={classNames ('text-red-500 cursor-pointer',linkClasses)}>
                    <span className='text-xl'><HiOutlineLogout/></span>
                    Logout
                </div>
            </div>
        </div>
    )
}

function SidebarLink({ item }) {
    const {pathname} = useLocation()

    return(
        <Link to={item.path} className={classNames (pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-400',linkClasses)}>
            <span className='text-xl'>{item.icon}</span>
            {item.label}
        </Link>
    )
}
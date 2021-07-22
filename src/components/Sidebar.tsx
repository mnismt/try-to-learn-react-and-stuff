import React, { useState } from 'react'
import clsx from 'clsx'

const MenuBlock = ({ index, title, icon, path, active, activeMenu }: any) => {
  const menuClass = clsx({
    [`flex px-5 py-5 mb-4 transition transform shadow-xl rounded-2xl hover:-translate-y-1`]: true,
    ['bg-green-400 text-white']: active,
    ['bg-transparent text-gray-500 hover:bg-green-400 hover:text-white']: !active,
  })
  return (
    <a className={menuClass} href="#" onClick={(_) => activeMenu(index)}>
      <span className="mr-2 material-icons-outlined">{icon}</span>
      <p className="text-lg font-semibold">{title}</p>
    </a>
  )
}

const Sidebar = () => {
  const [menus, setMenus] = useState([
    { title: 'Home', icon: 'home', path: '/', active: true },
    { title: 'My Tickets', icon: 'confirmation_number', path: '/', active: false },
    { title: 'Favorite', icon: 'bookmarks', path: '/', active: false },
    { title: 'Message', icon: 'email', path: '/', active: false },
    { title: 'Transaction', icon: 'account_balance_wallet', path: '/', active: false },
    { title: 'Settings', icon: 'settings', path: '/', active: false },
  ])

  const activeMenu = (index: number) => {
    setMenus(
      menus.map((menu, menuIndex) => {
        const active = menuIndex === index
        return { ...menu, active }
      })
    )
  }

  return (
    <div className="max-w-full ">
      <div className="m-4 mb-0">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Logo" />
      </div>
      <div id="menu-list" className="flex flex-col mt-14">
        {menus.map((menu, index) => (
          <MenuBlock key={index} {...menu} index={index} activeMenu={activeMenu} />
        ))}
      </div>
    </div>
  )
}

export default Sidebar

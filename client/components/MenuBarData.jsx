import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from 'react-icons/gi'

export const MenuBarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'News',
    path: '/news',
    icon: <FaIcons.FaEnvelopeOpenText/>,
    cName: 'nav-text'
  },
  {
    title: 'Games',
    path: '/games',
    icon: <GiIcons.GiBrutalHelm />,
    cName: 'nav-text'
  },
  {
    title: 'MobileApps',
    path: '/mobileApps',
    icon: <AiIcons.AiFillAndroid />,
    cName: 'nav-text'
  },
  {
    title: 'Forum',
    path: '/forum',
    icon: <AiIcons.AiFillMessage />,
    cName: 'nav-text'
  },
  {
    title: 'Store',
    path: '/store',
    icon: <FaIcons.FaCartPlus/>,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
]
import { Link } from 'gatsby'
import * as React from 'react'
import { 
  container,
  heading,
  navLinkItem,
  navLinks,
  navLinkText
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}><Link to='/' className={navLinkText}>Home</Link></li>
          <li className={navLinkItem}><Link to='/about' className={navLinkText}>About</Link></li>
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout
import React from 'react'
import Link from 'next/link'

const Navigation = () => {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1024px-Nextjs-logo.svg.png" width={100} height={120} />
                </a>
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href='/'>
                        <a className="navbar-item">
                            Home
                        </a>
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
                        <div className="navbar-dropdown">
                            <Link href='/about'>
                                <a className="navbar-item">
                                    About
                                </a>
                            </Link>
                          <Link href='services'>
                              <a className="navbar-item">
                                  Services
                              </a>
                          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
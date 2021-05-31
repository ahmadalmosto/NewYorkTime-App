import React from 'react'
import Search from './Search'
import Books from './Books'
import ArticlesData from './ArticlesData'
import './Style/Nav.css'
export default function Nav() {
    return (
        <>
            <Search />
            <div className="bigCon">
                <div className="left">
                    <ArticlesData />
                </div>
                <div className="right">
                    <Books />
                </div>
            </div>
        </>
    )
}

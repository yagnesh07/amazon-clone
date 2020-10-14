import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"

function Header() {
    return (
        <nav className = "header">
            {/* logo on the lesft side */}

            <Link to = "/">
                <img  className = "header__logo" 
                src = "http://pngimg.com/uploads/amazon/amazon_PNG25.png" 
                alt = ""/>
            </Link>

            {/* search bar */}
            <div className = "header__search">
                <input type = "text" className = "header_searchInput" />
                <SearchIcon className = "header__searchIcon" />
            </div>
           
            {/* 3 links */}
            <div className = "header__nav">
                {/* link 1*/}

                <Link to = "/login" className = "header__link">
                    <div className = "header__option">
                        <span className = "header__optionLineOne">Hello Yagnesh</span>
                        <span className = "header__optionLineTwo">Sign in</span>
                    </div>
                </Link>

                {/* link 2*/}

                <Link to = "/" className = "header__link">
                    <div className = "header__option">
                        <span className = "header__optionLineOne">Returns</span>
                        <span className = "header__optionLineTwo">& Orders</span>
                    </div>
                </Link>

                {/* link 3*/}

                <Link to = "/" className = "header__link">
                    <div className = "header__option">
                        <span className = "header__optionLineOne">Your</span>
                        <span className = "header__optionLineTwo">Prime</span>
                    </div>
                </Link>

                {/* link 4*/}

                <Link to = "/checkout" className = "header__link">
                    <div className = "header__optionBasket">
                        {/* Shopping basket icon*/}
                        <ShoppingBasketIcon/>
                        {/* No. of items in the basket*/}
                        <span className = "header__optionLineTwo header__basketCount">0</span>
                    </div>
                </Link>
            </div>
            {/* Basket icon with number */}
        </nav>
    )
}

export default Header


{/* rfce */}
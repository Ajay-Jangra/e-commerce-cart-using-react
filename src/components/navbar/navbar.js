import { Link } from "react-router-dom"
import { useState } from "react"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';


import SearchIcon from '@mui/icons-material/Search';

const NavBar = ({ onSearch, cartItemCount }) => {

    const [searchQuery, setSearchQuery] = useState('');


    const handleSubmit = () => {
        if (searchQuery.trim().length) {
            onSearch(searchQuery.trim())
        }
        setSearchQuery('')
    }

    return (
        <div className="wrapper">
            <header className="container">
                <div className="header py-2">
                    <div className="grid">
                        <Link to="/" className="link">
                            <h1 className="brand">SUSTAINABLE_CART</h1>
                        </Link>
                        <div className="formContainer">
                            <form className="search">
                                <div className="form-control">
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={e => setSearchQuery(e.target.value)}
                                        placeholder="Search products..."
                                    />
                                </div>
                                <button type="button" className="search-btn" onClick={handleSubmit} >
                                    <SearchIcon />
                                </button>
                            </form>
                        </div>
                        <Link to="/cart" className="link headerCart">
                            <ShoppingCartIcon />
                            {cartItemCount > 0 && (
                                <div className="cartCounter">{cartItemCount <= 9 ? cartItemCount : "9+"}</div>
                            )}
                        </Link>
                        <Link to='/profile'>
                            <AccountCircleIcon style={{ color: "aqua" }}
                            />
                        </Link>

                    </div>
                </div>
            </header>
        </div>
    )
}

export { NavBar }
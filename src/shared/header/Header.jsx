import "./Header.scss"
function Header() {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">About</a></li>
                        <li><a href="/#">Contact</a></li>
                    </ul>
                    <img src="https://cdn-icons-png.flaticon.com/512/1432/1432527.png" alt={""} />
                </nav>
            </header>
        </>
    );
}

export default Header;
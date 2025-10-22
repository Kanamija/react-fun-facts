import reactLogo from "./assets/React-icon.svg";

export default function Header() {
    return (
        <header className="header">
         <img 
            src={reactLogo}
            alt="React logo"
            className="nav-logo"
            style={{ display: "block" }}
        />
        <nav>
            <ul className="nav-list">
                <li className="nav-list-item">Pricing</li>
                <li className="nav-list-item">About</li>
                <li className="nav-list-item">Contact</li>
            </ul>
        </nav>
       </header>
    )
}
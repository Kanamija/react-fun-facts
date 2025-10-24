import reactLogo from "../assets/react.svg";

export default function Navbar() {
  return (
    <header className="site-header">
      <nav> 
        <img src={reactLogo} alt="React logo" />
        <span>RactFacts</span>
      </nav>
    </header>
  );
} 
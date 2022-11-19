import swLogo from "../../assets/Star_Wars_Logo.png"
import "./Header.css"

export default function Header() {
    return (
        <header>
            <img src={swLogo} alt="Star Wars logo"/>
        </header>
    )
}
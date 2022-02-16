import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
// import { ReactComponent as Logo } from '../assets/logo.svg';
// import { ReactComponent as LWhite } from '../assets/logowhite.svg';

export default function Topbar({ menuOpen, setMenuOpen }) {
  // On choisit le logo à afficher selon que le menu soit ouvert ou fermé
  // var mylogo;
  // if (menuOpen) {
  //   mylogo = <LWhite />;
  // } else {
  //   mylogo = <Logo />;
  // }
  // Fin choix du logo
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          {/* <a href="#intro" className="icon">
            {mylogo}
          </a>
          <a href="#intro" className="logo">Scorpion Tech</a> */}
          <div className="itemContainer">
            <Person className="icon" />
            <a href="tel:+33767754304" className={"lien" + (menuOpen && "active")}>
              <span>+33 7 67 75 43 04</span>
            </a>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="#contact" className={"lien" + (menuOpen && "active")}>
              <span>victor@scorpion-tech.fr</span></a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

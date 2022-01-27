import logo from './assets/logobanco.png';

const Navbar = () => {

    return (
        <header>
            <img className="logo" src={logo} alt="Logo Banco" />
            <p>Banco de Prueba</p>
        </header>
    )
}

export default Navbar;
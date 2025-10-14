import logo from "../imagenes/logo.png";

export default function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
                <div className="container">
                    <a className="navbar-brand fw-bold text-primary d-flex align-items-center" href="#">
                        <img src={logo} alt="logo" style={{ width: 60 }} />
                        <span className="ms-2">Acatrova</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link active" href="#hero">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#content-info">About Us</a></li>
                            <li className="nav-item"><a className="nav-link" href="#degrees">Academics</a></li>
                            <li className="nav-item"><a className="nav-link" href="#info">Faculty</a></li>
                            <li className="nav-item"><a className="nav-link" href="#footer">Contact</a></li>
                            <li className="nav-item">
  <a className="nav-link btn btn-primary text-white ms-2" href="/Login">
    Campus Virtual
  </a>
</li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

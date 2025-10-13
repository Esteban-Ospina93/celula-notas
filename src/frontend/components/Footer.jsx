import logo from "../imagenes/logo.png"

export default function Footer() {
    return (
        <>
            <footer id="footer" className="bg-black text-white py-4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6 col-md-3 mb-4">
                            <h1 className="h5 d-flex align-items-center"><img src={logo} alt="logo" style={{ width: 60 }} /> <span className="ms-2">ACATROVA</span></h1>
                            <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo et doloribus officia cumque facilis quisquam.</p>
                            <ul className="list-unstyled text-start">
                                <li><i className="fa-solid fa-location-dot" /> AV ciega con calle 123, Chupamestepenco - Antioquia</li>
                                <li><i className="fa-solid fa-phone" /> (+57) 343-343-3455</li>
                                <li><i className="fa-solid fa-envelope" /> no_moleste@gmail.com</li>
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h3>Location</h3>
                            <ul className="list-unstyled">
                                {['Chupamestepenco', 'Tangamandapio', 'Ciudad Gotica', 'Narnia', 'Pueblo Paleta'].map(x => (
                                    <li key={x}><i className="fa-solid fa-arrow-right" /> {x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h3>Ours Campus</h3>
                            <ul className="list-unstyled">
                                {['Academic', 'Planning & administration', 'Campus Safety', 'Facility Services', 'Human Resources'].map(x => (
                                    <li key={x}><i className="fa-solid fa-arrow-right" /> {x}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-6 col-md-3 mb-4">
                            <h3>Academics</h3>
                            <ul className="list-unstyled">
                                {['Master\'s Programs', 'Doctoral Programs', 'Online Programs', 'Graduate Certificates', 'Academic Calendar'].map(x => (
                                    <li key={x}><i className="fa-solid fa-arrow-right" /> {x}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container text-center mt-3">
                    <p>&copy; 2025 Acadrova. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

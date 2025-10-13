import estudiando from "../imagenes/estudiando.jpg"
import chica from "../imagenes/chica.webp"

export default function Info() {
    return (
        <>
            <section id="info" className="py-5">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <div className="card-body">
                                    <h2 className="card-title my-4 text-start fs-1">We enter to learn, leave to achieve</h2>
                                    <p className="card-text text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. In exercitationem sequi modi molestiae, obcaecati beatae odit iusto ipsa optio, earum facilis asperiores, sapiente sit ratione consequatur voluptas architecto eligendi! Corporis?</p>
                                    <h4 className="text-start my-4">Visit our campus:</h4>
                                    <ul className="list-unstyled text-start">
                                        <li><i className="fa-solid fa-location-dot" /> AV ciega con calle 123, Chupamestepenco - Antioquia</li>
                                        <li><i className="fa-solid fa-phone" /> (+57) 343-343-3455</li>
                                        <li><i className="fa-solid fa-envelope" /> no_moleste@gmail.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src={estudiando} className="card-img-top" alt="estudiando" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">Tuition & Funding</h5>
                                    <p className="card-text text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odit doloribus accusantium quae excepturi, omnis laboriosam ea nulla, perspiciatis magni consectetur quia, distinctio dolor voluptatum delectus reiciendis incidunt libero laborum!</p>
                                    <p className="text-start">
                                        <a href="#" className="btn btn-primary">Learn More</a>
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div className="col-md-4 mb-4">
                            <div className="card h-100">
                                <img src={chica} className="card-img-top" alt="chica" />
                                <div className="card-body">
                                    <h5 className="card-title text-start">Admissions</h5>
                                    <p className="card-text text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos odit doloribus accusantium quae excepturi, omnis laboriosam ea nulla, perspiciatis magni consectetur quia, distinctio dolor voluptatum delectus reiciendis incidunt libero laborum!</p>
                                    <p className="text-start">
                                        <a href="#" className="btn btn-primary">Learn More</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

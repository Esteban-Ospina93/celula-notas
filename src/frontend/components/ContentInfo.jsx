import estudiantes from "../imagenes/estudiantes.jpg";

export default function ContentInfo() {
    return (
        <>
            <section id="content-info" className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="fw-bold">Developing caring learners who are actively growing and achieving</h2>
                            <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus excepturi asperiores fugit dolores necessitatibus impedit dolorum dignissimos dolore laborum voluptate nesciunt distinctio itaque dolor voluptatem hic corporis ipsum, voluptatum ab?</p>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <h2>✅ Academic excellence</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ea adipisci numquam est rerum soluta maiores consectetur perspiciatis, vel accusamus.</p>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <h2>🌍 Across the globe</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint ea adipisci numquam est rerum soluta maiores consectetur perspiciatis, vel accusamus.</p>
                                </div>
                            </div>
                            <a href="#" className="btn btn-primary">Discover More</a>
                        </div>
                        <div className="col-md-6">
                            <img src={estudiantes} className="img-fluid rounded" alt="Students" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

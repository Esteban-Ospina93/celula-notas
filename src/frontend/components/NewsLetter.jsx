

export default function NewsLetter() {
    return (
        <>
            <section id="newsletter" className="text-white text-center py-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-sm-6 text-start">
                            <h3>Don't Miss Our Updates</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla impedit quidem numquam doloremque itaque voluptas obcaecati nihil eaque mollitia.</p>
                        </div>
                        <div className="col-12 col-sm-6">
                            <form className="d-flex justify-content-center mt-3" onSubmit={(e) => e.preventDefault()}>
                                <input type="email" className="form-control w-50 me-2" placeholder="Enter your email" />
                                <button className="btn btn-secondary">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

import React from 'react'

export default function TopBar() {
    return (
        <>
            <div className="bg-dark text-white py-1 small">
                <div className="container d-flex justify-content-between">
                    <div>📞 +62(21) 2002-2012 | 📧 hello@yourdomain.tld | 🕑 Mon - Fri: 09.00-17.00</div>
                    <div>
                        <ul className="nav nav-pills">
                            <li className="nav-item"><a className="nav-link fa-brands fa-facebook me-3" href="#" aria-label="facebook" /></li>
                            <li className="nav-item"><a className="nav-link fa-brands fa-twitter me-3" href="#" aria-label="twitter" /></li>
                            <li className="nav-item"><a className="nav-link fa-brands fa-linkedin me-3" href="#" aria-label="linkedin" /></li>
                            <li className="nav-item"><a className="nav-link fa-brands fa-square-behance me-3" href="#" aria-label="behance" /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

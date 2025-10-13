import React from 'react'

export default function Degrees() {
    return (
        <>
            <section id="degrees" className="bg-light py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="bg-primary text-white p-4 rounded">
                                <h3>Degrees & Certifications</h3>
                                <hr className="border-3 border border-light" />
                                <ul className="list-unstyled">
                                    {[
                                        ['Bachelor\u2019s', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
                                        ['Master\u2019s', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
                                        ['Doctoral', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
                                        ['Certification', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'],
                                        ['Minor', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.']
                                    ].map(([title, text]) => (
                                        <li key={title} className="mb-3">
                                            <h5>{title}</h5>
                                            <p>{text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <h3>Majors, minors & graduate programs</h3>
                            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora vero cupiditate quos eius distinctio ut, doloribus asperiores adipisci ipsum! Voluptatibus, suscipit libero eos qui nostrum quas asperiores blanditiis rem eveniet?</p>
                            <div className="row">
                                {[
                                    ['💻 Computer Science', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nisi, quod quo et saepe minima earum voluptates est facere ut modi, vitae minus consequuntur velit repellendus architecto ducimus? Dolorem, culpa.'],
                                    ['📈 Management Business', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam magni alias incidunt modi, illum quibusdam nesciunt autem sequi ipsam quod'],
                                    ['🧬 Sciences', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero eveniet delectus tenetur et vero, porro labore repellat dolores '],
                                    ['🏗️ Engineering', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat tempore dolore aspernatur magni ex ratione, ducimus atque eos culpa'],
                                    ['⚖️ Law Department', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel fuga ex dignissimos corrupti aliquid ipsum natus perspiciatis. Repellat '],
                                    ['🎨 Art & Design', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora aliquid facere veniam voluptatibus sapiente ex assumenda, excepturi quas']
                                ].map(([title, desc]) => (
                                    <div className="col-6 mb-4" key={title}>
                                        <h5>{title}</h5>
                                        <p>{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

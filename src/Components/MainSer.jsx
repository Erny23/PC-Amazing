import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const MainSer = () => {
  return (
    <>
        <main>
            <div className="migajasDePan">
                <div className="ms-5">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/'}>Inicio</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Servicios</Breadcrumb.Item>
                </Breadcrumb>
                </div>
            </div>
            <section className='container py-3' id='servicios'>
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card mb-3" style={{maxWidth:' 540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="cardImg1.jpg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Importaciones</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3" style={{maxWidth:' 540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="cardImg3.jpg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Presupuestos</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3" style={{maxWidth:' 540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="cardImg3.jpg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Armado</h5>
                                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card mb-3" style={{maxWidth:' 540px'}}>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="cardImg2.jpg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Asistencia</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default MainSer
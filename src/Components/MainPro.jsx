import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'

const MainPro = () => {
  return (
    <>
        <main>
            <div className="migajasDePan">
                <div className="ms-5">
                <Breadcrumb>
                    <Breadcrumb.Item>
                        <Link to={'/PC-Amazing'}>Inicio</Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Productos</Breadcrumb.Item>
                </Breadcrumb>
                </div>
            </div>
            <section className='container-fluid my-4'>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner" style={{borderRadius:'18px'}}>
                        <div className="carousel-item active">
                            <img src="bannerImg1.png" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="bannerImg2.jpg" className="d-block w-100" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <img src="bannerImg3.jpg" className="d-block w-100" alt="..."/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="row pb-3" style={{width:'100%'}}>
                <div className="col col-3 col-md-2 container"  id="catContenedor">
                    <h4 className="text-center">Categorias</h4>
                    <div id="filtroCategorias">
                        <h5 className="ms-3">
                            <a href="#">Case</a>
                        </h5>
                    </div>
                </div>
                <div className="col col-9">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3" id="listProductos">
                        <div className="col">
                        <div className="card h-100">
                            <img src="imagen7.JPG" className="card-img-top pt-2 ps-2 pe-2" alt="item"/>
                            <div className="card-body">
                                <h5 className="card-title">Lian Li - Case O11 Dynamic para computadora de videojuegos, Blanco</h5>
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

export default MainPro
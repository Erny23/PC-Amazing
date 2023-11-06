const MainIni = () => {
  return (
    <>
        <main>
        <section>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src="carruselImg1.jpg" className="d-block w-100" alt="imgCarrusel1"/>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src="carruselImg2.jpg" className="d-block w-100" alt="imgCarrusel2"/>
                            </div>
                            <div className="carousel-item">
                                <img src="carruselImg3.jpg" className="d-block w-100" alt="imgCarrusel3"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </section>
            <section className="categorias1 my-3 p-3" style={{background:'white'}}>
                <div className="row row-cols-1 row-cols-sm-2 g-3 align-items-center justify-content-center">
                    <div className="col col-sm-4">
                        <a href="#" className="contentCat">
                            <span className="Image">
                                <img src="Case-gaming.jpg" alt="case" />
                            </span>
                            <span className="capi">Categoria</span>
                            <strong className="title">Cases</strong>
                        </a>
                    </div>
                    <div className="col">
                        <div className="listCat row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                            <div className="col-sm-6">
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="Mouse-gaming-Logitech-G502-X.jpg" alt="mouse"/>
                                    </span>
                                    <span className="capi">Categoria</span>
                                    <strong className="title">Mouse</strong>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="audifonos-gaming.jpg" alt="audifonos"/>
                                    </span>
                                    <span className="capi">Categoria</span>
                                    <strong className="title">Audifonos</strong>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="Teclado-gaming.jpg" alt="teclados"/>
                                    </span>
                                    <span className="capi">Categoria</span>
                                    <strong className="title">Teclados</strong>
                                </a>
                            </div>
                            <div className="col-sm-6">
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="monitor-gaming.jpg" alt="monitores"/>
                                    </span>
                                    <span className="capi">Categoria</span>
                                    <strong className="title">Monitores</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mb-3 p-3" id="carruselContainer">
                <div className="container-fluid">
                    <div className="d-flex" id="carruselProduct">
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen1.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Geforce RTX 3090</h4>
                                    <p className="card-text">Zotac</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen2.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">450w Bronce No Modular</h4>
                                    <p className="card-text">EVGA</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen3.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">RTX Geforce 2060</h4>
                                    <p className="card-text">MSI</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen4.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Supernova 1600w Titanum</h4>
                                    <p className="card-text">EVGA</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen5.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">RTX Geforce 3070 TUF GAMING OC</h4>
                                    <p className="card-text">ASUS</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen6.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">AMD Ryzen 5 5600</h4>
                                    <p className="card-text">AMD</p>
                                </div>
                            </div>
                            </a>
                        </div>
                        <div className="carruselItems col-6 col-sm-5 col-md-4 col-lg-3 col-xl-2 m-1">
                            <a href="#">
                            <div className="card h-100">
                                <img className="card-img-top p-1" src="../public/producto/imagen7.JPG" alt=""/>
                                <div className="card-body">
                                    <h4 className="card-title">Case ATX Gaming</h4>
                                    <p className="card-text">Lian Li</p>
                                </div>
                            </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="categorias1 my-3 p-3" style={{background:'white'}}>
                <div className="row row-cols-1 row-cols-sm-2 g-3 align-items-center justify-content-center">
                    <div className="col col-sm-4">
                        <a href="#" className="contentCat">
                            <span className="Image">
                                <img src="tarjeta grafica.jpg" alt="GPU" />
                            </span>
                            <span className="capi">Categorias</span>
                            <strong className="title">Tarjetas Graficas</strong>
                        </a>
                    </div>
                    <div className="col">
                        <div className="listCat row row-cols-1 g-3">
                            <div>
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="procesadores.jpg" alt="procesadores" />
                                    </span>
                                    <span className="capi">Categorias</span>
                                    <strong className="title">procesadores</strong>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="contentCat">
                                    <span className="Image">
                                        <img src="almacenamiento.jpg" alt="almacenamiento" />
                                    </span>
                                    <span className="capi">Categorias</span>
                                    <strong className="title">Almacenamiento</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default MainIni
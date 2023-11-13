import { Link } from 'react-router-dom'
import { Breadcrumb } from 'react-bootstrap'
import { useState } from 'react'
import productos from '../Data/productos.json'

const productosJson = productos;
const categoriasList = new Set();

productosJson.forEach((productosList) => {
    categoriasList.add(productosList.categoria);
});

const categorias = [...categoriasList];

const MainPro = () => {

    const [productosFil, setProductosFil] = useState(productosJson);
    const [paginacion, setPaginacion] = useState(1);

    const categoriaClick = (categoria) => {
        const filtrados = productosJson.filter((producto) => {
            return producto.categoria === categoria;
        })

        setProductosFil(filtrados);
    };

    const paginador = (pagina) => {
        setPaginacion(pagina);
    };

    const paginas = Math.ceil(productosFil.length / 9);
    const botonesPaginacion = [...Array(paginas + 1).keys()].slice(1);

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
                    {
                        categorias.map((categoria) => (
                         <div key={categoria.id} onClick={() => categoriaClick(categoria)}>
                             <h5 className="ms-3">
                                 <a href="#">{categoria}</a>
                             </h5>
                         </div>
                        ))

                        /*categorias.map((categoria) => (
                        <div key={categoria}>
                            <h5 className="ms-3">
                                <a href="#">{categoria}</a>
                            </h5>
                        </div>
                    ))*/}
                    </div>
                </div>
                <div className="col col-9">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-3" id="listProductos">
                        {productosFil.slice((paginacion - 1) * 9, paginacion * 9).map((productos) => (
                            <div className="col" key={productos.id}>
                                <div className="card h-100">
                                    <img src={productos.imagen} className="card-img-top pt-2 ps-2 pe-2" alt={productos.titulo}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{productos.titulo}</h5>
                                    </div>
                                </div>
                            </div>
                        ))

                        /*productosFil.map((productos) => (
                            <div className="col" key={productos.id}>
                                <div className="card h-100">
                                    <img src={productos.imagen} className="card-img-top pt-2 ps-2 pe-2" alt={productos.titulo}/>
                                    <div className="card-body">
                                        <h5 className="card-title">{productos.titulo}</h5>
                                    </div>
                                </div>
                            </div>
                        ))*/}
                    </div>
                    <div className="d-flex justify-content-center">
                        <ul className="pagination">
                          {botonesPaginacion.map((pagina) => (
                              <li key={pagina} className={pagina === paginacion ? "page-item active" : "page-item"}>
                                <a className="page-link" href="#" onClick={() => paginador(pagina)}>{pagina}</a>
                              </li>
                            ))
                            
                          /*[1, 2, 3, 4, 5].map((pagina) => (
                            <li key={pagina} className={pagina === paginacion ? "page-item active" : "page-item"}>
                              <a className="page-link" href="#" onClick={() => paginador(pagina)}>{pagina}</a>
                            </li>
                          ))*/}
                        </ul>
                      </div>
                </div>
            </section>
        </main>
    </>
  )
}

export default MainPro
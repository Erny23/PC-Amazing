import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
        <footer style={{background: '#05152F'}}>
            <div className="container">
                <div className="d-flex justify-content-center pt-3">
                    <Link to='/PC-Amazing'><img src="Logo PC Amazing.png" alt="" style={{width: '230px'}} /></Link>
                </div>
                <br/>
                <div className="row row-cols-2 row-cols-md-4">
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, debitis quo suscipit blanditiis eos illum culpa! Soluta necessitatibus sapiente ducimus beatae eum cupiditate esse quae blanditiis delectus nemo, dolore quidem?</p>
                    </div>
                    <div className="col">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus vero et veritatis officia iusto architecto ratione, eligendi ab explicabo adipisci aut non blanditiis amet nesciunt error quas minima porro.</p>
                    </div>
                    <div className="col">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis magni dignissimos ullam officiis enim nihil ad quia placeat, illo distinctio voluptate, minus perspiciatis, illum excepturi maxime exercitationem deserunt quaerat obcaecati.</p>
                    </div>
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam laudantium sunt saepe culpa vero accusamus. Error ipsum voluptatum tempora voluptatem quo est libero, dolorem hic blanditiis vero, esse, ex officiis!</p>
                    </div>
                </div>
                <br/>
                <div className="text-center py-3" id="firma">
                    <em>Ernesto Fava</em>
                </div>
                <br/>
                <div className="d-flex justify-content-center">
                    <a href="#">
                        <img src="Logo PC Amazing.png" alt="" style={{width:"250px"}}/>
                    </a>
                </div>
                <br/>
            </div>
        </footer>
    </>
  )
}

export default Footer
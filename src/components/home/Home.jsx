import React from 'react'
import bg from '../../Assets/bg2.jpeg'
import SearchIcon from '@material-ui/icons/Search';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import "./home.css"
function Home() {
    return (
        <div className="Home">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">

                    <Carousel>
                    <div>
                        <img className="bgimg" src={bg} />                     
                    </div>
                    <div>
                        <img className="bgimg" src={bg} />                     
                    </div>
                    <div>
                        <img className="bgimg" src={bg}/>                      
                    </div>
                </Carousel>
                    </div>
                </div>
                <section className=" search search-sec">

                <div className="container ">
                <form action="#" method="post" novalidate="novalidate">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0 search-slt right-border">
                                    <p>Looking for</p>
                                    <input type="text" className="form-control " placeholder="UI UX Promotion "/>
                                    
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-12 p-0 search-slt right-border">
                                     <p>In</p>
                                     <input type="text" className="form-control" placeholder="Jakarta Selaton"/>
                                </div>
                                <div className="col-lg-4 col-md-3 col-sm-12 p-0 search-slt ">
                                     <p>when</p>
                                    <select className="form-control" id="exampleFormControlSelect">
                                        <option>Any date </option>
                                        <option>Example one</option>
                                     
                                    </select>
                                    </div>
                                    <div className="col-lg-1 col-md-3 col-sm-12 p-0 search-slt right-border">
                                    <div className="searchicon">
                                        <SearchIcon/>
                                    </div>
                                    </div>
                                
                                
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        
            </div>
            
        </div>
    )
}

export default Home

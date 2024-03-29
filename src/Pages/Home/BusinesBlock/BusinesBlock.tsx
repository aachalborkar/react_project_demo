import React from 'react';
import './BusinesBlock.css';

export default class BusinesBlock extends React.Component{
render(){
  return(
    <>
     <div className="row align-items-center my-5">
      <div className="col-lg-7">
        <img className="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
      </div>
    
      <div className="col-lg-5">
        <h1 className="font-weight-light">Business Name or Tagline</h1>
        <p>This is a template that is great for small businesses. It doesn't have too much fancy flare to it, but it makes a great use of the standard Bootstrap core components. Feel free to use this template for any project you want!</p>
        <a className="btn btn-primary" href="#">Call to Action!</a>
      </div>
   
    </div>
   
 
    <div className="card text-white bg-secondary my-5 py-4 text-center">
      <div className="card-body">
        <p className="text-white m-0">This call to action card is a great place to showcase some important information or display a clever tagline!</p>
      </div>
    </div>
    </>
  )
}
}



import React from 'react'

const ServicesDetls = (props) => {
    const { pic, name, des } = props.data

    return (
      
           <div className=" col-4 py-3">
                  
           <div className="card " >
                <img src= {pic} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{des}</p>
                    <a className="btn btn-primary">Read More</a>
                </div>
            </div>
          
           
        </div>
    )
}

export default ServicesDetls

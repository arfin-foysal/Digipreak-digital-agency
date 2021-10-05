import React from 'react'
const ServicesDetls = (props) => {
    const { pic, name, des } = props.data

    return (

        <div className="  col-md-4 py-3">

            <div className="card shadow" style={{ height: "100%" }} >
                <img src={pic} className="card-img-top w-25" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{des}</p>
                    <p className="btn btn-primary">Read More</p>
                </div>
            </div>


        </div>
    )
}

export default ServicesDetls

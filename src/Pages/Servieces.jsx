import React, { useContext } from 'react'
import { DataContext } from '../Components/GlobalData'
import ServicesDetls from '../Components/ServicesDetls'

const Servieces = () => {
    const {data} = useContext(DataContext)
    return (
       <div className="servicesBG">
          <div className="container py-5 "  >
          <h2 className="text-center py-5 text-decoration-underline">OUR SERVICES</h2>
          <div className="row " >
          {data.map(val=> <ServicesDetls key={val.id} data={val}/>)}
          </div>
        </div>
       </div>
    )
}

export default Servieces

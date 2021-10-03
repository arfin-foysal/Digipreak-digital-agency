import React, { useContext } from 'react'
import { DataContext } from '../Components/GlobalData'
import ServicesDetls from '../Components/ServicesDetls'

const Servieces = () => {
    const {data} = useContext(DataContext)
    return (
        <div className="container py-5"  >
          <div className="row " >
          {data.map(val=> <ServicesDetls key={val.id} data={val}/>)}
          </div>
            
        </div>
    )
}

export default Servieces

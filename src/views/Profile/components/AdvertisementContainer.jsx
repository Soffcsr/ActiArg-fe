import React from 'react'
import Activity from './Activity'

const AdvertisementContainer = props => {
    return(
        <div className="card-group" id="Clases">
            {props.publicits.map((DataActivity) => {
                return <Activity
                    key={DataActivity.id}
                    img={DataActivity.img}

                    title={DataActivity.title}
                    description={DataActivity.description}
                />
            })}
        </div>
    )
}

export default AdvertisementContainer
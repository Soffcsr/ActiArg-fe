import React from 'react'

import Jumbotron from './Jumbotron'

import DatasJumbotron from '../../../samples/DatasJumbotron.json'

const ObjectivesContainer = props => {
    return(
        <div id="Nosotros">
            {DatasJumbotron.map((data) => {
                return <Jumbotron
                    img1={data.img1}
                    img2={data.img2}
                    img3={data.img3}
                    title={data.title}
                    subtitle={data.subtitle}
                    description={data.description}
                    objective1={data.objective1}
                    objectivedescription1={data.objectivedescription1}
                    objective2={data.objective2}
                    objectivedescription2={data.objectivedescription2}
                    objective3={data.objective3}
                    objectivedescription3={data.objectivedescription3}
                />
            })}
        </div>
    )
}

export default ObjectivesContainer
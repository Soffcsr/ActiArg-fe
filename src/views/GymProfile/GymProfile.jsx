import React from 'react'
import DatasJumbotron from '../../samples/DatasJumbotron.json'
import DataContact from '../../samples/DataContact.json'
import Jumbotron from '../GymProfile/Jumbotron/Jumbotron'
import Contact from '../GymProfile/Contact'
import Activity from './Activities/Activity'
import DataActivities from '../../samples/DataActivities.json'


const GymProfile = props => {
    return(
        <div>
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
    <br/>
    {DataContact.map((data) => {
            return <Contact 
            phone= {data.phone}
            adress={data.adress}
            atention={data.atention}            
            />  
    })}
        
        <div className="card-group">
                {DataActivities.map((DataActivity) => {
                    return <Activity
                        key={DataActivity.id}
                        img={DataActivity.img}
                        alt={DataActivity.alt}
                        title={DataActivity.title}
                        description={DataActivity.description}
                        action={DataActivity.action}
                        nameBtn={DataActivity.nameBtn}
                        size={DataActivities.size}
                    />
                })}
            </div>
    </div>

    )
}

export default GymProfile


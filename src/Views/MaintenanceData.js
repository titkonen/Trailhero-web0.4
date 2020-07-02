import React from 'react';
import firebase from '../firebase';

import './Views.css';
import { ReadMaintenance } from '../components/ReadMaintenance';

function MaintenanceData() {
  const [maintenanceinfos, setMaintenanceinfos] = React.useState( [] )
  const [maintenance, setMaintenance] = React.useState( [] )

  const [newFrontFork, setNewFrontFork] = React.useState()
  const [newRearShock, setNewRearShock] = React.useState()

  const [newFrontWheel, setNewFrontWheel] = React.useState()
  const [newFrontTire, setNewFrontTire] = React.useState()
  const [newRearWheel, setNewRearWheel] = React.useState()
  const [newRearTire, setNewRearTire] = React.useState()

  const [newFrontBrake, setNewFrontBrake] = React.useState()
  const [newRearBrake, setNewRearBrake] = React.useState()

  const [newRearDerailleur, setNewRearDerailleur] = React.useState()
  const [newShifters, setNewShifters] = React.useState()
  const [newCrankset, setNewCrankset] = React.useState()
  const [newCassette, setNewCassette] = React.useState()
  const [newChain, setNewChain] = React.useState()
   
   // Bike Basic info 
   React.useEffect(() => {
     const db = firebase.firestore();
     return db.collection('maintenance').onSnapshot((snapshot) => {
       const huoltotieto = [];
       snapshot.forEach(doc => huoltotieto.push({...doc.data(), id: doc.id }));
       setMaintenanceinfos(huoltotieto);
     });
 }, []);
 
   const saveAll = () => {
     const db = firebase.firestore();
     db.collection('maintenance').add({ 
       frontfork: newFrontFork, 
       rearshock: newRearShock,
       frontwheel: newFrontWheel,
       fronttire: newFrontTire,
       rearwheel: newRearWheel,
       reartire: newRearTire,
       frontbrake: newFrontBrake,
       rearbrake: newRearBrake,
       rearderailleur: newRearDerailleur,
       shifters: newShifters,
       crankset: newCrankset,
       cassette: newCassette,
       chain: newChain
    
     });
   }


   return (
     <div>
       
        <h2 className="subheading-info">Add your Bike components </h2>
          <h3 className="subheading-info">Suspensions</h3>
          <div className="row ml-16"> 
            <div className="column">
              <label className="labelname">Front fork</label><br></br>
              <input
                value={newFrontFork}
                className="input"
                placeholder="Front fork"
                size="20"
                onChange={(event) => setNewFrontFork(event.target.value)}
              /> 
            </div>  
         
            <div className="column">
              <label className="labelname">Rear shock</label><br></br>
              <input
                value={newRearShock}
                className="input"
                placeholder="Rear shock"
                size="20"
                onChange={(event) => setNewRearShock(event.target.value)}
              /> 
            </div>
          </div>

          <h3 className="subheading-info">Wheels</h3>
          <div className="row ml-16">     

            <div className="column">
              <label className="labelname">Front wheel</label><br></br>
              <input
                value={newFrontWheel}
                className="input"
                placeholder= "Front wheel"
                size="20"
                onChange={(event) => setNewFrontWheel(event.target.value)}
              /> 
            </div>  

            <div className="column">
              <label className="labelname">Front tire</label><br></br>
              <input
                value={newFrontTire}
                className="input"
                placeholder= "Front tire"
                size="20"
                onChange={(event) => setNewFrontTire(event.target.value)}
              /> 
            </div>   

            <div className="column">
              <label className="labelname">Rear wheel</label><br></br>
              <input
                value={newRearWheel}
                className="input"
                placeholder= "Rear wheel"
                size="20"
                onChange={(event) => setNewRearWheel(event.target.value)}
              /> 
            </div>      

            <div className="column">
              <label className="labelname">Rear tire</label><br></br>
              <input
                value={newRearTire}
                className="input"
                placeholder= "Rear tire"
                size="20"
                onChange={(event) => setNewRearTire(event.target.value)}
              /> 
            </div> 
          </div>  

          <h3 className="subheading-info">Brakes</h3>
          <div className="row ml-16">   
            
            <div className="column">
              <label className="labelname">Front brake</label><br></br>
              <input
                value={newFrontBrake}
                className="input"
                placeholder= "Front brake"
                size="20"
                onChange={(event) => setNewFrontBrake(event.target.value)}
              /> 
            </div>

            <div className="column">
              <label className="labelname">Rear brake</label><br></br>
              <input
                value={newRearBrake}
                className="input"
                placeholder= "Rear brake"
                size="20"
                onChange={(event) => setNewRearBrake(event.target.value)}
              /> 
            </div>

          </div>

          <h3 className="subheading-info">Drivetrain</h3>
          <div className="row ml-16">   
            
            <div className="column">
              <label className="labelname">Rear derailleur</label><br></br>
              <input
                value={newRearDerailleur}
                className="input"
                placeholder= "Rear derailleur"
                size="20"
                onChange={(event) => setNewRearDerailleur(event.target.value)}
              /> 
            </div>

            <div className="column">
              <label className="labelname">Shifters</label><br></br>
              <input
                value={newShifters}
                className="input"
                placeholder= "Shifters"
                size="20"
                onChange={(event) => setNewShifters(event.target.value)}
              /> 
            </div>

            <div className="column">
              <label className="labelname">Crankset</label><br></br>
              <input
                value={newCrankset}
                className="input"
                placeholder= "Crankset"
                size="20"
                onChange={(event) => setNewCrankset(event.target.value)}
              /> 
            </div>

            <div className="column">
              <label className="labelname">Cassette</label><br></br>
              <input
                value={newCassette}
                className="input"
                placeholder= "Cassette"
                size="20"
                onChange={(event) => setNewCassette(event.target.value)}
              /> 
            </div>

            <div className="column">
              <label className="labelname">Chain</label><br></br>
              <input
                value={newChain}
                className="input"
                placeholder= "Chain"
                size="20"
                onChange={(event) => setNewChain(event.target.value)}
              /> 
            </div>

          </div>



            <div className="column">
              <button className="button" onClick={saveAll}>Save</button>
            </div>
            
            <div className="grey">
              <h2 className="subheading-info">My Maintenance status</h2> 
              <div className="grey ml-16">

                {maintenanceinfos.map(maintenanceinfo => (
                    <li 
                      key={maintenanceinfo.frontfork}
                      className="listmarker"
                    >
                    <ReadMaintenance maintenanceinfo={maintenanceinfo} />
                    </li>
                ))}
              </div>
        </div>
        
      </div>
    );
  }

export default MaintenanceData;
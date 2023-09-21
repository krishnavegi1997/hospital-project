import React, { useEffect, useState } from 'react'
import { useAddBedsMutation, useGetAllHospitalsQuery } from '../services/hospitalAPi'

function AddBed() {
    var [addbedsToDB]=useAddBedsMutation()
    const [bedCount,setBedCount]=useState(0)
    const [bedPrice,setBedPrice]=useState(0)
    const[selectedBedType,setSelectedBedType]=useState('')
    const {isLoading:isHospitalLoading,data:hospital}=useGetAllHospitalsQuery()
      const[selectedHospital,setSelectedHospital]=useState(null)
      function saveBed(){
        var newbeds=[];
        for(var i=0;i<=bedCount-1;i++){
      var newBed={
            bedStatus:'open',
            bedType:selectedBedType,
            bedPrice,
            patients:[],
            bedId:`${selectedBedType}${i+1}`
         }
         newbeds.push(newBed)
        }
        const lastestHospitalDetails={...selectedHospital,beds:[...selectedHospital.beds,...newbeds]}
        setSelectedHospital({...selectedHospital,beds:[...selectedHospital.beds,...newbeds]})
        addbedsToDB(lastestHospitalDetails)
      }
     useEffect(()=>{
        console.log(selectedHospital)
     },[selectedHospital])
  return (
    <div className='border border-2 border-danger m-2 p-2'>
        <h1>AddBed</h1>

        {
            isHospitalLoading &&(<b>wait....</b>)
        }
        {
            !isHospitalLoading &&(
                <select onChange={(e)=>{setSelectedHospital(JSON.parse(e.target.value))}}>
                    <option value={null} disabled selected>Please Select</option>
                     {
                        hospital.map((h)=>{
                            return(
                                <option value={JSON.stringify(h)}>{h.hospitalName}</option>
                            )
                        })
                     }
                </select>
            )
        }
        <br/>
        {
           selectedHospital && selectedHospital .bedTypes.length >0 &&(
                <> 
               <select onChange={(e)=>{setSelectedBedType(e.target.value)}}>
                <option value={null} disabled selected>Please Select</option>
                {
                    selectedHospital.bedTypes.map((bt)=>{
                        return<option value={bt.bedType}>{bt.bedType}</option>
                        
                    })
                }
               </select>
               <br/>
               <input type="number" placeholder='Enter Bed Count' onChange={(e)=>{setBedCount(e.target.value)}}/>
               <br/>
               <input type="number" placeholder=' Enter Bed Price' onChange={(e)=>{setBedPrice(e.target.value)}}/><br/>
               </>
               )
        }
        <br/>
        <button onClick={()=>{saveBed()}}>Save Beds</button>
    </div>
  )
}

export default AddBed
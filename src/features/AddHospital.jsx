import React, { useState } from 'react'
import {Formik} from 'formik'
import { bedTypes } from '../constants'
import { useAddHospitalMutation } from '../services/hospitalAPi'
function AddHospital() {
  
 var[newbedtype,setBedType]= useState({
    bedType:'',
    price:0
  })
  var [addedBedType,setAddedBedType]=useState([])
  var [addHospital]=useAddHospitalMutation()
  function addBedType(){
        setAddedBedType([...addedBedType,newbedtype])
  }
  return (
    <div className='border border-2 border-info'>    

        <Formik
       initialValues={
                         { 
                            hospitalName: '', 
                            image:'' ,
                            area:'',
                            reviews:[],
                            bedTypes:[],
                            beds:[]

                        }
                      }
       onSubmit={(values)=>{
           values.bedTypes=[...addedBedType]
           addHospital(values).then((res)=>{
            console.log("res:",res)
           })
       }}>
       {({
         values,
         errors,
         touched,
         handleChange,
         handleBlur,
         handleSubmit,
         isSubmitting,
         /* and other goodies */
       }) => (
         <form onSubmit={handleSubmit}>
           <input
             type="text"
             name="hospitalName"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.hospitalName}
             placeholder='Enter HospitalName'
           /><br/>
           <input
             type="text"
             name="image"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.image}
             placeholder='Enter Hospital Image'
           /><br/>
            <input
             type="text"
             name="area"
             onChange={handleChange}
             onBlur={handleBlur}
             value={values.area}
             placeholder='Enter Hospital area'
           /><br/>
             <ul>
                    {
                        addedBedType.length>0 && (<u>selected bedtypes</u>)
                    }
                    {
                        addedBedType.length>0 && addedBedType.map((a)=>{
                            return <li>
                                <i>{a.bedType}</i> &nbsp;
                                <b>{a.price}</b> &nbsp;
                            </li>
                        })
                    }
                </ul>
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
   +Bed Type 
</button>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Bed Type with Price</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <label htmlFor="">Select Bed Type</label>
        <select onChange={(e)=>{setBedType({...newbedtype,bedType:e.target.value})}}>
          <option value={null} disabled selected>Please Select</option>
        {
          bedTypes.map((bedtype)=>{
            return <option>{bedtype}</option>
          })
        }
        </select><br/>
        <label htmlFor="">Set The Price:  </label>
        <input type="text" onChange={(e)=>{setBedType({...newbedtype,price:e.target.value})}}/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{addBedType(values)}}>Add Bed Type</button>
      </div>
    </div>
  </div>
</div><br/>
           <button type="submit" className='btn btn-info'>
             Submit
           </button>
         </form>
       )}
     </Formik>
    </div>
  )
}

export default AddHospital
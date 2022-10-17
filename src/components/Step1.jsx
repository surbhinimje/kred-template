import * as React from 'react';
import guy from '../images/guy.PNG';
import Button from 'react-bootstrap/Button';
import { BsArrowRightShort } from "react-icons/bs";
import {BiChevronLeft} from 'react-icons/bi';





export default function Step1({ page, setPage,formData, setFormData}){
 

    return (
        <div>
        
        <form className='container-form' id="form1" onSubmit="">
        <h5>Lorem ipsum is simply dummy</h5>
        <p>text of the printing and typesetting industry.</p>
        <ul className="form1_ul">
        <li><select  name="Dropdown1" required
         checktype="c1" value={formData.Dropdown1}
          onChange={(e) =>
            setFormData({ ...formData, Dropdown1: e.target.value })}><option selected="true" value="-Select-" >Industry Name</option>
                    <option>Software</option>
                    <option>Finance</option>
                    <option>FMCG</option>
                    <option>Healthcare</option>
                    </select>
        </li>
       <div className='two'>

      
        <li>
            <input type="text" name="invoice" placeholder='Invoice Value' className=" halfContainer " valtype="number" required value={formData.invoice}
          onChange={(e) =>
            setFormData({ ...formData, invoice: e.target.value })}/> 
        </li>
        <li>
            <input type="text" name="tenure" placeholder='Tenure' className="halfContainer tenure right"  valtype="number" required value={formData.tenure}
          onChange={(e) =>
            setFormData({ ...formData, tenure: e.target.value })}/> 
        </li>
    </div>
        
                    </ul>
                    <div className="btn next-btn">
        <Button variant="outline-info" type="submit" onClick={() => {
            setPage(page + 1);} }>NEXT  <BsArrowRightShort/></Button>
        </div>
        
      </form>
      </div>
      
     
      
    


  


    );
}

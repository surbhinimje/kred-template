import * as React from 'react';
import guy from '../images/guy.PNG';
import Button from 'react-bootstrap/Button';
import { BsArrowRightShort } from "react-icons/bs";
import {BiChevronLeft} from 'react-icons/bi';


export default function Step2({ page, setPage, formData, setFormData}){

    
return(

    <div>
        <form className='container-form2' id="form2" onSubmit="">
        <img src={guy} className="guy"/>
        <ul className="form2_ul">
        <li>
            <input type="text" placeholder='Name of the Industry' name="industryName" required value={formData.industryName}
          onChange={(e) =>
            setFormData({ ...formData, industryName: e.target.value })}/>
        </li>
        <li>
        <input type="text" placeholder='Name of the Individual' name="individualName" required value={formData.individualName}
          onChange={(e) =>
            setFormData({ ...formData, individualName: e.target.value })}/> 
        </li>
        <li> 
        <input type="email" placeholder='Email' name="email" required value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })}/>
        </li>
        <li>
        <input type="text" placeholder='Phone number' name="phone" required value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })}/>
        </li>
        
                    </ul>
                    <div className='btn_prev previous-btn'>
                    <a href="#form1" onClick={() => {
            setPage(page - 1);}}><BiChevronLeft/> Previous</a>
                    </div>
                    
        <Button variant="dark" type="submit" className="btn2">SUBMIT <BsArrowRightShort/></Button>{' '}
     
      </form>
      </div>
);
     
}
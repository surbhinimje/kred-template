import * as React from 'react';
import Step1 from './Step1';
import { Row, Col, Container } from 'react-bootstrap';
import features from '../features.js';
import help from '../help.js';
import pattern from '../images/product-background.png';
import sap_logo from '../images/sap-footer-logo.svg';
import { CFooter } from '@coreui/react';
import Step2 from './Step2';
import { useState } from 'react';


export default function Body(){
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        Dropdown1: "",
        invoice: "",
        tenure: "",
        industryName: "",
        individualName: "",
        email:"",
        phone:""
      });
    const componentList = [
        <Step1 page={page}
        setPage={setPage}
        formData={formData}
    setFormData={setFormData}
    />,

        <Step2 page={page}
        setPage={setPage}
        formData={formData}
    setFormData={setFormData}  
       />,
    ];
  
    return (
        <div>
        <div className='hero-image'>
            {componentList[page]}
      </div>
      <div className='features'>
      <h2>Why <span class="cyan_text">KredX</span> For<br/> Invoice Discounting?</h2>
        <Container>
            <Row>
                {features.map((feature,k) => (
                    <Col key={k} xs={12} md={6} lg={4} className="p-5 justify-content-between">
                    <img src={feature.img}/>
                    <h5 className="feature-heading">{feature.featureName}</h5>
                    <p className="feature-description">{feature.description}</p>
                   
                    </Col>
                ))}
            </Row>
        </Container>
      </div>
      <div className="helping">
      
            <h3>HELPING BUSINESS OWNERS SINCE 2015</h3>
            <Container className="container-help">
            <Row>
                {help.map((i,k) => (
                    <Col key={k} xs={12} md={6} lg={4} className="p-5 justify-content-between">
                    <h5 className="help-num">{i.num}</h5>
                    <p className="help-desc">{i.desc}</p>
                   <hr/>
                    </Col>
                ))}
            </Row>
        </Container>
        <div className="product_section_overlay">
			<img src={pattern} loading="lazy" alt="background-image" class="img-fluid"/>
			</div>
      </div>
      
      <div className='contact'>
      <h2 className="heading_text bold_font">Contact Us</h2>
      <div className="row">
	<div className="col-lg-3 col-md-6 col-sm-12 col-12">		
		<div className="talk_div">
			<p>INDIA</p>
			<h3><a href="tel:18004194919">1800 419 4919</a></h3>
		</div>
	</div>
	<div className="col-lg-3 col-md-6 col-sm-12 col-12">		
		<div className="talk_div">
			<p>OUTSIDE INDIA</p>
			<h3><a href="tel:+918061799200">+91-8061799200</a></h3>
		</div>
	</div>
	<div className="col-lg-3 col-md-6 col-sm-12 col-12">		
		<div className="talk_div">
			<p>GLOBAL EMAIL</p>
			<h3><a href="mailto:info@kredx.com">info@kredx.com</a></h3>
		</div>
	</div>
	<div className="col-lg-3 col-md-6 col-sm-12 col-12">		
		<div className="talk_div">
			<p>For Media Enquiries</p>
			<h3><a href="mailto:pr@kredx.com">pr@kredx.com</a></h3>
		</div>
	</div>
	
</div>
       
      </div>
      
<div id="footer" className="container-footer">
<span className="left"><img src={sap_logo} loading="lazy" alt="logo"/></span>
<span className="right"><p className="copyright_text">©2022 Minions Ventures Pvt Ltd</p></span>
</div>
  
    
   
      </div>
    );
}

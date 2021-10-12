import React from "react";
import FirstAccordion from "./FirstAccordion";
import SecondAccordion from "./SecondAccordion";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function MyAccordion() {
 return(   
  <>
  
  <div className="bg-info" >
  <br/>
  <br/>
  <h1 className=" bg-warning text-uppercase text-black text-center " >options</h1>
  <br/>
  <div className="row align-items-center m-5"><div className="bg-info" ><FirstAccordion/></div></div>
  <div className="row align-items-center m-5"><div className="bg-info" ><SecondAccordion/></div></div>
  <br/>
  </div>
  <h6 className="text-center" >Copyright © . 2021</h6>
 </>
 );
}
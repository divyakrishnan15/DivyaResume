import React, { useEffect } from "react";
import "./Modal.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

export default function Modal({ display, projData }) {
  // console.log("display =", display);
  // console.log("projData =", projData);
  // console.log("id =",id)
  // console.log("projData[1] =",projData[1])

  // useEffect(()=>{

  // },[projData])

  const buttonStyle = {
    width: "30px",
    background: 'none',
    border: '0px'
};

const properties = {
    prevArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></button>,
    nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></button>
}

  return (
    <div id="projModal-main">
    {/* <div> */}
             
            {/* <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div> */}
      {/* <div> */}
        {/* {console.log("DATA", projData)} */}
        

      {/* <Slide> */}

        
{/* <Slide 

nextArrow={<button style={{
  background: 'none',
  border: '0px',
  width: '30px'
}}><svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z" /></svg></button>} 

prevArrow={<button style={{
  background: 'none',
  border: '0px',
  width: '30px'
}}><svg fill="#fff" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" /></svg></button>}>
        */}

      {/* <Slide {...properties}> */}

      {/* <Slide> */}

        {projData &&
          Object.values(projData).map((p) => {
            console.log("MMMMMMMM 1", p);
            // console.log("MMMMMMMM IMGGG", p.img);
            return (
              // <Slide>
                  <div className="imgcss each-slide-effect" key={p.id}>
                    <div>
                    <img src={p.img} alt="img" className="allimg"></img>
                    </div>
                    {/* <div style={{ 'backgroundImage': `url(${p.img})` }}></div> */}
                    <div>{p.text}</div>
                  </div>
              // </Slide>
            );
          })}

      {/* </Slide> */}

        {/* {projData &&
          Object.entries(projData).map((p) => {
            console.log("VVV", p);
            return (
              <div className="imgcss" key={p.id}>
                <img src={p[1].img} alt="img" className="allimg"></img>
                <div>{p[1].text}</div>
              </div>
            );
          })} */}

          {/* {projData &&
          Object.entries(projData).map((p) => {
            console.log("VVV", p);
            return (
              <div className="imgcss" key={p.id}>
                <img src={p[1].img} alt="img" className="allimg"></img>
                <div>{p[1].text}</div>
              </div>
            );
          })} */}

        {/* 
        {projData &&
          Object.entries(projData).map(([k, v]) => (
              <div className="imgcss" key={k}>
                <img src={v.img} alt={v.text} className="allimg"></img>
                <div>{v.text}</div>
              </div>
          ))} */}

</div>

      // </div>

    // </div>
  );
}

import React, { useState, useEffect } from "react";
import "./project.css";
import { projectjson } from "../../json/projects_data";
import Modal from './Modal'

export default function Projects() {
  const[show,setShow]=useState(false)
  // const[id,setId]=useState(0)
  const[modalData,setModalData]=useState([])

  useEffect(() => {
    // console.log("project loaded");
  }, []);

  const projects = projectjson;

  return (
    <section id="section7">
      <h1 className="section6-heading">Projects:</h1>
      <div className="outer-proj">
        {Object.values(projects).map((proj) => {
          // console.log(projects);
          return (
            <div className="inner-proj" key={proj.id}>
              <h1 className="projects-heading">{proj.projname}</h1>

              <div>
                  <img
                    src={proj.projimg}
                    alt="proj img"
                    className="projimg"
                    onClick={()=>{
                      setShow(true)
                      setModalData(proj.images)
                    }}
                  />
                  {console.log("show=",show)}
                  {console.log("proj.id=",proj.id)}
                  {/* {console.log("id",id)} */}
                  {show ? <Modal display={show} setShow={setShow} projData={modalData}></Modal> : null}

                  {/* {show ? <Modal display={show} id={proj.id} projData={proj.images}></Modal> : null} */}
              </div>

              
              <div className="tool-main">
                <span className="tools-span">
                  <strong>Tools used:</strong>{" "}
                </span>
                <span className="tools-span">{proj.tools}</span>
              </div>

              <div className="deploy-main">
                Deployed:{" "}
                <a href={proj.url} target="_blank">
                  <img
                    src={proj.deployed}
                    alt="projimg"
                    className="projdeployimg"
                  />
                </a>
              </div>

            </div>
          );
          
        })}
      </div>
    </section>
  );
}

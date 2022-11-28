import React from "react";
import { useState, useEffect } from "react";
import "./Navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
import SardarSarovar from "../common/SardarSarovar";
import BhakraNangal from "../common/Bhakra";
import Tehri from "../common/Tehri";

export default function Navbar() {


  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [toggleNav, setToogleNav] = useState(true);
  //If small screen detected at first run then do not display any nav headers by default

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    if(window.innerWidth<=507)setToogleNav(false);
    else
    setToogleNav(true);
  }, []);

  const handleResize=()=>{
    setWindowWidth(window.innerWidth)
  }

  return (
    <>
    {windowWidth<=507?
    <div id="WindowWidth<=507">
      <nav
        role="navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          paddingBottom: "50px",
        }}
      >
        <div class="logoAnd">
          <img
            class="img"
            src="https://i.ibb.co/DpH0HMd/High-Resolution-02.jpg"
            style={{
              width: "6rem",
              padding: "2%",
              marginLeft: "3vw",
              marginRight: "1vw",
            }}
          />
           {windowWidth <= 507 ?  <div><MenuIcon style={{cursot:"pointer",fontSize:"60px",marginLeft:"6vw"}} onClick={()=>{setToogleNav(!toggleNav)}} /> </div>: null}
        </div>
        </nav>
       { toggleNav?
        <ul className="navHeader">
          <li>
            <a  href="/home" class="links">
              Home
            </a>
          </li>
          <li>
            <a href="/sardarsarovar" class="links">
              Sardar-Sarovar
            </a>
            
          </li>

          <li>
            <a href="/bhakranangal" class="links">
              Bhakra-Nangal
            </a>
            
          </li>

          <li>
            <a href="/tehri" class="links">
              Tehri
            </a>
            
          </li>
          <li>
            <a href="/team" class="links">
              Hirakud
            </a>
          </li>
          <li>
            <a href="#" class="links">
              Rihand
            </a>
          </li>
          
        </ul>
       :null}
       </div>
       :
       <div id="WindowWidth>507">
      <nav
        role="navigation"
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "10px",
          paddingBottom: "100px",
        }}
      >
      
        
        <div class="logoAnd">
          
          <img
            class="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRguV54LGS7ktVvqwlZU8XhH0KfT5-M4ofmbA&usqp=CAU"
            style={{
              width: "6rem",
              padding: "2%",
              marginLeft: "3vw",
              marginRight: "1vw",
            }}
          />
          {/* <pre style={{fontSize:"15px",color:"grey",fontWeight:"bolder",margin:"0px 14px"}}>SUSTAINABLE HEALTHCARE <br/>&nbsp;&nbsp;&nbsp;&nbsp;
                        SOLUTIONS</pre> */}
          
           {windowWidth <= 507 ?  <div><MenuIcon style={{cursot:"pointer",fontSize:"60px",marginLeft:"6vw"}} onClick={()=>{setToogleNav(!toggleNav)}} /> </div>: null}
        </div>
       { toggleNav?
        <ul className="navHeader">
          <li>
            <a  href="/" class="links">
              Home
            </a>
          </li>
          <li>
            <a href="sardarsarovar" class="links">
              Sardar-Sarovar
            </a>
            
          </li>

          <li>
            <a href="bhakranangal" class="links">
              Bhakra-Nangal
            </a>
            
          </li>

          <li>
            <a href="tehri" class="links">
              Tehri
            </a>
        
          </li>
          <li>
            <a href="/team" class="links">
              Hirakud
            </a>
          </li>
          <li>
            <a href="#" class="links">
              Rihand
            </a>
          </li>
          
        </ul>
       :null}
      
        </nav>
       </div>}
    </>

  );
}

import React,{useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import Button from '../Button/Button';
import Burger from "./components/Burger/Burger"
import Menu from "./components/Menu/Menu"
import FocusLock from 'react-focus-lock';
import { Link, animateScroll as scroll } from "react-scroll";

const Link2 = styled(Link)`
    display: flex;
    margin: 0 1rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    font-size: 1rem;
    @media only screen and (max-width: 1025px) {
      margin: 0 ;
 }
    @media only screen and (max-width: 768px) {
         margin: 0 1rem;
    }
`;

const Mobile = styled.div`
    display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }`

const PC = styled.div`
  display: block;
@media only screen and (max-width: 768px) {
  display: none;
}`


const NavBar = () => {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

const [navbar, setNavbar] = useState(false)

const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 100) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })  

  const Link1 = styled(Link)`
    display: flex;
    margin: 0 2rem ;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    transition: 0.5s linear !important;
    width: ${navbar ? "11rem" : "13rem" };
`;

    return (
        <nav className={navbar ? "navActive" : "nav"} >

          <PC>
            <Link1 to="home" spy={true} smooth={true}  ><img  
              src="../images/logo/logo.png"
              alt="Logo" className="Logo" style={{width:"100%",height:"100%"}}/>
            </Link1>
          </PC>
          <Mobile>
            <Link1 to="home" spy={true} smooth={true}  style={{marginRight:"0"}}  ><img src="../images/logo/logo.png" alt="mlogo" className="LogoB"/></Link1>
          </Mobile>

          <PC>
            <ul className="list">

              <Link2 to="home" spy={true} smooth={true} >Services</Link2>
              <Link2 to="intellect" spy={true} smooth={true}  >About</Link2>
              <Link2 to="roadmap" spy={true} smooth={true}>Career</Link2> 
              
              <Button Text="Telegram" />
              <div style={{margin:'0 0 0 2rem'}}>
                <Button Text="Whatsapp" />
              </div>
                
            </ul> 
          </PC>
          
          <Mobile ref={node}>
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </Mobile>
        
        </nav>   
    )
}

export default NavBar
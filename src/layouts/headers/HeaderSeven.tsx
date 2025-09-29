"use client"
import NavMenu from "./Menu/NavMenu"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import UseSticky from "@/hooks/UseSticky";
import Offcanvas from "./Menu/Offcanvas";
import Sidebar from "./Menu/Sidebar";
import CartIcon from "@/svg/CartIcon";
import UserIcon from "@/svg/UserIcon";
import HeaderCart from "./Menu/HeaderCart";
import TotalCart from "./Menu/TotalCart";

import logo_1 from "@/assets/img/logo/logo-white.png";
import logo_2 from "@/assets/img/logo/logo-green.png";

const HeaderSeven = () => {

   const { sticky } = UseSticky();
   const [offCanvas, setOffCanvas] = useState<boolean>(false);
   const [sidebar, setSidebar] = useState<boolean>(false);

   return (
      <>
         <header className="tg-header-height">
            <div className={`tg-header__area tg-header-lg-space z-index-999 tg-transparent ${sticky ? "header-sticky" : ""}`} id="header-sticky">
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-lg-8 col-5">
                        <div className="tgmenu__wrap d-flex align-items-center justify-content-between">
                           <div className="logo">
                              <Link className="logo-1" href="/"><Image src={logo_1} alt="Logo" /></Link>
                              <Link className="logo-2 d-none" href="/"><Image src={logo_2} alt="Logo" /></Link>
                           </div>
                           <nav className="tgmenu__nav tgmenu-1-space ml-180">
                              <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                 <NavMenu />
                              </div>
                           </nav>
                        </div>
                     </div>
                     <div className="col-lg-4 col-7">
                        <div className="tg-menu-right-action d-flex align-items-center justify-content-end">
                           <div className="tg-header-cart p-relative d-none d-xl-block">
                              <button className="cart-button">
                                 <span>
                                    <CartIcon />
                                 </span>
                                 <span className="tg-header-cart-count"><TotalCart /></span>
                              </button>
                              <HeaderCart />
                           </div>
                           <div className="tg-header-btn ml-20 d-none d-sm-block">
                              <Link className="tg-btn-header" href="/login">
                                 <span>
                                    <UserIcon />
                                 </span>
                                 Login
                              </Link>
                           </div>
                           <div className="tg-header-menu-bar lh-1 p-relative ml-20 pl-20">
                              <span className="tg-header-border d-none d-xl-block"></span>
                              <button onClick={() => setSidebar(true)} className="tgmenu-offcanvas-open-btn menu-tigger d-none d-xl-block">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                              <button onClick={() => setOffCanvas(true)} className="tgmenu-offcanvas-open-btn mobile-nav-toggler d-block d-xl-none">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

         </header>
         <Offcanvas offCanvas={offCanvas} setOffCanvas={setOffCanvas} />
         <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
      </>
   )
}

export default HeaderSeven

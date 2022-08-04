import Link from 'next/link';
import { useState } from "react";
function Header() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);
    return (
        <>
           <div class="header">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <nav class="navbar">

                            <div class="header-search d-flex align-items-center">
                                <Link href="/">
                                <a class="brand-logo me-3">
                                    <img src="./images/logo.png" alt="" width="30"/>
                                </a>
                                </Link>
                                
                                <form action="#">
                                    <div class="input-group">
                                        <input type="text" class="form-control" placeholder="Pesquisar Influecer"/>
                                        <div class="input-group-append">
                                            <span class="input-group-text" id="basic-addon2"><i
                                                    class="fa fa-search"></i></span>
                                        </div>
                                    </div>
                                </form>
                            </div>


                            <div class="dashboard_log">
                                <div class="d-flex align-items-center">
                                    <div class="profile_log dropdown">
                                        <div class="user" onClick={toggleTrueFalse}>
                                            <span class="thumb"><i class="mdi mdi-account"></i></span>
                                            <span class="name">Carla Pascle</span>
                                            <span class="arrow"><i class="la la-angle-down"></i></span>
                                        </div>
                                        
                                        <div className={isToggled ? "dropdown-menu dropdown-menu-end show" : "dropdown-menu dropdown-menu-end"}>
                                            <Link href="/accounts"><a class="dropdown-item">
                                                <i class="mdi mdi-account"></i> Account
                                            </a></Link>
                                            <Link href="/history"><a class="dropdown-item">
                                                <i class="la la-book"></i> History
                                            </a></Link>
                                            <Link href="/settings"><a class="dropdown-item">
                                                <i class="la la-cog"></i> Setting
                                            </a></Link>
                                            <Link href="/lock"><a class="dropdown-item">
                                                <i class="la la-lock"></i> Lock
                                            </a></Link>
                                            <Link href="/signin"><a class="dropdown-item logout">
                                                <i class="la la-sign-out"></i> Logout
                                            </a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
export default Header;

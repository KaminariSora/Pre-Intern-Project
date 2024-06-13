import './HeaderBar.css'
import { Link } from "react-router-dom";
import { useState } from 'react';

function HeaderBar() {
    const imageStyle = {
        width: "50px",
        height: "50px",
        color: "#fff"
    }
    const [showMenu, setShowMenu] = useState(false);

    const ToggleMenu = () => {
        setShowMenu(!showMenu);
        console.log('click')
    }
    return (
        <header className="header">
            <nav className="nav container">
                {/* NavMenu */}
                <div className={`navMenu ${showMenu ? 'showMenu' : ''}`}>
                    <ul className="navList" type="none">
                        <li className="listItem"><a href='#'>การโอนสิทธิเรียกร้องหนี้</a></li>
                        <li className="listItem"><a href='#'>การบอกกล่าวการโอนสิทธิเรียกร้องในหนี้</a></li>
                        <li className="listItem"><a>การปรับปรุงโครงสร้างหนี้</a></li>
                        <li className="listItem"><a>การติดตามหนี้</a></li>
                        <li className="listItem"><a>การดำเนินการทางกฎหมาย</a></li>
                        <li className="listItem"><a>การ์ดลูกหนี้ก่อนปรับปรุงโครงสร้างหนี้</a></li>
                        <li className="listItem"><a>งานสนับสนุน</a></li>
                        <li className="listItem">
                            <a className="navLink prompt-regular" href="#">การทำงานระบบ</a>
                            <ul className="dropdown">
                                <li><a href='/Component8_1'>การกำหนดผู้ใช้ระบบ</a></li>
                                <li><a href='/Component8_2'>การกำหนดสิทธิผู้ใช้ระบบ</a></li>
                                <li>
                                    <a className="prompt-regular" href="#">การกำหนดข้อมูลพื้นฐานในระบบ</a>
                                    <ul className="dropdown-2">
                                        <li><a href='/Component8_3_1'>Outsource</a></li>
                                        <li><a href='/Component8_3_2'>บัญชีเงินฝาก</a></li>
                                        <li><a>อัตราดอกเบี้ย</a></li>
                                    </ul>
                                </li>
                                <li><a>การกำหนดผู้ดูแลลูกหนี้</a></li>
                            </ul></li>
                        <li className="listItem"><a>สอบถามและรายงาน</a></li>
                        <li className="listItem"><a>ออกจากระบบ</a></li>
                    </ul>
                    <div className="navClose" onClick={ToggleMenu}>
                        
                    </div>
                </div>
            </nav>
            <div className="nav_action">
                <div className="navToggle" onClick={ToggleMenu}>
                    
                </div>
            </div>
        </header>
    )
}

export default HeaderBar
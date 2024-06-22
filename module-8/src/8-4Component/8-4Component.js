import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import './8-4Component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faComputer } from '@fortawesome/free-solid-svg-icons';

function Component4() {
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox />
            </header>
            <div className="select-container">
                <h1>เลือกลูกหนี้เพื่อสร้างรายการค่าใช้จ่าย</h1>
                <div className="select-hero">
                    <div id="first-line">
                        <span>
                            <label>รหัสลูกหนี้</label>
                            <select>
                                <option>1234</option>
                                <option>2345</option>
                                <option>3456</option>
                            </select>
                        </span>
                        <span>
                            <label>ชื่อลูกหนี้บางส่วน</label>
                            <select>
                                <option>1</option>
                                <option>alskdfj;lasjfdslkj</option>
                                <option>3</option>
                            </select>
                        </span>
                        <span>
                            <label>รหัสสถาบัน</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </span>
                        <span>
                            <label>วันที่ซื้อ</label>
                            <select>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                            </select>
                        </span>
                    </div>
                    <div className="select-wrap">
                        <div className="heading">
                            <div className="topic"><p>ซื้อหนี้</p></div>
                            <div>
                                <p>เงินต้นสิทธิ์(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div>
                                <p>ภาระรวมหนี้(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div style={{opacity: 0}}></div>
                        </div>
                        <div className="content">
                            <div className="topic"><p>อนุมัติแผน</p></div>
                            <div>
                                <p>เงินต้นสิทธิ์(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div>
                                <p>ภาระหนี้ตามแผน(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div>
                                <p>สถานะแผน</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                        </div>
                        <div className="content">
                            <div className="topic"><p>การ์ดติดตามหนี้</p></div>
                            <div>
                                <p>เงินต้นคงเหลือ(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div>
                                <p>ภาระหนี้คงเหลือ(บาท)</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                            <div>
                                <p>สถานะการ์ด</p>
                                <span className="display-box"><p>display here</p></span>
                            </div>
                        </div>
                    </div>
                    <button>
                        <FontAwesomeIcon icon={faComputer} size='2x' />Display</button>
                </div>
            </div>
        </div>
    )
}

export default Component4
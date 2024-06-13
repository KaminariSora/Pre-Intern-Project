import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import '../Component/HeaderBox.css'
import '../Component/HeaderBar.css'
import './form.css'

function Component3_1() {
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox />
            </header>
            <div className="record-container">
                <h1>Outsource</h1>
                <form>
                    <div id="first-line">
                        <div>
                            <label htmlFor='search'>รหัสOutsource</label>
                            <input type="์text" />
                        </div>
                        <div>
                            <label>วันที่เริ่มติดต่อกันทางธุรกรรม</label>
                            <input type="date" />
                        </div>
                        <div>
                            <label>ประเภทงาน</label>
                            <select>
                                <option value="เดิน">เดิน</option>
                                <option value="นั่ง">นั่ง</option>
                                <option value="นอน">นอน</option>
                            </select>
                        </div>
                    </div>
                    <div id="second-line">
                        <div>
                            <label>คำนำหน้าชื่อ</label>
                            <input type="text"></input>
                        </div>
                        <div>
                            <label>วันเกิด/วันตามทะเบียน</label>
                            <input type="date" />
                        </div>
                    </div>
                    <div id="third-line">
                        <div>
                            <label>คำนำหน้าชื่อ</label>
                            <select>
                                <option value="mr">Mr.</option>
                                <option value="ms">Ms.</option>
                                <option value="dr">Dr.</option>
                            </select>
                        </div>
                        <div>
                            <label>ชื่อ</label>
                            <input type="text"></input>
                        </div>
                    </div>
                    <div id="forth-line">
                        <div>
                            <label>ที่อยู่บรรทัด1</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>ที่อยู่บรรทัด2</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>รหัสไปรษณีย์</label>
                            <input type="Number" />
                        </div>
                    </div>
                    <div id='fifth-line'>
                        <div>
                            <label>โทรศัทพ์</label>
                            <input type="tel" placeholder="+65 xx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        </div>
                        <div>
                            <label>เบอณ์มือถือ</label>
                            <input type="tel" placeholder="0xx-xxx-xxxx" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                        </div>
                        <div>
                            <label>Line ID</label>
                            <input type="text" />
                        </div>
                    </div>
                    <div id="sixth-line">
                        <div>
                            <label>Email</label>
                            <input type="email"></input>
                        </div>
                        <div>
                            <label>ชื่อผู้ติดต่อ</label>
                            <input type="text"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Component3_1
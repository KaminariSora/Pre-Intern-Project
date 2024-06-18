import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import '../Component/HeaderBox.css'
import '../Component/HeaderBar.css'
import './form.css'

const Component3_3 = () => {
    const width100 = {
        width: '100%'
    }
    return (
        <div className="container">
            <header>
                <HeaderBar/>
                <HeaderBox/>
            </header>
            <div className="record-container">
                <form>
                    <div id="first-line">
                        <label>ลำดับที่</label>
                        <input 
                            style={width100}
                            type="number"
                            ></input>
                        <label>วันที่ประกาศ</label>
                        <input 
                            style={width100}
                            type="date"
                            ></input>
                    </div>
                    <div id="second-line">
                        <label>ประเภท</label>
                        <select id="second-line-select" style={width100}>
                            <option value="Cartoon">cartoon</option>
                            <option value="anime">anime</option>
                            <option value="movie">movie</option>
                        </select>
                    </div>
                    <div id="third-line">
                        <label>อัตราดอกเบี้ยล่าสุด</label>
                        <input 
                            style={width100}
                            type="text"></input>
                        <label>วันที่มีผลล่าสุด</label>
                        <input
                            style={width100}
                            type="date"></input>
                    </div>
                    <div id="forth-line">
                        <label>วันสิ้นสุดใช้อัตราเดิม</label>
                        <input
                            style={width100}
                            type="date"></input>
                    </div>
                    <div id="fifth-line">
                        <label>วันที่มีผล</label>
                        <input
                            style={width100}
                            type="date"></input>
                    </div>
                    <div id="sixth-line">
                        <label>อัตราดอกเบี้ยใหม่</label>
                        <input
                            style={width100}
                            type="text"></input>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Component3_3
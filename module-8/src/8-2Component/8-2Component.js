import HeaderBox from "../8-1Component/HeaderBox"
import '../8-1Component/HeaderBox.css'
import './8-2Component.css'

function Component2() {
    const columnWidth = 20 + '%'
    return (
        <div className='container'>
            <header>
                <div>Component2</div>
                <HeaderBox/>
            </header>
            <div className="body-container">
                <div className="Input-content">
                    <label>ชื่อพนักกงาน</label>
                    <select>
                        <option>Name 1</option>
                        <option>Name 2</option>
                        <option>Name 3</option>
                    </select>
                </div>
                <div className="table-content">
                    <thead>
                        <tr style={{}}>
                            <th>ลำดับที่</th>
                            <th>เลือก</th>
                            <th>รหัสการทำงาน</th>
                            <th>รายละเอียดการทำงาน</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td></td>
                            <td>1000</td>
                            <td>%^*989fa68&^*</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td></td>
                            <td>1000</td>
                            <td>%^*989fa68&^*</td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </div>
    )
}

export default Component2
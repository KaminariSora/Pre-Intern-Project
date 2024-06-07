function Form() {
    return (
        <div className='record-container'>
                <h1>บันทึกพนักงาน</h1>
                <form>
                    <div>
                        <label htmlFor='search'>รหัสพนักงาน</label>
                        <input type="text" />
                        <label>วันที่เริ่มงาน</label>
                        <input type="date" />
                    </div>
                    <div>
                        <label>คำนำหน้าชื่อ</label>
                        <select>
                            <option value="mr">Mr.</option>
                            <option value="mrs">Mrs.</option>
                            <option value="ms">Ms.</option>
                            <option value="dr">Dr.</option>
                        </select>
                        <label>ชื่อ-สกุล</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>ส่วนงาน</label>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                        <label>ตำแหน่งงาน</label>
                        <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </div>
                    <div>
                        <label>เลขที่บัตรประชาชน</label>
                        <input type="number" />
                        <label>เบอร์ติดต่อ</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label>รหัสการใช้ระบบงาน</label>
                        <input type="password" />
                        <label>รหัสผ่าน</label>
                        <input type="password" />
                    </div>
                </form>
            </div>
    )
}

export default Form
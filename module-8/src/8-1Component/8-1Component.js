import React, { useRef, useState } from 'react';
import './8-1Component.css'
import '../Component/HeaderBox.css'
import HeaderBox from '../Component/HeaderBox'
import HeaderBar from '../Component/HeaderBar'
import Form from './form';

const AddTable = (data) => {
    console.log("Table added with data:", data);
};

const Component1 = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        employeeCode: '',
        startDate: '',
        title: '',
        fullName: '',
        department: '',
        position: '',
        idNumber: '',
        contactNumber: '',
        systemCode: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        AddTable(formData);
    };
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox handleSubmit={handleSubmit} />
            </header>
            <div className='record-container'>
                <h1>บันทึกพนักงาน</h1>
                <form ref={formRef}>
                    <div>
                        <div>
                            <label>รหัสพนักงาน</label>
                            <input
                                type="text"
                                name="employeeCode"
                                value={formData.employeeCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>วันที่เริ่มงาน</label>
                            <input
                                type="date"
                                name="startDate"
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>คำนำหน้าชื่อ</label>
                            <select
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                            >
                                <option value="mr">Mr.</option>
                                <option value="mrs">Mrs.</option>
                                <option value="ms">Ms.</option>
                                <option value="dr">Dr.</option>
                            </select>
                        </div>
                        <div>
                            <label>ชื่อ-สกุล</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>ส่วนงาน</label>
                            <select
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                        <div>
                            <label>ตำแหน่งงาน</label>
                            <select
                                name="position"
                                value={formData.position}
                                onChange={handleChange}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>เลขที่บัตรประชาชน</label>
                            <input
                                type="number"
                                name="idNumber"
                                value={formData.idNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>เบอร์ติดต่อ</label>
                            <input
                                type="number"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <label>รหัสการใช้ระบบงาน</label>
                            <input
                                type="password"
                                name="systemCode"
                                value={formData.systemCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>รหัสผ่าน</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Component1
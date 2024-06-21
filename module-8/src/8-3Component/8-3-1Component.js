import React, { useRef, useState } from 'react';
import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import '../Component/HeaderBox.css'
import '../Component/HeaderBar.css'
import './form.css'

function Component3_1() {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        OutsourceCode: '',
        startDate: '',
        workType: '',
        idNumber: '',
        birth: '',
        nameTag: '',
        Name: '',
        address_1: '',
        address_2: '',
        postalCode: '',
        telephone: '',
        phone: '',
        lineId: '',
        email: '',
        contactName: '',
    });

    const [tableData, setTableData] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setTableData([...tableData, formData]);
        setFormData({
            OutsourceCode: '',
            startDate: '',
            workType: '',
            idNumber: '',
            birth: '',
            nameTag: '',
            Name: '',
            address_1: '',
            address_2: '',
            postalCode: '',
            telephone: '',
            phone: '',
            lineId: '',
            email: '',
            contactName: '',
        });
        console.log('submit')
    };
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox handleSubmit={handleSubmit} />
            </header>
            <div className="record-container">
                <h1>Outsource</h1>
                <form ref={formRef}>
                    <div id="first-line">
                        <div>
                            <label htmlFor='search'>รหัสOutsource</label>
                            <input
                                type="text"
                                name="OutsourceCode"
                                value={formData.OutsourceCode}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>วันที่เริ่มติดต่อกันทางธุรกรรม</label>
                            <input
                                type="date"
                                name='startDate'
                                value={formData.startDate}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>ประเภทงาน</label>
                            <select
                                name="workType"
                                value={formData.workType}
                                onChange={handleChange}
                            >
                                <option value="เดิน">เดิน</option>
                                <option value="นั่ง">นั่ง</option>
                                <option value="นอน">นอน</option>
                            </select>
                        </div>
                    </div>
                    <div id="second-line">
                        <div>
                            <label>เลขที่ทะเบียน/เลขที่บัตรประชาชน</label>
                            <input
                                type="text"
                                name='idNumber'
                                value={formData.idNumber}
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div>
                            <label>วันเกิด/วันตามทะเบียน</label>
                            <input
                                type="date"
                                name='birth'
                                value={formData.birth}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div id="third-line">
                        <div>
                            <label>คำนำหน้าชื่อ</label>
                            <select
                                name="nameTag"
                                value={formData.nameTag}
                                onChange={handleChange}
                            >
                                <option value="mr">Mr.</option>
                                <option value="ms">Ms.</option>
                                <option value="dr">Dr.</option>
                            </select>
                        </div>
                        <div>
                            <label>ชื่อ</label>
                            <input
                                type="text"
                                name="Name"
                                value={formData.Name}
                                onChange={handleChange}
                            ></input>
                        </div>
                    </div>
                    <div id="forth-line">
                        <div>
                            <label>ที่อยู่บรรทัด1</label>
                            <input
                                type="text"
                                name="address_1"
                                value={formData.address_1}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>ที่อยู่บรรทัด2</label>
                            <input
                                type="text"
                                name="address_2"
                                value={formData.address_2}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label>รหัสไปรษณีย์</label>
                            <input
                                type="Number"
                                name="postalCode"
                                value={formData.postalCode}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div id='fifth-line'>
                        <div>
                            <label>โทรศัทพ์</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="+65 xx-xxx-xxxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div>
                            <label>เบอร์มือถือ</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="0xx-xxx-xxxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </div>
                        <div>
                            <label>Line ID</label>
                            <input
                                type="text"
                                name="lineId"
                                value={formData.lineId}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div id="sixth-line">
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}></input>
                        </div>
                        <div>
                            <label>ชื่อผู้ติดต่อ</label>
                            <input 
                                type="text"
                                name="contactName"
                                value={formData.contactName}
                                onChange={handleChange}
                                ></input>
                        </div>
                    </div>
                </form>
            </div>
            <div className='table-container'>
                <table className='Table'>
                    <thead>
                        <tr>
                            <th>รหัสพนักงาน</th>
                            <th>วันที่เริ่มติดต่อ</th>
                            <th>ประเภทงาน</th>
                            <th>เลขที่ทะเบียน/เลขที่บัตรประชาชน</th>
                            <th>วันเกิด</th>
                            <th>คำนำหน้าชื่อ</th>
                            <th>ชื่อ</th>
                            <th>ที่อยู่บรรทัด1</th>
                            <th>ที่อยู่บรรทัด2</th>
                            <th>รหัสไปรษณีย์</th>
                            <th>โทรศัพท์</th>
                            <th>เบอร์มือถือ</th>
                            <th>Line ID</th>
                            <th>Email</th>
                            <th>ชื่อผู้ติดต่อ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.OutsourceCode}</td>
                                <td>{data.startDate}</td>
                                <td>{data.workType}</td>
                                <td>{data.idNumber}</td>
                                <td>{data.birth}</td>
                                <td>{data.nameTag}</td>
                                <td>{data.Name}</td>
                                <td>{data.address_1}</td>
                                <td>{data.address_2}</td>
                                <td>{data.postalCode}</td>
                                <td>{data.telephone}</td>
                                <td>{data.phone}</td>
                                <td>{data.lineId}</td>
                                <td>{data.email}</td>
                                <td>{data.contactName}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component3_1
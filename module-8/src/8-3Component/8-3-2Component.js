import React, { useRef, useState } from 'react';
import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import '../Component/HeaderBox.css'
import '../Component/HeaderBar.css'

const Component3_2 = () => {
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        AccountNumber: '',
        OpenDate: '',
        BankCode: '',
        AccountName: '',
        ContactName: '',
        telephone: '',
        phone: '',
        Fax: '',
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
            AccountNumber: '',
            OpenDate: '',
            BankCode: '',
            AccountName: '',
            ContactName: '',
            telephone: '',
            phone: '',
            Fax: '',
        });
        console.log('submit')
    };
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox handleSubmit={handleSubmit}/>
            </header>
            <div className="record-container">
                <form ref={formData}>
                    <div id="first-line">
                        <span>
                            <label>เลขที่บัญชี</label>
                            <input
                                type="number"
                                name="AccountNumber"
                                value={formData.AccountNumber}
                                onChange={handleChange}></input>
                        </span>
                        <span>
                            <label>วันที่เปิดบัญชี</label>
                            <input
                                type="date"
                                name="OpenData"
                                value={formData.OpenDate}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div id="second-line">
                        <span>
                            <label>รหัสธนาคาร</label>
                            <select
                            name="BankCode"
                            value={formData.BankCode}
                            onChange={handleChange}>
                                <option value="1111">1111</option>
                                <option value="2222">2222</option>
                                <option value="3333">3333</option>
                                <option value="4444">4444</option>
                                <option value="5555">5555</option>
                                <option value="6666">6666</option>
                                <option value="7777">7777</option>
                                <option value="8888">8888</option>
                                <option value="9999">9999</option>
                            </select>
                        </span>
                    </div>
                    <div className="third-line">
                        <span>
                            <label>ชื่อบัญชี</label>
                            <input
                                type="text"
                                name="AccountName"
                                value={formData.AccountName}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div className="forth-line">
                        <span>
                            <label>ชื่อผู้ติดต่อ</label>
                            <input
                                type="text"
                                name="ContactName"
                                value={formData.ContactName}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div className="fifth-line">
                        <span>
                            <label>โทรศัพท์</label>
                            <input
                                type="tel"
                                name="telephone"
                                value={formData.telephone}
                                onChange={handleChange}
                                placeholder="+66 xx-xxx-xxxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </span>
                        <span>
                        <label>เบอร์มือถือ</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="0xx-xxx-xxxx"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" />
                        </span>
                    </div>
                    <div id="sixth-line">
                        <span>
                            <label>FAX</label>
                            <input
                                type="tel"
                                name="Fax"
                                value={formData.Fax}
                                onChange={handleChange}
                                 />
                        </span>
                    </div>
                </form>
            </div>
            <div className='table-container'>
                <table className='Table'>
                    <thead>
                        <tr>
                            <th>เลขที่บัญชี</th>
                            <th>วันที่เปิดบัญชี</th>
                            <th>รหัสธนาคาร</th>
                            <th>ชื่อบัญชี</th>
                            <th>ชื่อผู้ติดต่อ</th>
                            <th>โทรศัทพ์</th>
                            <th>เบอร์มือถือ</th>
                            <th>FAX</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.AccountNumber}</td>
                                <td>{data.OpenDate}</td>
                                <td>{data.BankCode}</td>
                                <td>{data.AccountName}</td>
                                <td>{data.ContactName}</td>
                                <td>{data.telephone}</td>
                                <td>{data.phone}</td>
                                <td>{data.Fax}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component3_2
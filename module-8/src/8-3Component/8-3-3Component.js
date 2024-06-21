import React, { useRef, useState } from 'react';
import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import '../Component/HeaderBox.css'
import '../Component/HeaderBar.css'
import './form.css'

const Component3_3 = () => {
    const width100 = {
        width: '100%'
    }
    const formRef = useRef(null);
    const [formData, setFormData] = useState({
        Number: '',
        ANNDate: '',
        Type: '',
        LastestInterestRate: '',
        LastEffectiveDate: '',
        EndDate: '',
        EffectiveDate: '',
        NewInterestRate: ''
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
            Number: '',
            ANNDate: '',
            Type: '',
            LastestInterestRate: '',
            LastEffectiveDate: '',
            EndDate: '',
            EffectiveDate: '',
            NewInterestRate: ''
        });
        console.log('submit')
    };
    return (
        <div className="container">
            <header>
                <HeaderBar/>
                <HeaderBox handleSubmit={handleSubmit}/>
            </header>
            <div className="record-container">
                <form ref={formRef}>
                    <div id="first-line">
                        <span>
                            <label>ลำดับที่</label>
                            <input 
                                // style={width100}
                                type="number"
                                name='Number'
                                value={formData.Number}
                                onChange={handleChange}
                                ></input>
                        </span>
                        <span>
                            <label>วันที่ประกาศ</label>
                            <input 
                                // style={width100}
                                type="date"
                                name='ANNDate'
                                value={formData.ANNDate}
                                onChange={handleChange}
                                ></input>
                        </span>
                    </div>
                    <div id="second-line">
                        <span>
                            <label>ประเภท</label>
                            <select 
                                id="second-line-select"
                                name='Type'
                                value={formData.Type}
                                onChange={handleChange}
                            >
                                <option value="Cartoon">cartoon</option>
                                <option value="anime">anime</option>
                                <option value="movie">movie</option>
                            </select>
                        </span>
                    </div>
                    <div id="third-line">
                        <span>
                            <label>อัตราดอกเบี้ยล่าสุด</label>
                            <input 
                                // style={width100}
                                type="text"
                                name='LastestInterestRate'
                                value={formData.LastestInterestRate}
                                onChange={handleChange}></input>
                        </span>
                        <span>
                            <label>วันที่มีผลล่าสุด</label>
                            <input
                                // style={width100}
                                type="date"
                                name='LastEffectiveDate'
                                value={formData.LastEffectiveDate}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div id="forth-line">
                        <span>
                            <label>วันสิ้นสุดใช้อัตราเดิม</label>
                            <input
                                // style={width100}
                                type="date"
                                name='EndDate'
                                value={formData.EndDate}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div id="fifth-line">
                        <span>
                            <label>วันที่มีผล</label>
                            <input
                                // style={width100}
                                type="date"
                                name='EffectiveDate'
                                value={formData.EffectiveDate}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                    <div id="sixth-line">
                        <span>
                            <label>อัตราดอกเบี้ยใหม่</label>
                            <input
                                // style={width100}
                                type="text"
                                name='NewInterestRate'
                                value={formData.NewInterestRate}
                                onChange={handleChange}></input>
                        </span>
                    </div>
                </form>
            </div>
            <div className="table-container">
                <table className="Table">
                    <thead>
                        <tr>
                            <th>ลำดับที่</th>
                            <th>วันที่ประกาศ</th>
                            <th>ประเภท</th>
                            <th>อัตราดอกเบี้ยล่าสุด</th>
                            <th>วันที่มีผลล่าสุด</th>
                            <th>วันสิ้นสุดใช้อัตราเดิม</th>
                            <th>วันที่มีผล</th>
                            <th>อัตรดอกเบี้ยใหม่</th>
                        </tr>
                    </thead>
                    <tbody>
                    {tableData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.Number}</td>
                                <td>{data.ANNDate}</td>
                                <td>{data.Type}</td>
                                <td>{data.LastestInterestRate}</td>
                                <td>{data.LastEffectiveDate}</td>
                                <td>{data.EndDate}</td>
                                <td>{data.EffectiveDate}</td>
                                <td>{data.NewInterestRate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Component3_3
import "./FirstSection.css"
import "./SecondSection.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faComputer } from '@fortawesome/free-solid-svg-icons';

const SecondSection = () => {
    return (
        <div className="select-container">
            <h1>บันทึกผู้ดูแลลูกหนี้</h1>
            <div className="select-hero" id="record-container">
                <div>
                    <div className="justify-row" id="first-line">
                        <span>
                            <label className="test">ผู้ดูแลลูกหนี้</label>
                            <select>
                                <option value="Thunder">Thunder</option>
                                <option value="kaminariSora">KaminariSora</option>
                                <option value="Tester_1">Tester_1</option>
                                <option value="Tester_2">Tester_2</option>
                            </select>
                        </span>
                    </div>
                    <div className="justify-row" id="first-line">
                        <span>
                            <label>นิติกร</label>
                            <select>
                                <option value="Thunder">Thunder</option>
                                <option value="kaminariSora">KaminariSora</option>
                                <option value="Tester_1">Tester_1</option>
                                <option value="Tester_2">Tester_2</option>
                            </select>
                        </span>
                    </div>
                    <div className="justify-row" id="first-line">
                        <span>
                            <label>ผู้ดูแลด้านบัญชี</label>
                            <select>
                                <option value="Thunder">Thunder</option>
                                <option value="kaminariSora">KaminariSora</option>
                                <option value="Tester_1">Tester_1</option>
                                <option value="Tester_2">Tester_2</option>
                            </select>
                        </span>
                    </div>
                    <div className="justify-row" id="first-line">
                        <span>
                            <label>สถานะการปิดบัญชีลูกหนี้</label>
                            <select>
                                <option value="Thunder">Thunder</option>
                                <option value="kaminariSora">KaminariSora</option>
                                <option value="Tester_1">Tester_1</option>
                                <option value="Tester_2">Tester_2</option>
                            </select>
                        </span>
                    </div>
                </div>
                <div>
                    <div className="justify-row">
                        <div className="input-group">
                            <textarea id="message" rows="8" required></textarea>
                            <label>หมายเหตุเพิ่มเติม</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="description">

            </div>
        </div>
    )
}

export default SecondSection
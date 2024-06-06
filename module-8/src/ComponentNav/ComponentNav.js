import './ComponentNav.css'

function ComponentNav() {
    function Page8_1() {
        window.location.href = '/Component8_1'
    }
    function Page8_2() {
        window.location.href = '/Component8_2'
    }
    function Page8_3() {
        window.location.href = '/Component8_3'
    }
    function Page8_4() {
        window.location.href = '/Component8_4'
    }

    return (
        <div className="button-container">
            <button onClick={Page8_1}>8.1 การกำหนดผู้ใช้ระบบ</button>
            <button onClick={Page8_2}>8.2 การกำหนดสิทธิ์ผู้ใช้ระบบ</button>
            <button onClick={Page8_3}>8.3 การกำหนดข้อมูลพื้นฐานในระบบ</button>
            <button onClick={Page8_4}>8.4 การกำหนดผู้ดูแลลูกหนี้</button>
        </div>
    )
}

export default ComponentNav
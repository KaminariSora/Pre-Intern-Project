import './8-1Component.css'
import '../Component/HeaderBox.css'
import HeaderBox from '../Component/HeaderBox'
import HeaderBar from '../Component/HeaderBar'
import Form from './form'

function Component1() {
    return (
        <div className="container">
            <header>
                <HeaderBar/>
                <HeaderBox/>
            </header>
            <Form />
        </div>
    )
}

export default Component1
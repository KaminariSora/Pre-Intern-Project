import './8-1Component.css'
import HeaderBox from './HeaderBox'
import Form from './form'

function Component1() {
    return (
        <div className="container">
            <header>
                <div>Header</div>
                <HeaderBox/>
            </header>
            <Form />
        </div>
    )
}

export default Component1
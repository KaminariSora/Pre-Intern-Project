import HeaderBar from "../Component/HeaderBar"
import HeaderBox from "../Component/HeaderBox"
import './FirstSection.css'
import FirstSection from "./first-section"
import SecondSection from "./Second-Section"

function Component4() {
    return (
        <div className="container">
            <header>
                <HeaderBar />
                <HeaderBox />
            </header>
            <FirstSection />
            <SecondSection />
        </div>
    )
}

export default Component4
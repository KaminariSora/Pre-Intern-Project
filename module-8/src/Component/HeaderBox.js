function HeaderBox({ handleSubmit }) {
    const exit = () => {
        return (
            window.location.href = '/'
        )
    }
    return (
        <div className="Header-box">
            <h1>Asset Management V.React</h1>
            <form id="button-container">
                <div>
                    <button type="submit" onClick={handleSubmit}>
                        <img src="./Img/round-add-button.png" id="add-button"></img>Add
                    </button>
                    <button>
                        <img src="./Img/pngfind.com-edit-icon-png-704280.png" id="add-button"></img>Edit</button>
                    <button>
                        <img src="./Img/round-add-button.png" id="add-button"></img>Delete</button>
                    <button>
                        <img src="./Img/round-add-button.png" id="add-button"></img>Save</button>
                </div>
                <div>
                    <button>Cancel</button>
                    <button>Print</button>
                    <button onClick={exit}>Exit</button>
                </div>
            </form>
        </div>
    )
}

export default HeaderBox
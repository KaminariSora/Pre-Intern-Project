function HeaderBox() {
    const exit = () => {
        return (
            window.location.href = '/'
        )
    }
    return (
        <div className="Header-box">
                    <h1>Asset Management V.React</h1>
                    <div id="button-container">
                        <div>
                            <button>Add</button>
                            <button>Edit</button>
                            <button>Delete</button>
                            <button>Save</button>
                        </div>
                        <div>
                            <button>Cancel</button>
                            <button>Print</button>
                            <button onClick={exit}>Exit</button>
                        </div>
                    </div>
                </div>
    )
}

export default HeaderBox
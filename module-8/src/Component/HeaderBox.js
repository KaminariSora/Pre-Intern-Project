import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd, faEdit, faTrashAlt, faSave, faCancel, faPrint, faDoorOpen } from '@fortawesome/free-solid-svg-icons';

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
                        <FontAwesomeIcon icon={faAdd} size='2x'/>Add
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faEdit} size='2x'/>Edit</button>
                    <button>
                        <FontAwesomeIcon icon={faTrashAlt} size='2x'/>Delete</button>
                    <button>
                        <FontAwesomeIcon icon={faSave} size='2x'/>Save</button>
                </div>
                <div>
                    <button>
                        <FontAwesomeIcon icon={faCancel} size='2x'/>Cancel</button>
                    <button>
                        <FontAwesomeIcon icon={faPrint} size='2x'/>Print</button>
                    <button onClick={exit}>
                        <FontAwesomeIcon icon={faDoorOpen} size='2x'/>Exit</button>
                </div>
            </form>
        </div>
    )
}

export default HeaderBox
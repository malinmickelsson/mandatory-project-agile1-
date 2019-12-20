import React from 'react';
//import { Link } from "@reach/router";
// import './css/home.css';

const Popup = (props) => {

    const [modal, setModal] = useState(false);
    const [modalCancel, setModalCancel] = useState(false);


    return (
        <div className="container">

            {props.page === "home" ?
                <div className="popup-home-container">
                    
                </div>
                :
                null
            }

        </div>
    );
}
export default Popup

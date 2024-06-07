import { useState } from "react";
import Model from "./Model";
import "./model.css";

export default function ModelTest() {
    const [showModelPopup, setShowModelPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModelPopup(true);
    }

    function onClose() {
        setShowModelPopup(false);
    }

    return (
        <div>
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {showModelPopup && (
                <Model
                    id={"custom.id"}
                    header={<h2>Customized Header</h2>}
                    body={<div>Customized Body</div>}
                    footer={<h2>Customized Footer</h2>}
                    onClose={onClose}
                />
            )}
        </div>
    )

}
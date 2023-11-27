// The forwardRef is important!! Use in reusebale component libraries.
// Dropdown needs access to the DOM node in order to position the Menu
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react';
import { useHistory } from "react-router";

const DropDownMenuIcon = React.forwardRef(({ onClick }, ref) => (
    <i
        className="fa-solid fa-user-pen"
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
    />
));

export const DropDownMenu = (props) => {
    const { handleEditing, handleDeleting } = props;
    return (
        < Dropdown >
            {/* Rename prop to DropDownMenuIcon component */}
            <Dropdown.Toggle as={DropDownMenuIcon} >
            </Dropdown.Toggle>
            {/* Credit to Code Institute Coursework preparation. */}
            <Dropdown.Menu
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
            >
                {/* Items in drop down menu to edit and delete blurb. */}
                <Dropdown.Item onClick={handleEditing} >EDIT</Dropdown.Item>
                <Dropdown.Item onClick={handleDeleting} >DELETE</Dropdown.Item>

            </Dropdown.Menu>
        </Dropdown >

    );
};

/** Credited from Code Intitute Coursework and adapted for this project. */

export function ProfileEditDropdown({ id }) {
    const history = useHistory();
    return (
        <Dropdown drop="left">
            <Dropdown.Toggle as={DropDownMenuIcon} />
            <Dropdown.Menu
                className="text-center"
                popperConfig={{ strategy: "fixed" }}
            >
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit`)}
                    aria-label="edit-profile"
                >
                    <i className="fas fa-edit" />Edit
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/username`)}
                    aria-label="edit-username"
                >
                    <i className="far fa-id-card" />
                    Edit username
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => history.push(`/profiles/${id}/edit/password`)}
                    aria-label="edit-password"
                >
                    <i className="fas fa-key" />
                    Edit password
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

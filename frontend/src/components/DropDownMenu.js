// The forwardRef is important!! Use in reusebale component libraries.
// Dropdown needs access to the DOM node in order to position the Menu
import Dropdown from 'react-bootstrap/Dropdown'
import React from 'react';

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
                Custom toggle
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

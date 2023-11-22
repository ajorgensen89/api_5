import { useEffect, useRef, useState } from "react";

/** Set Navbar toggle menu to collapse away and expand out on mouse click. Better for smaller screens and user experience.
   * Set Hook in NavBar to 'expanded' prop. Set onClick listener to NavBar Toggle and set 'ref' prop.
  */
const useToggle = () => {
    const [collapseExpand, setCollapseExpand] = useState(false)
    const burgerRef = useRef(null)
    useEffect(() => {
        const handleCollapseExpand = (event) => {
            /** Check if value is set and not null. If clicked away, setCollapseExpand to False to close burger dropdown menu. */
            if (burgerRef.current && !burgerRef.current.contains(event.target)) {
                setCollapseExpand(false)
            }
        }

        /**Set listener here. Set removal in return.*/
        document.addEventListener('mouseup', handleCollapseExpand)
        return () => {
            document.removeEventListener('mouseup', handleCollapseExpand)
        }
        /** Place 'ref' prob in useEffesct dependancy array */
    }, [burgerRef]);
    return { collapseExpand, setCollapseExpand, burgerRef };
};

export default useToggle;
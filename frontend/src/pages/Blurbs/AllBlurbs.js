import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/AllBlurbs.module.css"
import appStyles from "../../styles/App.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";

function AllBlurbs(props) {
    /** Sets props. Set default empty string */
    const { message, filter = "" } = props;
    /** Store objects in results array.*/
    const [blurb, setBlurb] = useState({ results: [] });
    /** Check if all data fetched. */
    const [hasLoaded, setHasloaded] = useState(false);
    /** To refetch blurbs when owners move between home, newsfeed and votes pages. 
     * From React router Hook to return objects with data about URL. Credit to Code Institute Coursework project Moments. */
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchBlurbs = async () => {
            try {
                /**Filter prop is used to filter what the user will see. Followed/voted for blurbs. */
                const { data } = await axiosReq(`/blurbs/?${filter}`);
                setBlurb(data);
                setHasloaded(true);
                console.log("data set:", data)
            } catch (err) {
                console.log(err);

            }
        };
        /**reset loading sppin to show to user each time. */
        setHasloaded(false);
        /**Run useEffect each time the filter or path changes. */
        fetchBlurbs();
    }, [filter, pathname]);


    return (
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <p>Most Voted for blurbs for mobile.</p>
                <p>Blurbs List</p>
                {hasLoaded ? (
                    <>
                        {blurb.results.length ? (
                            console.log("mapping over blurb")
                        ) : (
                            console.log("nothing to show.")
                        )}
                    </>

                ) : (
                    console.log("not loaded ... spinner")
                )}

                <Container className={styles.ContainerContent}>
                </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                <p>Most Voted for blurbs for desktop.</p>
            </Col>
        </Row>
    );

};

export default AllBlurbs;
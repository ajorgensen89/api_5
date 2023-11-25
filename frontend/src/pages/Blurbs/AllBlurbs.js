import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
import NoResult from "../../assets/images/Nothing.jpg"
import styles from "../../styles/AllBlurbs.module.css"
// import appStyles from "../../styles/App.module.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { axiosReq } from "../../api/axiosDefaults";
import Blurb from "./Blurb";
import Display from "../../components/Display";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchedMoreData } from "../../utils/utils";

function AllBlurbs(props) {
    /**Search Bar state. add search to axiosReq and set*/
    const [query, setQuery] = useState("");
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
                const { data } = await axiosReq(`/blurbs/?${filter}search=${query}`);
                setBlurb(data);
                setHasloaded(true);
                console.log("data set:", data)
            } catch (err) {
                console.log(err, "fetchBlurbs err");

            }
        };
        /**reset loading sppin to show to user each time. */
        setHasloaded(false);
        /**Run useEffect each time the filter, search query or path changes. */
        fetchBlurbs();
    }, [filter, pathname, query]);

    /** Created to Code Institute, created while producing coursework. */

    return (
        <Row>
            {/* className="py-2 p-0 p-md-2" */}
            <Col md={7} lg={8}>
                <p>Most Voted for blurbs for mobile.</p>
                {/* <i class="fa-brands fa-searchengin"></i> */}
                {/* Search Bar searches by title or user. */}
                <Form
                    // Stop page refreshing if 'Enter' hit.
                    onSubmit={(event) => event.preventDefault()}>
                    <Form.Control
                        className={styles.SearchBar}
                        type="text"
                        placeholder="Start searching..."
                        /**Set query to run search */
                        value={query}
                        // API request handed by onChange event and updates.
                        onChange={(event) => setQuery(event.target.value)}
                    />

                </Form>
                <p></p>
                {hasLoaded ? (
                    <>
                        {blurb.results.length ? (
                            /** Map blurb and enter into children prop. */
                            <InfiniteScroll
                                children={
                                    blurb.results.map(blurb => (
                                        <Blurb key={blurb.id} {...blurb} setBlurb={setBlurb} />
                                    ))
                                }
                                /** Infinite Scroll props */
                                /** Say how many blurb data results there are. */
                                dataLength={blurb.results.length}
                                /**Use spinner component in Display.js */
                                loader={<Display spinner />}
                                /** If 'has more' is true, run 'next' prop. */
                                hasMore={!!blurb.next}
                                /** Created and imported from utils for 'next' prop function to be used on other pages. 
                                 * Set resource prob to blurb and setBlurb. */
                                next={() => fetchedMoreData(blurb, setBlurb)}
                            />

                        ) : (
                            <Display src={NoResult} message={message} />
                        )}
                    </>

                ) : (
                    <Display spinner />
                )}

                {/* <Container className={styles.ContainerContent}>
                </Container> */}
            </Col>
            {/* className="d-none d-md-block p-0 p-md-2" */}
            <Col md={5} lg={4}>
                <p>Most Voted for blurbs for desktop.</p>
            </Col>
        </Row>
    );

};

export default AllBlurbs;
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import appStyles from "../../styles/App.module.css";
import styles from "../../styles/BlurbsForm.module.css";
import { axiosReq } from "../../api/axiosDefaults";
// import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useParams } from "react-router";
import Blurb from "./Blurb";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CreateCommentForm from "../Comments/CreateCommentForm";
import CommentContent from "../Comments/comment";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchedMoreData } from "../../utils/utils";
import Display from "../../components/Display";
import Popular from "../profiles/Popular";

function ShowBlurbPage() {
    /** Set id to get each blurb */
    const { id } = useParams();
    /**useState to store errors used. Imported.*/
    // const [errors, setErrors] = useState({});
    // const currentUser = useCurrentUser();

    // const profile_image = currentUser?.profile_image;

    /** Set to get a single object or an array of comments.*/
    // const [comments, setComments] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });

    /** Set to get a single object or an array of blurbs.*/
    const [blurb, setBlurb] = useState({ results: [] });


    useEffect(() => {
        const handleMount = async () => {
            try {
                /** Fetch destructed data from API with axios Request.  */
                const [{ data: blurb }, { data: comments }] = await Promise.all([

                    /** Axios blurb request with id. */
                    axiosReq.get(`/blurbs/${id}`),

                    /**Axios comments request with id from the particular blurb requested. */
                    axiosReq.get(`/comments/?blurb=${id}`),
                ]);
                /** Update blurb state to display. */
                setBlurb({ results: [blurb] });
                console.log(blurb, "errsettingBlurb")
                /** Update state and display comments to users. */
                setComments(comments);

            } catch (err) {
                console.log(err, "errsettingBlurbCatch")

            }
        }
        handleMount();
    }, [id]);

    /** Credit to creating within project, from Code Institute coursework */

    return (
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <Popular />
                <Blurb {...blurb.results[0]} setBlurb={setBlurb} blurbPage />
                <Container className={styles.ContainerContent}>
                    {currentUser ? (
                        <CreateCommentForm
                            profile_id={currentUser.profile_id}
                            profileImage={profile_image}
                            blurb={id}
                            setBlurb={setBlurb}
                            setComments={setComments}
                        />
                    ) : comments.results.length ? (
                        "Comments"
                    ) : null}
                    {comments.results.length ? (
                        <InfiniteScroll
                            children={comments.results.map((comment) => (
                                <CommentContent
                                    key={comment.id}
                                    {...comment}
                                    setBlurb={setBlurb}
                                    setComments={setComments}
                                />
                            ))}
                            dataLength={comments.results.length}
                            loader={<Display spinner />}
                            hasMore={!!comments.next}
                            next={() => fetchedMoreData(comments, setComments)}
                        />

                        // comments.results.map((comment) => (
                        //     /** Spread comments, objects passed as props with id to each comment.*/
                        //     /**Add setComments and setBlurb props, for edited and deleting comments.
                        //      * Add to prop in comment.js with id field. */
                        //     <CommentContent key={comment.id} {...comment} setComments={setComments} setBlurb={setBlurb} />
                        // ))
                    ) : currentUser ? (
                        <span>Be the first to comment!</span>
                    ) : (
                        <span>Log in before you can create comments!</span>
                    )}
                </Container>
            </Col>
            {/* <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                <p>Most Voted for blurbs for desktop.</p>
            </Col> */}
        </Row>
    );

};

export default ShowBlurbPage;
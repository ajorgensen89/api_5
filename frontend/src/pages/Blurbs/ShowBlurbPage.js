import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

// import appStyles from "../../styles/App.module.css";
import styles from "../../styles/BlurbsForm.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Blurb from "./Blurb";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import CreateCommentForm from "../Comments/CreateCommentForm";


function ShowBlurbPage() {
    /** Set id to get each blurb */
    const { id } = useParams();


    /** Set to get a single object or an array of blurbs.*/
    const [blurb, setBlurb] = useState({ results: [] });
    // const currentUser = useCurrentUser();

    // const profile_image = currentUser?.profile_image;

    /** Set to get a single object or an array of comments.*/
    // const [comments, setComments] = useState({ results: [] });

    const currentUser = useCurrentUser();
    const profile_image = currentUser?.profile_image;
    const [comments, setComments] = useState({ results: [] });


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
                setComments(comments)

            } catch (err) {
                console.log(err, "errsettingBlurbCatch")

            }
        }
        handleMount();
    }, [id]);

    //     // useEffect(() => {

    //     //     /** Try and catch request */
    //     //     const handleMount = async () => {
    //     //         try {

    //     //             /** Make 2 requests, one for the blurb and one for the blurb comments. 
    //     //              * Destructor data property from API. Rename variables for both blurb and comments.
    //     //              * Promise accepts array.*/
    //     //             const [{ data: post }] = await Promise.all([
    //     //                 axiosReq.get(`/blurbs/${id}`),
    //     //                 // axiosReq.get(`/comments/?blurbs=${id}`),
    //     //             ]);
    //     //             setBlurb({ results: [post] });
    //     //             console.log(post)
    //     //             // setComments(comments);
    //     //             // console.log(comments)
    //     //         }   catch (err) {
    //     //             console.log(err)
    //     //         }
    //     //     };

    //     //     handleMount();
    //     //     /** Run the above handle mount every time the id changes. */
    //     // }, [id]);

    /** Credit to creating within project, from Code Institute coursework */

    return (
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <p>Most Voted for blurbs for mobile.</p>
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
                        comments.results.map(comment => (
                            <p key={comment.id}>
                                {comment.owner}: {comment.content}
                            </p>
                        ))
                    ) : currentUser ? (
                        <span>Be the first to comment!</span>
                    ) : (
                        <span>Log in before you can create comments!</span>
                    )}
                </Container>
            </Col>
            <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
                <p>Most Voted for blurbs for desktop.</p>
            </Col>
        </Row>
    );

};

export default ShowBlurbPage;
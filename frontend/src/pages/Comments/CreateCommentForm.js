import React, { useState } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import btnStyles from "../../styles/Button.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

/** Credit to creating within project, from Code Institute coursework */

function CreateCommentForm(props) {
    /** Set props for receiving data. */
    const { blurb, setBlurb, setComments, profileImage, profile_id } = props;

    /**Hook to manage data from API. */
    const [content, setContent] = useState("");

    /** Set change handler for content */
    const handleChange = (event) => {
        setContent(event.target.value);
    };

    /** Handle submitting new comment connected to the individual blurb. */
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            /** Send post response to url with properties of the blurb and comment content. */
            const { data } = await axiosRes.post("/comments/", {
                content,
                blurb,
            });
            setComments((prevComments) => ({
                ...prevComments,
                /** Spread all comments relating to given blurb. */
                results: [data, ...prevComments.results],
            }));
            setBlurb((prevBlurb) => ({
                results: [
                    {
                        ...prevBlurb.results[0],
                        /** Get previous blurb and track count of comments. */
                        comments_count: prevBlurb.results[0].comments_count + 1,
                    },
                ],
            }));
            setContent("");
        } catch (err) {
            /**Catch any errors created my the response on user input. */
            console.log(err);
        }
    };

    return (
        <Form className="mt-2" onSubmit={handleSubmit}>
            <Form.Group>
                <InputGroup>
                    {/* Personal profiles image will display with comment content. Either default two swimming fishes.
                Can set link to their profile to get their own profile Avatar. */}
                    <Link to={`/profiles/${profile_id}`}>
                        <Avatar src={profileImage} />
                    </Link>
                    <Form.Control
                        /** Comment box textarea to handle comment content, to be changed and submitted by Submit Button. 
                         * using onChange handler. */
                        placeholder="my comment..."
                        as="textarea"
                        value={content}
                        onChange={handleChange}
                        rows={2}
                    />
                </InputGroup>
            </Form.Group>
            <button
                /** Submits user comment. */
                className={btnStyles.Button}
                disabled={!content.trim()}
                type="submit"
            >
                Post
            </button>
        </Form>
    );
}

export default CreateCommentForm;
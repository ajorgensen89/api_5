import React from "react";
import styles from "../../styles/Blurb.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { DropDownMenu } from "../../components/DropDownMenu";
import { useHistory } from "react-router";


const Blurb = (props) => {
    const {
        id,
        owner,
        // created_at,
        updated_at,
        title,
        content,
        image,
        profile_id,
        profile_image,
        votes_id,
        votes_count,
        comments_count,
        blurbPage,
        setBlurb,
    } = props;
    /** Create history object for redirction. */
    const history = useHistory();

    /**Set current user by using useCurrentuser Hook */
    const currentUser = useCurrentUser();

    /**set is_owner if current username matches owner for currentUser.*/
    const is_owner = currentUser?.username === owner

    /** Handle Up voting for each blurb. */
    const handleVote = async () => {
        try {
            const { data } = await axiosRes.post('/votes/', { blurb: id });
            setBlurb((prevBlurb) => ({
                ...prevBlurb,
                results: prevBlurb.results.map((blurb) => {
                    return blurb.id === id
                        /**use data to set id to vote matching the correct blurb. */
                        ? { ...blurb, votes_count: blurb.votes_count + 1, votes_id: data.id }
                        : blurb;
                }),
            }));
        } catch (err) {
            console.log(err, "errhandlevote");

        }
    }

    /** Handle remove vote for each blurb. */
    const handleRemoveVote = async () => {
        try {
            /** no const {data} needed as the vote_id is being deleted. */
            await axiosRes.delete(`/votes/${votes_id}`, { blurb: id });
            setBlurb((prevBlurb) => ({
                ...prevBlurb,
                results: prevBlurb.results.map((blurb) => {
                    return blurb.id === id
                        /** votes_id = null as no id needed. */
                        ? { ...blurb, votes_count: blurb.votes_count - 1, votes_id: null }
                        : blurb;
                }),
            }));
        } catch (err) {
            console.log(err, "errhandlevote");

        }
    }
    /** Direct to URL page for editing a blurb. */
    const handleEditing = () => {
        history.push(`/blurbs/${id}/edit`)
    }

    /** Direct to URL page for editing a blurb. */
    const handleDeleting = async () => {
        try {
            await axiosRes.delete(`/blurbs/${id}/`);
            history.goBack();
        } catch (err) {
            console.log(err);
        }
    };

    return <Card className={styles.ContainerContent}>
        <Card.Body>
            {/* Bootstrap Styles in className. */}
            <Media className="align-items-center justify-content-between">
                <Link to={`/profiles/${profile_id}`}>
                    <Avatar src={profile_image} height={50} />
                    {owner}
                </Link>
                <div>
                    <span>Updated:{updated_at}</span>
                    {/* Drop down menu will appear if all conditions are true. If it is the owner of the blurb.
                    The owner will then be able to edit and delete a post accordingly. */}
                    {/* DropDownMenu has two props - edit and delete. */}
                    {is_owner && blurbPage && (
                        <DropDownMenu
                            handleEditing={handleEditing}
                            handleDeleting={handleDeleting}
                        />
                    )}
                </div>

            </Media>
        </Card.Body>
        <Link to={`/blurbs/${id}`}>
            <Card.Img src={image} alt={title} />
        </Link>
        <Card.Body>
            {title && <Card.Title className="text-center">{title}</Card.Title>}
            {content && <Card.Title className="text-center">{content}</Card.Title>}
            <div>
                {/* Terinary codition depending on whether user is logged in. 
                User can vote, if not logged in user will a React Tooltip message*/}
                {is_owner ? (
                    <OverlayTrigger placement="top" overlay={<Tooltip>No voting for your own stuff!</Tooltip>}>
                        <i className="fa-solid fa-thumbs-up"></i>
                    </OverlayTrigger>
                ) : votes_id ? (
                    <span onClick={handleRemoveVote}>
                        <i className={`fa-solid fa-thumbs-up ${styles.ThumbsUpVote}`}></i>
                    </span>
                ) : currentUser ? (
                    <span onClick={handleVote}>
                        <i className="fa-solid fa-thumbs-up"></i>
                    </span>
                ) : (
                    <OverlayTrigger placement="top" overlay={<Tooltip>Log in!</Tooltip>}>
                        <i className="fa-solid fa-thumbs-up"></i>
                    </OverlayTrigger>
                )}
                {votes_count}
                <Link to={`/blurbs/${id}`}>
                    <i className="fa fa-commenting-o" />
                </Link>
                {comments_count}
            </div>
        </Card.Body>
    </Card>
};

export default Blurb;
import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import Display from "../../components/Display";

// import proStyles from "../../styles/ProfileHome.module.css";
import styles from "../../styles/App.module.css";
import btnStyles from "../../styles/Button.module.css";

import Popular from "./Popular";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import { useProfileData, useSetProfileData } from "../../contexts/ProfileContext";
import { Button, Image } from "react-bootstrap";

import InfiniteScroll from "react-infinite-scroll-component";
import Blurb from "../Blurbs/Blurb";
import { fetchedMoreData } from "../../utils/utils";
import NoResults from "../../assets/images/Nothing.jpg";

/** Profile content created during Coursework content with Code Institute. */

function ProfileHome() {
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();

    // Extract id from url using hook.
    const { id } = useParams();

    // Update page profile data.
    const setProfileData = useSetProfileData();

    // Destructor to access page profile data and save in useProfileData hook.
    const { pageProfile } = useProfileData();

    // Destructor single profile object.
    const [profile] = pageProfile.results;

    // Check if owner is logged in.
    const is_owner = currentUser?.username === profile?.owner;

    // useState hook with empty array object for getting profiles.
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    // API request
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }] =
                    await Promise.all([
                        axiosReq.get(`/profiles/${id}/`),
                        axiosReq.get(`/blurbs/?owner__profile=${id}`),
                    ]);
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] }
                }))
                // call function in useEffect hook.
                setProfilePosts(profilePosts);
                setHasLoaded(true);
            } catch (err) {
                console.log(err)

            }
        }

        fetchedData();
    }, [id, setProfileData]);

    const mainProfile = (
        <>
            <Row noGutters className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    <Image roundedCircle src={profile?.image} />
                </Col>
                <Col lg={6}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters" >
                        <Col xs={3} className="my-2">
                            <div>{profile?.blurbs_count}</div>
                            <div>Blurbs</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.followers_count}</div>
                            <div>Followers</div>
                        </Col>
                        <Col xs={3} className="my-2">
                            <div>{profile?.following_count}</div>
                            <div>Following</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={3} className="text-lg-right">
                    {currentUser && !is_owner && (profile?.following_id ? (
                        <Button
                            classname={`${btnStyles.Button} ${styles.OtherButton}`}
                            onClick={() => { }}
                        >
                            unfollow
                        </Button>
                    ) : (
                        <Button
                            className={btnStyles.Button}
                            onClick={() => { }}
                        >
                            follow
                        </Button>
                    ))}
                </Col>
                {/* Conditionally render if the content if defined. */}
                {profile?.content && (<Col className="p-3">{profile.content}</Col>)}
            </Row>
        </>
    );

    const mainProfilePosts = (
        <>
            <hr />
            <p className="text-center">{profile?.owner}'s Blurbs.</p>
            <hr />
            {profilePosts.results.length ? (
                <InfiniteScroll
                    children={profilePosts.results.map((blurb) => (
                        <Blurb key={blurb.id} {...blurb} setBlurb={setProfilePosts} />
                    ))}
                    dataLength={profilePosts.results.length}
                    loader={<Display spinner />}
                    hasMore={!!profilePosts.next}
                    next={() => fetchedMoreData(profilePosts, setProfilePosts)}
                />
            ) : (
                <Display
                    src={NoResults}
                    message={`No results found, ${profile?.owner} hasn't posted yet.`}
                />
            )}
        </>
    );

    return (
        <Row>
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Popular />
                <Container className={styles.ContainerContent}>
                    {hasLoaded ? (
                        <>
                            {mainProfile}
                            {mainProfilePosts}
                        </>
                    ) : (
                        <Display spinner />
                    )}
                </Container>
            </Col>
            <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                <Popular />
            </Col>
        </Row>
    );
}

export default ProfileHome;
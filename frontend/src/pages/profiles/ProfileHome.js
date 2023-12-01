import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Display from "../../components/Display";
import styles from "../../styles/App.module.css";
import appStyles from "../../styles/Profiles.module.css"
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
import { ProfileEditDropdown } from "../../components/DropDownMenu";
import CreateReviewForm from "../Reviews/CreateReviewForm";

/** Profile content created during Coursework content with Code Institute. */
// Get profile name and image for Avatar links in each review from each user.
// Image size is set for main profile picture.
function ProfileHome({ imageSize = 200 }) {
    // Show spinner depending on if a page has loaded or not yet.
    const [hasLoaded, setHasLoaded] = useState(false);
    const currentUser = useCurrentUser();


    // Extract id from url using hook.
    const { id } = useParams();

    // Update page profile data.
    const { setProfileData, handleUnFollow, handleFollow } = useSetProfileData();

    // Destructor to access page profile data and save in useProfileData hook.
    const { pageProfile } = useProfileData();

    // Destructor single profile object.
    const [profile] = pageProfile.results;

    // Check if owner is logged in.
    const is_owner = currentUser?.username === profile?.owner;

    // useState hook with empty array object for getting profiles.
    const [profilePosts, setProfilePosts] = useState({ results: [] });

    const profile_image = currentUser?.profile_image;
    const [review, setReview] = useState({ results: [] });

    // API request
    useEffect(() => {
        const fetchedData = async () => {
            try {
                const [{ data: pageProfile }, { data: profilePosts }, { data: review }] =
                    await Promise.all([
                        // Get the profile of the user by id, alongside their blurbs. 
                        axiosReq.get(`/profiles/${id}/`),
                        axiosReq.get(`/blurbs/?owner__profile=${id}`),
                        // fetch reviews from API for a profile.
                        axiosReq.get(`/reviews/?owner__profile=${id}`),
                    ]);
                setProfileData(prevState => ({
                    ...prevState,
                    pageProfile: { results: [pageProfile] }
                }))
                // call function in useEffect hook.
                setProfilePosts(profilePosts);
                console.log("fetchReview", review)
                setReview(review);
                // Stop spinner showing as blurbs are rendered.
                setHasLoaded(true);
            } catch (err) {
                console.log(err)

            }
        }

        fetchedData();
    }, [id, setProfileData, setReview]);

    const mainProfile = (
        <>
            {/* If owner owns profile being requested to edit, 
            show dropdown menu at the top of the profile. */}
            {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
            <Row className="px-3 text-center">
                <Col lg={3} className="text-lg-left">
                    {/* Use imagesize prop to set size. */}
                    <Image rounded src={profile?.image} height={imageSize} width={imageSize} />
                </Col>
                <Col lg={8}>
                    <h3 className="m-2">{profile?.owner}</h3>
                    <Row className="justify-content-center no-gutters" >
                        <Col xs={4} className="m-1">
                            {/* Set the amount of blurbs the user has. */}
                            <div>{profile?.blurbs_count}</div>
                            <div>Blurbs</div>
                        </Col>
                        <Col xs={4} className="m-1">
                            {/* Set the amount of followers the user has. */}
                            <div>{profile?.followers_count}</div>
                            <div>Followers</div>
                        </Col>
                        <Col xs={4} className="m-1">
                            {/* Set the amount of other users following the user who is logged in. */}
                            <div>{profile?.following_count}</div>
                            <div>Following</div>
                        </Col>
                    </Row>
                </Col>
                <Col lg={1} className="text-lg-right text-wrap">
                    {currentUser && !is_owner && (profile?.following_id ? (
                        // Unfollow a user profile on click.
                        <Button
                            classname={`${appStyles.OtherButton} mx-2 `}
                            onClick={() => handleUnFollow(profile)}
                        >
                            Unfollow
                        </Button>
                    ) : (
                        // Follow a user profile on click
                        <Button
                            className={`${appStyles.FollowStatusButton} mx-2`}
                            onClick={() => handleFollow(profile)}
                        >
                            Follow
                        </Button>
                    ))}
                </Col>
                {/* Conditionally render if the content is defined. */}
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
                    // Set the next page of blurbs from API 'next' field.
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
            <Col className="py-2 p-0 p-lg-2">
                <Col lg={8} className="py-2 p-0 p-lg-2">
                    {/* Popular people will be at the top. On mobile screen, only 2 will be viewed. */}
                    <Popular mobile />
                    <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
                        <Popular />
                    </Col>
                    <Container className={appStyles.ContainerContentThreadReviews}>
                        {/* Input for thread from CreateReviewForm for all
                        users to post here. */}
                        {currentUser ? (
                            <CreateReviewForm mobile
                                profile_id={currentUser.profile_id}
                                profileImage={profile_image}
                                reviews={review}
                                setReview={setReview}
                                review={id}
                            />
                        ) : review.results.length ? (
                            "Reviews!"
                        ) : null}
                        {/* Input thread is set to a pagination of 10 and 
                        will remove the oldest and replace with the newest thread feed. */}
                        {review.results.length ? (
                            review.results.map((review) => (
                                <div key={review.id} review={review} className={`${appStyles.Lined} my-2`}>
                                    <p>{review.owner}:</p>
                                    <p> {review.content} - {review.updated_at}</p>
                                </div>
                            ))
                        ) : currentUser ? (
                            <span>No user chat yet!</span>
                        ) : (
                            <span>Log in to post in this feed!</span>
                        )}
                    </Container>
                </Col>

                <Container className={styles.ContainerContent}>
                    {/* Fetch the blurbs and post them or display a spinner when loading. */}
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
        </Row>
    );
}

export default ProfileHome;
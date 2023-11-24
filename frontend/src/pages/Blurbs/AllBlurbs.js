import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import styles from "../../styles/AllBlurbs.module.css"
import appStyles from "../../styles/App.module.css";

function AllBlurbs() {
    return (
        <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
                <p>Most Voted for blurbs for mobile.</p>
                <p>Blurbs List</p>

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
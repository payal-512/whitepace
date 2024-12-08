
import Layout from "../components/layout";
import heroImage from "../assets/images/hero-image.svg";
import { choosePlans } from "../contents/choose-plan";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import androidIcon from "../assets/images/android-icon.svg";
import windowIcon from "../assets/images/window-icon.svg";
import appleIcon from "../assets/images/apple-icon.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomePage = () => {
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    className: "center",
                    slidesToShow: 1,
                    centerPadding: "150px",
                    centerMode: true,
                    dots: true,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    centerPadding: "0px",
                    dots: true,
                },
            },
        ],
    };

    return (
        <Layout>
            <section className="hero-section position-relative">
                <Container>
                    <Row className="align-items-center position-relative z-1">
                        <Col xs={12} md={6} className="text-md-start text-center">
                            <h1 className="text-white hero-title mb-3">Get More Done with whitepace</h1>
                            <p className="text-white mb-5 fw-normal">Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                            <Button variant="primary">
                                Try Whitepace Free
                                <span className="ms-2">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6H11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 1L11 6L6 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Button>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={heroImage} alt="Hero" className="img-fluid" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <section className="choose-plan-section">
                <Container>
                    <div className="text-center">
                        <h2 className="section-title bottom-shape position-relative">
                            Choose Your Plan
                        </h2>
                        <p className="choose-plan-text">Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
                    </div>
                    <div className="choose-plan-row">
                        <Slider {...sliderSettings}>
                            {choosePlans.map((plan, index) => (
                                <Card key={index} className={`choose-plan-card ${plan.type === "Personal" ? "text-white plan-highlighted" : ""}`}>
                                    <Card.Body>
                                        <Card.Title className="fs-4 pb-2">
                                            {plan.type}
                                        </Card.Title>
                                        <Card.Subtitle className="fs-2 my-3 pb-2">
                                            {plan.price}
                                        </Card.Subtitle>
                                        <Card.Text className="mb-4 fw-medium">
                                            {plan.heading}
                                        </Card.Text>
                                        <ul className="list-unstyled plan-list">
                                            {plan.lists.map((item, idx) => (
                                                <li key={idx}>
                                                    <span className="true-round-icon">
                                                        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M19.0059 9.67688V10.5051C19.0047 12.4466 18.3761 14.3356 17.2137 15.8905C16.0512 17.4455 14.4173 18.583 12.5556 19.1335C10.6938 19.6839 8.70404 19.6178 6.88294 18.945C5.06183 18.2722 3.507 17.0288 2.45034 15.4001C1.39367 13.7714 0.891777 11.8448 1.01952 9.90764C1.14725 7.97043 1.89778 6.12642 3.15915 4.65061C4.42053 3.1748 6.12517 2.14628 8.01885 1.71843C9.91253 1.29057 11.8938 1.48632 13.6671 2.27648" stroke="#212529" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M19.0058 3.3027L10.0029 12.3146L7.302 9.61376" stroke="#212529" strokeWidth="2" strokellinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </span>
                                                    {item.label}
                                                </li>
                                            ))}
                                        </ul>
                                        <div>
                                            <Button
                                                className="px-5"
                                                variant={plan.type === "Personal" ? "primary" : "outline-secondary"}
                                            >
                                                Get Started
                                            </Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            ))}
                        </Slider>
                    </div>
                </Container>
            </section>
            <section className="try-whitepace-section bg-blue">
                <Container>
                    <Row>
                        <Col xs={12} lg={6} className="text-lg-center mx-lg-auto">
                            <h2 className="text-white section-title">
                                Try Whitepace today
                            </h2>
                            <p className="text-white mb-0">Get started for free.</p>
                            <p className="text-white">Add your whole team as your needs grow.</p>
                            <Button variant="primary my-2">
                                Try Whitepace Free
                                <span className="ms-2">
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 6H11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M6 1L11 6L6 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </Button>
                            <p className="text-white mt-3">On a big team? Contact sales</p>
                            <div className="d-flex align-items-center justify-content-lg-center mt-4 icon-grp gap-5">
                                <img src={appleIcon} width={52} height={60} alt="Apple" />
                                <img src={windowIcon} width={52} height={60} alt="Windows" />
                                <img src={androidIcon} width={52} height={60} alt="Android" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
        </Layout>
    );
}

export default HomePage
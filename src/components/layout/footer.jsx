import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import logo from "../../assets/images/logo.svg";
import { languages } from "../../configs/array-config";

const Footer = () => {
    return (
        <footer className="bg-blue text-white">
            <Container>
                <Row className="gap-3 gap-lg-0 text-sm-start text-center">
                    <Col lg={3}>
                        <img
                            src={logo}
                            width="191"
                            height="34"
                            className="img-fluid mb-3"
                            alt="Whitepace"
                        />
                        <p className="footer-text">
                            Whitepace was created for the new ways we live and work. We make a
                            better workspace around the world.
                        </p>
                    </Col>
                    <Col lg={2}>
                        <h6 className="footer-title">Product</h6>
                        <ul className="list-unstyled footer-lists">
                            <li><a href="#">Overview</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customer stories</a></li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h6 className="footer-title">Resources</h6>
                        <ul className="list-unstyled footer-lists">
                            <li><a href="#">Blog</a> </li>
                            <li><a href="#">Guides & tutorials</a></li>
                            <li><a href="#">Help center</a></li>
                        </ul>
                    </Col>
                    <Col lg={2}>
                        <h6 className="footer-title">Company</h6>
                        <ul className="list-unstyled footer-lists">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Media kit</a></li>
                        </ul>
                    </Col>
                    <Col lg={3}>
                        <h6 className="try-today-title mb-3">Try It Today</h6>
                        <p className="try-today-text">
                            Get started for free. Add your whole team as your needs grow.
                        </p>
                        <Button variant="primary">
                            Start today
                            <span className="ms-2">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 6H11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M6 1L11 6L6 11" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </Button>
                    </Col>
                </Row>
                <Row className="mt-4 align-items-center">
                    <Col lg={12} className="bottom-footer" />
                    <Col lg={8}>
                        <ul className="list-unstyled footer-lists d-sm-flex justify-content-start align-items-center gap-4 mb-0 text-center">
                            <li className="mb-sm-0 mb-3">
                                <Form.Select aria-label="languages" className="w-auto mx-auto">
                                    {languages.map((language) => (
                                        <option key={language.value}>{language.label}</option>
                                    ))}
                                </Form.Select>
                            </li>
                            <li className="mb-sm-0 mb-3"><a href="#" className="mb-0">Terms & privacy</a></li>
                            <li className="mb-sm-0 mb-3"><a href="#" className="mb-0">Security</a></li>
                            <li className="mb-sm-0 mb-3"><a href="#" className="mb-0">Status</a></li>
                            <li className="mb-sm-0 mb-3"><p className="mb-0">©2021 Whitepace LLC.</p></li>
                        </ul>
                    </Col>
                    <Col lg={4}>
                        <div className="d-flex justify-content-lg-end justify-content-sm-center justify-content-center  align-items-center gap-3 mt-3 mt-lg-0">
                            <span>
                                <svg width="9" height="18" viewBox="0 0 9 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.5058 10.0753C2.44316 10.0753 1.06497 10.0753 0.438515 10.0753C0.104408 10.0753 0 9.95006 0 9.63683C0 8.80157 0 7.94542 0 7.11015C0 6.77604 0.12529 6.67164 0.438515 6.67164H2.5058C2.5058 6.60899 2.5058 5.39785 2.5058 4.83405C2.5058 3.99878 2.65197 3.20528 3.06961 2.47442C3.50812 1.72268 4.13457 1.22152 4.92807 0.929176C5.45012 0.741241 5.97216 0.657715 6.53596 0.657715H8.58237C8.87471 0.657715 9 0.783005 9 1.07535V3.45586C9 3.7482 8.87471 3.87349 8.58237 3.87349C8.01856 3.87349 7.45476 3.87349 6.89095 3.89437C6.32715 3.89437 6.0348 4.16584 6.0348 4.75052C6.01392 5.37697 6.0348 5.98254 6.0348 6.62987H8.45708C8.79118 6.62987 8.91647 6.75516 8.91647 7.08927V9.61595C8.91647 9.95006 8.81207 10.0545 8.45708 10.0545C7.70534 10.0545 6.09745 10.0545 6.0348 10.0545V16.8619C6.0348 17.2169 5.93039 17.3422 5.55452 17.3422C4.67749 17.3422 3.82135 17.3422 2.94432 17.3422C2.63109 17.3422 2.5058 17.2169 2.5058 16.9037C2.5058 14.7111 2.5058 10.138 2.5058 10.0753Z" fill="#F7F7EE" />
                                </svg>
                            </span>
                            <span>
                                <svg width="17" height="14" viewBox="0 0 17 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 1.72894C16.3678 2.00625 15.6942 2.19006 14.9919 2.27931C15.7144 1.84794 16.2658 1.17006 16.5251 0.353C15.8514 0.754625 15.1077 1.03831 14.3151 1.19663C13.6754 0.515563 12.7638 0.09375 11.7693 0.09375C9.83981 0.09375 8.28644 1.65988 8.28644 3.57981C8.28644 3.85606 8.30981 4.12169 8.36719 4.37456C5.46975 4.23325 2.90594 2.84456 1.18362 0.729125C0.882937 1.25081 0.706563 1.84794 0.706563 2.49075C0.706563 3.69775 1.32812 4.76769 2.25463 5.38713C1.69469 5.3765 1.14538 5.21394 0.68 4.95788C0.68 4.9685 0.68 4.98231 0.68 4.99612C0.68 6.68975 1.88806 8.0965 3.47225 8.42056C3.18856 8.49813 2.87937 8.53531 2.5585 8.53531C2.33538 8.53531 2.11012 8.52256 1.89869 8.47581C2.35025 9.856 3.63163 10.8707 5.15525 10.9036C3.9695 11.8312 2.46394 12.3901 0.834063 12.3901C0.54825 12.3901 0.274125 12.3773 0 12.3422C1.54381 13.3378 3.37344 13.9062 5.3465 13.9062C11.7597 13.9062 15.266 8.59375 15.266 3.98887C15.266 3.83481 15.2607 3.68606 15.2533 3.53838C15.9449 3.0475 16.5261 2.43444 17 1.72894Z" fill="#F7F7EE" />
                                </svg>
                            </span>
                            <span>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.9963 15.4999V15.4993H15V9.98076C15 7.28105 14.4247 5.20142 11.3004 5.20142C9.79839 5.20142 8.79045 6.03402 8.37897 6.82337H8.33552V5.45346H5.37317V15.4993H8.45779V10.525C8.45779 9.21524 8.70356 7.94877 10.3092 7.94877C11.8912 7.94877 11.9148 9.44345 11.9148 10.609V15.4999H14.9963Z" fill="#F7F7EE" />
                                    <path d="M0.223877 5.42554H3.35821V15.2763H0.223877V5.42554Z" fill="#F7F7EE" />
                                    <path d="M1.79104 0.5C0.802303 0.5 0 1.29856 0 2.28269C0 3.26683 0.802303 4.08209 1.79104 4.08209C2.77979 4.08209 3.58209 3.26683 3.58209 2.28269C3.58147 1.29856 2.77916 0.5 1.79104 0.5V0.5Z" fill="#F7F7EE" />
                                </svg>
                            </span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

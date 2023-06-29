import React from "react";
// import { Link } from "react-router-dom";
import {Form, Input, TextArea} from 'semantic-ui-react';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';
// reactstrap components
import {
    Button, Card, CardHeader, CardFooter, CardTitle, Container, Row
} from "reactstrap";

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);

// core components

const SERVICE_ID = "s5ervice_mpj9n9g";
const TEMPLATE_ID = "template_vtbma8";
const USER_ID = "i7jwXRdawhnNqLmgu";

const SignUp = () => {

    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success', title: 'Message Sent Successfully'
                })
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: 'error', title: 'Ooops, something went wrong', text: error.text,
                })
            });
        e.target.reset()
    };

    return (<>
        <div
            className="section section-signup"
            style={{
                backgroundImage: "url(" + require("assets/img/bg11.jpg") + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center",
                minHeight: "700px"
            }}
        >
            <Container>
                <Row>
                    <Card className="card-signup" data-background-color="green" id="getaquote">
                        <Form action="" className="form" method="" onSubmit={handleOnSubmit}>
                            <CardHeader className="text-center">
                                <CardTitle className="title-up" tag="h3">
                                    Get Connected!
                                </CardTitle>
                            </CardHeader>
                            <Form.Field
                                className="text-center card-body"
                                id='form-input-control-email'
                                control={Input}
                                text='Email'
                                name='user_email'
                                placeholder='Email…'
                                required
                                icon='mail'
                                iconPosition='left'
                            />
                            <Form.Field
                                className="text-center card-body"
                                id='form-input-control-last-name'
                                control={Input}
                                name='user_name'
                                placeholder='First, Last…'
                                required
                                icon='user circle'
                                iconPosition='left'
                            />
                            <Form.Field
                                className="text-center card-body"
                                control={Input}
                                name='user_location'
                                placeholder='City, State…'
                                required
                                icon='location arrow'
                                iconPosition='left'
                            />
                            <Form.Field
                                className="text-center card-body"
                                control={Input}
                                name='user_budget'
                                placeholder='Budget…'
                                required
                                icon='dollar sign'
                                iconPosition='left'
                            />
                            <Form.Field
                                className="text-center card-body"
                                id='form-textarea-control-opinion'
                                control={TextArea}
                                name='user_message'
                                placeholder='Message…'
                            />
                            <CardFooter className="text-center">
                                <Button className="btn-round btn-lg" type='submit' color="warning">SUBMIT</Button>
                            </CardFooter>
                        </Form>
                    </Card>
                </Row>
            </Container>
        </div>
    </>);
}

export default SignUp;

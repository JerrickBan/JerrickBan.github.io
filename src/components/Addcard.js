import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { CCard, CCardBody, CCardFooter, CCardGroup, CCardHeader, CCardImage, CCardLink, CCardSubtitle, CCardText, CCardTitle, CCol, CButton} from '@coreui/react';
import Button from 'react-bootstrap/Button';


const Addcard = (props) => {
    const view = props.view;
    const git = props.git
    if (view && git) {
        return(
            <CCol xs>
                <CCard color="info" className={`mb-3 border-light`}>
                    {/* <CCardImage orientation="top" src={props.img} /> */}
                    <CCardBody>
                        <CCardTitle>{props.name}</CCardTitle>
                        <CCardSubtitle>{props.date}</CCardSubtitle>
                        <CCardText>
                            {props.txt}
                        </CCardText>
                        <CButton color="success" href={props.view}>View</CButton> {' '}
                        <CButton color="dark" href={props.git}>GitHub</CButton>
                    </CCardBody>
                </CCard>
            </CCol>
        );
    }
    else if (view) {
        return(
            <CCol xs>
                <CCard color="info" className={`mb-3 border-light`}>
                    {/* <CCardImage orientation="top" src={props.img} /> */}
                    <CCardBody>
                        <CCardTitle>{props.name}</CCardTitle>
                        <CCardSubtitle>{props.date}</CCardSubtitle>
                        <CCardText>
                            {props.txt}
                        </CCardText>
                        <CButton color="success" href={props.view}>View</CButton>
                    </CCardBody>
                </CCard>
            </CCol>
        );
    }
    else {
        return(
            <CCol xs>
                <CCard color="info" className={`mb-3 border-light`}>
                    {/* <CCardImage orientation="top" src={props.img} /> */}
                    <CCardBody>
                        <CCardTitle>{props.name}</CCardTitle>
                        <CCardSubtitle>{props.date}</CCardSubtitle>
                        <CCardText>
                            {props.txt}
                        </CCardText>
                        <CButton color="dark" href={props.git}>GitHub</CButton>
                    </CCardBody>
                </CCard>
            </CCol>
        );
    }
}


export default Addcard;
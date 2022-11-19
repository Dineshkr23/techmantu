import styled from "styled-components";

const Button = styled.button`
    background-color: ${props => props.primary ? "#c02529" : "#ffffff"};
    color: ${props => props.primary ? "#ffffff" : "#000000"};
    border: ${props => props.primary ? "none" : "1px solid #c02529"};
    border-radius:0.3rem;
    padding: 0.3rem 1rem;
`;

const FormButton = styled.button`
    background-color: ${props => props.primary ? "#c02529" : "#ffffff"};
    color: ${props => props.primary ? "#ffffff" : "#000000"};
    border: ${props => props.primary ? "none" : "1px solid #c02529"};
    border-radius:0.3rem;
    padding: 0.3rem 10rem;
    font-size: 1.5rem;
`;

export {Button, FormButton};
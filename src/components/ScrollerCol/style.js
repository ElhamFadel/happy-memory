import styled from "styled-components";
export const ScrollerCol = styled.div`
    float: left;
    height: 100%;
    width: 230px;
    margin-right: 15px;
`;

export const ScrollerImage = styled.div`
    width: 100%;
    padding-bottom: 177.5%;
    background-repeat: no-repeat;
    background-size: 100%;
    margin-bottom: 15px;
    box-shadow: 0 5px 10px 0 rgb(0 0 0 / 15%);
    background-image: url(${props => props.bg});
    background-size: cover;
`;


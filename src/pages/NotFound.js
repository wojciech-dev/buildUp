import React from 'react';
import styled from 'styled-components';

const FourOhFour = styled.h6`
	font-size: 144px;
	height: calc(100vh - 103px);
	color: red;
	width: 100%;
	display: flex;
	align-items: center;
	background-size: cover;
	justify-content: center;
`;


const NotFound = () => {
    return (
        <FourOhFour>404</FourOhFour>
    );
}

export default NotFound;
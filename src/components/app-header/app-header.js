import React from 'react';
import "./app-header.css";
import styled from 'styled-components'; //CSS in JS

// CSS in JS
const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 32px;
        color: ${props => props.colored ? 'red' : 'brown'};
        :hover {
            color: orange
        } ;
    };
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({allPosts, liked}) => {
// <div className='app-header d-flex'> 

    return (
        // <Header colored> 
        <Header>        
            <h1>Zmei Gorinchi</h1>
            <h2>{allPosts} records, liked {liked}</h2>
        </Header>
    )
}
export default AppHeader;


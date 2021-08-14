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

const AppHeader = () => {
{/* <div className='app-header d-flex'> */}

    return (
        // <Header colored> 
        <Header as='a'>        
            <h1>Zmei Gorinich</h1>
            <h2>10 records, liked 2</h2>
        </Header>
    )
}
export default AppHeader;


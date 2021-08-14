import React, {Component} from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/serch-panel";
import PostStatusFilter  from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";
import styled from 'styled-components';

// CSS in JS
const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyledAppBlock = styled(AppBlock)`
    background-color: yellow;
`
export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
    // assuming data from server
            data: [
                {label: 'Going learn React', important: true, id: 1},
                {label: 'That is good', important: false, id: 2},
                {label: 'Let lake a break...', important: false, id: 3}
            ]
        };
        this.deleteItem = this.deleteItem.bind(this);  
        this.addItem = this.addItem.bind(this);  
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);
            const newArr = [...data.slice(0, index), ...data.slice(index+1)];
            return {
                data: newArr,
            }
        });
    }

    addItem(newText) {
        const newElement = {
            label: newText, 
            important: false, 
            id: this.maxId++, };

        this.setState(({data}) => {
            const newArr = [...data, newElement];
            return {
                data: newArr,
            }
        });
    }
    render() {
        const {data} = this.state;
        return (
            // replace div+clasName with AppBlock
            // <AppBlock>
            // options StyledAppBlock inside AppHeader
            <StyledAppBlock>  
                <AppHeader/>
                <div className = 'search-panel d-flex'>
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={data}
                    onDelete={this.deleteItem}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </StyledAppBlock>
            // </AppBlock>
        )
    }

}


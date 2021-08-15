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
    // background-color: yellow;
`
export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
    // assuming data from server
            data: [
                {label: 'Going learn React', important: true, like: false, id: 1},
                {label: 'That is good', important: false, like: false, id: 2},
                {label: 'Let lake a break...', important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all',

        };
        this.deleteItem = this.deleteItem.bind(this);  
        this.addItem = this.addItem.bind(this);   
        this.onToggleImportant = this.onToggleImportant.bind(this); 
        this.onToggleLiked = this.onToggleLiked.bind(this); 
        this.onUpdateSearch = this.onUpdateSearch.bind(this); 
        this.onFilterSelect = this.onFilterSelect.bind(this); 

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

    onToggleImportant(id) {
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, important: !old.important};
            console.log(newItem);
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
            return{
                data: newArr
            }
        });
    }

    onToggleLiked(id) {
        this.setState(({data}) =>{
            const index = data.findIndex(elem => elem.id === id);
            const old = data[index];
            const newItem = {...old, like: !old.like};
            const newArr = [...data.slice(0, index), newItem, ...data.slice(index+1)]
            return{
                data: newArr
            }
        });  
    }

    searchPost(items, term) {
        if (term.length === 0) {
            return items    //if user enter nothing or delete txt
        }

        return items.filter((item)=>{   // see if input quual existing record
            return item.label.indexOf(term)> -1  // -1 if result - false
        });
    }

    onUpdateSearch(term) {
        this.setState({term});
    }

    filterPost (items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like)
        } else {
            return items
        }
    }

    onFilterSelect(filter) {
        this.setState({filter});
    }

    render() {
        const {data,term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPost(this.searchPost(data, term), filter); // visibile post based on input
        return (
            // replace div+clasName with AppBlock
            // <AppBlock>
            <StyledAppBlock>  
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className = 'search-panel d-flex'>
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}/> 
                    <PostStatusFilter
                        filter={filter} 
                        onFilterSelect={this.onFilterSelect}/> 
                </div>
                <PostList 
                    posts={visiblePosts}   // visible post based on input
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLiked={this.onToggleLiked}/>
                <PostAddForm
                    onAdd={this.addItem}/>
            </StyledAppBlock>
            // </AppBlock>
        )
    }

}

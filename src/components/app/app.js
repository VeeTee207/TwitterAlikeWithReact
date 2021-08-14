import React from 'react';
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/serch-panel";
import PostStatusFilter  from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";
import "./app.css";

const App = () => {

    // assuming data from server
    const data = [
        {label: 'Going learn React', important: true, id:'ksctam'},
        {label: 'That is good', important: false, id:'ncsevs'},
        {label: 'Let lake a break...', important: false, id:'casfbi2qe'}
    ]
    return (
        <div className='app'>
            <AppHeader/>
            <div className = 'search-panel d-flex'>
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}
export default App

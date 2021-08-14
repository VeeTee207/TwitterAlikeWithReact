import React from 'react';
import { ListGroup } from 'reactstrap';

import PostListItem from "../post-list-item/post-list-item";
import "./post-list.css";


const PostList = ({posts, onDelete}) => {
    const elements = posts.map((item) => {
        const {id, ...itemProps}=item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...itemProps}
                    onDelete={()=>onDelete(id)} />
                {/* redo two lines below with ES8 spred operator for obj */}
                {/* label={item.label}
                important={item.important}/> */}
            </li>
        );
    });
    return (
        <ListGroup className='app-list'>
            {elements}
        </ListGroup>
    )
}

export default PostList;

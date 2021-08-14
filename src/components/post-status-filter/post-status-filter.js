import React from 'react';
import { Button } from 'reactstrap';
import "./post-status-filter.css";


const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            <Button color="success">Все</Button>
            <button type='button' className="btn btn-info">All</button>
            <button type='button' className="btn btn-btn-outline-secondary">Liked</button>
        </div>

    )
};
export default PostStatusFilter;

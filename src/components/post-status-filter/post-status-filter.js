import React from 'react';
// import { Button } from 'reactstrap';    // option with ReactStrap
import "./post-status-filter.css";


const PostStatusFilter = () => {
    return (
        <div className='btn-group'>
            {/* <Button color="success">Все</Button>            // option with ReactStrap      */}
            <button type='button' className="btn btn-info">All</button>
            <button type='button' className="btn btn-btn-outline-secondary">Liked</button>
        </div>

    )
};
export default PostStatusFilter;

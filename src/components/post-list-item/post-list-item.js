import React, {Component} from 'react'
import "./post-list-item.css";
// import "./post-list-item.sass"; // sass can be as options


export default class PostListItem extends Component {
    constructor(props) {
        super(props);
        this.state ={
            important: false,
            like: false,
        };
        this.onLike = this.onLike.bind(this) // opt 2
    }

    onImportant = () => {
        this.setState({ important: !this.state.important })
    }

    // options 1
    // onLike = () => {
    //     this.setState({ like: !this.state.like });
    // }

    // options 2
    onLike () {
        this.setState({ like: !this.state.like })
    }

    render(){
        const {label, onDelete} = this.props;
        const {important, like} = this.state;
        let classNames = 'app-list-item d-flex justify-content-between';
        if (important) {
            classNames += ' important';
            console.log('important');
            console.log(classNames);
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span
                    className="app-list-item-label"
                    onClick={this.onLike}> 
                        {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type='button' 
                        className="btn-star btn-sm"
                        onClick={this.onImportant}>
                            <i className="fa fa-star"></i>
                    </button>
                    <button 
                        type='button' 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                            <i className="fa fa-trash-o"></i>
                    </button>
                    <i className="fa fa-heart"></i>
                </div>
            </div>
        )
    }
}


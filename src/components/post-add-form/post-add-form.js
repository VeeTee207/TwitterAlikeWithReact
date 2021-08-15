import React, {Component} from 'react';
import "./post-add-form.css";

export default class PostAddForm extends Component{
    constructor (props) {
        super(props);
        this.state= {
            text: '',
        }
        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    onValueChange (event) {
        this.setState({
            text: event.target.value,
        })
    }

    onSubmit (e) {
        // to do form correctly the browser has to cansel standart  behaviour
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text: '',   // clean up input previous intake
        })
    }
    render () {
        return (
            <form 
                className="bottom-panel d-flex"
                onSubmit= {this.onSubmit} >
                
                <input 
                    type="text" 
                    className="form-control new-post-label"
                    placeholder='Post your ideas here'
                    onChange={this.onValueChange}
                    value={this.state.text}   // controled condition to clean up input
                />
                <button
                    type='submit' 
                    className="btn-btn-outline-secondary">
                    Add</button>
            </form>
        )
    }

}




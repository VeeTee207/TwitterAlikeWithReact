import React, {Component, component} from 'react';
import "./search-panel.css";

export default class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: '',
        };
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch (ev) {
        const term = ev.target.value;
        this.setState({term}); // same ({term: term})
        this.props.onUpdateSearch(term); //search-panel return
                                // onUpdateSearch(another func to App.js) props to app
    }

    render () {
        return (
            <input
                className = 'form-control search-input'
                type = 'text'
                placeholder = 'Item search in records'
                onChange = {this.onUpdateSearch}
            />
        )
    }
}

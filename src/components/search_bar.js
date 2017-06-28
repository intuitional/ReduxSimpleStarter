import React, {Component} from 'react';
// same as const Component = React.Component;

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: 'Starting Value' };
    }

    render() {
        return (
            <div>
                <input
                  value = {this.state.term} 
                  onChange={event => this.setState({term: event.target.value })} />
            </div>
        )
    }
    // <input onChange={this.onInputChange} />;

/*
const onInputChange(event) {
    console.log(event.target.value);
}
*/

}
/*const SearchBar = () => {
    return <input />;
};*/

export default SearchBar;
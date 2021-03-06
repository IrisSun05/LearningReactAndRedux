import React from 'react'

class SearchBar extends React.Component{
    state = {term : ''}

    onformSubmit= event =>{
        event.preventDefault()
    this.props.onSubmit(this.state.term)    
    }

    render() {
        return (
        <div className="ui segment">
            <form className="ui form" onSubmit={this.onformSubmit}>
                <div className="field">
                    <label>Search field</label>
                    <input type = "text" onChange={e => this.setState({term : e.target.value})}>
                    </input>
                </div>
            </form>
        </div>
        )
    }
}

export default SearchBar;
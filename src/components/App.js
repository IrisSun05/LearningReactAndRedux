import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import './ImageList.css';

class App extends React.Component{
    state = {image : []}

    onSearchSubmit = async(term) => {
        const response = await unsplash.get('/search/photos',{
        params:{query:term},
        });
        this.setState({image : response.data.results})
    }

    render(){
    return(
        <div className="ui container" style={{marginTop : '10px'}}>
            <SearchBar onSubmit ={this.onSearchSubmit}/>
            <ImageList image = {this.state.image}/>
        </div>
    );
    }
}

export default App
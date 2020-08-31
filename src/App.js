import React from 'react';
import './App.css';
import BookList from './Booklist';

const base_url = 'https://www.googleapis.com/books/v1/volumes';
//const hardcoded_url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAQA6SpGBaYgnf_CKDkeErDfdN_4OgmqQ0`;
const API_KEY = 'AIzaSyAQA6SpGBaYgnf_CKDkeErDfdN_4OgmqQ0';

class App extends React.Component {
  state = {
    onlyFreeEbooks: false,
    results: [],
  };

  handleSearch = (event) => {
    event.preventDefault();

    console.log('handleSearch called');
    const searchVal = event.target['search-term'].value
    event.target.reset();

    console.log(searchVal);
    fetch(`${base_url}?q=${searchVal}&key=${API_KEY}`)

      .then(res => res.json())
      .then(responseJSON => {
        this.setState({
          results: responseJSON.items
        })
      
      })

    this.setState({
      bookSearchTerm: searchVal
    }); 
    
  }

  
 

  render() {
    return (
      <div>
        <header>
          <h1>Google Book Searchin'</h1>
        </header>
        <main className='App'>

          <div className='searchform'>
            <form className='js-form' onSubmit={this.handleSearch}>
              <label htmlFor='search-term'>What book are you looking for?</label>
              <input type='text' id='search-term' name='search-term' required></input>
              <input type='submit' value='Go' />
            </form>
          </div>
          <div className='results'>
              <BookList 
                books={this.state.results}
              />
          </div>
        </main>
      </div>
    )
  }
}

export default App;
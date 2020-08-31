import React from 'react';
import './App.css';

const base_url = 'https://www.googleapis.com/books/v1/volumes';
//const hardcoded_url = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=AIzaSyAQA6SpGBaYgnf_CKDkeErDfdN_4OgmqQ0`;

class App extends React.Component {
  state = {
    bookSearchTerm: '',
    onlyFreeEbooks: false,
    results: [],
  };

  handleSearch = (event) => {
    event.preventDefault();

    console.log('handleSearch called');
    const searchVal = event.target['search-term'].value
    event.target.reset();

    console.log(searchVal);

    this.setState({
      bookSearchTerm: searchVal
    }, () => console.log(this.state.bookSearchTerm));     
  }

  makeApiRequest = () => {

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
            <p>list of books here</p>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
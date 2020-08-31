import React from 'react';

export default function BookList(props){
    
    console.log(props.books);
    const newList = props.books.map(book => {
        return (
            <div key = {book.id} className="BookItem">
                <h3>{book.volumeInfo.title}</h3>
                <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                <h5>Author: {book.volumeInfo.authors}</h5>
                <p>{book.volumeInfo.description}</p>
            </div>
        )
    })
    
    
    
    return(
            <div className="Booklist-wrapper">
                 {newList}   
            </div>
        )
}
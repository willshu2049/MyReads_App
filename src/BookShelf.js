import React from 'react'
import Book from './Book'

class BookShelf extends React.Component {

  render () {

    const { books, sectionName, onShelfChange } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{sectionName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map( book => (
              <li key={book.id}>
                <Book book={book} onShelfChange={onShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf;

import React from 'react'

class Book extends React.Component {
  handleChange = (e) => {
    //console.log(e.target.id)
    //console.log(e.target.value)
    this.props.onShelfChange(e.target)
  }

  render () {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url('+book.imageLinks.thumbnail+')' }}></div>
          <div className="book-shelf-changer">
            <select value={book.shelf} id={book.id} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors.map(author=>(
            <p key={author}>{author}</p>
        ))}</div>
      </div>
    )
  }
}

export default Book;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        return this.props.books.map((book) =>{
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }
    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//take the applications state as an argument
function mapStateToProps(state){
    //This creates props that will appear inside of the book list
    return{
        books: state.books
    }
}
//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch){
    //bind action creator says whenever select book is called run everything through dispatch. Take all the actions and passes them to all of the reducers.
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
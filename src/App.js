import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCats } from './actions/catActions';
// import { API } from './actions/catActions'
import CatList from './CatList'

class App extends Component { 

  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
    // this.props.API.fetchCats()
  };

  
  handleLoading = () => {
    console.log(this.props.loading)
    return (this.props.loading ? <div>Loading...</div> : <CatList catPics={this.props.catPics} />)
  }

    render() {
    console.log(this.props.catPics)
    console.log(this.props.loading)
    return (
      <div>
        <h1>CatBook</h1>
        {this.handleLoading()}
      </div>
    );
  }
}




const mapStateToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapStateToProps, { fetchCats })(App)
// export default connect(mapStateToProps, { API })(App)




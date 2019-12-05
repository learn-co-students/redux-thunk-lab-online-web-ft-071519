import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchCats } from './actions/catActions';
import CatList from './CatList'

class App extends Component { 

  componentDidMount(){
    console.log(this.props)
    this.props.fetchCats()
  };

  
  render() {
    // console.log(this.props.cats) //pattern 1
    // console.log(this.props.loading) //pattern 1
    console.log(this.props.catPics)
    console.log(this.props.loading)
    return (
      <div>
        <h1>CatBook</h1>
        <CatList catPics={this.props.catPics}/>
      </div>
    );
  }
}


// export default connect(state => state, {fetchCats})(App) //pattern 1

const mapDispatchToProps = state => {
  return {
    catPics: state.cats,
    loading: state.loading
  }
}

export default connect(mapDispatchToProps, { fetchCats })(App)




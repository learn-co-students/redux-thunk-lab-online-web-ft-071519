// From Libraries:
import React, { Component } from 'react';
import { connect } from 'react-redux'
// From Components:
import Catlist from './CatList'
// Functions:
import { fetchCats } from './actions/catActions'


class App extends Component {   
   
   // ComponentDidMount will fetch after the initial render of the app.
   componentDidMount() {
      console.log(this.props)
      this.props.fetchCats()
   }


   render() {
      console.log(this.props.catPics) // log will fire every time App renders
      return (
         <div className="App">
            <h1>CatBook</h1>
            <Catlist 
               catPics={this.props.catPics}
               loading={this.props.loading}
            />
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

const mapDispatchToProps = dispatch => {
   return {
      fetchCats: () => dispatch(fetchCats())
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)

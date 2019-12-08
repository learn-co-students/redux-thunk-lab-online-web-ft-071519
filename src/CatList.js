// write your CatList component here
import React, { Component } from 'react'

class Catlist extends Component {
    render() {
        console.log("Catlist.js", this.props)
        const catPics = this.props.catPics.map(cat => <img src={cat.url} height="100" width="100" key={cat.id} alt="cat"/>)
        return(
            <div>
                {catPics}        
            </div>
        )
    }
}

export default Catlist
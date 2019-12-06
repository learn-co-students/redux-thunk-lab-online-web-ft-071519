import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return (
            this.props.catPics.map(pic =>
                <img src={pic.url} />
            )
        )
    }
}

export default CatList
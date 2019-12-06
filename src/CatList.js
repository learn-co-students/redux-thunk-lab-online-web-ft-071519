import React, { Component } from 'react';

class CatList extends Component {
    render() {
        return (
            <div>
                {this.props.catPics.map(pic =>
                    <img src={pic.url} key={pic.id}/>
                )}
            </div>
        )
    }
}

export default CatList
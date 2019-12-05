import React from "react";

class CatList extends React.Component {

    renderCats = () => this.props.catPics.map(cat => <img key={cat.id} src={cat.url} alt={cat.id} />)

    render() {
        return (
          <div>
            {this.renderCats()}
          </div>
        )
      }
}



export default CatList
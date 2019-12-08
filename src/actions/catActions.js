
const fetchCats = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_CATS"})
        fetch('https://learn-co-curriculum.github.io/cat-api/cats.json')
        .then(resp => resp.json())
        .then(catsData => {
            console.log(catsData)
            dispatch({type: "ADD_CATS", cats: catsData.images})
        })
    }
}

// const test = () => {
//     console.log("test")
// }

// const API = {fetchCats, test};

// console.log(API)
// console.log(API.fetchCats)

export { fetchCats }
// export { API }
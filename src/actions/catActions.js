
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

export { fetchCats }
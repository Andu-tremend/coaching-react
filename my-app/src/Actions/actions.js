
export const toggleAction = () => {
    return {
        type: 'THEME_TOGGLE',
        payload: 'theme style'
    }
}

// export const fetchInitialData = function() {
//     const getData = async () => {
//         const response = await fetch('https://rickandmortyapi.com/api/character')
//         let json = await response.json();
//         return json.results
//     }
//     return {
//         type: 'FETCH_DATA',
//         payload: getData
//     }
// }
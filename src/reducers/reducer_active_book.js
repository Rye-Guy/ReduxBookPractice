//state only pretains to the state that gets passed from the books container;
export default function(state = null, action){
   
    switch(action.type){
        case 'BOOK_SELECTED':
        return action.payload;
    }

    return state
}
import{FETCH_SUCCESS} from './../action'

const initialState = {
    anime:[{
        title:'awesome'
        
    }]
}


export const reducer = (state=initialState, action) =>{
    switch(action.type){
        case(FETCH_SUCCESS):
            return({
                ...state,
                anime: action.payload
            })
        default:
            return state;
    }

}

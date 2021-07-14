export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchSuccess = (anime) =>{
    return({type:FETCH_SUCCESS, payload:anime})
}
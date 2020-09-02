// export default function({ dispatch }) {
//     return function(next) {
//         return function(action) {

//         }
//     }
// }

export const async =  ({ dispatch }) => next => action => {
    if(!action.payload || !action.payload.then) {
        return next(action);
    }

    action.payload.then(response => {
        const newAction = { ...action, payload: response };
        dispatch(newAction);

    })
}

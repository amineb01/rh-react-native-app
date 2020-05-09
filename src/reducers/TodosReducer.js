import { actionTypes } from 'actions/TodosActions';

const initialState = {
  todosList: [],
  loading: false
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TODOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.TODOS_SUCCESS:
      return {
        ...state,
        todosList: [...action.todos],
        loading: false
      };
    case actionTypes.TODOS_ERROR:
      return {
        ...state,
        todosList: [...action.todos],
        loading: false
      };
    default:
      return state;
  }
};

export default todosReducer;

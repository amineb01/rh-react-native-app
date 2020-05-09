import TodosController from 'controllers/TodosController';

export const actionTypes = {
  TODOS_REQUEST: 'TODOS_REQUEST',
  TODOS_ERROR: 'TODOS_ERROR',
  TODOS_SUCCESS: 'TODOS_SUCCESS',
};

const todosRequest = () => ({
  type: actionTypes.TODOS_REQUEST,
});

const todosError = error => ({
  type: actionTypes.TODOS_ERROR,
  error,
});

const todosSuccess = todos => ({
  type: actionTypes.TODOS_SUCCESS,
  todos,
});

export const getTodosList = () => async (dispatch) => {
  
  dispatch(todosRequest());
  try {
    const todos = await TodosController.getTodos();
    dispatch(todosSuccess(todos.data));
  } catch (error) {
    dispatch(todosError(error.message));
  }
};

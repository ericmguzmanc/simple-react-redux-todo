import { VisibilityFilters } from '../actions';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  console.log('visibility filter ----> ', action.filter)
  switch (action.type) {
    case VisibilityFilters.SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
};

export default visibilityFilter;
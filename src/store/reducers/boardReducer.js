const initialState = {
  currBoard: {},
  boards: [],
}

export function boardReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'SET_BOARD':
      return { ...state, reviews: action.reviews }
    case 'ADD_BOARD':
      return { ...state, reviews: [...state.reviews, action.review] }
    case 'REMOVE_BOARD':
      return { ...state, reviews: state.reviews.filter(review => review._id !== action.reviewId) }
    case 'UPDATE_BOARD':
      return {
        ...state,
        reviews: state.reviews.map(review =>
          review._id === action.review._id ? action.review : review
        )
      }
    default:
      return state
  }
}

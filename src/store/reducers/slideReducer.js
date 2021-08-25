import { SET_SLIDE_INDEX } from '../actions/types'
const slideReducer = (state = 0, action) => {
	const { type, payload } = action
	switch (type) {
		case SET_SLIDE_INDEX:
			return payload
		default:
			return state
	}
}

export default slideReducer

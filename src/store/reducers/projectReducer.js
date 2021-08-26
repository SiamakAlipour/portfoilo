import { PROJECT_ADD } from '../actions/types'

const projectReducer = (state = [], action) => {
	const { type, payload } = action
	switch (type) {
		case PROJECT_ADD:
			return [
				...state,
				{
					name: payload.name,
					language: payload.language,
					description: payload.description,
				},
			]
		default:
			return state
	}
}

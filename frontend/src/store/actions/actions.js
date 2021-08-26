import { SET_SLIDE_INDEX, PROJECT_ADD } from './types'

export const setSlideIndex = (index) => ({
	type: 'SET_SLIDE_INDEX',
	payload: index,
})

export const addProject = (name, language, description) => ({
	type: 'PROJECT_ADD',
	payload: {
		name,
		language,
		description,
	},
})

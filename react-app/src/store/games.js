const defaultState = {};

const GET_GAMES = "games/GET_GAMES";

const getAllGames = (games) => {
	return {
		type: GET_GAMES,
		games
	};
};

export const getAllGamesThunk = () => async (dispatch) => {
	const res = await fetch("/api/games");

	if (res.ok) {
		const games = await res.json();

		dispatch(getAllGames(games));
	}
};

const gameReducer = (state = defaultState, action) => {
	const newState = { ...state };

	switch (action.type) {
		case GET_GAMES:
			return { ...newState, ...action.payload };
		default:
			return state;
	}
};

export default gameReducer;

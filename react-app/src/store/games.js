const defaultState = {};

const LOAD_GAMES = "games/LOAD_GAMES";

const loadGames = (games) => {
	return {
		type: LOAD_GAMES,
		payload: games,
	};
};

export const getAllGamesThunk = () => async (dispatch) => {
	const res = await fetch("/api/games");

	if (res.ok) {
		const games = await res.json();
		dispatch(loadGames(games));
		return games;
	}
};

export const createGameThunk = (data) => async (dispatch) => {
	const gameData = JSON.stringify(data);

	const res = await fetch("/api/games", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: gameData,
	});

	if (res.ok) {
		const newGame = await res.json();
		dispatch(loadGames(newGame));
	}
};

const gameReducer = (state = defaultState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case LOAD_GAMES:
			return { ...newState, ...action.payload };

		default:
			return state;
	}
};

export default gameReducer;

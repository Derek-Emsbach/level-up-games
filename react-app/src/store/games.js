const defaultState = {};

const LOAD_GAMES = "games/LOAD_GAMES";
const DELETE_GAME = "games/DELETE_GAME";

const loadGames = (games) => {
	return {
		type: LOAD_GAMES,
		payload: games,
	};
};

const deleteGame = (payload) => {
	return {
		type: DELETE_GAME,
		payload,
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

export const getSingleGame = (id) => async (dispatch) => {
	const response = await fetch(`/api/games/${id}`);

	if (response.ok) {
	  const game = await response.json();
	  dispatch(loadGames(game));
	  return game;
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

export const editGameThunk = (id, data) => async (dispatch) => {
	const editGame = JSON.stringify(data);

	const res = await fetch(`/api/games/${id}`, {
		method: "PATCH",
		headers: {
			"Content-Type": "application/json",
		},
		body: editGame,
	});

	if (res.ok) {
		const newData = await res.json();
		dispatch(loadGames(newData));
	}
};

export const deleteGameThunk = (data) => async (dispatch) => {
	const body = JSON.stringify(data);

	const res = await fetch(`/api/games/${data.id}`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body,
	});

	if (res.ok) {
		dispatch(deleteGame(data.id));
	}
};

const gameReducer = (state = defaultState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case LOAD_GAMES:
			return { ...newState, ...action.payload };

		case DELETE_GAME:
			delete newState[action.payload];
			return newState;

		default:
			return state;
	}
};

export default gameReducer;

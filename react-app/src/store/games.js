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
        return games
	}
};

const defaultState = {};

const gameReducer = (state = defaultState, action) => {
	let newState = { ...state };

	switch (action.type) {
        // case LOAD_GAMES:
        //     action.game.forEach((ele) => {
        //         console.log(ele, "ele in reducer")
        //         newState[ele.id] = ele
        //       })
        //       return newState
		case LOAD_GAMES:
		    return { ...newState, ...action.payload };
		// case LOAD_GAMES: {
		// 	action.games.forEach((game) => {
		// 		newState[game.id] = game;
		// 	});

		// 	return newState;
		// }
		default:
			return state;
	}
};

export default gameReducer;

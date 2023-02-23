import { useDispatch, useSelector } from "react-redux";
import { getAllGamesThunk } from "../../store/games";

const AllGames = () => {
	const dispatch = useDispatch();

    // const games = useSelector()

    dispatch(getAllGamesThunk())

	return <h1>New Home Page</h1>;
};

export default AllGames;

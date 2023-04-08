import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneUserThunk } from "../../store/users";

const ProfilePage = () => {
	const { profileId } = useParams();
	const history = useHistory();
	const user = useSelector((state) => state.user[profileId]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getOneUserThunk(profileId));
	}, [dispatch]);

	console.log(user);

	return (
		<>
			{user && (
				<div>
					<h1>Profile Page </h1>
					<h2>{user.username}</h2>
				</div>
			)}
		</>
	);
};

export default ProfilePage;

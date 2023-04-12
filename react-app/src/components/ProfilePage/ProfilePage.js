import React, { useState } from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { getOneUserThunk } from "../../store/users";
import SingleGame from "../Games/SingleGame";
import UserReviews from '../Reviews/UserReviews';

const ProfilePage = () => {
	const { profileId } = useParams();
	const history = useHistory();
	const user = useSelector((state) => state.session.user);
	const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('games');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
      };


	useEffect(() => {
		// dispatch(getOneUserThunk(profileId));
	}, [dispatch]);


	const games = Object.values(user.games);


	return (
		<div className="flex justify-center bg-gradient-to-r from-slate-800 via-sky-700 to-slate-800">
			<div>
				{user && (
					<div className="grid grid-cols-2 justify-items-start">
						<div className="justify-self-start flex flex-col p-20">
							<div className="justify-self-start text-4xl leading-loose fixed flex flex-col bg-slate-800 text-slate-200 rounded-3xl w-auto h-70 p-8 pt-6 pb-8 mt-6 mb-6 border-4 border-violet-500 shadow-violet-400 shadow-2xl">
								<h1 className='text-sky-600'>{user.username}'s Profile Page </h1>
                                <button className='hover:animate-pulse hover:text-purple' onClick={() => handleTabChange('games')}>My Games</button>
                                <button className='hover:animate-pulse hover:text-purple text-white' onClick={() => handleTabChange('reviews')}>My Reviews</button>
							</div>
						</div>
						<div className="flex flex-col justify-around">
                        {activeTab === 'games' && (
                            <>
                            <h1 className="flex justify-center text-7xl font-extrabold text-slate-900">My Games</h1>
							<ul>
								{games.map((game) => (
									<li className="flex justify-center">
										{/* <div>{game.title}</div> */}
										<SingleGame key={game.id} game={game} />
									</li>
								))}
							</ul>
                            </>
                        )}
                        {activeTab === 'reviews' && (
                            <>

                             <div>

									<div className="flex justify-center">
										{/* <div>{game.title}</div> */}
										<UserReviews key={user.id} user={user} />
									</div>

							</div>
                            </>
                         )}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProfilePage;

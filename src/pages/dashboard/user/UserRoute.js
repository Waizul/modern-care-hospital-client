import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const UserRoute = ({ children }) => {
	const { user, loading } = useAuth();

	let location = useLocation();

	if (loading) {
		return <h2>Page is loading...</h2>;
	}

	if (user?.email) {
		return children;
	}
	return <Navigate to='/login' state={{ from: location }} />;
};

export default UserRoute;

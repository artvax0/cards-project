import React, { useEffect, useState } from 'react'
import UserProfile from '../components/UserProfile'
import { useCurrentUser } from '../providers/UserProvider'
import { getUserData } from '../services/userApiService';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';

export default function ProfilePage() {
  const { user } = useCurrentUser();
  const [userData, setUserData] = useState({});
  useEffect(() => {
    async function getUserInfo() {
      console.log(user._id);
      const data = await getUserData(user._id);
      setUserData(data);
      console.log(data);
      console.log(userData);
    }
    user && getUserInfo();
  }, [user]);

  if (!user) return <Navigate to={ROUTES.LOGIN} replace />
  return (
    <div>ProfilePage
      {console.log(userData)}
      <UserProfile title='User Profile' styles={{ maxWidth: '800px' }} data={userData} />
    </div>
  )
}

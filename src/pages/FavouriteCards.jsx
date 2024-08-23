import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import CardsFeedback from '../components/cards/CardsFeedback'
import { useCurrentUser } from '../providers/UserProvider';
import useCards from '../hooks/useCards';
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';

export default function FavouriteCards() {
  const { user } = useCurrentUser();
  const { allCards, error, isLoading, getFavCards, handleDelete, handleLike } = useCards();

  useEffect(() => {
    getFavCards();
  }, []);

  if (!user) return <Navigate to={ROUTES.ROOT} replace />
  return (
    <>
      <PageHeader
        title='Favourite Cards'
        subtitle='These are your favourite cards'
      />
      <CardsFeedback
        cards={allCards}
        handleDelete={handleDelete}
        handleLike={handleLike}
        error={error}
        isLoading={isLoading}
      />
    </>
  )
}

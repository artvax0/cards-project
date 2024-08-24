import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader'
import { useCurrentUser } from '../providers/UserProvider'
import { Navigate } from 'react-router-dom';
import { ROUTES } from '../routes/routesModel';
import CardsFeedback from '../components/cards/CardsFeedback';
import useCards from '../hooks/useCards';
import { useTheme } from '../providers/CustomThemeProvider';

export default function MyCards() {
  const { user } = useCurrentUser();
  const { allCards, error, isLoading, getMyCards, handleDelete, handleLike } = useCards();
  const { isDark } = useTheme();

  useEffect(() => {
    getMyCards();
  }, []);

  if (user && !user.isBusiness) return <Navigate to={ROUTES.ROOT} replace />
  return (
    <>
      <PageHeader
        title='My Cards'
        subtitle='Here are all the cards you have created'
        sx={{ mx: '25px', color: isDark ? '#EEEEEE' : '#222831' }}
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

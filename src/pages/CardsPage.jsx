import React, { useEffect } from 'react'
import PageHeader from '../components/PageHeader';
import CardsFeedback from '../components/cards/CardsFeedback';
import useCards from '../hooks/useCards';
import { useTheme } from '../providers/CustomThemeProvider';
import AddNewCardButton from '../components/cards/AddNewCardButton';
import { useCurrentUser } from '../providers/UserProvider';

export default function CardsPage() {
  const { allCards, error, isLoading, getAllCards, handleDelete, handleLike } = useCards();
  const { isDark } = useTheme();
  useEffect(() => {
    getAllCards();
  }, []);

  return (
    <>
      <PageHeader
        title='Cards'
        subtitle='On this page you can find all business cards from all categories'
        sx={{ mx: '25px', color: isDark ? '#EEEEEE' : '#222831' }}
      />
      <CardsFeedback
        cards={allCards}
        handleDelete={handleDelete}
        handleLike={handleLike}
        error={error}
        isLoading={isLoading}
      />
      <AddNewCardButton />
    </>
  )
}

import { Route, Routes } from "react-router-dom";
import React from 'react'
import { ROUTES } from "./routesModel";
import CardsPage from "../pages/CardsPage";
import AboutPage from "../pages/AboutPage";
import FavouriteCards from "../pages/FavouriteCards";
import MyCards from "../pages/MyCards";
import SandBoxPage from "../pages/SandBoxPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import CardsDetailsPage from "../pages/CardsDetailsPage";
import AddCardPage from "../pages/AddCardPage";
import ErrorPage from "../pages/ErrorPage";

export default function Router() {
  return (
    <Routes>
      <Route path={ROUTES.ROOT} element={<CardsPage />} />
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.FAV_CARDS} element={<FavouriteCards />} />
      <Route path={ROUTES.MY_CARDS} element={<MyCards />} />
      <Route path={ROUTES.SANDBOX} element={<SandBoxPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.SIGNUP} element={<SignupPage />} />
      <Route path={ROUTES.CARD_INFO + '/:id'} element={<CardsDetailsPage />} />
      <Route path={ROUTES.NEW_CARD} element={<AddCardPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  )
}

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { ProductList } from 'components/modules/Products/ProductList';
import { UserProfileSupportBlank } from 'components/modules/UserProfileSupportBlank/UserProfileSupportBlank';
import { UserProfileBilling } from 'components/modules/UserProfileBilling/UserProfileBilling';
import { UserProfilePersonalData } from 'components/modules/UserProfilePersonalData/UserProfilePersonalData';

import AppBar from 'page/AppBar'; // Header
import React from 'react';

import { RestrictedRoute } from 'components/global/RestrictedRoute';
import 'react-toastify/dist/ReactToastify.css';
import { UserProfilePersonalDataContent } from 'components/modules/UserProfilePersonalData/UserProfilePersonalDataContent/UserProfilePersonalDataContent';
import { UserProfileContactsContent } from 'components/modules/UserProfilePersonalData/UserProfileContactsContent/UserProfileContactsContent';
import { UserProfilePersonalPasswordsContent } from 'components/modules/UserProfilePersonalData/UserProfilePersonalPasswordsContent/UserProfilePersonalPasswordsContent';
import { Calendar } from 'components/modules/Calendar/Calendar';

const Home = lazy(() => import('page/Home')); // Головна сторінка
const Goods = lazy(() => import('page/Goods')); // Tовари
const Products = lazy(() => import('page/Products')); // Обраний товар
const Basket = lazy(() => import('page/Basket')); // Корзина
const Courses = lazy(() => import('page/Courses')); // Курси
const MasterClasses = lazy(() => import('page/MasterClasses')); // Майстер-класи
const CurrentCourses = lazy(() => import('page/CurrentCourses')); // Окрема сторінка курсу
const RegistrationForCourses = lazy(() =>
  import('page/RegistrationForCourses')
); // Запис на курс
const AboutUs = lazy(() => import('page/AboutUs')); // Про нас
const SignUp = lazy(() => import('page/SignUp')); // регістрація на сайті
const LogIn = lazy(() => import('page/LogIn')); // Вхід в
const User = lazy(() => import('page/User'));

// const PasswordRecovery = lazy(() => import('page/PasswordRecovery'));
// const SetNewPassword = lazy(() => import('page/SetNewPassword'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          <Route path="store" element={<Goods />} />
          <Route path="products" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="cakes" element={<ProductList />} />
            <Route path="pastries" element={<ProductList />} />
            <Route path="cookies" element={<ProductList />} />
            <Route path="bakering" element={<ProductList />} />
            <Route path="pies" element={<ProductList />} />
          </Route>
          <Route path="basket" element={<Basket />} />
          <Route path="courses" element={<Courses />} />
          <Route path="master-classes" element={<MasterClasses />} />
          <Route path="current-courses" element={<CurrentCourses />} />
          <Route path="sing-up-courses" element={<RegistrationForCourses />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="user/*" element={<User />}>
            <Route path="my_study" element={<>my_study</>} />
            <Route path="billing_history" element={<UserProfileBilling />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="my_profile/*" element={<UserProfilePersonalData />}>
              <Route
                path="personal_data"
                element={<UserProfilePersonalDataContent />}
              />
              <Route path="contacts" element={<UserProfileContactsContent />} />
              <Route
                path="passwords"
                element={<UserProfilePersonalPasswordsContent />}
              />
            </Route>
            <Route path="support" element={<UserProfileSupportBlank />} />
          </Route>

          {/* Публічний шлях */}
          <Route
            path="sign-up"
            element={
              <RestrictedRoute component={SignUp} redirectTo="/user" />
            } /*змінити на особистий кабінет */
          />
          <Route
            path="log-in"
            element={
              <RestrictedRoute component={LogIn} redirectTo="/user" />
            } /*змінити на особистий кабінет */
          />

          {/* <Route path="/user">
            <Route index element={<PersonalOffice />}/>
            <Route path="admin" element={<Admin />} />
          </Route> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

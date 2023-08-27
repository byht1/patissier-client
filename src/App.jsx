import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductList } from 'components/modules/Products/ProductList';
import { CourseListContainer } from 'components/modules/Courses/CourseListContainer';
import { GroupList } from 'components/modules/CourseDetails/components/Groups/GroupList';
import AppBar from 'page/AppBar/AppBar'; // Header

import { RestrictedRoute } from 'components/global/RestrictedRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Home = lazy(() => import('page/Home')); // Головна сторінка
const Products = lazy(() => import('page/Products')); // Обраний товар
const Basket = lazy(() => import('page/Basket')); // Корзина
const Courses = lazy(() => import('page/Courses')); // Курси
const CourseDetails = lazy(() => import('page/CourseDetails')); // Course Details
const RegistrationForCourses = lazy(() =>
  import('page/RegistrationForCourses')
); // Запис на курс
const AboutUs = lazy(() => import('page/AboutUs')); // Про нас
const SignUp = lazy(() => import('page/SignUp')); // регістрація на сайті
const LogIn = lazy(() => import('page/LogIn')); // Вхід в
// const PasswordRecovery = lazy(() => import('page/PasswordRecovery'));
// const SetNewPassword = lazy(() => import('page/SetNewPassword'));

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route index element={<Home />} />
          {/* <Route path="store" element={<Goods />} /> */}
          <Route path="store" element={<Products />}>
            <Route index element={<ProductList />} />
            <Route path="cakes" element={<ProductList />} />
            <Route path="pastries" element={<ProductList />} />
            <Route path="cookies" element={<ProductList />} />
            <Route path="bakering" element={<ProductList />} />
            <Route path="pies" element={<ProductList />} />
          </Route>
          <Route path="basket" element={<Basket />} />
          <Route path="courses" element={<Courses />}>
            <Route index element={<CourseListContainer />} />
            <Route path="course" element={<CourseListContainer />} />
            <Route path="master-classes" element={<CourseListContainer />} />
          </Route>
          <Route path="courses/:id" element={<CourseDetails />}>
            <Route index element={<GroupList />} />
            <Route path="online" element={<GroupList />} />
            <Route path="offline" element={<GroupList />} />
          </Route>
          <Route path="sing-up-courses" element={<RegistrationForCourses />} />
          <Route path="about-us" element={<AboutUs />} />

          {/* Публічний шлях */}
          <Route
            path="sign-up"
            element={
              <RestrictedRoute component={SignUp} redirectTo="/" />
            } /*змінити на особистий кабінет */
          />
          <Route
            path="log-in"
            element={
              <RestrictedRoute component={LogIn} redirectTo="/" />
            } /*змінити на особистий кабінет */
          />

          {/* <Route path="/user">
            <Route index element={<PersonalOffice />}/>
            <Route path="admin" element={<Admin />} />
          </Route> */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;

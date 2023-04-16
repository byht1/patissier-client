import { lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductList } from 'components/modules/Products/ProductList';

import AppBar from 'page/AppBar'; // Header

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
const PasswordRecovery = lazy(() => import('page/PasswordRecovery'));
const SetNewPassword = lazy(() => import('page/SetNewPassword'));

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
          <Route path="sign-up" element={<SignUp />} />
          <Route path="log-in" element={<LogIn />} />
          <Route path="password-recovery" element={<PasswordRecovery />} />
          <Route path="set-new-password" element={<SetNewPassword />} />
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

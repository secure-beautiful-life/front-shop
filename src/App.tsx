import { Suspense, lazy } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'

import { selectIsDimmed, setIsDimmed } from './App.slice'
import { AppInner, Dimmed } from './App.styled'
import AppNav from './core/components/AppNav'
import { useAppSelector } from './core/hooks/redux'

const Home = lazy(() => import('./views/home/Home'))
const Login = lazy(() => import('./views/login/Login'))
const SignUp = lazy(() => import('./views/signup/SignUp'))
const User = lazy(() => import('./views/user/User'))
const UserProfile = lazy(() => import('./views/user/UserProfile'))
const UpdateUser = lazy(() => import('./views/userUpdate/UserUpdate'))
const Product = lazy(() => import('./views/product/Product'))
const SellerAdmin = lazy(() => import('./views/sellerAdmin/SellerAdmin'))
const Cart = lazy(() => import('./views/cart/Cart'))
const Order = lazy(() => import('./views/order/Order'))
const Ordered = lazy(() => import('./views/orderHistory/OrderHistory'))
const Wish = lazy(() => import('./views/wish/Wish'))
const Review = lazy(() => import('./views/review/Review'))
const CreateReview = lazy(() => import('./views/review/CreateReview'))
const Fitting = lazy(() => import('./views/fitting/Fitting'))

export default function App() {
  const isDimmed = useAppSelector(selectIsDimmed)
  const dispatch = useDispatch()
  const closeDimmed = () => dispatch(setIsDimmed(false))

  return (
    <Suspense fallback={<div>Loading</div>}>
      <AppInner isDimmed={isDimmed}>
        {isDimmed && <Dimmed onClick={closeDimmed} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/user" element={<User />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/update" element={<UpdateUser />} />
          <Route path="/user/admin" element={<SellerAdmin />} />
          <Route path="/user/ordered" element={<Ordered />} />
          <Route path="/product/detail/:id" element={<Product />} />
          <Route path="/product/fitting/:id" element={<Fitting />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/order-history" element={<Ordered />} />
          <Route path="/wish" element={<Wish />} />
          <Route path="/product/review/:id" element={<Review />} />
          <Route path="/review/create" element={<CreateReview />} />
        </Routes>
        <AppNav />
      </AppInner>
    </Suspense>
  )
}

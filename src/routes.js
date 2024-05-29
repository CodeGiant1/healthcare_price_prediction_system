// src/routes.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch,
} from 'react-router-dom';
import { AdminScreen } from './pages/admin/AdminScreen';
import { UserScreen } from './pages/user/UserScreen';
import { LoginScreen } from './pages/login/LoginScreen';
import OnboardingPage from './pages/onboarding/OnboardingPage';
import { Profile } from './components/user/Profile';
import { UserDashboard } from './components/user/UserDashboard';

const Routes = () => (
  <Router>
    <Switch>
      <Route path="/admin" element={<AdminScreen />} />
      <Route path="/user/*" element={<UserScreen />}>
        <Route path="dashboard" element={<UserDashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="/login" element={<LoginScreen />} />
      {/* <Route path="/signup" element={<SignupPage />} /> */}
      <Route path="/onboarding" element={<OnboardingPage />} />
      <Route path="/" element={<LoginScreen />} />
    </Switch>
  </Router>
);

export default Routes;

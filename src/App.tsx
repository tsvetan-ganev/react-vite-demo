import { useState } from 'react';
import './App.scss';

import LoginForm from './components/LoginForm';
import AuthService from './services/auth.service';
import { UserSession } from './types';
import UserCard from './components/UserCard';

const authService = new AuthService();

export default function App() {
  const [session, setSession] = useState<UserSession | undefined>(undefined);

  if (session) {
    return <UserCard user={session} onLogout={() => setSession(undefined)} />;
  }

  return (
    <LoginForm
      authService={authService}
      onLoggedIn={(session) => {
        setSession(session);
        authService.updateLastUsernameUsed(
          session.rememberMe ? session.username : ''
        );
      }}
      lastUsernameUsed={authService.getLastUsernameUsed()}
    />
  );
}

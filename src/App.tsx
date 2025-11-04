import { useSpotifyApi } from './utilities/useSpotifyApi';
import { Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignInWithSpotify from './components/SignInWithSpotify';
import ErrorComponent from './components/ErrorComponent';
import TopPage from './pages/TopPage';
import RecentPage from './pages/RecentPage';
import { DarkModeProvider } from './context';
function App() {
  const { state, logOut } = useSpotifyApi();

  return (
    <DarkModeProvider>
      <div className="flex min-h-screen flex-col">
        <NavBar
          handleLogOut={logOut}
          token={state.token}
          userProfile={state.userProfile}
        />
        <main className="flex-1 bg-background pt-10 dark:bg-neutral-dark">
          {state.error ? (
            <ErrorComponent message={state.error} onRetry={logOut} />
          ) : state.token ? (
            <>
              <Routes>
                <Route path="/" element={<Navigate to="/top" replace />} />
                <Route path="/top" element={<TopPage />} />
                <Route path="/recent" element={<RecentPage />} />
              </Routes>
            </>
          ) : (
            <SignInWithSpotify />
          )}
        </main>
      </div>
    </DarkModeProvider>
  );
}

export default App;

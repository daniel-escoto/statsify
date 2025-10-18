import { useSpotifyApi } from "./utilities/useSpotifyApi";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import SignInWithSpotify from "./components/SignInWithSpotify";
import { DarkModeProvider } from "./context/DarkModeContext";
import ErrorComponent from "./components/ErrorComponent";
import TopPage from "./pages/TopPage";
import RecentPage from "./pages/RecentPage";
import NowPlayingFooter from "./components/NowPlayingFooter";
function App() {
  const { state, logOut } = useSpotifyApi();

  return (
    <DarkModeProvider>
      <div className="min-h-screen flex flex-col">
        <NavBar
          handleLogOut={logOut}
          token={state.token}
          userProfile={state.userProfile}
          className="sticky top-0 z-50"
        />
        <main className="flex-1 pt-10 pb-36 bg-background dark:bg-neutral-dark">
          {state.error ? (
            <ErrorComponent message={state.error} onRetry={logOut} />
          ) : state.token ? (
            <>
              <Routes>
                <Route path="/" element={<Navigate to="/top" replace />} />
                <Route path="/top" element={<TopPage />} />
                <Route path="/recent" element={<RecentPage />} />
              </Routes>
              <NowPlayingFooter />
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

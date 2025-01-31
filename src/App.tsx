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
      <div className="flex flex-col h-screen">
        <NavBar
          handleLogOut={logOut}
          token={state.token}
          userProfile={state.userProfile}
        />
        <div className="flex-grow py-10 pb-24 bg-background dark:bg-neutral-dark overflow-y-auto">
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
        </div>
      </div>
    </DarkModeProvider>
  );
}

export default App;

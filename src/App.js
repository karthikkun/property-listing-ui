import TopBar from "./components/TopBar";
import CreateListingPage from "./pages/CreateListingPage";
import Home from "./pages/Home";
import ListingDetailPage from "./pages/ListingDetailPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={<ListingDetailPage />} />
          <Route exact path='/create' element={<CreateListingPage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;

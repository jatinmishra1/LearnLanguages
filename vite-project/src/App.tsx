import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Loader from "./components/Loader";

const Home = lazy(() => {
  return import("./components/Home");
});
const Learn = lazy(() => {
  return import("./components/Learning");
});
const Quiz = lazy(() => {
  return import("./components/Quiz");
});
const Result = lazy(() => {
  return import("./components/Result");
});
const App = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Suspense>
    </Router>
  );
};
export default App;

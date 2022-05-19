import React from "react";
import { Error404 } from "./components/Error404";
import { Link, BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import { LoginContainer } from "./containers/Logincontainer";
import { CardListContainer } from "./containers/CardListContainer";
import { AddNewCardForm } from "./components/AddNewCardForm";
import { useSelector } from "react-redux";
import LogOut from "./components/Logout";

function App() {
  const isLogued = useSelector((state) => state.loginReducer.isLogued);

  return !isLogued ? (
    <div>
      <BrowserRouter>
        {/* <Link to="/">L o g i n</Link> */}

        <Routes>
          <Route path="/" element={<LoginContainer />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  ) : (
    <div className="div-container-your-cards">
      <BrowserRouter className="div-container-your-cards">
        {/* <Link to="/">L o g i n</Link> */}
        <Link className="link-class" to="/home/yourCards">
          My Cards
        </Link>
        <Link className="link-class" to="/home/add-card">
          Add Card
        </Link>
        {/* <Link to="/home/log-out">Log Out</Link> */}
        <LogOut className="btn-log-out" />

        <Routes>
          {/* <Route path="/" element={<LoginContainer />} /> */}
          {/* <Route path="/" element={<Navigate to="/home/yourCards" replace />} /> */}
          <Route
            path="/"
            element={
              isLogued ? (
                <Navigate to="/home/yourCards" replace />
              ) : (
                <LoginContainer />
              )
            }
          />
          <Route path="/home/yourCards" element={<CardListContainer />} />
          <Route path="/home/add-card" element={<AddNewCardForm />} />
          {/* <Route path="/home/log-out" element={<LogOut />} /> */}
          {/* <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

//Prueba 2

// function App() {
//   const isLogued = useSelector((state) => state.loginReducer.isLogued);

//   return (
//     <div className="div-container-your-cards">
//       <BrowserRouter className="div-container-your-cards">
//         {/* <Link to="/">L o g i n</Link> */}

//         <Link className="link-class" to="/home/yourCards">
//           My Cards
//         </Link>
//         <Link className="link-class" to="/home/add-card">
//           Add Card
//         </Link>
//         {/* <Link to="/home/log-out">Log Out</Link> */}
//         <LogOut className="btn-log-out" />

//         <Routes>
//           {/* <Route path="/" element={<LoginContainer />} /> */}

//           <Route
//             path="/"
//             element={
//               isLogued ? (
//                 <Navigate to="/home/yourCards" replace />
//               ) : (
//                 <LoginContainer />
//               )
//             }
//           />
//           <Route path="/home/yourCards" element={<CardListContainer />} />
//           <Route path="/home/add-card" element={<AddNewCardForm />} />
//           {/* <Route path="/home/log-out" element={<LogOut />} /> */}
//           <Route path="*" element={<Error404 />} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

export default App;

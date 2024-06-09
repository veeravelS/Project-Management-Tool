import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoute = () => {
  const Token = (sessionStorage.getItem("token"));
  let auth = {token:Token};
  console.log(Token)
  return auth.token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
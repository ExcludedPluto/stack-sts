import React, { useEffect, useState } from "react";
import { authService } from "fbase";
import Login from "components/admin/Login";
import AdminHome from "components/admin/AdminHome";
import Navigation from "components/admin/Navigation";

function Admin({ userId, setUserId }) {
  const [init, setInit] = useState(false);
  const [isLogined, setIsLogined] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId((prev) => null);
      }
      setInit(true);
    });
  }, [setUserId]);

  return (
    <>
      {" "}
      {init ? (
        isLogined || userId === process.env.REACT_APP_ADMIN_UID ? (
          <>
            <Navigation />
            <AdminHome />
          </>
        ) : (
          <Login userId={userId} setIsLogined={setIsLogined} />
        )
      ) : (
        <div>initializing...</div>
      )}
    </>
  );
}
export default Admin;
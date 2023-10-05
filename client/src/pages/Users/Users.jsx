import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Users.scss";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu/AdminMenu";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/auth/user`
      );
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout title={"Dashboard - All Users"}>
      <div className="container">
        <div className="row">
          <div className="row-left">
            <AdminMenu />
          </div>
          <div className="row-right">
            <div className="card">
              <h1>Users</h1>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex" ,flexDirection: "column" }}>
                  {users.map((user) => {
                    return(
                    <h1>{user.name}</h1>
                    // <h1>{user.email}</h1>
                  )})}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Users;

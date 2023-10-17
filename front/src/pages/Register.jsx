import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("Laxman Jadhav");
  const [email, setEmail] = useState("laxmanjadhav@gmail.com");
  const [password, setPassword] = useState("1234");
  const [result, setResult] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-sm-6 offset-3 mt-4 ">
          <div className="card bg-info">
            <div className="card-header w-100 m-auto">Add User</div>
            <div className="card-body">
              <form>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter Name"
                  className="form-control"
                />
                <br />
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                />
                <br />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Enter Password"
                  className="form-control"
                />
                <br />
                <br />
                <button className="btn btn-success w-100">Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

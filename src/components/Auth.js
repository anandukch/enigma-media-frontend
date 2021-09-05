import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";

const initialState = { first_name: "", last_name: "", email: "", password: "" };

function Auth() {
  const [form, setForm] = useState(initialState);
  const [isSignin,setIsSignin]=useState(false)
  useEffect(()=>{
    
  })
  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // function for setting local storage 
  const setLocalStorage = (data) => {
    localStorage.setItem("token", data.token);
    // localStorage.setItem("user", JSON.stringify(data.user));
  };
  // function for signin
  const signin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:2000/user/signin", form)
      .then((res) => {
        setLocalStorage(res.data);
        setIsSignin(true)
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // function for signup
  const signup = (e) => {
    console.log(form);
    e.preventDefault();
    axios
      .post("http://localhost:2000/user/signup", form)
      .then((res) => {
        console.log(res);
        setLocalStorage(res.data);
        setIsSignin(true)
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h3 className="text-center">
                {isSignin ? "Signin" : "Signup"}
              </h3>
              <form>
                <div className="form-group">
                  <label htmlFor="first_name">First Name</label>
                  <input

                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter First Name"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last Name</label>
                  <input

                    type="text"
                    className="form-control"
                    id="last_name"
                    name="last_name"
                    placeholder="Enter Last Name"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input

                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Email"
                    onChange={changeHandler}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input

                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={changeHandler}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={isSignin ? signin : signup}
                >
                  {isSignin ? "Signin" : "Signup"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );





  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   axios
  //     .post("http://localhost:2000/user/signup", form)
  //     .then((res) => {
  //       console.log('dd');
  //       setLocalStorage(res.data);
  //     })
  //     .catch((err) => console.log('err'));
  // };
  // return (
  //   <div>
  //     <form method="post">
  //       {isSignin && (
  //         <>
  //           <label>first</label>
  //           <input type="text" name="first_name" onChange={changeHandler} />
  //           <label>last</label>
  //           <input type="text" name="last_name" onChange={changeHandler} />
  //         </>
  //       )}
  //       <label>mail</label>
  //       <input type="text" name="email" onChange={changeHandler} />
  //       <label>password</label>
  //       <input type="text" name="password" onChange={changeHandler} />
  //       <button type="submit" onClick={submitHandler}>
  //         submit
  //       </button>
  //     </form>
  //     <button
  //       onClick={() => {
  //         setIsSignin((isSignin) => !isSignin);
  //       }}
  //     >
  //       change
  //     </button>
  //   </div>
  // );
}

export default Auth;

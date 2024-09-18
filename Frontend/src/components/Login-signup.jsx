import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import emailIcon from "../assets/emailIcon.png";
import ErrorOutlinedIcon from "@mui/icons-material/ErrorOutlined";
import { useAuth } from "./AuthContext";

const Login = () => {
  const { loggedIn, login } = useAuth();
  const [showComponent, setShowComponent] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showEmailInput, setShowEmailInput] = useState(false);
  const [showContinueInput, setShowContinueInput] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showUsername, setShowUsername] = useState(false);
  const [showSignupPassInput, setShowSignupPassInput] = useState(false);
  const [showLoginPassInput, setShowLoginPassInput] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNextButtonEnabled, setIsNextButtonEnabled] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
    username: "",
  });

  useEffect(() => {
    if(loggedIn){
      setShowComponent(false);
      setShowModal(false);
    }
  }, [loggedIn]);
  const handleClose = () => {
    setShowModal(false);
    setShowErrorModal(false);
  };

  const handleSignUpClick = () => {
    setShowModal(true);
    setShowContinueInput(true);
    setShowLoginPassInput(false);
    setShowEmailInput(false);
    setShowSignupPassInput(false);
  };

  const handleUsername = () => {
    setShowUsername(true)
    setShowSignupPassInput(false);
  };

  const handleContinueWithEmail = () => {
    setShowModal(true);
    setShowEmailInput(true);
    setShowContinueInput(false);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setUserDetails(prev => ({ ...prev, email: value }));
    setIsNextButtonEnabled(value.trim() !== "");
  };

  const handleUsernameChange = (event) => {
    const { value } = event.target;
    setUsername(value);
    setUserDetails(prev => ({ ...prev, username: value }));
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleNextButtonClick = async () => {
    if (!validateEmail(email)) {
      setShowErrorModal(true);
      setEmailError(true);
      setTimeout(() => {
        setShowErrorModal(false);
      }, 5000);
    } else {
      try {
        const response = await fetch(
          `http://localhost:3000/api/v1/users/check`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
          }
        );
        const data = await response.json();
       
        if (data.code === 200) {
          setShowLoginPassInput(true);
          // setShowSignupPassInput(false);
          setShowEmailInput(false);
        } else if (data.code === 404 ) {
          setShowSignupPassInput(true);
          // setShowLoginPassInput(false);
          setShowEmailInput(false);
        }
        else {
          console.log("Error fetching user data:");
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    }
  };

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);
    setUserDetails(prev => ({ ...prev, password: value }));
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);
    console.log(value);
  };

  const handleLoginPassValidity = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();
      if (data.message === "Login Successful") {
        login(data.data);
        alert('Login successful')
        setShowModal(false);
        setShowComponent(false);
      }
      else {
        setShowErrorModal(true);
        setPasswordError(true);
        setTimeout(() => {
          setShowErrorModal(false);
        }, 5000);
      }
      } catch (error) {
        console.error("Error during login:", error.message);
        setShowErrorModal(true);
        setPasswordError(true);
        setTimeout(() => {
          setShowErrorModal(false);
        }, 5000);
      }
  };

  
  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/v1/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (!response.ok) {
        throw new Error("Failed to create user");
      }
      const data = await response.json();
      alert("User created successfully");
      console.log("Login successful:", data);
      return data;
    } catch (error) {
      console.error("Error logging in:", error.message);
      throw error;
    }
  };

  const handleCreateUser = async () => {
    try {
    const userData = await createUser();
      login(userData);
      handleClose();
      handlelogin();
      setShowComponent(false);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <>
      {showComponent && (
        <>
          <Box
            sx={{
              position: "fixed",
              zIndex: "99",
              bottom: "0px",
              width: "100%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                bgcolor: "#7c5cff",
                color: "white",
                zIndex: "9",
                padding: "15px",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <span style={{ fontSize: "17px", margin: "20px" }}>
                  Join over 100 million people using Tumblr to find their
                  communities and make friends.
                </span>
                <Box
                  sx={{
                    width: "38%",
                    display: "flex",
                    gap: "10px",
                    margin: "15px auto",
                    fontSize: "20px",
                    color: "white",
                  }}
                >
                  <button
                    style={{
                      width: "50%",
                      fontWeight: "500",
                      padding: "10px 0",
                      backgroundColor: "black",
                      fontSize: "17px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={handleSignUpClick}
                  >
                    Sign me up
                  </button>
                  <button
                    style={{
                      width: "50%",
                      fontWeight: "700",
                      backgroundColor: "#967dff",
                      fontSize: "15px",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onClick={handleSignUpClick}
                  >
                    Log in
                  </button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Dialog open={showModal} onClose={handleClose}>
            <Box sx={{ bgcolor: "#7c5cff" }}>
              <DialogTitle
                sx={{
                  textAlign: "center",
                  fontWeight: 700,
                  fontSize: "29px",
                  color: "white",
                }}
              >
                tumblr
              </DialogTitle>
              <DialogContent>
                {showContinueInput && (
                  <>
                    <Box
                      sx={{
                        textAlign: "center",
                        margin: "20px 0",
                        fontSize: "17px",
                        color: "white",
                      }}
                    >
                      <p style={{ margin: "10px 0" }}>
                        Welcome to your corner of the internet. You'll never be
                        bored again.
                      </p>
                      <p>Sign up or log in:</p>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        width: "75%",
                        margin: "0 auto",
                        gap: "10px",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          borderRadius: "25px",
                          color: "#000",
                          bgcolor: "white",
                          padding: "10px 0",
                          gap: "15px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 48 48"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          ></path>
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          ></path>
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          ></path>
                        </svg>
                        <p className="signup-ptag">Continue with Google</p>
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          borderRadius: "25px",
                          color: "#000",
                          bgcolor: "white",
                          padding: "10px 0",
                          fontWeight: "500",
                          gap: "15px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          x="0px"
                          y="0px"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M 16.125 1 C 14.972 1.067 13.648328 1.7093438 12.861328 2.5273438 C 12.150328 3.2713438 11.589359 4.3763125 11.818359 5.4453125 C 13.071359 5.4783125 14.329031 4.8193281 15.082031 3.9863281 C 15.785031 3.2073281 16.318 2.12 16.125 1 z M 16.193359 5.4433594 C 14.384359 5.4433594 13.628 6.5546875 12.375 6.5546875 C 11.086 6.5546875 9.9076562 5.5136719 8.3476562 5.5136719 C 6.2256562 5.5146719 3 7.4803281 3 12.111328 C 3 16.324328 6.8176563 21 8.9726562 21 C 10.281656 21.013 10.599 20.176969 12.375 20.167969 C 14.153 20.154969 14.536656 21.011 15.847656 21 C 17.323656 20.989 18.476359 19.367031 19.318359 18.082031 C 19.922359 17.162031 20.170672 16.692344 20.638672 15.652344 C 17.165672 14.772344 16.474672 9.1716719 20.638672 8.0136719 C 19.852672 6.6726719 17.558359 5.4433594 16.193359 5.4433594 z"></path>
                        </svg>
                        <p className="signup-ptag">Continue with Apple</p>
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{
                          border: "none",
                          borderRadius: "25px",
                          color: "#000",
                          bgcolor: "white",
                          padding: "10px 0",
                          gap: "15px",
                          "&:hover": { backgroundColor: "white" },
                        }}
                      >
                        <img src={emailIcon} alt="an email icon" />
                        <p
                          onClick={handleContinueWithEmail}
                          className="signup-ptag"
                        >
                          Continue with email
                        </p>
                      </Button>
                    </Box>
                  </>
                )}
                {showEmailInput && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      color: "white",
                      width: "500px",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    <p>Enter your email to log in or register:</p>
                    <input
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      placeholder="Enter your email"
                      style={{
                        padding: "10px ",
                        borderRadius: "10px",
                        border: "none",
                        width: "60%",
                        margin: "16px auto",
                        color: "white",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNextButtonClick}
                      disabled={!isNextButtonEnabled}
                      style={{ width: "60%", margin: "0 auto" }}
                    >
                      Next
                    </Button>
                  </Box>
                )}
                {/* {showModal } */}
                {showSignupPassInput && (
                  <Box sx={{ padding: "20px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        width: "500px",
                        textAlign: "center",
                        fontSize: "18px",
                      }}
                    >
                      <p>
                        Welcome to your corner of the internet. Glad you're
                        here.
                      </p>
                      <input
                        value={password}
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        style={{
                          padding: "10px ",
                          borderRadius: "10px",
                          border: "none",
                          width: "60%",
                          margin: "10px auto",
                          color: "white",
                        }}
                      />
                      <input
                        value={confirmPassword}
                        type="password"
                        onChange={handleConfirmPasswordChange}
                        placeholder="Confirm your password"
                        style={{
                          padding: "10px ",
                          borderRadius: "10px",
                          border: "none",
                          width: "60%",
                          margin: "0px auto",
                          marginBottom: "45px",
                          color: "white",
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ width: "60%", margin: "0 auto" }}
                        disabled={!isNextButtonEnabled}
                        onClick={handleUsername}
                      >
                        Confirm
                      </Button>
                    </Box>
                  </Box>
                )}
                {showLoginPassInput && (
                  <Box sx={{ padding: "20px" }}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white",
                        width: "500px",
                        textAlign: "center",
                        fontSize: "18px",
                      }}
                    >
                      <p>Welcome back.</p>
                      <input
                        value={password}
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="Enter your password"
                        style={{
                          padding: "10px ",
                          borderRadius: "10px",
                          border: "none",
                          width: "60%",
                          margin: "10px auto",
                          color: "white",
                        }}
                      />
                      <Button
                        variant="contained"
                        color="primary"
                        style={{ width: "60%", margin: "0 auto" }}
                        disabled={!isNextButtonEnabled}
                        onClick={handleLoginPassValidity}
                      >
                        Confirm
                      </Button>
                    </Box>
                  </Box>
                )}
                {showUsername && (
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      color: "white",
                      width: "400px",
                      textAlign: "center",
                      fontSize: "18px",
                    }}
                  >
                    <p> Set a Username</p>
                    <input
                      value={username}
                      onChange={handleUsernameChange}
                      type="text"
                      placeholder="Enter your Username"
                      style={{
                        padding: "10px ",
                        borderRadius: "10px",
                        width: "60%",
                        margin: "10px auto",
                        color: "white",
                      }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ width: "60%", margin: "0 auto" }}
                      onClick={handleCreateUser}
                    >
                      Continue
                    </Button>
                  </Box>
                )}
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Close</Button>
              </DialogActions>
            </Box>
          </Dialog>
          {/* error modal */}
          <Dialog
            open={showErrorModal}
            onClose={handleClose}
            TransitionProps={{
              timeout: { enter: 500, exit: 500 },
            }}
            sx={{
              display: "grid",
              alignContent: "end",
              position: "fixed",
              zIndex: 9999,
            }}
          >
            <DialogContent
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                bgcolor: "red",
                padding: "7px",
              }}
            >
              {emailError && (
                <>
                  <ErrorOutlinedIcon sx={{ fontSize: 30, color: "white" }} />
                  <div style={{ fontSize: "15px" }}>Invalid Email</div>
                </>
              )}
              {passwordError && (
                <>
                  <ErrorOutlinedIcon sx={{ fontSize: 30, color: "white" }} />
                  <div style={{ fontSize: "15px" }}>Invalid Password</div>
                </>
              )}
            </DialogContent>
          </Dialog>
        </>
      )}
    </>
  );
};
export default Login;

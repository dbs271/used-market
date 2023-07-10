"use client";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const ToastiProvider = () => {
  return <ToastContainer autoClose={2000} />;
};
export default ToastiProvider;

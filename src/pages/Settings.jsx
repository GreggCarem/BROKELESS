import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "../style/settings.scss";
import { db } from "../config/firebase";
import { setDoc } from "firebase/firestore";
import { getDocs, query, collection, where } from "firebase/firestore";
import { EmailAuthProvider } from "firebase/auth";
import Alert from "@mui/material/Alert";

import { auth } from "../config/firebase";
import { Riple, TrophySpin } from "react-loading-indicators";

export const Settings = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { logout } = useAuth();

  function handleHome() {
    navigate("/dashboard");
  }
  async function handleLogout() {
    setError("");

    try {
      await logout();

      navigate("/");
    } catch {
      setError("FAILED TO LOGOUT");
    }
  }

  // FORM Sumission
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");
  const [rate, setRate] = useState("");
  const [currency, setCurrency] = useState("");
  const [categories, setCategories] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imgLoading, setimgLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z]+(,[a-zA-Z]+)*$/.test(categories)) {
      alert("Categories must be comma-separated words with no spaces.");
      return;
    }
    try {
      const docRef = await setDoc(
        doc(db, "users", auth.currentUser.uid),
        {
          name,
          surname,
          profession,
          image,
          rate,
          currency,
          categories,
          email,
          password,
          uid: auth.currentUser.uid,
        },
        { merge: true }
      );
      console.log("User data updated successfully.");
      setSuccess(true);
    } catch (err) {
      console.error("Error updating user data:", err);
    }
  };

  useEffect(() => {
    const fetchUserData = async () => {
      const uid = auth.currentUser?.uid;
      if (!uid) {
        console.warn("No user logged in");
        return;
      }

      console.log("Looking for user doc at: users/" + uid);
      const docRef = doc(db, "users", auth.currentUser.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        console.log("Fetched user data:", data);
        setName(data.name || "");
        setSurname(data.surname || "");
        setProfession(data.profession || "");
        setRate(data.rate || "");
        setCurrency(data.currency || "");
        setCategories(data.categories || "");
        setEmail(data.email || "");
        setPassword("");
        setImage(data.image || "");
      } else {
        console.warn("No user data found");
      }
    };

    fetchUserData();
  }, []);

  //Download User Data
  const downloadUserData = async () => {
    const uid = auth.currentUser?.uid;
    if (!uid) return alert("User not logged in.");

    try {
      // Get profile
      const userDoc = await getDoc(doc(db, "users", uid));
      const userProfile = userDoc.exists() ? userDoc.data() : {};

      // Get expenses
      const expenseSnap = await getDocs(
        query(collection(db, "expense"), where("uid", "==", uid))
      );
      const expenses = expenseSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Get salaries
      const salarySnap = await getDocs(
        query(collection(db, "monthly_salary"), where("uid", "==", uid))
      );
      const salaries = salarySnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // Combine data
      const allData = {
        profile: userProfile,
        expenses,
        monthly_salary: salaries,
      };

      // Convert to JSON and trigger download
      const blob = new Blob([JSON.stringify(allData, null, 2)], {
        type: "application/json",
      });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = `user-data-${uid}.json`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);

      console.log(" Download started");
    } catch (err) {
      console.error(" Failed to download user data:", err);
      alert("Failed to export data.");
    }
  };
  const cloudName = import.meta.env.VITE_CLOUDINARY_NAME;
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setimgLoading(true);
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "upload_image_cloudinary");
    data.append("cloud_name", cloudName);

    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: "POST",
        body: data,
      }
    );
    const uploadedImageURL = await res.json();
    console.log("Cloudinary return JSSON:", uploadedImageURL.url);
    setImage(uploadedImageURL.url);

    console.log(file);
    setimgLoading(false);
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);
  return (
    <div>
      <nav className="nav-bar">
        <div>
          <h1 className="nav-bar-tittle">BROKLESS</h1>
        </div>

        <div className="nav-bar-right">
          <button
            varient="link"
            className="nav-bar-settings"
            onClick={handleHome}
          >
            <FontAwesomeIcon className="nav-bar-settings-icon" icon={faGauge} />
          </button>
          <button
            variant="link"
            onClick={handleLogout}
            className="nav-bar-logout"
          >
            LOG OUT{" "}
          </button>
        </div>
      </nav>
      <div className="settings-container">
        <form className="settings-form" onSubmit={handleSubmit}>
          <h1 className="settings-title">PROFILE INFORMATION</h1>
          <label className="settings-subtitle">NAME</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="settings-subtitle">SURNAME</label>
          <input
            type="text"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
          <label className="settings-subtitle">PROFESSION</label>
          <input
            type="text"
            onChange={(e) => setProfession(e.target.value)}
            value={profession}
          />
          <label className="settings-subtitle">PROFILE IMAGE </label>
          <div className="upload-image">
            <input type="file" onChange={handleFileUpload} />
            {imgLoading ? (
              <TrophySpin
                color="#000000ff"
                size="small"
                text="Loading"
                textColor="#000000"
              />
            ) : (
              image && (
                <img
                  className="nav-bar-settings-icon"
                  src={image}
                  alt={`${name}'s profile`}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    margin: "auto",
                  }}
                />
              )
            )}
          </div>

          <label className="settings-subtitle-finance">PAYMENT RATE</label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="paymentRate"
                value="hourly"
                checked={rate === "hourly"}
                onChange={(e) => setRate(e.target.value)}
              />{" "}
              STEADY JOB
            </label>

            <label>
              <input
                type="radio"
                name="paymentRate"
                value="project"
                checked={rate === "project"}
                onChange={(e) => setRate(e.target.value)}
              />
              FREELANCER
            </label>
          </div>
          <label className="settings-subtitle-finance">
            CURRENCY OF CHOICE
          </label>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                name="currency"
                value="EUR"
                checked={currency === "EUR"}
                onChange={(e) => setCurrency(e.target.value)}
              />
              EUR €
            </label>
            <label>
              <input
                type="radio"
                name="currency"
                value="USD"
                checked={currency === "USD"}
                onChange={(e) => setCurrency(e.target.value)}
              />
              USD $
            </label>
            <label>
              <input
                type="radio"
                name="currency"
                value="GBP"
                checked={currency === "GBP"}
                onChange={(e) => setCurrency(e.target.value)}
              />
              GBP £
            </label>
          </div>
          <label className="settings-subtitle" htmlFor="categories">
            CUSTOM CATEGORIES
          </label>
          <input
            id="categories"
            type="text"
            value={categories}
            onChange={(e) => setCategories(e.target.value.replace(/\s+/g, ""))}
            pattern="^[a-zA-Z]+(,[a-zA-Z]+)*$"
            title="Enter words separated by commas with no spaces (e.g. coffee,gym,books)"
            placeholder="e.g. coffee,gym,books"
            className="settings-input"
          />

          <label className="settings-subtitle">EMAIL</label>
          <input
            type="text"
            value={email ? email : auth.currentUser?.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="settings-subtitle">PASSWORD</label>

          <input
            type="password"
            placeholder={auth.currentUser?.password || "Enter new password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">SUBMIT</button>
          {success && (
            <Alert className="alert-banner" severity="success">
              Your account has been updated successfully!
            </Alert>
          )}
          <button type="button" onClick={downloadUserData}>
            EXPORT ALL DATA{" "}
          </button>
        </form>
      </div>
    </div>
  );
};
export default Settings;

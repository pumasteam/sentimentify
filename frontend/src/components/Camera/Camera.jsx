import styles from "./Camera.module.css";
import { useState } from "react";
import { useLocation } from "wouter";
import CameraComponent from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const Camera = () => {
  const [isCameraActive, setIsCameraActive] = useState(false);
  const [location, setLocation] = useLocation();

  const handlePhoto = (dataUri) => {
    fetch(`https://a8f7-2600-3c02-00-f03c-93ff-fe3b-727b.ngrok.io/get-sentiment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: dataUri }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data[0] != null) {
          setLocation(`/search/${data[0]}`);
        }
      });
  };

  const handleClick = () => setIsCameraActive(true);

  return (
    <section className={styles.container}>
      {!isCameraActive ? (
        <button onClick={() => handleClick()} className={styles.button}>
          Take photo
        </button>
      ) : (
        <section className={styles.camera}>
          <CameraComponent
            onTakePhoto={(dataUri) => {
              handlePhoto(dataUri);
            }}
          />
        </section>
      )}
    </section>
  );
};

export default Camera;

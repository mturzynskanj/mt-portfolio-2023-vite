import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfiguration";
import { v4 as uuidv4 } from "uuid";
import CircularProgress from "@mui/material/CircularProgress";
import CustomTextArea from "../sharedComponents/customTextArea";
import CustomInput from "../sharedComponents/customInput";
import ImageUpload from "../sharedComponents/fileUpload";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";

const AddNewProject = () => {
  let formData = {
    name: "",
    url: "",
    images: [],
    information: "",
    visible: true,
  };
  const [loading, setLoading] = useState(false);

  let auth = getAuth();
  let isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      // onAuthStateChanged(auth, (user) => {
      //   if (user) {
      //     setFormData({ ...formData, userRef: user.uid });
      //     setLoading(false);
      //   } else {
      //     navigate("/signIn");
      //   }
      // });
    }
    return () => {
      isMounted = false;
    };
  }, [isMounted]);

  if (loading) {
    return (
      <div className="flexContainer">
        <CircularProgress />
      </div>
    );
  }

  const handleChange = (value, name) => {
    if (name === "images") {
      console.log("what is value for images", value);
    }
    formData[name] = value;
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // store image in firebase
    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, "images/" + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            switch (snapshot.state) {
              case "paused":
                break;
              case "running":
                console.log("Upload is running");
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...formData.images].map((image) => storeImage(image))
    ).catch((e) => {
      toast.error("Image not uploaded");
      return;
    });

    const formDataCopy = {
      ...formData,
      image: imgUrls[0],
    };

    delete formDataCopy.images;
    const docRef = await addDoc(collection(db, "projects"), formDataCopy);
    toast.success("Listing Saved....");
  };

  return (
    <section className="page">
      <h2>Add New Project !!</h2>
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item>
            <CustomInput
              name="name"
              label={"Project Name"}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item>
            <CustomInput name="url" label={"url"} handleChange={handleChange} />
          </Grid>
          <Grid item>
            <CustomTextArea
              name="information"
              label={Math.random()}
              handleChange={handleChange}
            />
          </Grid>
          <Grid item>
            <ImageUpload
              type="file"
              name="images"
              accept=".jpg, .png, .jpeg"
              handleChange={handleChange}
              multiple
            />
          </Grid>
        </Grid>
        <Grid item xs={12} md={12} xl={12}>
          <button>Add Project</button>
        </Grid>
      </form>
    </section>
  );
};

export default AddNewProject;

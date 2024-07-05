import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_config";
function MainPageCategories() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const result = await getDocs(collection(db, "categories"));
    setCategories(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="mb-4" style={{ paddingTop: "15px" }}>
      <h3 className="categories-heading mb-1">Categories</h3>
      {/* <div className="card-categories-ul">
        {categories.map((category) => (
          <div className="card-categories-li align-left">
            <div className="d-flex flex-column justify-content-center h-100">
              <div className="d-flex justify-content-center">
                <img src={category.image} height={80} width={80} />
              </div>
              <div className="d-flex justify-content-center text-center category-name">
                {category.name}
              </div>
            </div>
          </div>
        ))}
      </div> */}
      <Grid container sx={{ bgcolor: "#fff" }}>
        {categories.map((category) => (
          <Grid item xs={4} sm={3} md={2} lg={1.5} key={category.id}>
            <div className="card-categories-li align-left">
              <div className="d-flex flex-column justify-content-center h-100 category-card">
                <div className="d-flex justify-content-center">
                  <img
                    src={category.image}
                    height={80}
                    width={80}
                    className="mt-2"
                  />
                </div>
                <div className="d-flex justify-content-center text-center category-name">
                  {category.title}
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MainPageCategories;

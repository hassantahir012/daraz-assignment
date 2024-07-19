import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../../services/service";
import { categoryPagePath } from "../../../constants";
function MainPageCategories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    const result = await Service.getCategories();
    setCategories(result.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="mb-4 main-page-categories-container">
      <h3 className="categories-heading mb-1">Categories</h3>
      <Grid container sx={{ bgcolor: "#fff" }}>
        {categories.map((category) => (
          <Grid
            item
            xs={4}
            sm={3}
            md={2}
            lg={1.5}
            key={category.id}
            onClick={() => navigate(categoryPagePath)}
          >
            <div className="card-categories-li align-left">
              <div className="d-flex flex-column justify-content-center h-100 category-card">
                <div className="d-flex justify-content-center">
                  <img
                    src={category.image}
                    height={80}
                    width={80}
                    className="mt-3"
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

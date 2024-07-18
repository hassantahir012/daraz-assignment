import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase_config";

const getCategories = () => {
  return getDocs(collection(db, "categories"));
};

const getFlashSalesProducts = () => {
  return getDocs(collection(db, "flash_sale"));
};

const getJustForYouProducts = () => {
  return getDocs(collection(db, "just_for_you"));
};

const getCategoryProducts = () => {
  return getDocs(collection(db, "category_products"));
};

const Service = {
  getCategories,
  getCategoryProducts,
  getFlashSalesProducts,
  getJustForYouProducts,
};
export default Service;

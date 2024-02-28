import React from "react";
import Carousel from "../components/Carousel";
import { products } from "@/utils/products";
const Plant = () => {
  return <Carousel images={products} />;
};

export default Plant;

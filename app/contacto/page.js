"use client";
import React from "react";
import Navbar from "../components/navbar/Navbar";
import ImageGallery from "react-image-gallery";
const images = [
  {
    original: "/images/adrian.jpeg",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original:
      "https://images.unsplash.com/photo-1493916665398-143bdeabe500?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original:
      "https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFuaW1hbHN8ZW58MHx8MHx8fDA%3D",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const page = () => {
  return (
    <>
      <Navbar />
      <ImageGallery items={images} />
      <div>contacto</div>
    </>
  );
};

export default page;

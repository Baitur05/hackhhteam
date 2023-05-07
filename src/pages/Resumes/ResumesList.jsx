import { Box, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ResumesList = () => {
  //   const { getProducts, products, pages } = useProduct();
  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [searchParams, setSearchParams] = useSearchParams();

  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  //   useEffect(() => {
  //     getProducts();
  //   }, [searchParams]);

  //   useEffect(() => {
  //     setSearchParams({
  //       page: currentPage,
  //     });
  //   }, [currentPage]);

  //   console.log(products);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      {/* <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </Box> */}
      <Link to="/addresume">add resume</Link>
    </Box>
  );
};

export default ResumesList;

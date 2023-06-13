import React, { useState, useEffect } from "react";
import FsLightbox from "fslightbox-react";

function App() {
  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    setToggler(true); // Automatically open the lightbox on component mount
  }, []);

  const handleClose = () => {
    setToggler(false); // Close the lightbox
    window.history.back(); // Navigate to the previous page
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={[

"/images/ACC6/199.jpg",
"/images/ACC6/204.jpg",
"/images/ACC6/206.jpg",
"/images/ACC6/209.jpg",
"/images/ACC6/211.jpg",
"/images/ACC6/213.jpg",
"/images/ACC6/214.jpg",
"/images/ACC6/IMG_1563.jpg",
"/images/ACC6/IMG_1564.jpg",
"/images/ACC6/IMG_1565.jpg",
"/images/ACC6/IMG_1566.jpg",
"/images/ACC6/IMG_1567.jpg",
"/images/ACC6/IMG_1568.jpg",
"/images/ACC6/IMG_1569.jpg",
"/images/ACC6/IMG_1570.jpg",
"/images/ACC6/IMG_1571.jpg",
"/images/ACC6/IMG_1572.jpg",
"/images/ACC6/IMG_1573.jpg",
"/images/ACC6/IMG_1574.jpg",
"/images/ACC6/IMG_1575.jpg",
"/images/ACC6/IMG_1576.jpg",
"/images/ACC6/IMG_1577.jpg",
"/images/ACC6/IMG_1578.jpg",
"/images/ACC6/IMG_1579.jpg",
"/images/ACC6/IMG_1580.jpg",
"/images/ACC6/IMG_1598.jpg",
"/images/ACC6/IMG_1599.jpg",
"/images/ACC6/IMG_1600.jpg",
"/images/ACC6/IMG_1601.jpg",
"/images/ACC6/IMG_1602.jpg",
"/images/ACC6/IMG_1603.jpg",
"/images/ACC6/IMG_1604.jpg",
"/images/ACC6/IMG_1605.jpg",
"/images/ACC6/IMG_1606.jpg",
"/images/ACC6/IMG_1607.jpg",
"/images/ACC6/IMG_1608.jpg",
"/images/ACC6/IMG_1609.jpg",
"/images/ACC6/IMG_1610.jpg",
"/images/ACC6/IMG_1611.jpg",
"/images/ACC6/IMG_1612.jpg",
"/images/ACC6/IMG_1613.jpg",
"/images/ACC6/IMG_1667.jpg",
"/images/ACC6/IMG_1668.jpg",
"/images/ACC6/IMG_1669.jpg",
"/images/ACC6/IMG_1670.jpg",
"/images/ACC6/IMG_1671.jpg",
"/images/ACC6/IMG_1672.jpg",
"/images/ACC6/IMG_1673.jpg",
"/images/ACC6/IMG_1760.jpg",
"/images/ACC6/IMG_1761.jpg",
"/images/ACC6/IMG_1762.jpg",
"/images/ACC6/IMG_1763.jpg",
"/images/ACC6/IMG_1764.jpg",
"/images/ACC6/IMG_1765.jpg",
"/images/ACC6/IMG_1766.jpg",
"/images/ACC6/IMG_1767.jpg",
"/images/ACC6/IMG_1768.jpg",
"/images/ACC6/IMG_1769.jpg",
"/images/ACC6/IMG_1770.jpg",
"/images/ACC6/IMG_1771.jpg",
"/images/ACC6/IMG_1772.jpg",
"/images/ACC6/IMG_1773.jpg",
"/images/ACC6/IMG_1774.jpg",
"/images/ACC6/IMG_1775.jpg",
"/images/ACC6/IMG_1776.jpg",
"/images/ACC6/IMG_1777.jpg",
"/images/ACC6/IMG_1778.jpg",
"/images/ACC6/IMG_1779.jpg"
        ]}
        onClose={handleClose}
      />
    </>
  );
}

export default App;


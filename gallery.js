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
"/images/ACC6/IMG_1778.jpg",
"/images/ACC6/IMG_1779.jpg"
        ]}
        onClose={handleClose}
      />
    </>
  );
}

export default App;


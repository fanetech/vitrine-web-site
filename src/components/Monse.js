import React, { useEffect } from "react";

function Monse(props) {
  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    window.addEventListener("mousemove", (e) => {
      cursor.style.top = e.y + "px";
      cursor.style.left = e.x + "px";
    });
    document.querySelectorAll(".hover").forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        cursor.style.transition = ".3s ease-out";
        cursor.classList.remove("hovered");
      });
    });
  }, []);
  return <div className="cursor"></div>;
}

export default Monse;

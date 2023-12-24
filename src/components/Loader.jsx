import React, { useEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";

const Loader = () => {
  const clipTopRef = useRef();
  const clipBottomRef = useRef();
  const marqueeRef1 = useRef([]);
  const marqueeRef2 = useRef([]);
  const marqueeRef3 = useRef([]);

  useEffect(() => {
    const clipTop = clipTopRef.current;
    const clipBottom = clipBottomRef.current;
    const marquee1 = marqueeRef1.current;
    const marquee2 = marqueeRef2.current;
    const marquee3 = marqueeRef3.current;

    gsap.from([clipTop, clipBottom], 2, {
      delay: 1,
      height: "50vh",
      ease: "power4.inOut",
    });
    gsap.to([marquee1, marquee2, marquee3], 3.5, {
      delay: 0.75,
      top: "50%",
      ease: "power4.inOut",
    });
  }, []);

  return (
    <div className="loader">
      <div className="loader-clip clip-top" ref={clipTopRef}>
        <div className="marquee" ref={marqueeRef1}>
          <div className="marquee-container">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
      </div>
      <div className="loader-clip clip-bottom" ref={clipBottomRef}>
        <div className="marquee" ref={marqueeRef2}>
          <div className="marquee-container">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
      </div>
      <div className="clip-center">
        <div className="marquee" ref={marqueeRef3}>
          <div className="marquee-container">
            <span>Rove</span>
            <span>Rove</span>
            Rove
            <span>Rove</span>
            <span>Rove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

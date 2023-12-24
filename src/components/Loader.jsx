import React, { useEffect, useRef } from "react";
import "../App.css";
import gsap from "gsap";

const Loader = () => {
  const clipTopRef = useRef();
  const clipBottomRef = useRef();
  const marqueeRef1 = useRef();
  const marqueeRef2 = useRef();
  const marqueeRef3 = useRef();
  const spanRef1 = useRef();
  const spanRef2 = useRef();
  const spanRef3 = useRef();
  const spanRef4 = useRef();

  useEffect(() => {
    const clipTop = clipTopRef.current;
    const clipBottom = clipBottomRef.current;
    const marquee1 = marqueeRef1.current;
    const marquee2 = marqueeRef2.current;
    const marquee3 = marqueeRef3.current;
    const span1 = spanRef1.current;
    const span2 = spanRef2.current;
    const span3 = spanRef3.current;
    const span4 = spanRef4.current;

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
    gsap.from([marquee1, marquee2], 5, {
      delay: 1,
      left: "100%",
      ease: "power3.inOut",
    });
    gsap.from(marquee3, 5, {
      delay: 0.75,
      left: "-50%",
      ease: "power3.inOut",
    });
    gsap.to(clipTop, 2, {
      delay: 6,
      clipPath: "inset(0 0 100% 0)",
      ease: "power4.inOut",
    });
    gsap.to(clipBottom, 2, {
      delay: 6,
      clipPath: "inset(100% 0 0 0)",
      ease: "power4.inOut",
    });
    gsap.to([span1, span2, span3, span4], 2, {
      delay: 6,
      opacity: 0,
      ease: "power2.inOut",
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
            <span ref={spanRef1}>Rove</span>
            <span ref={spanRef2}>Rove</span>
            Rove
            <span ref={spanRef3}>Rove</span>
            <span ref={spanRef4}>Rove</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

// Motion JS
document.addEventListener("DOMContentLoaded", () => {
      // Section 1
      animate(
            ".rose",
            { scale: [1, 1.1] },
            { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "linear" }
      );

      const textSection1 = document.querySelector(".reveal-text1");
      textSection1.innerHTML = textSection1.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      const motionSection1 = [
            [".svg1-section1", { scale: [0, 1] }, { duration: 0.5 }],
            [
                  ".animate1 p:first-of-type",
                  { opacity: [0, 1] },
                  { duration: 0.5 }
            ],
            [
                  ".reveal-text1 span",
                  { y: [30, 0], opacity: [0, 1] },
                  { delay: stagger(0.2), duration: 0.3 }
            ],
            [
                  ".animate1 p:last-of-type",
                  { opacity: [0, 1] },
                  { duration: 0.5 }
            ],
            [
                  ".animate1 button",
                  { opacity: [0, 1] },
                  { duration: 0.5 }
            ]
      ];

      inView(document.querySelector(".animate1"), () => {
            const animate1 = animate(motionSection1);
            return () => {
                  animate1.stop();
            };
      });

      // Section 2
      const textSection2 = document.querySelector(".reveal-text2");
      textSection2.innerHTML = textSection2.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      const motionSection2 = [
            [".svg1-section2 circle", { scale: [0, 1], opacity: [0, 1] }, { duration: 0.4 }],
            [
                  ".reveal-text2 span",
                  { y: [30, 0], opacity: [0, 1] },
                  { delay: stagger(0.2), duration: 0.3 }
            ],
            [
                  ".animate2 p, .animate2 button",
                  { opacity: [0, 1] },
                  { duration: 0.5 }
            ],
      ];

      inView(document.querySelector(".animate2"), () => {
            const animate2 = animate(motionSection2);
            return () => {
                  animate2.stop();
            };
      });

      // SVG 1
      animate(".svg1-section2", {
            transform: [
                  'matrix(1, 0, 0, 1, 0, 0)',
                  'matrix(1, 0, 0.3, 1, -20, 0)',
            ]
      }, {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
      });

      // SVG 2
      animate(".svg2-section2 path", {
            d: [
                  "M 0 -13 C 46.167 -13 92.333 -13 138.5 -13 C 153.134 39.164 167.768 91.328 182.402 143.491 C 247.768 376.494 313.134 609.497 378.5 842.5 L 0 842.5 L 0 -13 Z",
                  "M 0.875 -12.683 C 0.875 -12.683 9.728 -2.784 24.275 15.077 C 71.011 72.459 176.515 212.018 236 369.5 C 314 576 379.375 842.817 379.375 842.817 L 0.875 842.817 L 0.875 -12.683 Z"
            ]
      }, {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
      });

      // Section 3
      const textSection3 = document.querySelector(".reveal-text3");
      textSection3.innerHTML = textSection3.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      const motionSection3 = [
            [".reveal-text3 span", { y: [30, 0], opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.2 }],
            [".animate3 img", { scale: [0, 1] }, { duration: 0.2 }],
            [".animate3 p:last-of-type", { opacity: [0, 1] }, { duration: 0.5 }],
      ];

      inView(document.querySelector(".animate3"), () => {
            const animate3 = animate(motionSection3);
            return () => {
                  animate3.stop();
            };
      });

      // Section 4
      const textSection4 = document.querySelector(".reveal-text4");
      textSection4.innerHTML = textSection4.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      animate(".svg1-section4", {
            transform: [
                  'matrix(1, 0, 0, 1, 0, 0)',
                  'matrix(1, 0, 0.6, 1, -60, 0)',
            ]
      }, {
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
      });

      const motionSection4 = [
            [".reveal-text4 span", { y: [30, 0], opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.2 }],
            [".animate4 p:first-of-type", { opacity: [0, 1] }, { duration: 0.5 }],
      ];

      inView(document.querySelector(".animate4"), () => {
            const animate4 = animate(motionSection4);
            return () => {
                  animate4.stop();
            };
      });

      // Section 5
      inView(document.querySelector(".animate5"), (el, enterInfo) => {
            if (enterInfo.boundingClientRect.x > 0) {
                  animate(".animate5 img", { x: [500, 1] }, { duration: 0.8 });
                  animate(".animate5 div", { x: [300, 1] }, { duration: 0.8 });
            } else {
                  animate(".animate5 img", { x: [-500, 1] }, { duration: 0.8 });
                  animate(".animate5 div", { x: [-300, 1] }, { duration: 0.8 });
            }
            return () => {
                  //
            };
      });

      // Section 6
      inView(document.querySelector(".animate6"), (el, enterInfo) => {
            if (enterInfo.boundingClientRect.y > 0) {
                  animate(".animate6 img", { x: [500, 1] }, { duration: 0.8 });
                  animate(".animate6 div", { x: [300, 1] }, { duration: 0.8 });
            }
            return () => {
                  //
            };
      });

      // Section 7
      const textSection7 = document.querySelector(".reveal-text7");
      textSection7.innerHTML = textSection7.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      const motionSection7 = [
            [".animate7 img", { scale: [0, 1] }, { duration: 0.2 }],
            [".reveal-text7 span", { y: [30, 0], opacity: [0, 1] }, { delay: stagger(0.1), duration: 0.2 }],
            [".animate7 > div:first-of-type, .content-section7", { opacity: [0, 1] }, { duration: 1 }],
      ];

      inView(document.querySelector(".animate7"), () => {
            const animate7 = animate(motionSection7);
            return () => {
                  animate7.stop();
            };
      });

      // Section 8
      const textSection8 = document.querySelector(".reveal-text8");
      textSection8.innerHTML = textSection8.textContent.trim()
            .split(" ")
            .map((word) => `<span style="display:inline-block">${word}&nbsp;</span>`)
            .join("");

      const motionSection8 = [
            [".svg1-section8", { scale: [0, 1] }, { duration: 0.2 }],
            [".reveal-text8 span", { y: [30, 0], opacity: [0, 1] }, { delay: stagger(0.2, { startDelay: 0.3 }), duration: 0.2 }],
            [".animate8 p:last-of-type", { opacity: [0, 1], scale: [0, 1] }, { duration: 0.2 }],
      ];

      inView(document.querySelector(".animate8"), () => {
            const animate8 = animate(motionSection8);
            return () => {
                  animate8.stop();
            };
      });



      // Horizontal Scroll
      const panel1 = document.querySelectorAll(".panel1");
      const panel2 = document.querySelectorAll(".panel2");

      scroll(
            animate(".horizontal-scroll1", {
                  transform: ["none", `translateX(-${panel1.length - 1}00vw)`],
            }),
            {
                  target: document.querySelector(".horizontal-scroll-container1"),
            }
      );

      scroll(
            animate(".horizontal-scroll2", {
                  transform: ["none", `translateX(-${panel2.length - 1}00vw)`],
            }),
            {
                  target: document.querySelector(".horizontal-scroll-container2"),
            }
      );
});

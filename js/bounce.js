export function bounceTransition() {
    document.querySelectorAll(".bounce").forEach((element) => {
        gsap.fromTo(
            element,
            { opacity: 0, y: -20, scale: 0.9 },
            { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "bounce.out" }
        );
    });
}
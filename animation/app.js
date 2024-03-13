const button = document.querySelector(".button1");
const navOpen = document.querySelector(".opened");

/*for animation we use
TweenLite.to(objetct to animate , time , properties)

we want to do multiple animation (TweenLite) so we add ,Timeline it like multiple tweenlite
we timeline to a variable */

// // time line automatically animates so we pause it
const tl = new TimelineLite({ paused: true, reversed: true });

tl.to(".cover", 1, {
  width: "60%", // its a js object so we use , and "" for proerpety
  ease: Power2.easeOut, // we can find this on website
})
  .to(
    "nav",
    1,
    {
      height: "100%",
      ease: Power2.easeOut,
    },
    "-=1"
  ) // to does animation from defalut to this properties but if u want to animate from certain properties to certain properties use fromto
  /*we use {}one for from {} for to */
  .fromTo(
    navOpen,
    0.5,
    {
      opacity: 0,
      x: 50,
      ease: Power2.easeOut,
    },
    {
      opacity: 1,
      x: 0,
      onComplete: () => {
        navOpen.style.pointerEvents = "auto";
        console.log("done");
      },
    }
  );

button.addEventListener("click", () => {
  toggleTween(tl);
});

// toggle tween take a timeline as parameter and if animation/tween is reversed in that timeline it plays , if its already played it reverse the animation
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

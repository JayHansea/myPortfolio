var typedText = document.getElementById('typed-text');

var typewriter = new Typewriter(typedText, {
    loop: true
});

typewriter.typeString('front-end web developer')
    .pauseFor(2500)
    .deleteChars(23)
    .typeString('mobile app developer')
    .pauseFor(2500)
    .deleteChars(20)
    .typeString('content developer')
    .pauseFor(2500)
    .deleteChars(17)
    .typeString('graphic designer')
    .pauseFor(2500)
    .deleteChars(16)
    .start();
  
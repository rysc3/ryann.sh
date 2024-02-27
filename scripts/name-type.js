document.addEventListener("DOMContentLoaded", function() {
  var terminalText = document.querySelector(".terminal-text");
  var typoName = "Ryan Shcerba";
  var correctedName = "Ryan Scherbarth";
  var initialDelay = 3000; // 3 seconds delay before animation
  var charDelay = 50; // Delay between typing characters
  var backspaceDelay = charDelay * 2; // Backspace twice as fast as typing
  var backspaceDone = false; // Flag to track if backspacing has been done

  function typeText(text, i) {
    if (i < text.length) {
      terminalText.textContent += text.charAt(i);
      setTimeout(function() {
        typeText(text, i + 1);
      }, charDelay);
    } else {
      setTimeout(function() {
        if (!backspaceDone) {
          backspaceText(typoName.length);
          backspaceDone = true;
        }
      }, 1000); // Pause for 1 second after typing typo name
    }
  }

  function backspaceText(i) {
    if (i >= 0) {
      setTimeout(function() {
        terminalText.textContent = typoName.substring(0, i);
        backspaceText(i - 1); // Recursive call to continue backspacing
      }, backspaceDelay);
    } else {
      setTimeout(function() {
        typeText(correctedName, 0); // Type the corrected name
      }, 1000); // Pause for 1 second after backspacing
    }
  }

  // Start the animation after initial delay
  setTimeout(function() {
    typeText(typoName, 0); // Start with the typo name
  }, initialDelay);
});

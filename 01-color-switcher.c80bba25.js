!function(){startButtonRef=document.querySelector("button[data-start]"),stopButtonRef=document.querySelector("button[data-stop]"),startButtonRef.addEventListener("click",(function(){startButtonRef.setAttribute("disabled",!0),stopButtonRef.removeAttribute("disabled"),t=setInterval(e,1e3)})),stopButtonRef.addEventListener("click",(function(){startButtonRef.removeAttribute("disabled"),stopButtonRef.setAttribute("disabled",!0),clearInterval(t)}));var t=null;function e(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}stopButtonRef.setAttribute("disabled",!0)}();
//# sourceMappingURL=01-color-switcher.c80bba25.js.map

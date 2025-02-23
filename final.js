var ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

ready(() => {
  // Set background image
  document.querySelector(".navbar").style.backgroundImage =
    "url('your-image-path.jpg')";
  document.querySelector(".navbar").style.backgroundSize = "cover";
  document.querySelector(".navbar").style.backgroundPosition = "center";

  // Stretch the header (navbar) to the full window height
  document.querySelector(".navbar").style.height = window.innerHeight + "px";
});

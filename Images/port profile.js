/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("top-navigation");
    if (x.className === "website-navigation") {
      x.className += " responsive";
    } else {
      x.className = "website-navigation";
    }
  }
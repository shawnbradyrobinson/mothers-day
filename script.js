let saleField = document.getElementById("#iframe");
let googleMap = document.createElement("iframe");
googleMap.setAttribute("width", "100%");
googleMap.setAttribute("height", "100%");
googleMap.setAttribute("frameborder", "0");
googleMap.setAttribute("style", "border:0");
googleMap.setAttribute("referrerpolicy", "no-referrer-when-downgrade");
googleMap.setAttribute("src", "https://www.google.com/maps/embed/v1/search?key=AIzaSyCB3lXQUe3SeV0zKPvqYYzjp89i2YaNETA&q=auctions in Iowa");
saleField.append(googleMap);
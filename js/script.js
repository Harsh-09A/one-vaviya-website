// Toggle Content Button
function toggleContent(dotsId, moreTextId, btnId) {
  var dots = document.getElementById(dotsId);
  var moreText = document.getElementById(moreTextId);
  var btnText = document.getElementById(btnId);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read More ...";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read Less";
    moreText.style.display = "inline";
  }
}

/* 
nectivity

Belpada Metro Station
500 m away

2 Mins
Sion-Panvel Highway
500 m away

2 Mins
Navi Mumbai International Airport
6 km away

10 Mins
Kharghar Railway Station
500 m away

2 Mins
About Godrej Properties
Godrej Properties Limited (GPL) is the real estate arm of the 127-year-old Godrej Group, one of India's most trusted and diversified conglomerates. Established in 1990 and headquartered in Mumbai, the company has successfully translated its parent group's philosophy of innovation, sustainability, and excellence into the real estate industry, becoming the first Indian real estate developer to receive an ISO certification.

Read More
CO

*/

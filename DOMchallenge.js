// Header element : ...
header = document.createElement("header");
header.style.backgroundColor = "gray";
header.style.padding = "20px 8%";
header.style.display = "flex";
header.style.flexDirection = "row";
header.style.alignItems = "center";
// the links elements : ...
home = document.createElement("a");
home.href = "#";
homeText = document.createTextNode("Home");
home.appendChild(homeText);
about = document.createElement("a");
about.href = "#";
aboutText = document.createTextNode("about");
about.appendChild(aboutText);
service = document.createElement("a");
service.href = "#";
serviceText = document.createTextNode("service");
service.appendChild(serviceText);
contact = document.createElement("a");
contact.href = "#";
contactText = document.createTextNode("contact");
contact.appendChild(contactText);
zero = document.createElement("a");
zero.href = "#";
zeroText = document.createTextNode("zero");
zero.appendChild(zeroText);
// the inner divs for the header : ...
nav = document.createElement("nav");
zerodiv = document.createElement("div");
uldiv = document.createElement("div");
nav.appendChild(zerodiv);
nav.appendChild(uldiv);
header.appendChild(nav);
// the inner element for zerodiv : ...
zerodiv.appendChild(zero);

// the inner elements for uldiv : ...
homeLi = document.createElement("li");
homeLi.appendChild(home);
uldiv.appendChild(homeLi);

aboutLi = document.createElement("li");
aboutLi.appendChild(about);
uldiv.appendChild(aboutLi);

serviceLi = document.createElement("li");
serviceLi.appendChild(service);
uldiv.appendChild(serviceLi);

contactLi = document.createElement("li");
contactLi.appendChild(contact);
uldiv.appendChild(contactLi);

// body container : ...
document.body.appendChild(header);

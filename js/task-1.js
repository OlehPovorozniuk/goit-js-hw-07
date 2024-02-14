const categoriesList = document.querySelector("#categories");
const item = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach(itemElement => { 
    const titleElement = itemElement.querySelector("h2");
    titleElement.style.marginBottom = "16px";
    const amountElements = itemElement.querySelectorAll("ul > li");
    console.log(`Categore: ${titleElement.textContent}`);
    console.log(`Elements: ${amountElements.length}`);
    
    
 

    itemElement.style.backgroundColor = "#f6f6fe"; 
    itemElement.style.borderRadius = "8px";
    itemElement.style.padding = "16px";
    itemElement.style.width = "392px";
    itemElement.style.height = "auto";


   const ulList = itemElement.querySelector("ul");
   ulList.style.display = "flex";
   ulList.style.flexDirection = "column";
   ulList.style.gap = "8px";
   
  amountElements.forEach(newItem => {
    newItem.style.border = "1px solid #808080";
    newItem.style.borderRadius = "4px";
    newItem.style. width = "360px";
    newItem.style.height = "40px";
    newItem.style.padding = "8px 16px";

    
 newItem.style.fontWeight =  "400";
 newItem.style.fontSize =  "16px";
 newItem.style.lineHeight =  "150%";
 newItem.style.letterSpacing =  "0.04em";
 newItem.style.color =  "#2e2f42";
  });
});

const linkFont1 = document.createElement("link");
linkFont1.rel = "preconnect";
linkFont1.href = "https://fonts.googleapis.com";
document.head.append(linkFont1);
const linkFont2 = document.createElement("link");
linkFont2.rel = "preconnect";
linkFont2.href = "https://fonts.gstatic.com";
linkFont2.crossOrigin = "true";
document.head.append(linkFont2);
const linkFont3 = document.createElement("link");
linkFont3.rel = "stylesheet";
linkFont3.href = "https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap";
document.head.append(linkFont3);




categoriesList.style.display = "flex";
categoriesList.style.flexDirection = "column";
categoriesList.style.gap = "24px";
categoriesList.style.padding = "24px";
categoriesList.style.background = "#fff";
categoriesList.style.maxWidth = "440px";
categoriesList.style.fontFamily = " Montserrat, sans-serif ";

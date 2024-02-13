const categoriesList = document.querySelector("#categories");
const item = categoriesList.querySelectorAll(".item");
console.log(`Number of categories: ${item.length}`);

item.forEach(itemElement => { 
    const titleElement = itemElement.querySelector("h2").textContent;
    const amountElements = itemElement.querySelectorAll("ul > li").length;
    console.log(`Categore: ${titleElement}`);
    console.log(`Elements: ${amountElements}`);
    itemElement.style.backgroundColor = "#f6f6fe"; 
    itemElement.style.borderRadius = "8px";
    itemElement.style.padding = "16px";
    itemElement.style.width = "392px";
    itemElement.style.height = "auto";
});




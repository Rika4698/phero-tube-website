const handleCategory = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
      );
      const data = await response.json();
      const btnContainer = document.getElementById("btn-container");
      data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
            
            <button onclick="handleLoadNews('${category.category_id}')" class=" bg-color-6  w-28 h-12 rounded text-color-5 text-lg font-medium">${category.category}</button>
            `;
            
        btnContainer.appendChild(div);
      });



};
const handleLoadNews = async (categoryId) => {
    
    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
      
    );
    const data = await response.json();
    console.log(data);

};
handleCategory();
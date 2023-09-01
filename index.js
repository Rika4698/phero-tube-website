const handleCategory = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
      );
      const data = await response.json();
      const btnContainer = document.getElementById("btn-container");
      data.data.forEach((category) => {
        const div = document.createElement("div");
        div.innerHTML = `
            
            <button onclick="handleLoadNews('${category.category_id}')" class=" bg-color-6  w-28 h-12 rounded text-color-2 text-lg font-medium">${category.category}</button>
            `;

        btnContainer.appendChild(div);
      });



};
const handleLoadNews = async (categoryId) => {
    
    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
      
    );
    const data = await response.json();
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";

    data.data.forEach((news) => {
        const div = document.createElement("div");
        div.innerHTML =
        `<div class="card  bg-base-100 shadow-xl">
        <figure class="w-72 h-40 rounded-xl ml-8 lg:ml-2" ><img src="${news.thumbnail
        }" alt="" /></figure>
        <div class="card-body ">
        <div class="flex gap-6">
        <div class="avatar ">
                  <div class="w-10 h-10 rounded-full">
                    <img
                      src=${news.authors[0].profile_picture}
                    />
        
        </div>
        </div>
        
          <div>
          <h2 class="card-title text-base text-color-2 font-bold">${news.title}</h2>
          <h4 class="font-normal text-color-7 text-sm" > ${news.authors[0].profile_name}</h4>
          <h4 class="font-normal text-color-7 text-sm">${news.others.views} ${"views"} </h4>

          </div>
          </div>
         
        </div>
      </div>`;
      console.log(news.authors[0].profile_picture);
   cardContainer.appendChild(div);
    });
    

};
handleCategory();
handleLoadNews(1000);
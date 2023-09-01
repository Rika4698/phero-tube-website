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
    const imageLink = "./icons/fi_5301987.png";
    if (data.data.length == 0) {
        const div = document.createElement("div");
        div.innerHTML = `<section class="w-[370px] flex items-center justify-center md:w-[700px] lg:w-[1280px] h-[400px]   ">
        <div class="  ">
        <img class="w-44 h-44 ml-14 "src="${imageLink}" alt="">
       <h1 class="text-center mt-8 font-bold text-2xl text-color-2">Oops!! Sorry, There is no <br>content here</h1></div>
        
        </section>`
        cardContainer.appendChild(div);
        console.log(data);
    }


    data.data.forEach((news) => {
        const div = document.createElement("div");
        div.innerHTML =
            `<div class="card  bg-base-100 shadow-xl">
        <figure class="" ><img class="w-80 h-40 rounded-xl  " src="${news.thumbnail
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
          <h4 class="font-normal text-color-7 text-sm flex gap-2 mt-2 " > ${news.authors[0].profile_name} ${news.authors[0].verified == true ? `<img class="w-5 h-5" src="./icons/fi_10629607.png">` : news.authors[0].verified = ""}</h4>
          <h4 class="font-normal text-color-7 text-sm mt-2">${news.others.views} ${"views"} </h4>

          </div>
          </div>
         
        </div>
      </div>`;
        console.log(data.data.length);
        cardContainer.appendChild(div);
    });


};
handleCategory();
handleLoadNews(1000);
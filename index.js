let newData;
const handleCategory = async () => {
    const response = await fetch(
        "https://openapi.programming-hero.com/api/videos/categories"
    );
    const data = await response.json();
    const btnContainer = document.getElementById("btn-container");

    let activeButton = null;
    data.data.forEach((category) => {
        const div = document.createElement("div");
        const button = document.createElement("button");
        button.innerHTML = category.category;
        button.classList.add("w-28", "h-12", "rounded", "text-lg", "font-medium", "bg-color-6", "text-color-2");
        button.addEventListener("click", () => {

            if (activeButton) {
                activeButton.classList.remove("bg-color-1", "text-color-3");
                activeButton.classList.add("bg-color-6", "text-color-2");
            }


            activeButton = button;
            button.classList.remove("bg-color-6", "text-color-2");
            button.classList.add("bg-color-1", "text-color-3");
            handleLoadNews(category.category_id);
        });

        div.appendChild(button);
        btnContainer.appendChild(div);
    });
};




const handleLoadNews = async (categoryId) => {

    const response = await fetch(
        `https://openapi.programming-hero.com/api/videos/category/${categoryId}`

    );
    const data = await response.json();
    const categoryData = data.data;
    newData = categoryData;
    displayCategoryCard(categoryData);
}

function sortData() {

    //     const sortDataByViews = () => {

    //    newData.sort((a,b) =>
    //      b.others.views.slice(0,3) - a.others.views.slice(0,3));
    //     };
    //     console.log(sortDataByViews);
    //    ;

    // // const viewsArray = [];
    // // const sorted =[];
    // // newData.forEach((item) => {
    // //     const views = item.others.views;
    // //      viewsArray.push(parseFloat(views));
    // //       sorted.push( viewsArray.sort((a, b) => a - b));
    // //   });

}




const displayCategoryCard = (categoryData) => {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const imageLink = "./icons/fi_5301987.png";
    if (categoryData.length == 0) {
        const div = document.createElement("div");
        div.innerHTML = `<section class="w-[370px] flex items-center justify-center md:w-[700px] lg:w-[1280px] h-[400px]   ">
        <div class="  ">
        <img class="w-44 h-44 ml-14 "src="${imageLink}" alt="">
       <h1 class="text-center mt-8 font-bold text-2xl text-color-2">Oops!! Sorry, There is no <br>content here</h1></div>
        
        </section>`
        cardContainer.appendChild(div);

    }


    newData.forEach((news) => {
        const div = document.createElement("div");
        const second = news.others.posted_date;
        const hour = parseInt(second / (3600));
        const minutes = parseInt((second / 60) - (hour * 60));

        div.innerHTML =
            `<div class="card  bg-base-100 ">
     <div>  <img class="w-96 h-44 rounded-xl lg: w-80 h-40 " src="${news.thumbnail
            }" alt="" />
            <div class="flex justify-end relative -top-8 " > ${second > 0 ? `<p class="w-auto h-6 pl-2 pr-2 absolute right-2 rounded-md  bg-color-2 font-normal text-sm text-color-3 text-center"> ${hour}hrs ${minutes} min ago</p>` : ""}</div>
           </div> 
          
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

        cardContainer.appendChild(div);
    });


};
handleCategory();
handleLoadNews(1000);

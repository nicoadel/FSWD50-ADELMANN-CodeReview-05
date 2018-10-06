$( document ).ready(function() {


const itemsData = [{
        "name": "The Shawshank Redemption",
        "art": "Drama",
        "imdb": "9.2",
        "description" :"random lorem ipsum",
        "photo": "https://images-na.ssl-images-amazon.com/images/I/512G9J05RJL._SY445_.jpg"
    },
    {
        "name": "The Godfather",
        "art": "Adventure",
        "imdb": "9.1",
        "description" :"random lorem ipsum",
        "photo": "https://image-ticketfly.imgix.net/00/02/76/61/69-og.jpg?w=500&h=750"
    },
    {
        "name": "Star Wars",
        "art": "Action",
        "imdb": "3.8",
        "description" :"random lorem ipsum",
        "photo": "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_.jpg"
    },
    {
        "name": "Random Movie Name",
        "art": "Drama",
        "imdb": "4.1",
        "description" :"random lorem ipsum",
        "photo": "https://image-ticketfly.imgix.net/00/02/76/61/69-og.jpg?w=500&h=750"
    },
    {
        "name": "An Adventure Movie",
        "art": "Adventure",
        "imdb": "9.3",
        "description" :"random lorem ipsum",
        "photo": "data:image/jpeg;base64,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"
    },
    {
        "name": "ted",
        "art": "Drama",
        "imdb": "6.1",
        "description" :"random lorem ipsum",
        "photo": "http://gdj.graphicdesignjunction.com/wp-content/uploads/2012/10/movie+posters+45.jpg"
    },
    {
        "name": "Scary",
        "art": "Action",
        "imdb": "9.1",
        "description" :"random lorem ipsum",
        "photo": "http://waytooindie.com/wp-content/uploads/2015/09/jaws-movie-cover.jpg"
    },
    {
        "name": "Ladykiller",
        "art": "Drama",
        "imdb": "4.6",
        "description" :"random lorem ipsum",
        "photo": "https://mir-s3-cdn-cf.behance.net/project_modules/disp/33c6d427397067.56364780ebd6e.jpg"
    },
    {
        "name": "Magicstuff",
        "art": "Action",
        "imdb": "9.1",

        "photo": "http://www.coverwhiz.com/content/Harry-Potter-And-The-Chamber-Of-Secrets.jpg"
    },

];
dramaSort();

    document.getElementById("item_container").innerHTML =
        `${itemsData.map(itemShoppingCart).join('')}`


   function itemShoppingCart(item) {
        return `
                <div class="col-lg-4 col-md-6 col-sm-6 col-xsm-12 ">
                <div class="block_element">
                    <img class="p-2" src="${item.photo}" alt="">
                    <div class="movie_description">
                        <p class="pt-3 font-weight-bold">${item.name}</p>
                        <p>${item.art}</p> 
                        <p>${item.description}</p>
                        <a class="dropdown-item m-1" href="#">Like <span class="pl-4"><img src="https://png.icons8.com/ios/1600/facebook-like.png" alt="">IMDB: ${item.imdb}</span></a>
                    </div>
                </div>
            </div>
                `
    }


function dramaSort(item){
    var all_elements = document.getElementsByClassName("block_element");
    console.log(all_elements);

}


}); 
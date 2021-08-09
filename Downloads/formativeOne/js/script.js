var headlinesBtn = document.querySelector('.headlinesBtn');
var financeBtn = document.querySelector('.financeBtn');
var sportsBtn = document.querySelector('.sportsBtn');
var weatherBtn = document.querySelector('.weatherBtn');


// Search Input Begins
$('#searchBtn').click(function(){
  var keyword = document.getElementById('search').value;
  console.log(keyword);
  getData(keyword);
});

function getData(kword) {
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q='+ kword +'&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
console.log(i);
       document.getElementById('objects').innerHTML +=

       '<div class="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3">' +
          '<div class="card mt-3 ml-5">' +
          '<h2>' + data.articles[i].title + '</h2>' +
            '<div class="card-body">'+
            '<h6>'+ data.articles[i].description +'</h6>' +
            '<img src="' + data.articles[i].image +'" class="card-img-top" ">' +

           '</div>'+
          '</div>'+
       '</div>';
    } //for loop
  },  //success
  error : function(){
    console.log('error');
    } //error
  }); //ajax
}; //Onclick Function
// Search Function Ends

// * Makes Enter Key Activate Search Button
$("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#searchBtn").click();
    }
});


// Loaded On Default
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q=headlines&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-4">' +
           '<div class="card mt-3 ml-5">' +
           '<h2>' + data.articles[i].title + '</h2>' +
             '<div class="card-body">'+
             '<img src="' + data.articles[i].image +'" class="card-img-top" " "alt="headlines breaking news" ">' +
             '<h6>'+ data.articles[i].description +'</h6>' +
            '</div>'+
           '</div>'+
        '</div>';
    }
  },
  error : function(){
    console.log('error');
  }
});

// Headlines Function
  headlinesBtn.onclick = function() {
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q=headlines&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-4">' +
           '<div class="card mt-3 ml-5">' +
           '<h2>' + data.articles[i].title + '</h2>' +
             '<div class="card-body">'+
             '<img src="' + data.articles[i].image +'" class="card-img-top" ""alt="headlines breaking news" ">' +
             '<h6>'+ data.articles[i].description +'</h6>' +
            '</div>'+
           '</div>'+
        '</div>';
    }
  },
  error : function(){
    console.log('error');
  }
});

$(".sportsHead").hide();
$(".financeHead").hide();
$(".headlines").show();
$(".weatherHead").hide();

} //Headlines Button Ends

// Finance Function
  financeBtn.onclick = function() {
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q=finance&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-4">' +
           '<div class="card mt-3 ml-5">' +
           '<h2>' + data.articles[i].title + '</h2>' +
             '<div class="card-body">'+
             '<img src="' + data.articles[i].image +'" class="card-img-top" ""alt="finance money investing billionaire millionaire dollars euro investment bank" ">' +
             '<h6>'+ data.articles[i].description +'</h6>' +
            '</div>'+
           '</div>'+
        '</div>';
    }
  },
  error : function(){
    console.log('error');
  }
});

$(".sportsHead").hide();
$(".financeHead").show();
$(".headlines").hide();
$(".weatherHead").hide();

} //Finance Button Ends


// Sports Function
  sportsBtn.onclick = function() {
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q=sports&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-4">' +
           '<div class="card mt-3 ml-5">' +
           '<h2>' + data.articles[i].title + '</h2>' +
             '<div class="card-body">'+
             '<img src="' + data.articles[i].image +'" class="card-img-top" ""alt="ball basketball team club olympics soccer golf football world cup" ">' +
             '<h6>'+ data.articles[i].description +'</h6>' +
            '</div>'+
           '</div>'+
        '</div>';
    }
  },
  error : function(){
    console.log('error');
  }
});
$(".sportsHead").show();
$(".financeHead").hide();
$(".headlines").hide();
$(".weatherHead").hide();
} //Sports Button Ends


// Weather Function
  weatherBtn.onclick = function() {
$.ajax({
  url : 'https://gnews.io/api/v4/search?country=au&lang=en&q=weather&token=575f4d92752191d902861b1cde0faac5',
  type: 'GET',
  data: 'json',
  success: function(data){
    console.log(data);
    console.log(data.articles.length);
    var i;
    document.getElementById('objects').innerHTML="";
    // ^ Clears the page from previous search when new search takes place
    for (i=0;i<data.articles.length;i++){
        document.getElementById('objects').innerHTML +=
        '<div class="col-4">' +
           '<div class="card mt-3 ml-5">' +
           '<h2>' + data.articles[i].title + '</h2>' +
             '<div class="card-body">'+
             '<img src="' + data.articles[i].image +'" class="card-img-top" ""alt="weather snow rain sun cloud storm lightning" ">' +
             '<h6>'+ data.articles[i].description +'</h6>' +
            '</div>'+
           '</div>'+
        '</div>';
    }
  },
  error : function(){
    console.log('error');
  }
});
$(".sportsHead").hide();
$(".financeHead").hide();
$(".headlines").hide();
$(".weatherHead").show();
} //Weather Button Ends

// URL Base for API Call
let urlBase = "https://openlibrary.org/search.json?";

//getting and setting localstorage 
var savedStories = JSON.parse(localStorage.getItem("saved-stories"));
var hiddenStories = JSON.parse(localStorage.getItem("hidden-stories"));
console.log(savedStories)


if (savedStories == null) {
    savedStories = [];
}

if (hiddenStories == null) {
    hiddenStories = [];
}

// FUNCTIONS
// =======================================================

function runQuery(queryURL){

    //AJAX Function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(response) {
                console.log(queryURL);
                console.log(response);
            for (let i=0; i<response.docs.length; i++){
                console.log(response.docs[i].title_suggest);
                console.log(response.docs[i].author_name);
                console.log(response.docs[i].first_publish_year);
                console.log(response.docs[i].subject);
                console.log(response.docs[i].author_name);
                var usISBNs = response.docs[i].isbn.find(number => number.startsWith("9780"));
                console.log(usISBNs)

                

              
// APPEND EACH BOOK FROM THE RESPONSE AS NEW HTML ELEMENT
    if (response.docs[i].cover_i){         
    var bookresult = 
            `<div class="row bookResult">
            <div class="cover">
              <p><img src = "https://covers.openlibrary.org/b/id/${response.docs[i].cover_i}-M.jpg" alt= "book cover image"></img></p>
            </div>
            <div class="medium-10 columns">
              <h5>${response.docs[i].title_suggest} by ${response.docs[i].author_name[0]}</h5>
              <p>
                  <span><class="publishDate"> <b>Published:</b> ${response.docs[i].first_publish_year}</span>
              </p>
              <p>
                <span><class="fi-firstline"> <b>First Line: </b></span>
              </p>
              <p>${response.docs[i].first_sentence}</p>
              <p>
                  <span><class="fi-subject"> <b>Subject Tags:</b></span>
                  <p id="subjects-here"><small>${response.docs[i].subject}</small></p>
                </p>
                <div class="row small-12 small-3 columns">
                  <button type="button" class="secondary button search-button" class="preview">
                    Preview
                  </button>
                  <a href="https://www.amazon.com/s?k=${response.docs[i].title_suggest}&i=stripbooks&ref=nb_sb_noss_1">
                  <button type="button" class="secondary button search-button" class="amazon">
                    Amazon
                  </button>
                  </a>
                  <a href="https://www.google.com/maps/search/?api=1&query=library">
                  <button type="button" class="secondary button search-button" class="Library">
                    Library
                  </button>
                  </a>
                  <button class="primary button search-button" type="small button-group-option" data-grouptype="OR" data-isbn="${usISBNs}" id="save-story">
                  Save
                  </button>
                  <button class="secondary button search-button" type="small button-group-option" data-grouptype="OR" data-isbn="${usISBNs}" id="hide-story">
                  Hide
                  </button>
              </div>
            </div>
          </div>
          <hr>`;
          if (hiddenStories.includes(usISBNs) == true) {
            var hiddenDiv = 
            `<div class="row bookResult">
              <span> 
                "${response.docs[i].title_suggest}" was hidden. Go to 'Your Stories' to unhide it.
              </span>
              </div>
              <hr>`
            $("#bookresults").append(hiddenDiv);
          } else {
            $("#bookresults").append(bookresult);
          }

          // if (savedStories.includes(usISBNs) == true) {
          //   $("#save-story").attr("style", "background-color: green")
          //   $("#save-story").html("Saved!")
          // }
            
            // var hideISBN = document.querySelectorAll("#hide-story");
            // for (var j = 0; j < hideISBN.length; j++) {
            //   hideISBN[j].addEventListener('click', function() {
            //     var ISBN = $(this).data("isbn"); // if the isbn number saved as data-ISBN, it will then be set to it
            //     console.log(ISBN)
                // hiddenStories.push(ISBN);
                // localStorage.setItem("hidden-stories", JSON.stringify(hiddenStories));

    // })}
        }
      }
    });
}

// MAIN PROCESSES (FUNCTION CALLS)
// =======================================================

$('#searchbtn').on('click', function(){
  $("#bookresults").empty()

// // 1. Retrieve user input and convert into variables

    let searchTitle = $('#booktitle').val().trim();
    console.log(searchTitle);

    let searchAuthor = $('#bookauthor').val().trim();
    console.log(searchAuthor);

    let searchKeyword = $('#bookkeyword').val().trim();
    console.log(searchKeyword);
 
    let queryURL = urlBase;

    if (searchTitle) {
        queryURL += "&title=" + searchTitle;
        console.log(queryURL);
    }

    if (searchAuthor){
        queryURL += "&author=" + searchAuthor;
        console.log(queryURL);
    }

    if (searchKeyword){
        queryURL += "&q=" + searchKeyword;
        console.log(queryURL);
    }

// 2. Use those variables to run an AJAX call to Open Library
  runQuery(queryURL)});

$("#clearbtn").click(function(){
  $("#bookresults").empty()
  let queryURL = ''

});

$(".searchfield").on('keypress', function (e) {
  if (e.key === 'Enter') {
    $("#bookresults").empty()
    let searchTitle = $('#booktitle').val().trim();
    console.log(searchTitle);

    let searchAuthor = $('#bookauthor').val().trim();
    console.log(searchAuthor);

    let searchKeyword = $('#bookkeyword').val().trim();
    console.log(searchKeyword);
 
    let queryURL = urlBase;

    if (searchTitle) {
        queryURL += "&title=" + searchTitle;
        console.log(queryURL);
    }

    if (searchAuthor){
        queryURL += "&author=" + searchAuthor;
        console.log(queryURL);
    }

    if (searchKeyword){
        queryURL += "&q=" + searchKeyword;
        console.log(queryURL);
    }

// 2. Use those variables to run an AJAX call to Open Library
    runQuery(queryURL)
  }
})

// $("#save-story").click(function(){
//   var isbn = $(this).data("isbn");
//   savedStories.push(isbn);
//   localStorage.setItem("saved-stories", JSON.stringify(savedStories));

// })

// var hideISBN = document.querySelectorAll("#hide-story");
// for (var i = 0; i < hideISBN.length; i++) {
//     hideISBN[i].addEventListener('click', function() {

//         var ISBN = $(this).data("isbn"); // if the isbn number saved as data-ISBN, it will then be set to it
//         console.log(ISBN)
//         hiddenStories.push(ISBN);
//         localStorage.setItem("hidden-stories", JSON.stringify(hiddenStories));

//     })}
$("#bookresults").on("click","#save-story",function(){
  savedStories.push($(this).data("isbn").toString());
  $(this).html("Saved!")
  $(this).attr("style", "background-color: green")
  localStorage.setItem("saved-stories", JSON.stringify(savedStories));

})

$("#bookresults").on("click","#hide-story",function(){
  var hideThisISBN = "";
  var hideThisISBN = $(this).data("isbn");
  $(this).html("Hidden")
  hiddenStories.push(hideThisISBN.toString());
  localStorage.setItem("hidden-stories", JSON.stringify(hiddenStories));


})

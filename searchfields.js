// URL Base for API Call
let urlBase = "http://openlibrary.org/search.json?";


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

    
              
// APPEND EACH BOOK FROM THE RESPONSE AS NEW HTML ELEMENT
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
                  <p><small>${response.docs[i].subject} </small></p>
                </p>
                <div class="row small-12 small-3 columns">
                  <button type="button" class="secondary button search-button" class="preview">
                    Preview
                  </button>
                  <a href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=${response.docs[i].title_suggest}"><button type="button" class="secondary button search-button" class="amazon">
                    Amazon
                  </button>
                  <button type="button" class="secondary button search-button" class="Library"><a href="https://www.google.com/maps/search/?api=1&query=library">
      
                    Library
                  </button>
                  <button type="small button-group-option" data-grouptype="OR">
                  <a href="#" class="button success radius">Save</a>
                  <a href="#" class="button primary radius">Hide</a>
                  </button>
              </div>
            </div>
          </div>
          <hr>`;
            $("#bookresults").append(bookresult);
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



// // 3. Break down the Open Library Object into useable fields
// // 4. Dynamically generate html content

// // 5. Dealing with edge cases (bugs or situations)

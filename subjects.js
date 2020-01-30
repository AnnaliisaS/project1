
// URL Base for API Call
let urlBase = "https://openlibrary.org/";

// FUNCTIONS
// =======================================================

function runQuery(queryURL){

    //AJAX Function
    $.ajax({url: queryURL, method: "GET"})
        .done(function(response) {
                console.log(queryURL);
                console.log(response);
            for (let i=0; i<response.works.length; i++){
                console.log(response.works[i].title);
                console.log(response.works[i].author_name);
                console.log(response.works[i].first_publish_year);
                console.log(response.works[i].subject);
                console.log(response.works[i].author_name);

// APPEND EACH BOOK FROM THE RESPONSE AS NEW HTML ELEMENT
            
if (response.works[i].cover_id){
        var bookresult = 

            `<div class="column inline">
            <img class="thumbnail"  src = "https://covers.openlibrary.org/b/id/${response.works[i].cover_id}-M.jpg" alt= "book cover image"></img>
            <h5>${response.works[i].title}</h5>
              <div class="row small-12 small-3 columns">
                  <button type="small button-group-option" data-grouptype="OR">
                  <a href="#" class="button success radius">Save</a>
                  <a href="#" class="button primary radius">Hide</a>
                  </button>
              </div>
            </div>`;

            $("#bookresults").append(bookresult);
        }
      }
    });
}

// MAIN PROCESSES (FUNCTION CALLS)
// =======================================================

$('#searchbtn').on('click', function(){
  $("#bookresults").empty()

    //Retrieve user input and convert into variables
    
            let searchSubject = $('#booksubject').val().trim();
            console.log(searchSubject);
    
    //Use user input to build queryURL
    
            let queryURL = urlBase + "subjects/" + searchSubject + ".json?details=true";
            console.log(queryURL);
    

    runQuery(queryURL)});

    $("#clearbtn").click(function(){
      $("#bookresults").empty()
      let queryURL = ''
    
    });
    


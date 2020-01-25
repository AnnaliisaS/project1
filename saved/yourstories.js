// need to add a button to each of the returned results. 




// need to add an event listener to each of the buttons so that the isbn number if saved to localstorage. 


// 

var savedStories = localStorage.getItem("saved-stories");
var hiddenStories = localStorage.getItem("hidden-stories");

if (savedStories == null) {
    savedStories = [];
}

if (hiddenStories == null) {
    hiddenStories = [];
}

fetch("https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json")
.then(function(response) {
    console.log(response)
    return response.json();
})
.then(function(json) {
    console.log(json)

    var createDiv = document.createElement("div");
    var mainDiv = createDiv;
    var leftDiv = createDiv;
    var createP = document.createElement("p");
    var pImg = createP;
    var image = document.createElement("img")
    var pTitle = createP;
    var pAuthor = createP;
    var rightDiv = createDiv;
    var pDescription1 = createP;
    var pDescription2 = createP;
    var pSubjectTags = createP;
    var pPublishDate = createP;
    var createButton = document.createElement("button")
    var buttonPreview = createButton;
    var buttonAmazon = createButton;
    var buttonLibrary = createButton;
    var buttonSave = createButton;
    var buttonHide = createButton;
    var bookInfo = Object.keys(json);
    // console.log(json, "keys to my json")

    mainDiv.setAttribute("class", "row");
    leftDiv.setAttribute("class", "medium-2 columns");
    image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json.ISBN + "-M.jpg");
    pTitle.innerHTML = json[bookInfo[0]].details.title;
    console.log(json[bookInfo[0]].details.title);
    pAuthor.innerHTML = "By: " + json[bookInfo[0]].details.authors.name;
    console.log("By: " + json[bookInfo[0]].details.authors[0].name)
    rightDiv.setAttribute("class", "medium-10 columns");
    pDescription1.innerHTML = "Description: ";
    pDescription2.innerHTML = json[bookInfo[0]].details.description;
    pSubjectTags.innerHTML = "Subject tags: " + json[bookInfo[0]].details.subjects;
    pPublishDate.innerHTML = json[bookInfo[0]].details.created.value.substring(0,11);
    buttonPreview.setAttribute("class", "secondary button search-button preview")
    buttonAmazon.setAttribute("class", "secondary button search-button amazon")
    buttonLibrary.setAttribute("class", "secondary button search-button library")

    pImg.appendChild(image);
    leftDiv.appendChild(pImg);
    leftDiv.appendChild(pTitle);
    leftDiv.appendChild(pAuthor);
    mainDiv.appendChild(leftDiv);
    // rightDiv.appendChild(pDescription1);
    // rightDiv.appendChild(pDescription2);
    // rightDiv.appendChild(pSubjectTags);
    // rightDiv.appendChild(pPublishDate);
    // rightDiv.appendChild(pPublishDate);
    // rightDiv.appendChild(buttonPreview);
    // rightDiv.appendChild(buttonAmazon);
    // rightDiv.appendChild(buttonLibrary);
    // mainDiv.appendChild(rightDiv);

    document.getElementsByClassName("container").appendChild(mainDiv)


    







})

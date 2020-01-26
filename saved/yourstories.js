// need to add a button to each of the returned results. 




// need to add an event listener to each of the buttons so that the isbn number if saved to localstorage. 


// 

var savedStories = JSON.parse(localStorage.getItem("saved-stories"));
var hiddenStories = JSON.parse(localStorage.getItem("hidden-stories"));
console.log(savedStories)

if (savedStories == null) {
    savedStories = [9781856136129];
}

if (hiddenStories == null) {
    hiddenStories = [];
}

for (var i = 0; i < savedStories.length; i++) {
    var url = "https://openlibrary.org/api/books?bibkeys=" + savedStories[i] + "&jscmd=details&format=json";

    fetch(url)
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(json) {
        console.log(json)

        var containerDiv = document.getElementById("saved")
        var createDiv = document.createElement("div");
        var mainDiv = document.createElement("div");
        var leftDiv = document.createElement("div");
        var createP = document.createElement("p");
        var pImg = document.createElement("p");
        var image = document.createElement("img")
        var pTitle = document.createElement("p");
        var pAuthor = document.createElement("p");
        var rightDiv = document.createElement("div");
        var pDescription1 = document.createElement("span");
        var pDescription2 = document.createElement("p");
        var pSubjectTags = document.createElement("p");
        var pPublishDate = document.createElement("p");
        var createButton = document.createElement("button");
        var buttonPreview = document.createElement("button");
        var buttonAmazon = document.createElement("button");
        var buttonLibrary = document.createElement("button");
        var buttonSave = document.createElement("button");
        var buttonHide = document.createElement("button");
        var bookInfo = Object.keys(json);
        // console.log(json, "keys to my json")

        mainDiv.setAttribute("class", "row");
        leftDiv.setAttribute("class", "medium-2 columns left-div");
        
        image.setAttribute("src", "http://covers.openlibrary.org/b/isbn/" + json[bookInfo[0]].details.isbn_10[0] + "-M.jpg");
        pTitle.innerHTML = "\"<strong>"  + json[bookInfo[0]].details.title + "</strong>\"";
        console.log(json[bookInfo[0]].details.title);
        pAuthor.innerHTML = "By: " + json[bookInfo[0]].details.authors[0].name;
        console.log("By: " + json[bookInfo[0]].details.authors[0].name)
        rightDiv.setAttribute("class", "medium-10 columns right-div");
        pDescription1.innerHTML = "Description: ";
        if (json[bookInfo[0]].details.description == undefined) {
            pDescription2.innerHTML = "<i>Information Not Available</i>";
        } else {
        pDescription2.innerHTML = json[bookInfo[0]].details.description;
        }
        pSubjectTags.innerHTML = "Subject tags: " + json[bookInfo[0]].details.subjects;
        pPublishDate.innerHTML = json[bookInfo[0]].details.created.value.substring(0,10);
        buttonPreview.setAttribute("class", "secondary button search-button preview")
        buttonAmazon.setAttribute("class", "secondary button search-button amazon")
        buttonLibrary.setAttribute("class", "secondary button search-button library")
        buttonPreview.innerHTML = "Preview";
        buttonAmazon.innerHTML = "Amazon";
        buttonLibrary.innerHTML = "Library";

        pImg.appendChild(image);
        leftDiv.appendChild(pImg);
        leftDiv.appendChild(pTitle);
        leftDiv.appendChild(pAuthor);
        mainDiv.appendChild(leftDiv);
        console.log(mainDiv)
        console.log(containerDiv)
        rightDiv.appendChild(pDescription1);
        console.log(pDescription1)
        rightDiv.appendChild(pDescription2);
        rightDiv.appendChild(pSubjectTags);
        rightDiv.appendChild(pPublishDate);
        rightDiv.appendChild(pPublishDate);
        rightDiv.appendChild(buttonPreview);
        rightDiv.appendChild(buttonAmazon);
        rightDiv.appendChild(buttonLibrary);
        mainDiv.appendChild(rightDiv);

        containerDiv.appendChild(mainDiv);


    







})}

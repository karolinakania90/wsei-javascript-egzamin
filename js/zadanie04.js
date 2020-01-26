// **1

let elements = document.getElementsByClassName("sample_class");

function getTagsOfElements(elements) {
    let array = [];

    for(i=0; i<elements.length; i++) {
        array.push(elements[i].tagName);
    }
    return array;
}

// **2

let tags = getTagsOfElements(elements);
console.log(tags);

let id = document.getElementById("sample_id");

function getClassesOfElement(element) {
    let array = [];
    let classes = element.classList;



    for(i=0; i < classes.length; i++ ) {
        array.push(classes[i]);
    }
    return array;
}

// ** 3

let classes =  getClassesOfElement(id);
console.log(classes);

let temp = document.getElementsByClassName("sample_class_2");

let list = temp[0].getElementsByTagName("li");

function getInnerTextsOfElements(elements) {
    let array = [];
    
    for(i=0; i < elements.length; i++) {
        array.push(elements[i].textContent);
    }
    return array;
}

let listText = getInnerTextsOfElements(list);
console.log(listText);

// **4


let links = document.getElementsByTagName("a");

function getAddressesOfElements(elements) {
    
    let array = [];
    
    for(i =0; i< elements.length; i++)
    {
        
        array.push(elements[i].href);
    }
    
    return array;
}


var linksAddress = getAddressesOfElements(links);
console.log(linksAddress);

// **5

var sampleClass3 = document.getElementsByClassName('sample_class_3')[0];

var sampleClass3Childs = sampleClass3.children;

var childTags = getTagsOfElements(sampleClass3Childs);
console.log(childTags);
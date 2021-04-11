function createDomMani(...arr){
    var element1=document.createElement(arr[0]);
    for(let iter=1;iter<arr.length;iter++){
        if(arr[iter].includes("=")){
        let attreibute,attributename;
        [attreibute,attributename]=arr[iter].split("=");
        element1.setAttribute(attreibute,attributename);
        }
        else{
            element1.innerHTML=arr[iter];
       }    
    }
    return element1;
}

var pageNumber=1;
var loadNewPage;
var maxEntries=100;
var noOfEntriesInPage=10;
var pageOffset=Math.ceil(maxEntries/noOfEntriesInPage)*pageNumber;
    let brandLink = createDomMani("a","class=navbar-brand","href=index.html","style=font-size:larger","User Info Org");
    
    let buttonlink = createDomMani("button","class=navbar-toggler","type=button","data-toggle=collapse","data-target=#navbarNav", "aria-controls=navbarNav","aria-expanded=false","aria-label=Toggle navigation");
    let spanLink=createDomMani("span","class=navbar-toggler-icon");
    buttonlink.append(spanLink);

    brandLink.append(buttonlink);

    let collapseNavBar = createDomMani("div","class=collapse navbar-collapse","id=navbarNav");

    let unorderedList = createDomMani("ul","class=navbar-nav");

    let listItem1 = createDomMani("li", "class=nav-item active")
    let a1 = createDomMani("a","class=nav-link","href=index.html","Home")
    
    let span1 = createDomMani("span","class=sr-only","(current)")
    
    a1.append(span1);
    listItem1.append(a1);

    //let listItem2 = createDomMani("li", "class=nav-item");
    //let a2 = createDomMani("a","class=nav-link","href=names.html","All Names");
    
   // listItem2.append(a2);

   // let listItem3 = createDomMani("li", "class=nav-item");
   // let a3 = createDomMani("a","class=nav-link","href=contacts.html","All Contacts");
    
    //listItem3.append(a3);

    unorderedList.append(listItem1);

    collapseNavBar.append(unorderedList);

    brandLink.append(collapseNavBar);

    let nav = createDomMani("nav","class=navbar navbar-expand-lg navbar-light bg-light");
    nav.append(brandLink);
    document.body.append(nav);

    //creates a table 

let divContainer=createDomMani("div","class=container");
let divRow=createDomMani("div","class=row");
let divCol9=createDomMani("div","class=col-9");
 let tableElement=createDomMani("table",'class=table table-striped')
 let tHeadElement=createDomMani("thead",'class=thead-dark')
 let tBodyElement=createDomMani("tbody");
 let trElement =createDomMani("tr");
 let thElementId=createDomMani("th","scope=col","id=thID","ID");
 let thElementName=createDomMani("th","scope=col","id=thName","Name");
 let thElementEmail=createDomMani("th","scope=col","id=thEmail","Email");
 trElement.append(thElementId,thElementName,thElementEmail);
 tHeadElement.append(trElement);

 var xhr = new XMLHttpRequest();
 var url_string = 'https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json';

 xhr.open('GET',url_string,true);
 xhr.send();

 xhr.onload = function(){
        
         
         var data =JSON.parse(this.response);
        let newData=data.slice(0,10);
        newData.forEach((element,index) => {
            
            let newtrelement=createDomMani("tr");
            let newtdElement1=createDomMani("td","id=id"+index,element.id);
            let newtdElement2=createDomMani("td","id=name"+index,element.name);
            let newtdElement3=createDomMani("td","id=email"+index,element.email); 
            newtrelement.append(newtdElement1,newtdElement2,newtdElement3);
            tBodyElement.append(newtrelement);
        });
 }
   
tableElement.append(tHeadElement,tBodyElement);
divCol9.append(tableElement);
divRow.append(divCol9);
divContainer.append(divRow);
document.body.append(divContainer);
//this section is for code which creates the pagination 


        
        
        function paginationCreator(){
        let ulPageNav=createDomMani("ul","class=pagination");
        let listItemPrevious=createDomMani("li","class=page-item");
        loadNewPage=((pageNumber-1)>0)?pageNumber-1:1;
        let aLinkPrevious=createDomMani("a","class=page-link",`onclick=changePageNumberAndText(${pageNumber}-1)`,"Previous");
        listItemPrevious.append(aLinkPrevious);
        ulPageNav.append(listItemPrevious);

        for(let iter=1;iter<=10;iter++){
            if(iter===pageNumber){
                let listItem=createDomMani("li","class=page-item active",`id=${iter}`);
                loadNewPage=iter;
                //loadNoOfEntriesInPage=currentNoOfEntriesInPage;    
                let alink=createDomMani("a","class=page-link",`onclick=changePageNumberAndText(${iter})`,iter.toString());
                listItem.append(alink);
                ulPageNav.append(listItem);
                }
            else{ 
                    let listItem=createDomMani("li","class=page-item",`id=${iter}`);
                    loadNewPage=iter;
                    //loadNoOfEntriesInPage=currentNoOfEntriesInPage;    
                    let alink=createDomMani("a","class=page-link",`onclick=changePageNumberAndText(${iter})`,iter.toString());
                    listItem.append(alink);
                    ulPageNav.append(listItem);
                }

        }

        let listItemNext=createDomMani("li","class=page-item");  
        let aLinkNext=createDomMani("a","class=page-link",`onclick=changePageNumberAndText(${pageNumber}+1)`,"Next");
        listItemNext.append(aLinkNext);
        ulPageNav.append(listItemNext);

        return ulPageNav;
    }
        
        let paginationString= paginationCreator();

        let paginationNav=createDomMani("nav","aria-label=pagination");
        paginationNav.append(paginationString);
        //paginationNav.append(ulPageNav);

        

        function changePageNumberAndText(...arr1){
            // loadnewPage=((pageNumber+1)>10)?10:pageNumber+1;
            //loadNoOfEntriesInPage=currentNoOfEntriesInPage; 
            document.getElementById(pageNumber).className="page-item"
            console.log(arr1);
            pageNumber=arr1;
            

            pageOffset=(pageNumber-1)*10
            
            document.getElementById(pageNumber).className="page-item active"
            var xhr = new XMLHttpRequest();
            var url_string = 'https://gist.githubusercontent.com/rvsp/add40254aa126f045837fa5b51f47f1f/raw/4d724bfabf4cce7379a386e23bef6576ab99a2f9/pagination.json';

            xhr.open('GET',url_string,true);
            xhr.send();

            xhr.onload = function(){

            var data =JSON.parse(this.response);
            let newData=data.slice(pageOffset,pageOffset+10);
            
            newData.forEach((element,index) => {
            
            document.getElementById("id"+index).textContent=element.id;
            
            document.getElementById("name"+index).textContent=element.name;
            
            document.getElementById("email"+index).textContent=element.email;
            
        });
 }
            
            
        }

        document.body.append(paginationNav);
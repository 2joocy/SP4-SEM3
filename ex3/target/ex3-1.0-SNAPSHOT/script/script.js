function setData () { 
    $.get("someservlet", function (responseText) {   
        $("#somediv").text(responseText);           
    });
};

function getData () {  
    $.get("someservlet", function (responseJson) {    
    });
};


function setDataPerson () { 
    $.get("personServlet", function (responseText) {   
        $("#somediv").text(responseText);           
    });
};

function getDataPerson () {  
    $.get("personServlet", function (responseJson) {    
    });
};
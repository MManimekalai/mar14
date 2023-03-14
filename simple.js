function lables(tagname,attrname,attrvalue,content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function inputs(tagname,attrname,attrvalue,attrname1,attrvalue1,attrname2,attrvalue2){
    var ele1=document.createElement(tagname);
    ele1.setAttribute(attrname,attrvalue);
    ele1.setAttribute(attrname1,attrvalue1);
    ele1.setAttribute(attrname2,attrvalue2);
    return ele1;
}
function linebreak(tagname){
    var br=document.createElement(tagname);
    return br;
}

var br=linebreak("br");
var br1=linebreak("br");
var br2=linebreak("br");
var br3=linebreak("br");
var br4=linebreak("br");
var br5=linebreak("br");
var br6=linebreak("br");
var br7=linebreak("br");
var br8=linebreak("br");
var firstname=lables("lable","for","fname","First Name");
var input=inputs("input","type","fname","name","fname","id","fname",);
var middlename=lables("lable","for","mname","Middle Name");
var input1=inputs("input","type","mname","name","mname","id","mname",);
var lastname=lables("lable","for","lname","Last Name");
var input2=inputs("input","type","lname","name","lname","id","lname",);
var email=lables("lable","for","email","Email");
var input3=inputs("input","type","email","name","email","id","email",);
var password=lables("lable","for","password","Password");
var input4=inputs("input","type","password","name","password","id","password",);

document.body.append(firstname,br,input,br1,middlename,br2,input1,br3,lastname,br4,input2,br5,email,br6,input3,br7,password,br8,input4);

// console.log(input,br,input);
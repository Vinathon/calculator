var bodyElements = {
    "elements": [
      {
        "name": "div",
        "class": "container",
        "value": "",
        "elements": [
            {
                "name": "div",
                "class": "center",
                "value": "",
                "elements": [
                    {
                    "name": "div",
                    "class": "card col-4",
                    "value": "",
                    "elements": []
                    }
                ]
            }
        ]
      }
    ]
  }


  function generateDOM(object,doc){
console.log("object >>>", object)
    for(element in object){
        console.log("this",element);
        console.log(object[element]);
        let ele = document.createElement(object[element].name);
        console.log(object[element].name);
        ele.setAttribute('class',object[element].class);
        console.log(object[element].class);
        ele.value = object[element].value;
        console.log(object[element].value);
        doc.append(ele);
        console.log("ele >>> ", ele.elements)
        generateDOM(object[element].elements, ele);
    }
    
        
  }

  function createAttributes(){
      
  }

  var abc = document.body
  generateDOM(bodyElements.elements,abc);
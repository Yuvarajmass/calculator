let input=document.querySelector("input")
function addValue(elementVal){ //prameter vangalam
input.value += elementVal //input.value+elementVal
}

function cleaverValue(){
  input.value=""
}
function deleteValue(){  //length-l last characrer
  input.value=input.value.slice(0,input.value.length-1) //string two substring and slice string
}

function evaluateValue(){ //prebuild  eval method irukku
  input.value=eval(input.value)
}

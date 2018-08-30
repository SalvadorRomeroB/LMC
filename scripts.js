var outputL = [];

const appendText =() => {
    for(i=0; i<100; i++){
       var inp = document.createElement("input");
       inp.maxLength = '3';
       if(i < 10){
       inp.setAttribute('placeholder', '00'+i);
       }else{
           inp.setAttribute('placeholder', '0'+i);
       }
       $("#inpts").append(inp); 
    }

   }

const ouputGrow = () => {
    document.getElementById("outputBox").value = outputL;
    outputL.push(calculator); 
    var out = document.createElement("input");
    out.disabled = true
    $("#outputBox").after(out).value = outputL[outputL.length]; 
    out.value = outputL[outputL.length-1];
}


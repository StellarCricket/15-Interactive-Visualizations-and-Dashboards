function navBoxFunction(sample) {
var url = "samples.json";
data = d3.json(url)

d3.json(url).then(function(data){
    var data = data.names;
    var navBox  = d3.select('#selDataset');
    navBox.html("");
    Object.entries(data).forEach(([key, value])=>{
        navBox.append("")
        .text(`${key}:${value}`);
    })
    
    var options = select
        .selectAll('option')
            .data(data).enter()
            .append('option')
            .text(function(d) {return d;});
});

function optionChanged(inputValue) {
    console.log(inputValue)
    d3.json(url).then (function(data){
        var sample = data.samples;
        var data = data.metadata;
        console.log(data)
        console.log(sample)
        console.log(inputValue)
        for(var i=0; i<data.length; i++){
            console.log("ID:"+data[i].id);
        }
    });
}

if (data[i].id===parseInt(inputValue,10)){

    console.log("Input Value"+inputValue);
    d3.select("#sample-metadata")
        .html("ID:"+data[i].id+"<br>"+"Ethnicity:"+data[i].ethnicity+"<br>"+"Gender:"+data[i].gender+"<br>"+"Age:"+data[i].age+"<br>"+"Location:"+data[i].location+"<br>"+"BB Type"+data[i].bbtype+"<br>"+"WFreq"+data[i].wfreq);
}



d3.json("samples.json").then((data)=> {
    
   console.log(data)      

    var sampleValues = data.samples;

  
    var slicedData = sampleValues.slice(0,10);
    
    var reverseData = slicedData.reverse();

    var trace1 = {
        x: reverseData.map(object => object.sampleValues),
        y: reverseData.map(object => object.otu_ids),
        type: "bar",
        orientation: "h",
        text =  sample.samples.otu_values

    }

    var data = [trace1];

    var layout = {
        title: "Belly Button Germs",
        xaxis: { title: "X"}, 
        yaxis: {title: "y"}
    };
    Plotly.newPlot("plot", data, layout);
});
}
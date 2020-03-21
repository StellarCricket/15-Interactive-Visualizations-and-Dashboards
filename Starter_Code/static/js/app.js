
// let string = JSON.stringify("url")
// let obj = JSON.parse("string")


d3.json("samples.json").then((data)=> {
    
   console.log(data)  
    

   var sampleValues = data.samples;

   var sortByValues = data.sort(function sortFunction(a,b) {
       return b-a;

     });
    var slicedData = sortByValues.slice(0,10);
    
    var reverseData = slicedData.reverse();

    var trace1 = {
        x: reverseData.map(object => object.sampleValues),
        y: reverseData.map(object => object.otu_ids),
        type: "bar",
        orientation: "h",
        // text =  sample.samples.otu_values

    }

    var data = [trace1];

    var layout = {
        title: "Belly Button Germs",
        xaxis: { title: "X"}, 
        yaxis: {title: "y"}
    };
    Plotly.newPlot("plot", data, layout);
});
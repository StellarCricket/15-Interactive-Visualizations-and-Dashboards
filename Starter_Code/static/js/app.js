function navBoxFunction(sample) {
var url = "samples.json";
data = d3.json(url)

d3.json(url).then(function(data){
    var data = data.names;
    var select  = d3.select('#selDataset');

    var options = select
        .selectAll('option')
            .data(data).enter()
            .append('option')
            .text(function(d) {return d;});
});

function optionChanged(inputValue) {
    console.log(inputValue)
    d3.json(url).then (function(data){
        var sample =  data.samples;
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

        var otu_ids = sample[i].otu_ids
        var sample_values = sample[i].sample_values
        var otu_labels = sample[i].otu_labels
        var allLabels=[];

        var otuIDSlice = sample[i].otu_ids.slice(0,10)
        var valueSlice = sample[i].sample_values.slice(0,10)
        var labelSlice = sample[i].otu_labels.slice(0,10)
        var otuLabels = [];
        for (i=0;i<otu_ids.length;i++){
            otuLabels.push('OTU:'+otus[i]);
        }

        var trace1 = {
            y: otuLabels,
            x: valueSlice,
            type: "bar",
            orientation: "h",
            text: labelSlice,
            marker: {
                color: 'green'
            }
        };

        var data = [trace1]

        var layout = {
            title: 'Operational Taxonomic Units by Volume',
            width: 800,
            showlegend: true, 
            xaxis: {
                tickangle: -45
            },
            
        };
        Plotly.newPlot("bar", data, layout);
        
}


   

}
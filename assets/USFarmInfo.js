function initMap(containerId1,containerId2, dataURL) {   
    var map = new Datamap({
        scope: 'usa',
        element: document.getElementById(containerId1),
        geographyConfig: {
            highlightBorderColor: '#bada55',
            highlightBorderWidth: 3,
            popupTemplate: function(geo, data) {
                if (data && data.deptAg) {
                return `<div class="hoverinfo">${geo.properties.name} <a href='${data.deptAg}' target="_blank">Department of Agriculture</a></div>`;
            }
            return `<div class="hoverinfo">${geo.properties.name}: No Department of Agriculture link available</div>`;
            }
        },
        dataUrl: dataURL,
        dataType: 'json',
        data:{},
        fills: {
            'High': '#CA5E5B',
            'Medium High': '#EAA9A8',
            defaultFill: '#EDDC4E'
        },
        done: function(map) {
            console.log("Map Data:", map.options.data);
            map.svg.selectAll('.datamaps-subunit').on('click', function(geo, data) {
                console.log("Clicked Data:", data);
                // Reset fill color for all states
                map.svg.selectAll('.datamaps-subunit').style('fill', function () {
                    return map.options.fills.defaultFill; // Reset to the defaultFill color
                });

                // Highlight the clicked state
                d3.select(this).style('fill', '#bada55');

                var deptAgLink = data && data.deptAg ? `<a href='${data.deptAg}' target="_blank">Department of Agriculture</a>` : 'No Department of Agriculture link available';
                var additionalInfo = data && data.info ? `<p>${data.info}</p>` : "<p>No additional information available.</p>";
                document.getElementById(containerId2).innerHTML = `
                    <h3>${geo.properties.name}</h3>
                    ${deptAgLink}
                    ${additionalInfo}
                `;
        });
        }
        });
    map.labels();
}
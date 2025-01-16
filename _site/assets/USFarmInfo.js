function initMap(containerId1,containerId2) {   
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
        dataUrl: 'USAgData.json',
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
                var deptAgLink = data && data.deptAg ? `<a href='${data.deptAg}' target="_blank">Department of Agriculture</a>` : 'No Department of Agriculture link available';
                document.getElementById(containerId2).innerHTML = `${geo.properties.name}: ${deptAgLink}`;
        });
        }
        });
    map.labels();
}
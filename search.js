function searchOnServer(terms) {
    console.log("pretending to search for", terms);
    var resultList = [
        {
            id: 12345,
            name: "Jim Beam",
            regNumber: "CX 12354",
            vehicleDescription: "Mazda 323",
            date: new Date(2016, 6, 5)
        }, {
            id: 12346,
            name: "Johannes L",
            regNumber: "CAW 36543",
            vehicleDescription: "Mercedes-Benz C220",
            date: new Date(2016, 7, 7)
        }, {
            id: 12347,
            name: "Ricky Louw",
            regNumber: "TZS 456 GP",
            vehicleDescription: "Golf 3 III",
            date: new Date(2016, 8, 1)
        }
    ];
    return resultList;
}


function loadAndPopulateSearch() {
    var searchString = $("#search_string").val();
    var searchResults = searchOnServer(searchString);
    populateSearch(searchResults);
}

function populateSearch(searchResults) {

    var table = $("#search_result_list")[0];
    while (table.rows.length > 0) {
        deleteRow(-1);
    }

    searchResults.forEach(function (item) {
        var newRow = table.insertRow(-1);
        $(newRow).data("element_id", item.id).on("click", loadQuote);

        var newCell = newRow.insertCell(-1);
        $(newCell).text(item.name);

        newCell = newRow.insertCell(-1);
        $(newCell).text(item.regNumber);

        newCell = newRow.insertCell(-1);
        $(newCell).text(item.vehicleDescription);

        newCell = newRow.insertCell(-1);
        $(newCell).text(item.date);
    });
}

function loadQuote() {
    var id = $(this).data("element_id");
    location.replace("app.html?id=" + id + "&person");
}

$(document).ready(function () {
    $("#do_search").on("click", loadAndPopulateSearch);
});

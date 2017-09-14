


function loadAndPopulateSearch() {
    var searchString = $("#search_string").val();
    $.ajax({
        type: "post",
        url: "/search",
        data: searchString,
        contentType: "application/json",
        dataType: 'json'
    }).done(function(data) {
        populateSearch(data);
    });

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

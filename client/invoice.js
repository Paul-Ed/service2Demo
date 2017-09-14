function collectPerson() {
    var person = {};
    person.firstName = $("input[name='first_name']").val();
    person.lastName = $("input[name='last_name']").val();
    person.idType = $("select[name='id_type']").val();
    person.idNumber = $("input[name='id_number']").val();

    person.postalCode = $("input[name='postal_code']").val();
    person.address = $("input[name='address']").val();

    return person;
}

function populateInvoice(invoice) {

    console.log("invoice", invoice);
    invoice.items.forEach(function (item) {
        console.log(item);
        var line = addNewLine();

        $(line.cells[0]).children().first().select2().val(item.partNumber).trigger('change');
        $(line.cells[1]).children().first().select2().val(item.description).trigger('change');
        $(line.cells[2]).children().first().select2().val(item.qty).trigger('change');
        $("input", line.cells[3]).val(item.price);
        $("input", line.cells[4]).val(item.labour);

        $("#vat").val(item.vat);
        $("#discount").val(item.discount);
        $("#total").val(item.total);
    });


}

function addNewLine() {

    var table = $("#invoiceTable")[0];

    var existingRow = table.rows[1];
    var newRow = table.insertRow(-1);
    for (var i = 0; i < existingRow.cells.length; i++) {
        var cell = existingRow.cells[i];
        var newCell = newRow.insertCell();
        var copied = $(cell).children().first().clone();
        copied.appendTo(newCell);
        if (copied.attr("name") == "partnumber") {
            copied.select2(getAjax("getPartNumber")).val(0).trigger('change');
        } else if (copied.attr("name") == "discription") {
            copied.select2(getAjax("getDescription")).val(0).trigger('change');}
        else if (copied.attr("name") == "qty") {
            copied.select2(getAjax("getqty")).val(0).trigger('change');
        }
    }
    return newRow;
}

function getAjax(url) {
    return {
        ajax: {
            url: '/'+url,
            delay: 250
        }
    };
}

$(document).ready(function () {

    $("select[name='partnumber']").select2(getAjax("getPartNumber"));
    $("select[name='discription']").select2(getAjax("getDescription"));
    $("select[name='qty']").select2(getAjax("getqty"));


    var searchString = location.search;
    if (searchString) {
        var id = searchString.split("=")[1];
        var quote = loadQuoteFromServer(id);
        populateInvoice(quote.invoice);
    }

    console.log("hello");
    $("#addNewLine").on("click", addNewLine);


/*
    $("select[name='id_type']").select2();
*/
});

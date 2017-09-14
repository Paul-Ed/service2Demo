function loadQuoteFromServer(id) {
    $.ajax({
        type: "get",
        url: "/getQuote/" + id,
        dataType: 'json'
    }).done(function(quote) {
        populateCar(quote.car);
        populatePerson(quote.person);
        populateInvoice(quote.invoice);
    });

}
$(document).ready(function(){

    var urlSearchString = location.search;
    if(urlSearchString) {
        var terms = urlSearchString.split("&");
        terms[0] = terms[0].replace("?","");
        var id = terms[0];
        setTimeout(loadQuoteFromServer.bind(null, id), 1000);

        if(terms.length>1) {
            var link = "#" + terms[1] + "_link";
            $(link).trigger("click");
        }
    }

    $("#save").click(function() {
        var car = collectCar();
        var person = collectPerson();
        var invoice = collectInvoice();
        console.log("person to save", person);
        console.log("car to save", car);
    })

});



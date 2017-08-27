

function loadQuoteFromServer(id) {
    console.log("pretending to read quote", id, "from server");
    var quote = {
        person: {
            firstName  : "Johannes",
            lastName  : "Loper",
            idType  : "1",
            idNumber  : "667712029283",
            address  : "123 Collet St, Alberton",
            postalCode : "5566"
        },
        car: {
            registrationNumber : "CX1234",
            monthlyUsage : "2000",
            odo : "120000",
            yearModel : "2017",
            brand : "1",
            fuel : "1",
            usedNew : "1",
            range : "1",
            model : "1"
        },
        invoice: {
            date: new Date(2016,7,6),
            items: [
                {
                    partNumber: "Z555",
                    description: "123",
                    qty: 4,
                    price: 1.5,
                    labour: 150.50,
                    vat: 130,
                    discount: 30,
                    total: 1000

                }, {
                    partNumber: "X777",
                    description: "122",
                    qty: 2,
                    price: 3000,
                    labour: 350.50,
                    vat: 110,
                    discount: 10,
                    total: 1000
                }
            ],
            vat: 297.23,
            discount: 97.23,
            total: 2999.99
        }
    };

    return quote;
}

$(document).ready(function(){

    var urlSearchString = location.search;
    if(urlSearchString) {
        var terms = urlSearchString.split("&");
        terms[0] = terms[0].replace("?","");
        var id = terms[0];
        var quote = loadQuoteFromServer(id);

        populateCar(quote.car);
        populatePerson(quote.person);

        if(terms.length>1) {
            var link = "#" + terms[1] + "_link";
            $(link).trigger("click");
        }
    }

    $("#save").click(function() {
        var car = collectCar();
        var person = collectPerson();
        console.log("person to save", person);
        console.log("car to save", car);
    })

});



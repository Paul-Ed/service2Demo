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

function populatePerson(person) {
    console.log("person", person);
    $("input[name='first_name']").val(person.firstName);
    $("input[name='last_name']").val(person.lastName);
    $("select[name='id_type']").val(person.idType).trigger('change');
    $("input[name='id_number']").val(person.idNumber);
    $("input[name='address']").val(person.address);
    $("input[name='postal_code']").val(person.postalCode);
}

$(document).ready(function () {

    // $(".select2").select2();
    $("select[name='id_type']").select2({
        ajax: {
            url: '/getIdType',
            delay: 250
        }
    });
});

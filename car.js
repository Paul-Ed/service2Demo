function collectCar() {
    var car = {};
    car.registrationNumber = $("input[name='regNum']").val();
    car.monthlyUsager = $("input[name='usage']").val();
    car.odo = $("input[name='odo']").val();
    car.yearModel = $("#yearModel").select2().val();
    car.brand = $("#brand").select2().val();
    car.fuel = $("#fuel").select2().val();
    car.usedNew = $("#usedNew").select2().val();
    car.range = $("#range").select2().val();
    car.model = $("#model").select2().val();
    return car;
}

function populateCar(car) {
    console.log("car", car);
    $("input[name='regNum']").val(car.registrationNumber);
    $("input[name='usage']").val(car.monthlyUsage);
    $("input[name='odo']").val(car.odo);
    $("#yearModel").select2().val(car.yearModel).trigger('change');
    $("#brand").select2().val(car.brand).trigger('change');
    $("#fuel").select2().val(car.fuel).trigger('change');
    $("#usedNew").select2().val(car.usedNew).trigger('change');
    $("#range").select2().val(car.range).trigger('change');
    $("#model").select2().val(car.model).trigger('change');
}

$(document).ready(function () {
    $(".select2").select2();
});

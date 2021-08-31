"use strict";

var pickupPostcodeField = document.getElementById("pickup-postcode");
var deliveryPostcodeField = document.getElementById("delivery-postcode");
var vehicleTypeField = document.getElementById("vehicle-type");
var getPriceButton = document.getElementById("get-price-button");
var responseElement = document.getElementById("response-element");

function fetchData() {
  var response, responseBody, pickupPostcode, deliveryPostcode, vehicle;
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          responseElement.textContent = "Loading...";
          _context.next = 3;
          return regeneratorRuntime.awrap(fetch("/quote", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              pickupPostcode: pickupPostcodeField.value,
              deliveryPostcode: deliveryPostcodeField.value,
              vehicle: vehicleTypeField.value
            })
          }));

        case 3:
          response = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(response.json());

        case 6:
          responseBody = _context.sent;
          console.log(responseBody);
          pickupPostcode = responseBody.pickupPostcode;
          deliveryPostcode = responseBody.deliveryPostcode;
          vehicle = responseBody.vehicle.replace("_", " ");
          responseElement.textContent = "A delivery from ".concat(pickupPostcode, " to ").concat(deliveryPostcode, "\n         using a ").concat(vehicle, " will cost you \xA3").concat(responseBody.price, ".");

        case 12:
        case "end":
          return _context.stop();
      }
    }
  });
}

getPriceButton.onclick = fetchData;
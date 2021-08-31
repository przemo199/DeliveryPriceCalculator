const pickupPostcodeField = document.getElementById("pickup-postcode");
const deliveryPostcodeField = document.getElementById("delivery-postcode");
const vehicleTypeField = document.getElementById("vehicle-type");
const getPriceButton = document.getElementById("get-price-button");
const responseElement = document.getElementById("response-element");

async function fetchData() {
    responseElement.textContent = "Loading...";
    const response = await fetch("/quote", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify({
            pickupPostcode: pickupPostcodeField.value,
            deliveryPostcode: deliveryPostcodeField.value,
            vehicle: vehicleTypeField.value
        })
    });

    const responseBody = await response.json();
    console.log(responseBody);
    const pickupPostcode = responseBody.pickupPostcode;
    const deliveryPostcode = responseBody.deliveryPostcode;
    const vehicle = responseBody.vehicle.replace("_", " ");
    responseElement.textContent =
        `A delivery from ${pickupPostcode} to ${deliveryPostcode}
         using a ${vehicle} will cost you £${responseBody.price}.`
}

getPriceButton.onclick = fetchData;

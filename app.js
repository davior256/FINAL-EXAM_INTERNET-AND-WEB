let carType = document.getElementById("carType");
let fare = document.getElementById("fare");


carType.addEventListener("change", function() {
    fare.innerText = carType.value;
});


function orderRide() {

    let pickup = document.getElementById("pickup").value;
    let destination = document.getElementById("destination").value;
    let car = carType.options[carType.selectedIndex].text;

    if (pickup === "" || destination === "") {
        alert("Please fill all fields");
        return;
    }

    alert(
        "Ride Ordered Successfully!\n\n" +
        "Pickup: " + pickup +
        "\nDestination: " + destination +
        "\nRide Type: " + car +
        "\nFare: UGX " + fare.innerText
    );
}
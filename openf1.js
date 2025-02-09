var userInput;
function getDriverInfo(){
    userInput = document.getElementById("driverNumber").value;
    fetch(`https://api.openf1.org/v1/drivers?driver_number=${userInput}&session_key=9158`)
    .then(response => response.json())
    .then(jsonContent => console.log(jsonContent))
    .then(data => {console.log(data.full_name)});
}

function getDriverInfo(){
    fetch('https://api.openf1.org/v1/drivers?driver_number=1&session_key=9158')
    .then(response => response.json())
    .then(jsonContent => console.log(jsonContent));
}
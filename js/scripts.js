

$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    const food = $("#food").val();
    const movie = $("#movie").val();
    const season = $("#season").val();
    const number = $("#number").val();

    const favThings = [food, movie, season, number]
    alert(favThings);
    const newArray = [];
    newArray.push(favThings[1], favThings[0], favThings[2]);
    alert(newArray);

    $("#liOne").append(newArray[0]);
    $("#liTwo").append(newArray[1]);
    $("#liThree").append(newArray[2]);
  })
})
$(document).ready(function(){

  var source   = $("#people-template").html();
  var template = Handlebars.compile(source);
  var data = { people: [
    {firstname: "Steve", lastname: "Johnson", city: "London" },
    {firstname: "Lisa", lastname: "Carlsen", city: "New York" },
    {firstname: "Markus", lastname: "Meier", city: "Berlin" }
  ]};
  $("#content").html(template(data));

});

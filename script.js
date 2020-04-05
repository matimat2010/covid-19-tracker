
window.addEventListener("load", function() 
{
            


let dropdown = $('#state-dropdown');
const url = 'https://corona.lmao.ninja/states';



// dropdown.empty();
// dropdown.append('<option selected="true" disabled>Choose State/Province</option>');
// dropdown.prop('selectedIndex', 0);


function SortOptions(id) 
	{
    var prePrepend = "#";
    if (id.match("^#") == "#") prePrepend = "";
    $(prePrepend + id).html($(prePrepend + id + " option").sort(
        function (a, b) { return a.text == b.text ? 0 : a.text < b.text ? -1 : 1 })
    );
	}




// Populate dropdown with list of provinces
$.getJSON(url, function (data) 
	{
  $.each(data, function (key, entry) 
  		{
    dropdown.append($('<option></option>').attr('value', entry.index).text(entry.state));
 SortOptions("#state-dropdown");
 
 		}) 
	});  

            

            fetch("https://corona.lmao.ninja/states").then( function(response) {
               response.json().then( function(json) {
                const destination = document.getElementById("destination");
		//let index = 0;

		document.getElementById("stateform").addEventListener("submit",function(){
		// stateform.addEventListener("onClick", function(){
		var e = document.getElementById("state-dropdown");
        var user = e.options[e.selectedIndex].text;


       	

        index = json.findIndex(x => x.state === user);

//console.log(index);





       	if (json[index].state === user ) {
       		//console.log("almost!");
            


		destination.innerHTML = 
		`<h3>State: ${json[index].state}</h3>
		<h3>Cases: ${json[index].cases}</h3>
		<h3>Today's Cases: ${json[index].todayCases}</h3>
		<h3>Deaths: ${json[index].deaths}</h3>
		<h3>Today's Deaths: ${json[index].todayDeaths}</h3>
		<h3>Active: ${json[index].active}</h3>`;
		
                  







                  // console.log(json[index].state);
                  // console.log(user);






           }	       
 event.preventDefault();
        });
      });
    });


});

        

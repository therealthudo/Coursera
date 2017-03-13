// put your javascript code here
var category_template, species_template, single_template;

var current_category = animals_data.category[0];
var current_species = current_category.animals[0];

function showTemplate(template, data){
	var html    = template(data);
	$('#content').html(html);
}

$(document).ready(function(){

	var source   = $("#category_template").html();
	category_template = Handlebars.compile(source);
	
	source   = $("#species_template").html();
	species_template = Handlebars.compile(source);
	
	source   = $("#single_template").html();
	single_template = Handlebars.compile(source);
	
//	source   = $("#slideshow-template").html();
//	slideshow_template = Handlebars.compile(source);

	$("#category-tab").click(function () {
		showTemplate(category_template, animals_data);
		$(".nav-tabs .active").removeClass("active");
		$("#category-tab").addClass("active");
	
	
		$(".category-name").click(function (){
			var index = $(this).data("id");
			current_category = animals_data.category[index];
			showTemplate(species_template, current_category);
			
			$(".species-thumbnail").click(function (){
				var index = $(this).data("id");

				current_species = current_category.animals[index];
				showTemplate(single_template, current_species);
			});	
		});
	});

//clicking on the Species Tab shows all the species
	$("#species-tab").click(function () {
		showTemplate(species_template, current_category);
		$(".nav-tabs .active").removeClass("active");
		$("#species-tab").addClass("active");
	
		
		$(".species-thumbnail").click(function (){
			var index = $(this).data("id");
			current_species = current_category.animals[index];
			showTemplate(single_template, current_species);
		});	
	});

	$("#category-tab").click(); 
});



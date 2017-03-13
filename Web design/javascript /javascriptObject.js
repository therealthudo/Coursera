var image1Data = {
	title:"Image 1", 
	author:"Tuxyso"
};

image1Data.title

{
	name: "Jenny",
	id: "B4342:"
}

console.log(student.name);





{
	title: "here"
	author: "here"
	src:"here"
}

<script id="image-template"
type="text/x-handlebars-template">

<h1>{{title}}</h1>

<h3> class="author">
{{author}}
</h3>

<img src={{src}}/>


var soure =$("#image-template").html();

var template = Handlebars.compile(source);

var html = template(data);

$('#content').html(html);
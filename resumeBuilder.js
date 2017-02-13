// bio object - basic info
var bio = {
	"name" : "Macarena Dominguez",
	"role" : "Web Developer student",
	"contacts": {
	"email" : "Makapalacios18@gmail.com",
	"mobile" : "954-850-1010",
	"twitter" : "Ma-k",
	"location" : "Florida",
	"github" : "macapala",
},
	"welcomeMessage" : "Welcome to my personal resume!",
	"skills": [
	"HTML","CSS", "Python", "Photography"
	],
	"bioPic" : "image/me.jpg"

};

// bio function that displays info from the bio object
	bio.display = function (){

	// header info
	  var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
		$("#header").append(formattedBioPic);
		var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedwelcomeMsg);

}


		if(bio.skills.length > 0){

		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedskill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
		formattedskill=HTMLskills.replace("%data%",bio.skills[3]);
		$("#skills").append(formattedSkill);

	}


		//footer contact info


	  var formattedemail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedemail);
		var formattedgithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedgithub);
		var formattedmobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedmobile);
		var formattedlocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#footerContacts").append(formattedlocation);
	  var formattedtwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
		$("#footerContacts").append(formattedtwitter);


	bio.display();

	var education = {
	    "school": [
	        {
	            "name": "British Royal",
	            "Location": "Santiago, Chile",
	            "edu": "high school",
	            "Dates": "too many"
	        }
	    ],
	    "onlineCourses": [
	        {
	            "tittle": "photography",
	            "school": "bcc",
	            "dates": "2008"
	        },
	        {
	            "title": "Front-End Nanodegree",
	            "school": "Udacity",
	            "dates": "2017",
	            "url": "https://www.udacity.com"
	        }
	    ]
	};
	education.display = function(){

	 $("#education").append(HTMLschoolStart);

	for(school in education.schools){

      formattedSchoolName= HTMLschoolName.replace("%data%",education.schools[school].name);
	    $(".education-entry:last").append(formattedSchoolName);

	    formattedSchoolLocation= HTMLschoolLocation.replace("%data%",education.schools[school].location);
	    $(".education-entry:last").append(formattedSchoolLocation);

	    formattedEdu= HTMLschoolEdu.replace("%data%",education.schools[school].Edu);
	    (".education-entry:last").append(formattedEdu);

	    formattedSchoolDates= HTMLschoolDates.replace("%data%",education.schools[school].Dates);
	    $(".education-entry:last").append(formattedSchoolDates);

	}

	}


	    $(".education-entry:last").append(HTMLonlineClasses);

	       for(course in education.onlineCourses){

					 formattedOnlineTitle= HTMLonlineTitle.replace("%data%",education.onlineCourses[course].title);
		       $(".education-entry:last").append(formattedOnlineTitle);

		        formattedOnlineSchool= HTMLonlineSchool.replace("%data%",education.onlineCourses[course].school);
		        $(".education-entry:last").append(formattedOnlineSchool);

		        formattedOnlineDates= HTMLonlineDates.replace("%data%",education.onlineCourses[course].dates);
		        $(".education-entry:last").append(formattedOnlineDates);

		        formattedOnlineUrl= HTMLonlineURL.replace("%data%",education.onlineCourses[course].url);
		        $(".education-entry:last").append(formattedOnlineUrl);
	  }

	//calling education function
  education.display();

	//work object
	var work = {
	 	"Jobs" : [{
	 		"employer": "Golden Images",
	 		"Title" : "Sales Manager",
	 		"Dates" : "Feb 2004- June 2008",
			"description" : "In charge of sales."
	 	},
	 	{
	 		"employer": "DMI",
	 		"Title" : "Accounting Manager",
	 		"Dates" : "May 2008- Jan 2015",
	 		"description" : "In charge of the accounting departament"
	 	 }
	 ]
	}
	//work function
	work.display = function(){

	  for (job in work.jobs) {

		  	$("#workExperience").append(HTMLworkStart);

        var formattedEmployer= HTMLworkEmployer.replace("%data%", work.jobs[job].employer);

	      var formattedJobTitle= HTMLworkTitle.replace("%data%",work.jobs[job].title);

	      var formattedEmployerTitle = formattedEmployer + formattedJobTitle;

	      $(".work-entry:last").append(formattedEmployerTitle);

	      var formattedDates= HTMLworkDates.replace("%data%",work.jobs[job].datesWorked);
	      $(".work-entry:last").append(formattedDates);

	      var formattedLocation= HTMLworkLocation.replace("%data%", work.jobs[job].location);
	      $(".work-entry:last").append(formattedLocation);

	      var formattedDescription= HTMLworkDescription.replace("%data%", work.jobs[job].description);
	      $(".work-entry:last").append(formattedDescription);

	    };
	//callinng work function
	work.display();}


	//projects object

	 var projects = {
	 	"projects" : [{
	 		"title" : "Resume Project",
	 		"dates" : "January 2017",
	 		"descripton" : "The project requires students to use Javascript to build a resume. This project is my first attempt at using Javascript",
	    "images" : "image/me.jpg"
	 	}]

	};
	//project function
	projects.display = function(){
	  for(project in projects.projects){
	    $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%",projects.projects[project].title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%",projects.projects[project].dates);
	    $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%",projects.projects[project].description);
			$(".project-entry:last").append(formattedDescription);

	        if(projects.projects[project].images.length>0){
	          for (image in projects.projects[project].images){
	              var formattedImage = HTMLprojectImage.replace("%data%",projects.projects[project].images[image]);
	                $(".project-entry:last").append(formattedImage);

	            }

	         }

		  	}

	  };

	//calling project function
	projects.display();

	//function to internationalize names
	function inName(name){
	  name=name.trim().split(" ");
	  console.log(name);
	  name[1] = name[1].toUpperCase();
	  name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

	    return name[0] + " " + name[1];
	}

	$('#main').append(internationalizeButton);

	//want to see a map?
	//$("#mapDiv").append(googleMap);

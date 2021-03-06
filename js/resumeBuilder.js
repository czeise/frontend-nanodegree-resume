var bio = {
  name: 'Craig M. Zeise',
  role: 'Software Engineer',
  contacts: {
    // mobile is required so I'm leaving it in, but using a generic number
    mobile: '555-555-5555',
    email: 'craig.zeise@gmail.com',
    github: 'czeise',
    location: 'Minneapolis, MN'
  },
  welcomeMessage: "Welcome to my Online Resume, built as part of Udacity's " +
    'Front-End Web Developer Nanodegree. This site was built using ' +
    'Javascript functions to inject data from Javascript objects into an ' +
    'HTML page. This is my first experience with Javascript and jQuery.',
  skills: [
    'Software Engineering',
    'Object Oriented Design',
    'Ruby',
    'HTML',
    'CSS',
    'Javascript',
    'Git'
  ],
  biopic: 'images/gravatar.jpeg',
  displayContacts: function(selector) {
    'use strict';
    var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(/%data%/gi, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(/%data%/gi, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

    $(selector).append(formattedMobile);
    $(selector).append(formattedEmail);
    $(selector).append(formattedGithub);
    $(selector).append(formattedLocation);
  },
  display: function() {
    'use strict';
    var formattedName = HTMLheaderName.replace('%data%', bio.name);
    var formattedRole = HTMLheaderRole.replace('%data%', bio.role);

    $('#header').prepend(formattedRole);
    $('#header').prepend(formattedName);

    var formattedPic = HTMLbioPic.replace('%data%', bio.biopic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

    bio.displayContacts('#topContacts');

    $('#header').append(formattedPic);
    $('#header').append(formattedWelcomeMsg);

    if (bio.skills.length > 0) {
      $('#header').append(HTMLskillsStart);

      bio.skills.forEach(function(skill) {
        var formattedSkill = HTMLskills.replace('%data%', skill);
        $('#skills').append(formattedSkill);
      });
    }
  }
};

bio.display();

var work = {
  jobs: [{
    employer: 'Medicom Health Interactive',
    title: 'Quality Assurance Manager',
    location: 'Minneapolis, MN',
    dates: 'November 2014 - Present',
    description: 'As MHI grows, my QA Manager role has expanded. I am ' +
      'responsible for QA policies and direction along with influencing ' +
      'our content, creative, and development processes to maximize ' +
      'efficiency while maintaining a high level of quality. I define our ' +
      'test automation strategy and oversee its implementation. ' +
      'Additionally, I manage our QA staff and testing schedule, and ' +
      'oversee our launch process.',
    url: 'http://www.medicomhealth.com'
  }, {
    employer: 'Medicom Health Interactive',
    title: 'Technical Designer & Quality Assurance Manager',
    location: 'Minneapolis, MN',
    dates: 'November 2011 - November 2014',
    description: 'I collaborate with the content team, the creative team ' +
      'and the developers to develop a technical design to be implemented ' +
      'by the developers.  This part of my job is like that of a Software ' +
      'Architect for small scale projects.  The other part of my job is ' +
      'managing our QA process.  With these two roles I find myself ' +
      'involved with the development process from start to finish and ' +
      'responsible for both the technical specifications of the program ' +
      "and verifying that they've been met.",
    url: 'http://www.medicomhealth.com'
  }, {
    employer: 'General Dynamics',
    title: 'Senior Software Engineer',
    location: 'Bloomington, MN',
    dates: 'May 2006 - November 2011',
    description: 'I worked on the Multi-INT Analysis and Archive System ' +
      '(MAAS).  This system is a suite of software that takes the plethora ' +
      'of data collected by unmanned aerial vehicles and turns it into ' +
      'useful multimedia reports that can be utilized by the decision ' +
      'makers of the US military.  I was primarily responsible for adding ' +
      'features and fixing issues with the program.  Additionally I ' +
      'provided technical support to our user base.',
    url: 'http://www.generaldynamics.com/'
  }],
  display: function() {
    'use strict';
    work.jobs.forEach(function(job) {
      $('#workExperience').append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace('%data%', job.employer);
      formattedEmployer = formattedEmployer.replace('#', job.url);
      var formattedTitle = HTMLworkTitle.replace('%data%', job.title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;

      $('.work-entry:last').append(formattedEmployerTitle);

      var formattedWorkDates = HTMLworkDates.replace('%data%', job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace('%data%',
        job.location);

      $('.work-entry:last').append(formattedWorkDates);
      $('.work-entry:last').append(formattedWorkLocation);

      var formattedWorkDescription = HTMLworkDescription.replace(
        '%data%', job.description);

      $('.work-entry:last').append(formattedWorkDescription);
    });
  }
};

work.display();

var projects = {
  projects: [{
    title: 'Survivr',
    dates: 'March 2016',
    description: 'The Survivr project simulates a "Survivor" like game ' +
      'with many contestants, tribes, and challenges. I used test driven ' +
      'development to ensure that my project met all of the project ' +
      'requirements. The colorization of the terminal text is handled by a ' +
      '"Colorizr" gem that I created using metaprogramming to add ' +
      'methods to the <code>String</code> class that change the displayed ' +
      'color of text in the terminal. This project required a solid ' +
      "understanding of object oriented design to complete. I used Ruby's " +
      '"duck typing" ability to easily handle objects from different ' +
      'classes that behaved the same at times.',
    images: ['images/survivr.png']
  }, {
    title: 'Portfolio Site',
    dates: 'October 2016',
    description: 'Provided a design mockup as a PDF-file, I replicated the ' +
      'design in HTML and CSS. I developed a responsive website that ' +
      'displayed images, descriptions and links to each of the Front-End Web ' +
      'Developer Nanodegree projects.',
    images: ['images/portfolio.png']
  }],
  display: function() {
    'use strict';
    projects.projects.forEach(function(project) {
      $('#projects').append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace('%data%', project.title);
      var formattedDates = HTMLprojectDates.replace('%data%', project.dates);
      var formattedDescription = HTMLprojectDescription.replace(
        '%data%', project.description);

      $('.project-entry:last').append(formattedTitle);
      $('.project-entry:last').append(formattedDates);
      $('.project-entry:last').append(formattedDescription);

      project.images.forEach(function(image) {
        var formattedImage = HTMLprojectImage.replace('%data%',
          image);

        $('.project-entry:last').append(formattedImage);
      });
    });
  }
};

projects.display();

var education = {
  schools: [{
    name: 'University of Minnesota',
    location: 'Twin Cities, MN',
    degree: 'M.S.',
    majors: ['Computer Science'],
    dates: '2009',
    url: 'https://www.cs.umn.edu/academics/graduate/ms-mcs'
  }, {
    name: 'Buena Vista University',
    location: 'Storm Lake, IA',
    degree: 'B.S.',
    majors: ['Computer Science', 'Mathematics'],
    dates: '2003',
    url: 'http://www.bvu.edu/academics/science/computer-science/'
  }],
  onlineCourses: [{
    title: 'Front-End Web Developer Nanodegree',
    school: 'Udacity',
    dates: '2017',
    url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
  }, {
    title: 'Ruby Programming Nanodegree',
    school: 'Udacity',
    dates: '2016',
    url: 'https://www.udacity.com/'
  }],
  display: function() {
    'use strict';
    education.schools.forEach(function(school) {
      $('#education').append(HTMLschoolStart);

      var formattedName = HTMLschoolName.replace('%data%', school.name);
      formattedName = formattedName.replace('#', school.url);
      var formattedDegree = HTMLschoolDegree.replace('%data%', school.degree);
      var formattedGraduationYear = HTMLschoolDates.replace('%data%',
        school.dates);
      var formattedLocation = HTMLschoolLocation.replace('%data%',
        school.location);

      $('.education-entry:last').append(formattedName + formattedDegree);
      $('.education-entry:last').append(formattedGraduationYear);
      $('.education-entry:last').append(formattedLocation);

      if (school.majors.length > 1) {
        // Correct plurality for multiple majors
        var htmlSchoolMajors = HTMLschoolMajor.replace('Major',
          'Majors');
        var formattedMajors = htmlSchoolMajors.replace('%data%', school
          .majors.join(', '));
        $('.education-entry:last').append(formattedMajors);
      } else if (school.majors.length > 0) {
        var formattedMajor = HTMLschoolMajor.replace('%data%', school.majors);
        $('.education-entry:last').append(formattedMajor);
      }
    });

    $('#education').append(HTMLonlineClasses);

    education.onlineCourses.forEach(function(course) {
      $('#education').append(HTMLschoolStart);

      var formattedTitle = HTMLonlineTitle.replace('%data%', course.title);
      formattedTitle = formattedTitle.replace('#', course.url);
      var formattedSchool = HTMLonlineSchool.replace('%data%', course.school);
      var formattedDates = HTMLonlineDates.replace('%data%', course.dates);

      // Not using the formattedURL, I think it looks better to have the url
      // attached to the title
      // var formattedURL = HTMLonlineURL.replace('%data%', course.url);

      $('.education-entry:last').append(formattedTitle +
        formattedSchool);
      $('.education-entry:last').append(formattedDates);
      // $('.education-entry:last').append(formattedURL);
    });
  }
};

education.display();

$('#mapDiv').append(googleMap);

bio.displayContacts('#footerContacts');

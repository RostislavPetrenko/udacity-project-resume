const bio = {
    name: 'Richard Kalehoff',
    role: 'Senior Content Developer',
    contacts: {
        mobile: '954-123-4567',
        email: 'richardkalehoff@gmail.com',
        github: 'richardkalehoff',
        twitter: '@richardkalehoff',
        location: 'Mountain View',
    },
    welcomeMessage: 'Howdy',
    skills: ['HTML', 'CSS', 'JavaScript'],
    biopic: '../images/fry.jpg',
    display: function () {
        $('#header').prepend(HTMLheaderRole.replace('%data%', bio.role));
        $('#header').prepend(HTMLheaderName.replace('%data%', bio.name));
        $('#header').append(HTMLbioPic.replace('%data%', bio.biopic));
        $('#header').append(HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage));

        $('#topContacts, #footerContacts').append(HTMLmobile.replace('%data%', bio.contacts.mobile));
        $('#topContacts, #footerContacts').append(HTMLemail.replace('%data%', bio.contacts.email));
        $('#topContacts, #footerContacts').append(HTMLgithub.replace('%data%', bio.contacts.github));
        $('#topContacts, #footerContacts').append(HTMLtwitter.replace('%data%', bio.contacts.twitter));
        $('#topContacts, #footerContacts').append(HTMLlocation.replace('%data%', bio.contacts.location));


        if (bio.skills) {
            $('#header').append(HTMLskillsStart);
            $('#skills').append(bio.skills.map(skill => HTMLskills.replace('%data%', skill)));
        }
    },
};

const education = {
    schools: [
        {
            name: 'Belhaven University',
            location: 'Jackson, MS',
            degree: 'Bachelor of Science',
            majors: ['Computer Science'],
            dates: '2003-2007',
            url: 'http://www.belhaven.edu/',
        },
        {
            name: 'University of Florida',
            location: 'Gainesville, FL',
            degree: 'Master of Arts',
            majors: ['Mass Communications'],
            dates: '2013-2014',
            url: 'http://www.ufl.edu/'
        },
    ],
    onlineCourses: [
        {
            title: 'Front-End Web Developer Nanodegree',
            school: 'Udacity',
            dates: '2016-2017',
            url: 'https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        }
    ],
    display: function () {
        education.schools.forEach(function(school) {
            var formattedEdu = HTMLschoolName.replace('%data%', school.name) + HTMLschoolDegree.replace('%data%', school.degree);
            var formattedLocation = HTMLschoolLocation.replace('%data%', school.location);
            var formattedDate = HTMLschoolDates.replace('%data%', school.dates);
            var formattedMajors = HTMLschoolMajor.replace('%data%', school.majors.join(', '));

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedEdu);
            $('.education-entry:last').append(formattedLocation);
            $('.education-entry:last').append(formattedDate);
            $('.education-entry:last').append(formattedMajors);
        });

        $('#education').append(HTMLonlineClasses);
        education.onlineCourses.forEach(function(onlineSchool) {
            var formattedOnline = HTMLonlineTitle.replace('%data%', onlineSchool.title) + HTMLonlineSchool.replace('%data%', onlineSchool.school);
            var onlineDate = HTMLonlineDates.replace('%data%', onlineSchool.dates);
            var onlineUrl = HTMLonlineURL.replace('%data%', onlineSchool.url);

            $('#education').append(HTMLschoolStart);
            $('.education-entry:last').append(formattedOnline);
            $('.education-entry:last').append(onlineDate);
            $('.education-entry:last').append(onlineUrl);
        });
    },
};

const work = {
    jobs: [
        {
            employer: 'EE International',
            title: 'Senior Web Engineer',
            location: 'Fort Lauderdale, FL',
            dates: '2008-2015',
            description: 'Cupcake ipsum dolor. Sit amet candy canes chupa chups apple pie tart oat cake lollipop. Croissant tiramisu cupcake.'
        },
        {
            employer: 'Udacity',
            title: 'Course Developer',
            location: 'Mountain View, CA',
            dates: '2015-2016',
            description: 'Powder soufflé sesame snaps cookie cheesecake macaroon muffin marzipan. Dessert gummies sesame snaps muffin donut cupcake jelly sweet lollipop. Pastry jelly-o gingerbread cake marzipan donut cake cheesecake. Sesame snaps soufflé bonbon pie.'
        },
        {
            employer: 'Udacity',
            title: 'Senior Content Developer',
            location: 'Mountain View, CA',
            dates: '2016-present',
            description: 'Gummies tootsie roll candy canes donut. Tart tiramisu pie apple pie. Biscuit pie candy cotton candy sweet sugar plum bear claw. Fruitcake candy dessert marshmallow gummi bears.'
        },
    ],
    display: function () {
        for (var job in work.jobs) {
            var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
            var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
            var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
            var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
            var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);

            $('#workExperience').append(HTMLworkStart);
            $('.work-entry:last').append(formattedEmployer + formattedTitle);
            $('.work-entry:last').append(formattedLocation);
            $('.work-entry:last').append(formattedDates);
            $('.work-entry:last').append(formattedDescription);
        }
    },
};

const projects = {
    projects: [
        {
            title: 'Sample Project 1',
            dates: '2009-2009',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
            images: ['../images/197x148.gif']
        },
        {
            title: '2nd Project',
            dates: '2013-2014',
            description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            images: ['../images/197x148.gif']
        }
    ],
    display: function () {
        for (var project in projects.projects) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedDescription);

            if (projects.projects[project].images.length > 0) {
                for (var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
                    $('.project-entry:last').append(formattedImage);
                }
            }
        }
    },
};

bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);

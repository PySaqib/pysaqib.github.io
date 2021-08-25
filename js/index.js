// Stores all the classnames for all specific routes

let routes = {};

routes['HOME'] = '.home-panel';
routes['PROJECTS'] = '.projects-panel';
routes['TESTIMONIALS'] = '.testimonial-panel';
routes['CONTACT'] = '.contact-panel';

let totalTestimonials = 0;

// Entry point for the script
$(document).ready(()=>{
    
    // Setting trigger for nav-link
    $('.nav-link').on('click', (e)=> {
        setView(e.target.innerHTML);
    });

    // Finding out how many testimonials have been added
    totalTestimonials = document.querySelectorAll('.testimonial-authors').length;


    // Setting trigger for testimonial buttons
    $('.testimonial-back').on('click', (e)=> {
        
        let currentActiveTestimonial = parseInt(e.target.getAttribute('data-active'));

        if (currentActiveTestimonial > 0) {
            currentActiveTestimonial--;
        }
        else {
            currentActiveTestimonial = totalTestimonials - 1;
        }

        showTestimonial(currentActiveTestimonial);

    });
    
    $('.testimonial-front').on('click', (e)=> {
        
        let currentActiveTestimonial = parseInt(e.target.getAttribute('data-active'));

        currentActiveTestimonial++;

        if (currentActiveTestimonial == totalTestimonials) {
            currentActiveTestimonial = 0;
        }
        
        showTestimonial(currentActiveTestimonial);

        
    });


    // Loading projects
    loadProjects();
    

});

// Toggles screen on the right hand side
const setView = (view)=> {

    
    for (key in routes) {
        $(routes[key]).addClass('hide');
    }

    $(routes[view]).removeClass('hide');

}

const showTestimonial = (id)=> {
    
    let allTestimonials = document.querySelectorAll('.testimonial-authors');

    allTestimonials.forEach( testimonial => {
        testimonial.classList.remove('hide');
    });

    allTestimonials.forEach( testimonial => {
        
        if (parseInt(testimonial.getAttribute('data-id')) != parseInt(id)) {
            testimonial.classList.add('hide');
        }

    });

    $('.testimonial-front').attr('data-active', parseInt(id));
    $('.testimonial-back').attr('data-active', parseInt(id));


}


const loadProjects = ()=> {


    let projects = [

        
        
        {
            name: "Rezeptrechner: Recipe Dashboard",
            link: null,
        },
        {
            name: "Rezeptrechner: Nutri Score Calculator",
            link: null,
        },
        {
            name: "Space Invaders",
            link: null,
        },
        {
            name: "Cognni AI: Dynamic Quiz",
            link: null,
        },
        {
            name: "Training Wheels Urdu",
            link: null,
        },
        {
            name: "Plasma Access",
            link: null,
        },
        {
            name: "Monopoly",
            link: null,
        },
        {
            name: "Getters & Setters Generator",
            link: null,
        },
        {
            name: "Sorting Visualization",
            link: null,
        },
        {
            name: "Fake Tweet Generator",
            link: null,
        },
        {
            name: "Urdu Tokenizer",
            link: null,
        },
        {
            name: "Jamya",
            link: null,
        },
        {
            name: "Roman Urdu Dataset",
            link: null,
        },
        {
            name: "Tetris",
            link: null,
        },
        {
            name: "Inter Quartile Range Grader",
            link: null,
        },
        {
            name: "Section Swap Portal",
            link: null,
        },
        {
            name: "Chess",
            link: null,
        }

    ]


    projects.forEach( project => {

        $('.project-list').append(
            `
            <p class="project-title center">
                <a href="https://github.com/PySaqib" target="_blank">${project.name}</a>
            </p>
            `
        );

    })


}
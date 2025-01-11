/* particles.js */
particlesJS('particles-js', {
    particles: {
        number: {
            value: 100,          // Increased number of particles
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: '#0ef'
        },
        shape: {
            type: 'circle'
        },
        opacity: {
            value: 0.5,          // Increased opacity
            random: true,        // Added random opacity
            anim: {
                enable: true,    // Added opacity animation
                speed: 1,
                opacity_min: 0.3,
                sync: false
            }
        },
        size: {
            value: 4,            // Slightly larger particles
            random: true,
            anim: {
                enable: true,    // Added size animation
                speed: 3,
                size_min: 2,
                sync: false
            }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: '#0ef',
            opacity: 0.35,       // More visible lines
            width: 1.5          // Slightly thicker lines
        },
        move: {
            enable: true,
            speed: 3,           // Slightly faster movement
            direction: 'none',
            random: true,       // Added random movement
            straight: false,
            out_mode: 'bounce', // Changed to bounce to keep particles in view
            bounce: true,
            attract: {
                enable: true,   // Added attraction between particles
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: {
                enable: true,
                mode: 'grab'
            },
            onclick: {
                enable: true,
                mode: 'push'
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 180,   // Increased interaction distance
                line_linked: {
                    opacity: 0.8 // More visible interaction lines
                }
            },
            push: {
                particles_nb: 6  // Add more particles on click
            }
        }
    },
    retina_detect: true
});
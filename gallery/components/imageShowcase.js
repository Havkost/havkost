const userDisplayTemplate = document.createElement('template');
userDisplayTemplate.innerHTML = `
    <style>

        .image-showcase {

            display: grid;
            grid-template: "title image" 50%
                           "description image" 50%;
            grid-template-columns: 50%;
        }

        .image-title {

            grid-area: title;
        }

        .image-description {

            grid-area: description;
        }

        img {

            grid-area: image;
            max-width: 80%;
            margin: 0 auto;
            object-fit: cover;

            box-shadow: 0 0px 0 rgba(10, 50, 30, 0.5);
            -o-box-shadow: 0 0px 0 rgba(10, 50, 30, 0.5);
            -moz-box-shadow: 0 0px 0 rgba(10, 50, 30, 0.5);
            -webkit-box-shadow: 0 0px 0 rgba(10, 50, 30, 0.5);
            -ms-box-shadow: 0 0px 0 rgba(10, 50, 30, 0.5);

            transition-duration: 500ms;
            transition-property: transform, box-shadow;
        }

        img:hover {

            transform: scale(1.1);

            box-shadow: -1em 1em 10px rgba(10, 60, 50, 0.5);
            -o-box-shadow: -1em 1em 10px rgba(10, 60, 50, 0.5);
            -moz-box-shadow: -1em 1em 10px rgba(10, 60, 50, 0.5);
            -webkit-box-shadow: -1em 1em 10px rgba(10, 60, 50, 0.5);
            -ms-box-shadow: -1em 1em 15px rgba(10, 60, 50, 0.5);
        }

        @media only screen and (max-width: 1200px) {

            .image-showcase {
        
                grid-template: "title"
                               "description"
                               "image";
                grid-template-columns: 50%;
            }

            img {
                margin: 1em auto;
            }
        }

        @media only screen and (min-width: 1200px) and (max-width: 1600px) {
        
            .image-showcase {
        
                grid-template: "title image"
                               "description image";
                grid-template-columns: 50%;
            }
        }
        
        @media only screen and (min-width: 1600px) {
        
            .image-showcase {
        
                grid-template: "title image"
                               "description image";
                grid-template-columns: 50%;
            }
        }
    </style>
    <div class="image-showcase">
        <h2 class="image-title heading"><slot name="image-title" /></h2>
        <p class="image-description"><slot name="image-description" /></p>
        <img>
    </div>
`

class UserDisplay extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(userDisplayTemplate.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src = this.getAttribute('image');
    }
}

window.customElements.define('image-showcase', UserDisplay);
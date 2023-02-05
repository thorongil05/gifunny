# GifunnyFrontend

This application has been developed using Angular.

## Architecture

The project is divided in 4 modules:

- core: it contains all the core components of the application, such as the main menu.
- home-view: it contains all the components belonging to the main view.
- model: the classes that describes the logical structure of the date are stored here.
- services: this module is composed by the services (e.g. the service used to interact with the backend). 

In order to build a responsive and user-friendly interface, this application exploits Bootstrap and Angular-Material.

## How to use

### With Docker

1. Build the Dockerfile
2. Run the docker image with the following setting:

    - host port: 80

3. Go to http://127.0.0.1:80/, you should see a search bar in the middle of the screen.

### Without Docker

1. Install npm
2. Install Angular CLI with the following instruction <code>npm install -g @angular/cli</code>
3. Run <code>ng serve</code>

## Next steps

- Add authentication service
- Add authentication module
- Add the ordering feature
- Add the favourites
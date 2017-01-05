#User Story

As the system, I want the ability to serve up static files to the web browser so that we can deploy a fully functioning website.

##Acceptance Criteria

- All JavaScript, and CSS files are served up dynamically using Express
- The text "This is from Angular" is rendered in the browser without the {{ and }} characters displayed
- The text is no longer using the browser default font
- The node_modules/angular folder is exposed as a static folder and aliased as /angular
- The node_modules/bootstrap folder is exposed as a static folder and aliased as `**/bootstrap`. Note: Exposing files in the `node_modules**` folder is bad practice, and is only done here for demonstration purposes.
- A `<script>` tag reference to the angular.js file is added to the index.html file
- A `<link>` tag stylesheet reference to the bootstrap.css file is added to the index.html file

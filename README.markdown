#Nav.js

Nav.js allows you to make elements of your page browsable by using the arrow keys.
For the moment, it supports the left and right keys.

## Requirements

Nav.js is a lightweight script written in standard JS so it has no requirements.

## Setup

### Basic

Include the nav.js script into your file:

    <script type="text/javascript" src="nav.js"></script>

Use the init method by passing the browsable elements in an array:

    var a = document.getElementsByTagName('div');
    nav.init(a);

Then implement the callbacks of nav.js to make anything you want with the selected node:

    nav.callbacks.selected = function(node) {
        node.className = "selected";
    }

    nav.callbacks.unselected = function(node) {
        node.className = "";
    }

### Callbacks

The differents callbacks available:

**selected** Called when a node is selected and pass it

    nav.callbacks.selected = function(node) {
    }

**unselected** Called when a node is unselected and pass it

    nav.callbacks.unselected = function(node) {
    }

**pressed** Called when any key is pressed and pass the key code

    nav.callbacks.pressed = function(key) {
    }

### Utilities

There is also several useful methods in Nav.js:

**select(index)** Selects the node with the given index

**unselect(index)** Unselects the node with the given index 

**selected()** Returns the selected node 

**id()** Returns the selected node id



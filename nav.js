//     Nav.js 0.1
//     (c) 2011 Guillaume Gaubert
//     Nav.js may be freely distributed under the MIT license.
//     For details and documentation:
//     http://widgetulous/navjs


var nav = {
    
    version : 0.1,
    
    nodes : [],
    selectid: -1,
    page: 1,
    
    // Stores all the passed nodes
    init: function(elements) {
        for(var i = 0; i < elements.length; i++) {
            if(elements[i]) {
                this.nodes.push(elements[i]);
            }
        }
        document.onkeyup = this.typed;
    },
    
    // Called when the user pressed a key
    typed: function(ev) {
        ev = ev || window.event;
        if(ev.keyCode) {
            keycode = ev.keyCode;
        }
        else {
            keycode = ev.which;
        }
        
        // Store the current selected node
        var now = nav.selectid;

        if(keycode == 38) {
            // Top
            if(nav.selectid > 0) {
                nav.selectid--;
            }
        } else if(keycode == 39) {
            // Right
            // Update page
            nav.page++;
            // So next page
            nav.callbacks.next(this.page);
        } else if(keycode == 40) {
            // Bottom
            if(nav.selectid < nav.nodes.length-1) {
                nav.selectid++;
            }
        } else if(keycode == 37) {
            // Left
            if(nav.page > 0) {
                // Update page
                nav.page--;
                // So previous page
                nav.callbacks.previous(nav.page);
            }
        }
        
        var _id = nav.selectid;
        
        // Let's unselect the node
        nav.unselect(now);
        // Let's the select the node
        nav.select(_id);
        
        // Callback for the pressed
        nav.callbacks.pressed(keycode);
    },
    
    // Selects the node with the given id
    select: function(index) {
        if(this.nodes[index]) {
            // Unselect the currently selected node
            this.unselect(this.selectid);
            // Select the new one
            this.selectid = index;
            var el = this.nodes[index];
            // Let's call the callback
            this.callbacks.selected(el);
        }
    },
    
    // Unselects the node with the given id
    unselect: function(index) {
        if(this.nodes[index]) {
            var el = this.nodes[index];
            // Make a call to the unselect callback
            this.callbacks.unselected(el);
        }
    },
    
    // Unselects the selected node and reset the select id
    reset: function() {
        // Unselect the selected node
        this.unselect(this.selectid);
        this.selectid = -1;
    },
    
    // Returns the current selected node
    selected: function() {
        if(this.nodes[this.selectid]) {
            var el = this.nodes[this.selectid];
            return el;
        } else {
            return undefined;
        }
    },
    
    // Returns the current selected id
    id: function() {
        return this.selectid;
    },


    // Callbacks
    callbacks: {
        // method called when a node has been selected
        selected: function(node) {
        },
        
        // method called when a node has been unselected
        unselected: function(node) {
        },
        
        // method called when the user pressed a random key
        pressed: function(keycode) {
        },
        
        // Method called when the user pressed the right key
        next: function(page) {  
        },
        
        // Method called when the user pressed the left key
        previous: function(page) {  
        },
    },
};
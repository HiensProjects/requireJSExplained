define(function() {
    'use strict';

    function List(listId) {
        this.tasks = [];
        this.listId = listId;
    }
    List.prototype = {};
    List.prototype.constructor = List;

    return List;
});
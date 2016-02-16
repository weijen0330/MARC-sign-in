/**
 * Created by Wei-Jen on 1/28/16.
 */
$(function() {
    'use strict';

    /* var mongodb = require('mongodb');

    var MongoClient = mongodb.MongoClient;

    var url = ''; */

    $("h1").fadeIn(1500, function() {
        $("h1").fadeOut(1500, function() {
            $("p").fadeIn(1500);
            $("#name").fadeIn(1500);
            $("button").fadeIn(1500);
        });
    });

    $(document).keypress(function(evt) {
       if (evt.which == 13) {
           var name = $("input").val();
           $("ol").append("<li>" + name + "</li>");
           $("input").val("");
           alert('You pressed enter!');
       }
    });

    /* MongoClient.connect(url, function (err, db) {
        if (err) {
            console.log('Unable to connect to the mongoDB server. Error:', err);
        } else {
            //HURRAY!! We are connected. :)
            console.log('Connection established to', url);


            db.close();
        }
    }) */
});

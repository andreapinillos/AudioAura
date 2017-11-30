# AudioAura

A spotify based web applicaiton that pulls music from spotify based on the color of your mood and tracks it.

## Description

This application demonstrates a simple full stack application with a front end implemented with HTML/CSS/Javascript and elements from the Bootstrap framework and the backend implemented with Node.js and Express.

The user may click on a color based on their mood, then they click the button "Pick a Mood and load a playlist" below the music bar. A spotify playist will appear and will load a playlist based on the mood the user selected. 

## Technical Information

We used Sequelize through the MySql Database to collect and store the number of clicks on each color/mood, which can be found at https://audioaura.herokuapp.com/api/moods in a JSON file. This information will be useful for rendering various charts, for example, a stacked graph which can show the common moods/colors picked based on the weekday and/or time of day.

## Deployment

The deployment of the Audio Aura application can be found [here](https://audioaura.herokuapp.com/).
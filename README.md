# sphero-voice
A little sphero+voice experiment I did to show my kids school

## HOW TO INSTALL

Make sure that you have node installed, then:

   `npm install` to install all dependencies

## HOW TO RUN

Once you have installed it, follow the instructions on the (Cylon-Sphero Repo)[https://github.com/hybridgroup/cylon-sphero] to discover your sphero from your computer.

Then run:

   `node app`

This will launch a localhost:3000 express all. It will also connect to your sphero.

- Then just launch localhost:3000
- Click the CLICK AND SPEAK button
- Allow access to the Microphone
- Have fun

## WHAT COMMANDS WORK

I only had a few hours to build this, so it only understands:

- Colors: `var colors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'white'];`
- Move: `var controls = ['forward', 'left', 'right'];`

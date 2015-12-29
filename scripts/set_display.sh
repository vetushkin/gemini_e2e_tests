#!/bin/sh

export DISPLAY=:1

Xvfb $DISPLAY -ac -screen 0 1280x1024x8 &
sleep 1
#xvfb-run webdriver-manager start > /dev/null 2>&1 & 

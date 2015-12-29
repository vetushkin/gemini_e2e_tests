#!/bin/sh

if [ -n "$pids" ]; then
	processes="$(ps --format command --no-headers -ww --pid $pids)"
	else
	echo "Not running"
fi
xdpyinfo -display :0 >/dev/null 2>&1 && echo "In use" || echo "Free"

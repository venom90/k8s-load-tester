# Kubernetes Load Tester

A simple node.js application to test the load on Kubernetes pod by blocking the CPU.

## Load Testing Factor

Simple increase the the value of variable desiredLoadFactor in server.js, you can also set `FACTOR` env variable to set desiredLoadFactor.

## API

1. `/health` or `/healthz`
Show the health of the running container

2. `/blockcpu`
External API to block the CPU. The application doesn't block CPU automatically. Request this API to block the CPU and load test. Set `loadfactor` query parameter to change the desiredLoadFactor.

## How it works?
The program uses the JavaScript while loop to block the CPU. You can test the load on particular pod by running this container as a sidecar.


## Docker Container

`docker build .` to build the container.
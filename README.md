# RedPitaya-Node-Express
Communication and control of the Red Pitaya board using Node.js which is a back-end JavaScript runtime environment.

This project controls the LED display on the Red Pitaya as an illustration and test of this method.

## Requisites

This project requires the installation of node.js and express on the Red Pitaya.

I used the following commands to install them:

    wget https://nodejs.org/dist/v17.9.1/node-v17.9.1-linux-armv7l.tar.gz
    tar -xvf node-v17.9.1-linux-armv7l.tar.gz
    cd node-v17.9.1-linux-armv7l 
    cp -R * /usr/local/
    npm install express

## Usage

    Clone the repository
    
    Copy the file redpitaya_node_express.js to any folder of the Red Pitaya board
    
On a Red Pitaya terminal cd to that folder and execute the command: 

    node redpitaya_node_express.js
    
If node and express are installed correctly you will get: 

    App Server is listening on port 3000

## Test

On a client terminal type

    curl http://IP:3000/leds/8
    
where IP is the IP address of the Red Pitaya board
you should see the response: 

    Leds changed to 200
    
The number 200 should display in binary mode on the LED display of the Red Pitaya
If you type 

    curl http://169.254.219.195:3000/leds/
    
you should get 

    Leds status is 0x000000c8
    
    
## License

[MIT](LICENSE)

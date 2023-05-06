const express   = require('express');
const execSync = require('child_process').execSync;
const app    = express();
const cors   = require('cors');

app.use(cors({origin:"*",}))

app.get('/leds/:id', function (req, res) {
    const output = execSync('monitor 0x40000030 '+req.params.id, { encoding: 'utf-8' });
    console.log('LEDs changed to '+ req.params.id);
    res.send('LEDs changed to '+ req.params.id);
});

app.get('/leds/', function (req, res) {
    const output = execSync('monitor 0x40000030', { encoding: 'utf-8' });
    console.log('LEDs status is ' + output);
    res.send('LEDs status is ' + output);
});

app.listen(3000, () => {
    console.log('App Server is listening on port 3000');
});

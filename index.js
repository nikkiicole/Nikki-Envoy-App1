const express = require('express');
const { middleware, errorMiddleware } = require('@envoy/envoy-integrations-sdk');
const app = express();
app.use(middleware());

app.post('/hello-options', (req, res) => {
    res.send([
      {
        label: 'Hello',
        value: 'Hello',
      },
      {
        label: 'Hola',
        value: 'Hola',
      },
      {
        label: 'Aloha',
        value: 'Aloha',
      },
      {
        label: 'Ciao',
        value: 'Ciao',
      },
      {
        label: 'Gutten Tag',
        value: 'Gutten Tag',
      },
      {
        label: 'Salaam',
        value: 'Salaam',
      },
      {
        label: 'Ola',
        value: 'Ola',
      },
      {
        label: 'Halo',
        value: 'Halo',
      },
      {
        label: 'Jambo',
        value: 'Jambo',
      },
      {
        label: 'Merhaba',
        value: 'Merhaba',
      },
      {
        label: 'Szia',
        value: 'Szia',
      },
    ]);
  });

  app.post('/goodbye-options', (req, res) => {
    res.send([
      {
        label: 'Goodbye',
        value: 'Goodbye',
      },
      {
        label: 'Adios',
        value: 'Adios',
      },
      {
        label: 'Aloha',
        value: 'Aloha',
      },
      {
        label: 'Arrivederci',
        value: 'Arrivederci',
      },
      {
        label: 'Au Revoir',
        value: 'Au Revoir',
      },
      {
        label: 'Adeus',
        value: 'Adeus',
      },
      {
        label: 'Auf Wiedersehen',
        value: 'Auf Wiedersehen',
      },
      {
        label: 'Sayonara',
        value: 'Sayonara',
      },
      {
        label: 'Do svidaniya',
        value: 'Do svidaniya',
      },
      {
        label: 'Annyeong',
        value: 'Annyeong',
      },
      {
        label: 'Slan',
        value: 'Slan',
      },
      {
        label: 'Tot ziens',
        value: 'Tot ziens',
      },
    ]);
  });

  app.post('/visitor-sign-in', async (req, res) => {
    const envoy = req.envoy; // our middleware adds an "envoy" object to req.
    const job = envoy.job;
    const hello = envoy.meta.config.HELLO;
    const visitor = envoy.payload;
    const visitorName = visitor.attributes['full-name'];
    
    const message = `${hello} ${visitorName}!`; // our custom greeting
    await job.attach({ label: 'Hello', value: message }); // show in the Envoy dashboard.
    
    res.send({ hello });
  });

  app.post('/visitor-sign-out', async (req, res) => {
    const envoy = req.envoy; // our middleware adds an "envoy" object to req.
    const job = envoy.job;
    const goodbye = envoy.meta.config.GOODBYE;
    const visitor = envoy.payload;
    const visitorName = visitor.attributes['full-name'];
  
    const message = `${goodbye} ${visitorName}!`;
    await job.attach({ label: 'Goodbye', value: message });
    
    res.send({ goodbye });
  });

  app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })

  app.post('/goodbye-options', (req, res) => {
    console.log('goodbye-options');
    //...
  })

  app.use(errorMiddleware());

const listener = app.listen(process.env.PORT || 0, () => {
  console.log(`Listening on port ${listener.address().port}`);
});

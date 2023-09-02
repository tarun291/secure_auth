# Demo: How to Use

First install required dependencies with `npm install`. Then the demo works as follows:

## Step 1 - Start Server

We start a sever that by default only accepts requests authenticated by client certificates

```
npm start
```
 

## Step 2 - Test Valid Client (Alice)

**Alice** has a valid certificate issued by server, so she can talk to the server:

```

node ./client/valid.js

Hello Alice, your certificate was issued by localhost!
```

## Step 3 - Test Invalid Client (Bob)

**Bob** has a self-issued certificate, which is rejected by the server:

```

node ./client/invalid.js

Sorry Bob, certificates from Bob are not welcome here.
```
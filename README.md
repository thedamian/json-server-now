# json-server-now
Getting json-server to work on now.sh

#Getting started.
``` 
git clone https://github.com/thedamian/json-server-now.git

cd json-server-now

Change the db.json file to meet your initial requirements

npm install 

node db.js <-- to run locatlly.

Want to run it on a server (FOR FREE?) 

then...

npm install now (To get now.sh working)

now (and blam your backend is up and running)
``` 
#Need some "Fake" informatin in your people's table to get real looking users in your system?

Locally:

install json-server:
npm i -g json-server (or on your mac: sudo npm i -g json-server )

Want to run it on now.sh? Simple. 
Just change the package.json's script section to look like this:

"scripts": {
        "start": "json-server faker.js"
    }

then type:
now

(Blamo your backend is up and running in the cloud with 100 amazingly real looking fake users ready for your app or front end)

ENJOY!    
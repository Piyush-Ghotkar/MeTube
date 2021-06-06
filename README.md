
# MeTube 

Metube is a YouTube clone developed in react.js

#### Tech Stack:
    1. react.js
    2. material ui icons
    3. react-router
    4. YouTube Data Api v3 (https://developers.google.com/youtube/v3/docs)

#### Features:
    1. Home page video listing
    2. Category based videos updated dynamically (ex: music,news,sports)
    3. Dynamic Current trending videos
    4. Video player
    5. Suggesting related videos dynamically

#### Steps to Run Metube locally:
    1. Clone repository
    2. Run command "npm install"
    3. While dependencies get install, login to your Google Cloud Platfrom 
       (if you don't have one, create one. It's free!!)
    4. Search for "YouTube Data API V3" in GCP's products & resources search bar
    5. Start YouTube Data API by clicking on Enable button
    6. Now, go to the Credentials tab and create api key
       (api key will look like this "AIzaSyDnxYcaevd58WJeQym0NXAuTQxbO-Fyopo")
    7. Copy this key & replace it in .env.apiKey file which is present in root directory of project
       (ex. REACT_APP_API_KEY= "YourApiKey")
    8. Finally, run command "npm start" 

#### Check out MeTube at https://metube00.netlify.app/

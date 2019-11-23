# React Blog Webapp
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

This document will help set up local environment to run this project locally.

## Requirements
1. [Install NodeJS](#install-nodejs)
2. [Clone this repository](#clone-this-repository)
3. [Install Dependencies](#install-dependencies)
4. [Run ReactBlogApp](#run-reactblogapp)


### Install NodeJS
From your terminal/command line, run the following command to check if NodeJS is installed in your system:
node -v
You should see a version number, and the version number should be at least 8.9.0.

If you have NodeJS installed, check if npm is installed by running the following command:
npm -v

You should see a version number, and the version number should be at least 5.5.1.

If you dont see a version number, then grab the LTS installer from [NodeJS.org](https://nodejs.org/en/) to install NodeJS. If it asks you to also install NPM, say yes!
<hr>

### Clone this repository
 Clone this repository using your git client!

The repository URL is 'https://github.com/jalpaashara/ReactBlogApp.git'. If you've never done this before, you want to go into your terminal or git bash and type:
git clone https://github.com/jalpaashara/ReactBlogApp.git

This will clone the repository into your current working directory.

<hr>

### Install Dependencies
Once the repository is cloned, enter that directory in your terminal, and run
#### `npm install`

<hr>


### Run ReactBlogApp
Before we can run the application, you will need an API key for [Google News API](https://newsapi.org/) that is used in this application. Click on the Get API Key button to get your API key.

Once you have the API key, create a file with the name ".env" in the root directory (not in src folder) and type in the following:
REACT_APP_NEWS_API_KEY=Your_Google_News_Api_Key

And finally to run the application type in the below command in your terminal:
#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

<hr>

//URL -->GIT 
// INSTRUCTOR-->github.com/namastedev/namaste-react

// IGNITING OUR APP-->


NPM--> manages packeges -->it's a package manager
(NPM website)
It is a standard repository for all the packages.

//CONFIGURING NPM-->
-->npm init
-->package name-->
-->version
-->description-->
-->entry point
-->test command-->:jest
-->git repository-->
-->keywords-->
-->author-->
-->licence


what is package.JSON?
PACKAGE.JSON is a configuration for NPM.
It will keep the approx version of packages.
why do we need this PACKAGE.JSON?

what is package-lock-JSON?
It will keep track the exact version. 

package==dependency

bundlers-->parcel,webpack,veat/wheat
what is the job of a bundler?
-->bundler basically bundles our app,It packages our app properly and shift to production.

PACKAGE-1:
parcel

command to add dependency--> npm install -D parcel

types of dependencies:
2types:
1-> dev dependencies --> used to develop an application
2-> normal dependencies --> used in production also

read about--> tilde(~) and caret(^)---->very important interview question

//INSTALLING NPM IN OUT APP
-->npm install -D parcel   //-D --> dev dependency

what is parcel:

TRANSITIVE DEPENDENCIES:
parcel is a dependency for us.
but parcel is  itself as a project, and it has lots of dependencies in it, and those dependencies has their own dependencies likewise...
this is known as transitive dependencies....


//GIT IGNITE:
we can put the files into gitignore, which we dont want to add them into git repository,

//IGNITING OUR APP:
we will use parcel to ignite our app
-->npx parcel index.html

//just like npm we similarly have npx
--> npm means we are calling the command of npm
-->npx means executing

// we can get react into our app using npm
-->it's not a good way to get the react into our app using cdn links why, because we have to keep changing the url of the links for updated versions.
--> npm command for install react as a dependency into our app is:
       -->npm install react (or) npm i react
       -->npm install react-dom (or) npm i react-dom

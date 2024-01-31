# Namaste React1

# NPM will take care of the versions of the Packages
--Package.json is a configuration of NPM
--Most important package in our project is Bundler.....Bundler packages ur app so that u can shift it to production
--npm install parcel
--There are two dependencies we can install one is dev dependencies another one is normal dependencies
--its better to put caret instead of tilda(~) because ...caret only updates minor versions and that is good but caret updates
--major versions and that is not good because websites gets crashed it it upgreades from 2 to 3.
--package-lock.json keeps a track of every minor update and locks it ....whereas package.json will be the same even after upgrading...
--let say it upgraded to 2.12.0 but it will be 2.11.0 only even having caret as well. that means package.json is having approx version whereas package-lock.json is having exact version.
--Transitive dependencies--we have install parcel but we have got lot of mudules install in our app because parcel is having some depedencies and that dependenies is having some other dependencies that is why lot of modules got installed.
--evry libraries is having their own package.json and parcel is also having their own package .json
--we have to push our package.json and package_lock.json in the git hub repositry because it is essential to keep a track of versions and all the dependencies and with package.json and package_lock.json we can regenerate our node modules....with npm install
--whatever u can regenerate don't put it on git
--npx parcel index.html for igniting our app---npx means executing the packag
--it better to install react in node mudules with the command npm install react instead copying from cdn to html file
--npm i react-dom----now we no longer need cdn
--now write import React from "react" as previously it was coming from cdn that is why there was no need for importing it!!
--now we hae to type module for the javascript file for the script type


# Parcel
-Dev Build
-Local server
-HMR =Hot Module Replacement (whatever we change in our code it changes immediately)
-Parcel uses File watching algorithm written in c++ 
-caching-Faster Builds
-Image optimization
-Minification
-Bundling
-compress
-consistent Hashing
-code splitting
-Differential Bundling- support older browsers
-Daignostic
-Error Handling
-Https
-Tree shaking- remove unused code
-Different Dev and prod bundles

-----------------------------------------------------------------------------
# Lecture-3
--Previously we were using npx run index.html.....but now we have added scripts in package.json and made start: parcel index.html
now we can directly use npm run start and same goes for build can refer package.json file....npm start=npm run start but npm run build!= npm build.

# Lecture-4

Props ifs passing argument to a function
--when you have to pass a data dynamically to an argument ...you pass in as a prop

--configue driven UI
-if u want different colors for Bangalore and different color for Pune then it needs to be in configue and it will derive it from
here.

--Rendering
Always try to give id or Key in map because if we forget to provide key in map and some card got added then react won't know which card actually got added and it will render all the card again but if we provided the key then it will render only that card that actually got added and the key should be unique

---index as key is an anti-pattern ...never use it ...learn the atrtical in react

--not using keys(not acceptable) <<<<<index as key<<<<  unique Id(best Practise)

# Namaste food 


/*

*Header
*--logo
*--Nav Items
*Body
*--search
*--RestaurantContainer
*---------------RestuarantCard
*-----------------img
*------------------Name of Res,Star Rating,cuisine,delivery time
*Footer
*--Copyright
*--links
*--Address
*--contact

*/

# Two types of import and export

-Default Export and Import

export default component;
import component from "path";

-Named Export and Import

export const component;
import component from {path};

# Props

when you have to dynamically paasin data to a component ...you pass in as a prop


# React Hooks
(Normal Javascript utility function)
-useState()---whenever state variable changes react re-renders the component
-useeffect()



# Monolithic & microservices

monlothic is not supported nowadays because evrything is in  one place such as backend call, Authentication, database connectivity,
and becomes really cumbersome on the other hand microservices is something where we we use  evrything in different places such as backend call, database connectivity, authentication. At the end evrything gets connected at the main place such as domain name!!

# React Rendering

1. Generally not used
Loads->API->Render

2. This is generally used
Loads->Render->API->Render (Better Approcah,Better ux)
React has best rendering mechanism


# whenever state variable updates, react triggers and re-renders the component.

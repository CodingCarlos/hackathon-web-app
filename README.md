# hackathon-web-app
A basic boilerplate for HTML5 web-apps with Angular 1.5 and Material Design Lite *(a.k.a mdl)*.

 - **[MIT License](http://choosealicense.com/licenses/mit)**

# How to use it?
Easy! Just download the code (or fork it or whatever you want) and use it like a base. To create new modules, copy and paste the available and change everything to fit your needs. 
 - If you want a **new view inside the main layout**, create it from **"home"**. 
 - If you want a **new version of layout**, use **"search"**. 
 - If you want something totally different, **without the main layout**, use **"section"** module.

## Well, I need more things...
Yeah, I guess... I'm thinking in **modals** (as a directive), in **landing** and **login** (as new views) and in some kind of **profile** (a twitter-like one). I also have in mind some **forms** (to both add and edit content), **statistics** (boards, graphics and so on) and a **media viewer** (for photo and video).

# Shall I use it?
Right now, I'm active working on this, so this is not a finished version. As is, master branch shall work, but can contain unfinished code, and less functions than expected. So, if you have to start from zero a complex app, maybe this is not for you. If you want to build a web app *fast* and with *no worry about* the main *UI and app architecture*, this is for you.

# So, what is the roadmap?
 - I would like to finish a stable version, with most of functions that a web app use to need.
 - Add some use examples to this documentation.
 - Refactor all the CSS to Sass or Less (I'm not sure what of two) to make it more easy to customize.
 - Add a local storage layer to fake api calls (very usefull in a hackathon).
 - Use the local storage layer as cache of real api calls.
 - Create some scripts to configure the code (as easy as possible) to change the app name and select the modules to use.

#### And are you going to do all that?
Probably no. I will finish the stable version, add the examples and maybe refactor the CSS to some SASS or LESS. The other things are more a wishlist than a roadmap, but shall be the next steps.

# Ok, this seems good, I want to help you
Cool!! Feel free to send me your commits , to report errors, ask for features or whatever you think can make this better.

### How to make edits
1. [Fork](https://github.com/CodingCarlos/hackathon-web-app/fork) then clone `git clone git@github.com:your-username/hackathon-web-app.git` hackathon-web-app repository
2. Create a new branch in your personally forked repo, with a name similar to your edits, such as `fix-sidebar-whatever`
3. Make your edits inside your new branch
4. Commit them and push them back to your personal github fork
5. Make a new [Pull Request](https://github.com/CodingCarlos/hackathon-web-app/compare/) on the hackathon-web-app repo. Point your branch to the `master` hackathon-web-app branch and submit.

I will do my best to review and accept the commit as soon as possible.

---
layout: post
title: "Exploring Node.js Web Frameworks and Coffee-Script"
category: 
tags: [node, javascript, coffeescript, coffee-script, flatiron, framework, ironpad]
---
{% include JB/setup %}

I've read [Trevor Burnham](http://trevorburnham.com/)'s [book](http://pragprog.com/book/tbcoffee/coffeescript) on [coffee-script](http://coffeescript.org/) which I really enjoyed, and I've been itching at doing more with it. Well, node.js provides a great opportunity to write a significant amount of Javascript to do interesting things, and since the web is near & dear to me I figured it was time for me to take a serious shot at learning a web framework. Now, to be honest, I've been looking into this for a while but found it difficult to stick to something. Therefore, the hope is that writing about it will commit me to producing a fairly complete toy site rather than my random dabblings.


Javascript isn't my favorite language but coffee really helps hide the warts -- it's like putting makeup on a really fun pig. Although the pig is fundamentally the same, a pig with makeup has to more fun, right? ***Bonus***: I avoid [this drama](https://github.com/twitter/bootstrap/issues/3057). Anyways, theoretically, I can use any node framework with coffee-script so that doesn't narrow the set. From what I can tell, the framework you use is, as with so much in this field, is dependent on the solution you're trying to build and some frameworks are far more appropriate for a problem domain than others. What follows is a brief list of what I've seen out there in the burgeoning node ecosystem and what their sweetspots are purported to be.

* [expressjs](http://expressjs.com/) - connect wrapper, good router, solid sinatra analog, basis of many of the below frameworks
* [socketstream](http://www.socketstream.org/) - real-time game/RIAs
* [geddy](http://geddyjs.org/) - rails approach to a node webapp
* [brunch](http://brunch.io/) - express-ish approach but with an opinionated set of various independently maintained node modules. coffee is the intended dialect.
* [zappa](http://zappajs.org/) - similar to brunch but with some homegrown approaches rather than 'curating' other node packages 
* [batman](http://batmanjs.org/) - again, similar to brunch in it's coffee as dialect, but with emphasis on binding values to the view
* [flatiron](http://flatironjs.org/) - newish framework that distinguishes itself from the pack by being browser/CLI agnostic and comprised of a la-cart tech stack built from the ground-up. What is interesting about flatiron is Union -- flatiron's middleware solution which is distinct from but analog to the ubiquitous connect middleware common in nearly all other frameworks.
* [meteor](http://www.meteor.com/) - brand, brand new; but a radical departure from the standard client/server delegation of responsibilities. I'll keep an eye on this one, but will see what can be done about auth & sessions.


Given the above, I've toyed with at express, brunch, and zappa in reverse chronological order. I've even built part of the solution in express before deciding on trying something changing gears. But now I want to commit; and I'm going to build out my concept in flatiron. I've no particualr "this > that" type of reasoning, but it seems that all the modules that comprise flatiron are philosphically aligned and the versions should play nicely with each other.


So there it is -- flatiron is the webframework, but what are the goals?

* Further explore node.js
* Practice coffee-script
* Learn a new web framework
* Build a toy project to completion of the original concept scope
* Authentication support browserid
* Use a persistence solution I've not tried before. While working in express, I used mongodb & mongoose, but I'm now considering redis & nohm
* Integrate with ~~detail omitted pending possible directional change~~


More to come soon, I hope.
---
title: Intercepting JS function calls
Date: 2022-03-07 20:00:00
categories: [web,javascript,tips n tricks]
tags: [web,javascript,tips n tricks]
---

# The Issue
There are certain situations where you would want to 'intercept' a function call to a javascript function to inspect the arguments and do something before
the actual function is run. I got into this situation a few weeks ago when I was trying to modify a web game named territorial.io, and wanted a way to
replace the drawing of the background with a custom image (thus practically making a texture pack for the game, while the game does not officially support
modding).

When I went into inspect elements, I saw that the entire game ran within a canvas (which is pretty standard) and there was one huge minified/uglified
javascript script within the HTML body. This script, when beautified, had no proper variable naming, was severe spaghetti code, had no comments, and was
several tens of thousands of lines long. That's when I realized there was no way I was going to simply modify/rewrite the source code in the way I wanted.

# A solution: Function interception
After getting stressed by trying to understand ten thousand lines of spaghetti code, I suddenly realized that to draw to a canvas, there is no way
to avoid having to call the standard javascript canvas API, thus: the code MUST call context.drawImage somewhere in the code. After doing a simple ctrl + f
I found some reference to that API function. However, now I needed a way to swap out the data URI containing the original 
texture, with my own custom data URI containing my custom texture, when the function gets called.

# How to intercept a function call
Let's look at a slightly less realistic yet more simplified situation. Let's say you want to 'hack' console.log in a way that it sends the message to a 3rd
party system, before logging the message, so that we could look at the console via a server outside of the browser. To do that, we need to know when the
user called the console log function, and what argument was used. And then we should send that argument to our 3rd party (let's say we could use a function
`send(data)` for that), and then finally continue with console.log

The solution I came up with has the following steps
- Save a reference to the original console.log function
- Overwrite console.log with a new function in which we:
  - Send the arguments to the 3rd party
  - Call the original console.log which we stored a reference to

In code, this would look like this:
```js
// Save a reference to the original console.log function
const old_console_log_reference = console.log;

// Overwrite console.log with a new function
console.log = (...args) => {
  // Send the arguments to the 3rd party
  send(...args);

  // Call the original console.log which we stored a reference to
  old_console_log_reference(...args);
}
```

# Back to territorial.io
In our earlier example of territorial.io, we wanted to modify the context.drawImage function so that it draws a custom image instead of the original texture,
To do this, we can use the same technique we used in the console.log example, but modify it so it draws our custom texture instead of some specific
texture.

The solution i ended up with was the following: 
```js
// texture to replace
const img_to_replace = "someDataURIOfTextureToReplace";

// texture to replace it with
const custom_img = "customTextureDateURI";

// Save reference
context.old_draw_image = context.drawImage

// Overwrite
context.drawImage = (image, x, y) => {
  if (!(image.toDataURL() == img_background))
    context.old_draw_image(image, x, y);
  else
    context.old_draw_image(custom_img, x, y);
};
```

And the final result could only be described as 'glorious'

<img src="https://media.discordapp.net/attachments/942866008933290034/954824633104859176/unknown.png?width=872&height=491">

# Conclusion
To end this article, hopefully, you've learned something about this technique, and you can find a use for it in the future, just be careful with this
techniques because if used too much, it could turn your codebase into severe spaghetti code, and have side effects that are very hard to debug.

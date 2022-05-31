---
title: Javascript function caching
Date: 2022-31-05 10:00:00
categories: [web,javascript,tips n tricks]
tags: [web,javascript,tips n tricks]
---

# Why use caching
If you want to up the preformance of your web application, and stop wasting resources for unneeded actions, you might want to look at caching the results of your javascript functions, especially in the case of functions that make API calls. Depending on what exactly you want, there are multiple ways to handle this.

However, each way has its own up and downsides, thats why I wanted to compile these techniques in an article about caching the results of your javascript functions.

Lets say you have some function `sumOf1Bil` that calculates the sum of the numbers 0 trough 1 billion, that function might be implemented as something like this:

```javascript
const sumOf1Bil = () => {
	let accumulator = 0

	for (let i = 1; i <= 1_000_000_000; i++)
		accumulator += i

	return accumulator
}
```

Here I simply used a for loop to count from 1 to 1 billion, and add all those numbers to a an accumulator one by one. On my browser this takes roughly 4 seconds to calculate, which in some cases could be acceptable, but would be very performance heavy when put in a loop.

If we know that a function is going to be executed multiple times, and will have a big impact on performance, then its a good idea to consider caching the result of the function.

# Short term caching
Caching can be implemented multiple ways, first we will take a look at short term caching, this will remember the result of the function when called multiple times, but as soon as you leave the site or refresh the tab, the cache will be lost as it was cached in the global javascript state.

We will implement this caching by having a key value dictionary (AKA a good old javascript object) living in the window state, then we will write a `cachify` function that takes a normal function and returns a new function that uses caching.

The function should also get a key which identifies what piece of cache belongs to
the result of this function.

```javascript
// Global cache
window.cache = {};

// Function that takes a function and returns
// a function with the exact same behavior, except making
// use of caching
const cachify = (key, oldFunc) => {
    return () => {
        // Retrieve the cached result if possible
        if (key in window.cache)
            return window.cache[key]

        // Execute the function, and cache the result
        else {
            result = oldFunc()
            window.cache[key] = result
            return result
        }
    }
}
```

As you can see, cachify takes the old function together with a key, and returns a new function, which is basically a wrapper around `oldFunc`. When called, it will peek into the global cache dictionary and return the cached result if its in there.

If its not found, it will execute `oldFunc`, and use that result to put into the cache, and then return the result. This means the behaviour of the `oldFunc` will stay the exact same while whilst caching the result and thus being way quicker.

Lets implement this new cachify function on our old `sumOf1Bil` function:

```javascript
const sumOf1Bil = cachify('sumOf1Bil', () => {
	let accumulator = 0

	for (let i = 1; i <= 1_000_000_000; i++)
		accumulator += i

	return accumulator
});
```

Now when we call `sumOf1Bil()` it will at first take the same 4 seconds to run (the result isnt put in cache yet), but when we run it again, it will be able to retrieve the result out of cache meaning it finishes running instantly.

# Using a hash function to eliminate the key string
Right now the cachify function needs a key string as first argument to store the result in cache. This is unneeded code, and can be pretty dangerous in big code bases when you accidently create conflicting keynames.

There is a way to eliminate the usage of these keys, by converting the `oldFunc` to a string, and running a hash function on it. A hash function is a function that takes a parameter (like a string), and based on that value returns a seemingly random integer, this integer will always be the same if the input string is the same.

Javascript does not really have a good buildt in way of hashing a string, however we can ~~steal~~ copy/paste a very simple hashing algorythm from stack overflow [here](https://stackoverflow.com/a/65239086/11804669).

In javascript you can convert a function to a string by putting that function into the `String()` constructor. When passing that string into the hashing function, we can get an integer which we can then use as the key into the cache dictionary.

```javascript
// Global cache
window.cache = {}

// https://stackoverflow.com/a/65239086/11804669
const stringHashCode = str => {
  let hash = 0
  for (let i = 0; i < str.length; ++i)
    hash = Math.imul(31, hash) + str.charCodeAt(i)

  return hash | 0
}

// Function that takes a function and returns
// a function with the exact same behavior, except making
// use of caching
const cachify = oldFunc => {

    // Generate the cache key
    const key = stringHashCode(String(oldFunc))

    return () => {
        // Retrieve the cached result if possible
        if (key in window.cache)
            return window.cache[key]

        // Execute the function, and cache the result
        else {
            result = oldFunc()
            window.cache[key] = result
            return result
        }
    }
}
```

Simply by adding that one line, we can eliminate the use for the key parameter. Now we can simply use `cachify` like this:

```javascript
const sumOf1Bil = cachify(() => {
	let accumulator = 0

	for (let i = 1; i <= 1_000_000_000; i++)
		accumulator += i

	return accumulator
});
```

This will have the exact same behaviour as before, but with less chance of key conflicts.

# What about function arguments
One problem that could arraise when working with the `cachify` function is that it assumes that the function will **always** return the exact same value, however often a function returns a different value depending on what arguments were given.

a simple naive solution to this issue is concatinating the function arguments to the cache key, seperated by commas, this could be implemented like this:

```javascript
// Function that takes a function and returns
// a function with the exact same behavior, except making
// use of caching
const cachify = oldFunc => {

    // Generate the cache key
    let key = stringHashCode(String(oldFunc))

    return (...arguments) => {
        key += arguments.join()

        // Retrieve the cached result if possible
        if (key in window.cache)
            return window.cache[key]

        // Execute the function, and cache the result
        else {
            result = oldFunc()
            window.cache[key] = result
            return result
        }
    }
}
```

Now, just like that, our cachify function works with different arguments, and we can change our `sumOf1Bil` function to accept an argument `n` to count to n instead of 1 billion, and it would still be compatible with the cachify function.

```javascript
const sumOf1Bil = cachify((n) => {
	let accumulator = 0

	for (let i = 1; i <= n; i++)
		accumulator += i

	return accumulator
});
```

This solution will not always work tho, because sometimes different arguments can result into the same key, causing a key conflict, and the function will return a wrong result. For example, `f(12,34)` will result into '12,34' but `f('12,34')` will result into the same string. Be very cautious of this because if you get into this situation it will be **very** hard to debug.

# Long term caching
Another possible problem with our current `cachify` function is that it clears the entire cache as soon as you exit the webpage or refresh, this can be avoided using localstorage, which will stay forever, or at least until the user explicitly chooses to clear the local storage of the website.

localstorage can be read and written to by javascript, using the functions `localstorage.getItem(key)` and `localstorage.setItem(key, value)`. To implement this functionality in our cachify function, you might want to do something like this:

```javascript
// Function that takes a function and returns
// a function with the exact same behavior, except making
// use of caching
const cachify = oldFunc => {

    // Generate the cache key
    let key = stringHashCode(String(oldFunc))

    return (...arguments) => {
        key += arguments.join()

        // Retrieve the cached result if possible
        if (key in window.cache)
            return JSON.parse(localstorage.getItem(key)).value

        // Execute the function, and cache the result
        else {
            result = oldFunc()
            localstorage.setItem(key, { value: result })
            return result
        }
    }
}
```

# Conclusion
I hope you could get some value out of this article, and most importantly learned about my techniques for handling front-end caching. Its most important that you understand how each method works, and when what method is most relevant.
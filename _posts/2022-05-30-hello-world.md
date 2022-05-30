---
title: My new portfolio/blogging site
Date: 2022-30-05 13:00:00
categories: [portfolio]
tags: [portfolio,web]
---

# Hello World
Hello world and welcome to my new portfolio and blogging website!

This is the first blog post on my new and improved devblog. this website is going to be used to document my programming carreer, my thoughts, and will be used as my new portfolio website

Before i started with this project, I was working on a different portfolio/blogging site using VueJS, However I was not really happy with the design and the mobile compatibility, and overall it was a pain in the ass to use and maintain

## Jekyll
Due to that I decided to checkout Jekyll, a static site generator made in ruby. This let me use a pre existing jekyll template, instead of designing and creating everything from scratch.

My first impressions of jekyll were pretty bad due to me having trouble setting up ruby and its package manager (bundle) on windows, but after switching over to WSL ubuntu, i finally got it working!

Once I got it working it was really easy and nice to work with. The blog posts are all written using simple markdown files and the config of the site is all inside of a single _config.yml file that looks a bit like this:

```yaml
theme: jekyll-theme-chirpy
baseurl: ''
lang: en
prefer_datetime_locale:
timezone: Europe/Amsterdam
title: Luc de Wit
tagline: Portfolio & Blog
description: >-
  A minimal, responsive, and powerful Jekyll theme for presenting professional writing.

url: 'https://justlucdewit.github.io'
github:
  username: justlucdewit

twitter:
  username: lucdewit8

social:
  name: Luc de Wit
  email: luc.dewit@hotmail.nl
  links:
    - https://twitter.com/lucdewit8
    - https://github.com/justlucdewit

theme_mode:   # [light|dark]
img_cdn:
avatar: https://pbs.twimg.com/profile_images/1531245587903008770/qhyPOkkq_400x400.jpg

toc: true
```

## Now what
Now that I have got this blogging site up and running, my next goal is to change this template so that it also supports my portfolio stuff like my projects, my resume, and a nice introductory homepage

In the meanwhile I will also work a lot on my other projects like RMS (a CMS focussed on webshops that i am working on) and ideas for nice blog posts
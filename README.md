# Project: Feed Reader Testing

* [Introductions](#introductions)
* [Dependencies](#dependencies)

## Introductions

Project introduction

The purpose of this project is to write the required test suites with Jasmine for a web-based application that reads RSS feeds. 

Tests include:
* a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty
* a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty
* a test that ensures the menu element is hidden by default
* a test that ensures the menu changes visibility when the menu icon is clicked
* a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container
* a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes

How to load/run the application:

* Download or clone the repro from https://github.com/henryyeh802/frontend-nanodegree-feedreader.git
* Load the index.html (from the downloaded/cloned repro) on to the browser to load/run the application
* All tests should pass when the application loaded

## Dependencies

List of the dependencies/Resources referenced:

* The required project assets are forked from [udacity/frontend-nanodegree-feedreader](https://github.com/udacity/frontend-nanodegree-feedreader)
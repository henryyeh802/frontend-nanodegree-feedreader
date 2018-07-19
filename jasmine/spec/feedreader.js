/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        // Make sure that the allFeeds variable has been defined and it's not empty
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it('URLs are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
         });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it('names are defined', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
         });         
    });

    /* This is a test suite that testing the basic menu functionality.
    */
    describe('The menu', function() {
        /* A test that ensures the menu element is
         * hidden by default.
         */
         it('menu is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('menu toggle when clicked', function() {
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });
    });

    /* This is a test suite that verifying the loadFeed functionality.
    */
    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
         });

         it('at least one entry within the feed container', function(done) {
            expect($('.entry').length).not.toBe(0);
            done();
         });
    });

    /* This is a test suite that verifying the content of feeds.
    */
    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */

         let feedContentsPre = '';
         let feedContentsNew = '';

         beforeEach(function(done){
            loadFeed(0, function() {
                feedContentsPre = $('.feed')[0].innerText;
                done();
            });
         });

         beforeEach(function(done){
            loadFeed(1, function() {
                feedContentsNew = $('.feed')[0].innerText;
                done();
            });            
         });

         it('content changes when a new feed is loaded', function(done) {
            expect(feedContentsPre).toBeDefined();
            expect(feedContentsNew).toBeDefined();
            expect(feedContentsNew).not.toBe(feedContentsPre);
            done();
         });
    });
}());

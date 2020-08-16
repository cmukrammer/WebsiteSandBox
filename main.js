// element argument can be a selector string
//   for an individual element
var msnry;

imagesLoaded(document.querySelectorAll('.grid'), function() {
    msnry = new Masonry( '.grid', {
        itemSelector: '.grid-item',
        // use element for option
        columnWidth: '.grid-sizer',
        gutter: 10,
        percentPosition: true,
        resize: true
    });
})
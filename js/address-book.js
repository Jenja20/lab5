/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/

$(function() {
    sortObjArray(Employees.entries, "last");
    $(".sort-ui .btn").click(sortBy);

    
    $('.sort-ui .btn').popover({
        
        content: function() {
            return 'Click to Resort by ' + $(this).html();
        },

        container: 'body',
        trigger: 'hover',
        placement: 'bottom'
    });
});

/* Extra function that gets used when the user presses the
"Sort By" button. And categorizes based off of the button
*/

function sortBy(categories) {
    var sortIt = $(this).attr("data-sortby");   
    sortObjArray(Employees.entries, sortIt);    
    
    $(".btn.active").removeClass("active");
    $(this).addClass("active");
}


/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/

function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });

    render(Employees.entries); 
} //sortObjArray()

/* render()
    Takes a parameter that gets represented into an array of address book 
    ojbects and later gets passed with the html element to be written
    and creates the entries of the people in the address book.

    entries: are the entries from the employees javascript
*/

function render(entries){
    var template = $(".template");
    var address = $(".address-book");

    address.empty();

    /*loops through the entries */
    $(entries).each(function(){
        var newEntry = template.clone();

        /* Replaces the information on the section with
        fresh new entry, adding in the information*/
        newEntry.find(".first").html(this.first);
        newEntry.find(".last").html(this.last);
        newEntry.find(".title").html(this.title);
        newEntry.find(".dept").html(this.dept);
        newEntry.find('.pic').attr({
            src: this.pic,
            alt: 'Picture of ' + this.first + " " + this.last
        });
        
        newEntry.removeClass("template");
        address.append(newEntry);

    });
}

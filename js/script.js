
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
    var streetS = $('#street').val();
    var cityS = $('#city').val();
    var address = streetS + ', ' + cityS;
    $greeting.text('So, you want live at ' + address + '?');

    var streetviewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600x400&location=' + address + '&key=AIzaSyCxmP0cfe7xyWh_nvd7B_QzBeHq6x3Ixt0';
    $body.append('<img class="bgimg" src="' + streetviewUrl + '">');
    // YOUR CODE GOES HERE!

    return false;
};

$('#form-container').submit(loadData);

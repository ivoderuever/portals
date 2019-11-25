function generatePoral(location) {
    if(!('HTMLPortalElement' in window)) {
        alert('sorry your browser does not suport portals');
        window.location.href = "https://deruever.nl";
    }
    
    const portal = document.createElement('portal');
    portal.src = location;
    document.body.append(portal);
}

function randomColor() {
    return "#000000".replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
    });
}

function backgroundColor() {
    var bgColor = randomColor();

    $('body').css('background-color', bgColor);        
}
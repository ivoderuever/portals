function generatePoral(location) {
    if(!('HTMLPortalElement' in window)) {
    }
    
    const portal = document.createElement('portal');
    portal.src = location;
    document.body.append(portal);
}
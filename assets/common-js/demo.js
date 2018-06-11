jQuery('.parazoom.start').parazoom({
    tilt: true,
    text: true,
    customCursorIcon: 'img/maximize.svg',
    customCursorSize: '100px',
    overflow: 'visible',
    onHover: function(e){
        jQuery('.backdrop').addClass('active');
    },
    onMove: function(e){
        console.log(e);
    },
    onLeave: function(e){
        console.log(e);
        jQuery('.backdrop').removeClass('active');
    },
    onClick: function(e){
        console.log(e);
    }
});
jQuery('.parazoom.default').parazoom();

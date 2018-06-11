jQuery('.parazoom.start').parazoom({
    tilt: true,
    customCursorIcon: 'img/maximize.svg',
    customCursorSize: '100px',
    overflow: 'visible',
    onHover: function(){
        console.log('hover');
    },
    onMove: function(){
        console.log('move');
    },
    onLeave: function(){
        console.log('leave');
    },
    onClick: function(e){
        console.log(e);
    }
});
jQuery('.parazoom.default').parazoom();

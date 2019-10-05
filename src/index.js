window.onload=function(){
    console.log('loaded');


    // limit clicks 
    let bombs = 30;
    
    // hit ship 
    $('#water td').on('click', function() {
        $(this).addClass("hit");
    })




    $('#restart').on('click', function (){
        console.log('restarted')
    })

}
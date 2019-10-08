window.onload=function(){
    console.log('loaded');

    // limit clicks 
    let bombs = 30;
    
    // hit ship 
    if (bombs >= 1){
        $('#water td').on('click', function() {
            $(this).addClass("hit");
            console.log($('td').index(this)); // index of the box
            bombs--;
            $('h2').text(`No. Bombs remaining: ${bombs}`)
        })
    } else {
        bombs = 0;
    }

    // miss ship 
    $('#water td').on('click', function(){
        $(this).addClass("miss");
    })


    $('#restart').on('click', function (){
        console.log('restarted');
        $('#water td').addClass('restart');
    })

}
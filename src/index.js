window.onload=function(){
    console.log('loaded');

    // limit clicks 
    let bombs = 30;
    
    let hits = 0;
    let misses = 0;
    // hit ship 
    if (bombs >= 1){
        $('#water td').on('click', function() {
            $(this).addClass("hit");
            hits++
            $('#no-hits').text(`Hits: ${hits}`);
            console.log($('td').index(this)); // index of the box
            bombs--;
            $('h2').text(`No. Bombs remaining: ${bombs}`)
        })

        
        $('#no-misses').text(`Misses: ${misses}`);

    } else {
        bombs = 0;
    }

    // miss ship 
    // $('#water td').on('click', function(){
    //     $(this).addClass("miss");
    // })


    $('#restart').on('click', function (){
        console.log('restarted');
        $('#water td').addClass('restart');
    })

}
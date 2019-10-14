window.onload=function(){
    let bombs = 30;
    let hits = 0;
    let misses = 0;

    function setText(hits, misses, bombs){
        $('#no-hits').text(`Hits: ${hits}`);
        $('#no-misses').text(`Misses: ${misses}`); 
        $('h2').text(`No. Bombs remaining: ${bombs}`);
    }

    


    // hit ship 
    if (bombs >= 1){
        $('#water td').on('click', function() {
            $(this).addClass("hit");
            hits++
            console.log($('td').index(this)); // index of the box
            bombs--;
            setText(hits, misses, bombs);
        })  
    } else {
        bombs = 0;
    }

    $('#restart').on('click', function (){
        console.log('restarted');
        $('#water td').addClass('restart');
        hits = 0;
        misses = 0;
        bombs = 30;
        setText(hits, misses, bombs);
    })

}
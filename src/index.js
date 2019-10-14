window.onload=function(){
    let bombs = 30;
    let hits = 0;
    let misses = 0;

    generate();
    function setText(hits, misses, bombs){
        $('#no-hits').text(hits);
        $('#no-misses').text(`Misses: ${misses}`); 
        $('#no-bombs').text(`No. Bombs remaining: ${bombs}`);
    }

    function generate(){
        // $('#enemy-water').createElement('td');
        // $('#enemy-water').element('td');
    }

    // add ships
    $('li').on('click', function (){
        $(this).addClass('li--selected');
        // then delete element
    })


    // miss ship -
    if($('#enemy-water td').hasClass(!'miss')){
        $('#enemy-water td').on('click', function() {
            $(this).addClass("miss");
            misses++
            bombs--;
            setText(hits, misses, bombs);
    })
    } else {
        return;
    }

    $('#restart').on('click', function (){
        hits = 0;
        misses = 0;
        bombs = 30;
        setText(hits, misses, bombs);
    })
}
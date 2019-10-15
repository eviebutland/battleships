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
        column = '<td></td>';
        let timesTen = column.repeat(10)
        let startRow = '<tr>';
        let endRow = '</tr>';
        let finished = startRow+= timesTen += endRow; 
    
        for(i = 0; i <= 10; i++ ){
            $('.fleet__water').append(finished) // one td in row 
        }
    }

    // add ships
    $( function dragAndDrop() {
        $('.drag-me').draggable();
    });

    $('#your-water').mouseenter(function(){
        console.log('entered');
        $(this).addClass('miss')
    });

    // miss ship -
    $('#enemy-water td').on('click', function() {
        $(this).addClass("miss");
        misses++
        bombs--;
        setText(hits, misses, bombs);

    })

    $('#restart').on('click', function (){
        hits = 0;
        misses = 0;
        bombs = 30;
        setText(hits, misses, bombs);
    })
}
const http = require('http');

http.createServer( ( req, res ) => {

    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type' : 'application/csv'});
    
    const persona = {
        id: 1,
        nombre: 'Fernando'
    };

    res.write( 'id; nombre\n' );
    res.write( '1; Pepe\n' );
    res.write( '2; Manolo\n' );
    res.write( '3; Antonio\n' );
    res.write( '4; Josefa\n' );
    res.write( '5; María\n' );
    res.write( '6; Engracia\n' );
    res.end();
})
.listen( 8080 );

console.log('Escuchando el puerto', 8080);
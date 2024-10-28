function gramophone(band, album, song){
    let result = (album.length * band.length) * song.length / 2;
    result = Math.ceil(result / 2.5);
    console.log(`The plate was rotated ${result} times.`);
}
gramophone('Rammstein', 'Sehnsucht', 'Engel');
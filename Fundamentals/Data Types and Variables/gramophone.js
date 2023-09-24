function gramophone(band, album, song) {
    songTime = (album.length * band.length) * song.length / 2
    plateRotations = songTime / 2.5 
    console.log(`The plate was rotated ${Math.ceil(plateRotations)} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs')
gramophone('Rammstein', 'Sehnsucht', 'Engel')
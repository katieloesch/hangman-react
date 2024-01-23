export function show(setter) {
    setter(true);
    setTimeout(() => {
        setter(false)
    }, 2000);
}

export function checkStatus(correctLetters, wrongLetters, selectedWord) {
    let status = 'win';

    //check for win
    selectedWord.split('').forEach(letter => {
        if (!correctLetters.includes(letter)) {
            status = '';
        }
    });

    //check for loss
    if (wrongLetters.length === 6) {
        status = 'loss'
    }

    return status
}
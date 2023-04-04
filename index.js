const battlefieldGame = {

    battlefield: $('#battlefield'),
    cells: $('td', this.battlefield),
    header: $('#header'),
    hitButton: $('#hit_button'),
    completeSelectionButton: $('#complete_selection'),

    setSubmarinesLocations: function () {
        this.cells.on('click', function () {
            if ($(this).hasClass('selected')) {
                $(this).removeClass('selected')
            } else {
                $(this).addClass('selected')
            }
        });
    },

    completeSelection: function () {

        this.completeSelectionButton.on('click', function () {
            if ($(battlefieldGame.cells).filter('.selected').length !== 10) {
                alert('Please select submarines locations (should be 10)');
            } else {
                battlefieldGame.cells.off('click');

                battlefieldGame.header.addClass('invisible');
                battlefieldGame.completeSelectionButton.hide();
                battlefieldGame.hitButton.show();
            }
        });
    },

    hit: function () {
        this.hitButton.on('click', function () {
            const nonHitCells = $(battlefieldGame.cells).not('.hit');
            const index = Math.floor((Math.random() * nonHitCells.length));
            nonHitCells[index].click();
            $(nonHitCells[index]).addClass('hit');

            if ($(battlefieldGame.cells).filter('.selected').length > 0 &&
                $(battlefieldGame.cells).filter('.selected').length === $(battlefieldGame.cells).filter('.hit.selected').length) {
                alert(`You won after ${$(battlefieldGame.cells).filter('.hit').length} clicks`);
            }

        });
    },

    init: function () {
        this.setSubmarinesLocations();
        this.completeSelection();
        this.hit();
    }
};

$(function () {
    battlefieldGame.init();
});
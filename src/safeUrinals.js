class SafeUrinals {
    constructor() {
        this.DOOR_ID = 'd';
        this.ALLOWED_VALUES = [1, 0, this.DOOR_ID];
        this.MINIMUM_LENGTH = 2;
        this.ERRORS = new Map();
        this.ERRORS.set('badInput', 'Unexpected input type');
        this.ERRORS.set('badValue', 'Unexpected value: ');
        this.ERRORS.set('tooShort', 'The list is not long enough');
        this.ERRORS.set('doorsRequired', 'Should start or end with doors');
        this.ERRORS.set('oneDoors', 'Should have one doors');
    }

    find(urinals) {
        this._validateUrinals(urinals);

        const freeSpots = this._findFreeSpots(urinals);

        if (freeSpots.length === 1) {
            return freeSpots[0].index;
        } else if (freeSpots.length > 1) {
            return this._findBestFreeSpot(freeSpots).index;
        }

        // when there are no spots available, return null
        return null;
    }

    _findBestFreeSpot(freeSpots) {
        let better = null;
        for (const spot of freeSpots) {
            if (better === null) {
                // start with first one as best
                better = spot;
            } else if (spot.isIntimate && !better.isIntimate) {
                // prefer intimate over not intimate
                better = spot;
            } else if (spot.isIntimate && better.isIntimate && spot.distace > better.distance) {
                // prefer further one if both intimate
                better = spot;
            } else if (spot.distance > better.distance) {
                better = spot;
            }
        }
        return better;
    }

    _findFreeSpots(urinals) {
        const freeSpots = [];
        for (let i = 0; i < urinals.length; i += 1) {
            const spotValue = urinals[i];
            if (spotValue === 0) {
                freeSpots.push({
                    index: i,
                    distance: this._getDoorDistance(urinals, i),
                    isIntimate: this._getSpotIntimacy(urinals, i)
                });
            }
        }
        return freeSpots;
    }

    _getSpotIntimacy(urinals, index) {
        if (urinals[index - 1] !== 1 && urinals[index + 1] !== 1) {
            return true;
        }
        return false;
    }

    _getDoorIndex(urinals) {
        return urinals.indexOf(this.DOOR_ID);
    }

    _getDoorDistance(urinals, index) {
        const doorIndex = this._getDoorIndex(urinals);
        return Math.abs(doorIndex - index);
    }

    // requires an array of 0s, 1s and one door on start or end
    _validateUrinals(urinals) {
        if (!Array.isArray(urinals)) {
            throw new Error(this.ERRORS.get('badInput'));
        }
        if (urinals.length < this.MINIMUM_LENGTH) {
            throw new Error(this.ERRORS.get('tooShort'));
        }
        const indexOfDoors = urinals.indexOf(this.DOOR_ID);
        if (indexOfDoors !== 0 && indexOfDoors !== urinals.length - 1) {
            throw new Error(this.ERRORS.get('doorsRequired'));
        }
        if (urinals.indexOf(this.DOOR_ID) !== urinals.lastIndexOf(this.DOOR_ID)) {
            throw new Error(this.ERRORS.get('oneDoors'));
        }
        for (const spot of urinals) {
            if (this.ALLOWED_VALUES.indexOf(spot) === -1) {
                throw new Error(this.ERRORS.get('badValue') + spot);
            }
        }
    }
}

window.SafeUrinals = SafeUrinals;

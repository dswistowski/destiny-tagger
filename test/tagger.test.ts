import * as assert from 'assert';

import {Tagger} from '../lib';

describe('Tagger', function () {
    let tagger: Tagger;
    before(function () {
    });

    beforeEach(function () {
        tagger = new Tagger();
    });

    describe('#somethind', function () {
        it('should exists', function () {
            assert.strictEqual(true, true)
        })
    })
});
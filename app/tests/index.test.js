import {map} from '../source/javascripts/lib/generic-functions';

test('Remaps 2 between 1 and 3, to 40 between 30 and 50', () => {
    expect(map(2, 1, 3, 30, 50)).toBe(40);
});
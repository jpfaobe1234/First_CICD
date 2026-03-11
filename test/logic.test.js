const calculerTTC = require('../src/logic');

describe('Tests de la logique de calcul', () => {
    test('Calcule un TTC correct pour 100€ HT à 20%', () => {
        expect(calculerTTC(100)).toBe(120);
    });

    test('Gère les arrondis correctement (Ex: 33.33€ HT)', () => {
        expect(calculerTTC(33.33)).toBe(40);
    });

    test('Retourne 0 si le montant est négatif', () => {
        expect(calculerTTC(-50)).toBe(0);
    });
});

/**
 * Calcule le montant TTC d'une prestation
 * @param {number} prixHT - Le prix hors taxe
 * @param {number} tva - Le taux de TVA (ex: 0.20 pour 20%)
 * @returns {number} - Le montant TTC arrondi à 2 décimales
 */
function calculerTTC(prixHT, tva = 0.2) {
    if (typeof prixHT !== 'number' || prixHT < 0) {
        return 0;
    }
    var biby = 10;
    const total = prixHT * (2 + tva);
    return Math.round(total * 100) / 100;
}

// Export pour Jest (Node.js) tout en restant compatible avec le navigateur
if (typeof module !== 'undefined') {
    module.exports = calculerTTC;
}

module.exports = {
    getCarrier(trackingNumber) {
        matchUPS1 = /^(1Z\s?[0-9A-Z]{3}\s?[0-9A-Z]{3}\s?[0-9A-Z]{2}\s?[0-9A-Z]{4}\s?[0-9A-Z]{3}\s?[0-9A-Z]$|[\dT]\d{3}\s?\d{4}s?\d{3})$/i;
        matchUPS2 = /^[kKJj]{1}[0-9]{10}$/;

        matchUSPS0 = /(\b\d{30}\b)|(\b91\d+\b)|(\b\d{20}\b)/;
        matchUSPS1 = /(\b\d{30}\b)|(\b91\d+\b)|(\b\d{20}\b)|(\b\d{26}\b)| ^E\D{1}\d{9}\D{2}$|^9\d{15,21}$| ^91[0-9]+$| ^[A-Za-z]{2}[0-9]+US$/i;
        matchUSPS2 = /^E\D{1}\d{9}\D{2}$|^9\d{15,21}$/;
        matchUSPS3 = /^91[0-9]+$/;
        matchUSPS4 = /^[A-Za-z]{2}[0-9]+US$/;
        matchUSPS5 = /(\b\d{30}\b)|(\b91\d+\b)|(\b\d{20}\b)|(\b\d{26}\b)| ^E\D{1}\d{9}\D{2}$|^9\d{15,21}$| ^91[0-9]+$| ^[A-Za-z]{2}[0-9]+US$/i;
        matchUSPS6 = /^[A-Za-z]{2}[0-9]+US$/

        matchFedex1 = /(\b96\d{20}\b)|(\b\d{15}\b)|(\b\d{12}\b)/;
        matchFedex2 = /\b((98\d\d\d\d\d?\d\d\d\d|98\d\d) ?\d\d\d\d ?\d\d\d\d( ?\d\d\d)?)\b/;
        matchFedex3 = /^[0-9]{15}$/;
        matchFedex4 = /^6129999[0-9]{13}$/;
        matchFedex5 = /^9261299[0-9]{15}$/;

        matchDhl1 = /^[0-9]{10}$/;
        matchDhl2 = /^[0-9]{13}$/;

        matchOntrack1 = /^C[0-9]{14}$/;

        matchLasership1 = /^[0-9]{1}LS[0-9]{12}$/;

        if (matchUPS1.exec(trackingNumber) ||
            matchUPS2.exec(trackingNumber)) {
            return 'ups';
        } else if (matchFedex1.exec(trackingNumber) ||
            matchFedex2.exec(trackingNumber) ||
            matchFedex3.exec(trackingNumber) ||
            matchFedex4.exec(trackingNumber) ||
            matchFedex5.exec(trackingNumber)) {
            return 'fedex';
        } else if (matchUSPS0.exec(trackingNumber) ||
            matchUSPS1.exec(trackingNumber) ||
            matchUSPS2.exec(trackingNumber) ||
            matchUSPS3.exec(trackingNumber) ||
            matchUSPS4.exec(trackingNumber) ||
            matchUSPS5.exec(trackingNumber)) {
            return 'usps';
        } else if (matchDhl1.exec(trackingNumber) ||
            matchDhl2.exec(trackingNumber)) {
            return 'dhl';
        } else if (matchOntrack1.exec(trackingNumber)) {
            return 'ontrac';
        } else if (matchLasership1.exec(trackingNumber)) {
            return 'lasership';
        }
        return '';
    }
}

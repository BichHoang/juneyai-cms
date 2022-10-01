import { KeyValuePair } from '../../types/common';
import i18n from '../../i18n';
const { t, te } = i18n.global

function translate(key: string): string {
    let key_msg = 'text.' + key;

    if (te(key_msg)) {
        return t(key_msg);
    }

    return key;
}

export default (key: string, attributes?: KeyValuePair[]) => {
    let msg = t('validation.' + key);
    if (attributes) {
        attributes.forEach(attribute => {
            msg = msg.replaceAll(attribute.key, translate(attribute.value));
        });
    }

    return msg;
}

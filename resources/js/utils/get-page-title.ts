import i18n from '../i18n';

const { t, te } = i18n.global;
const title = t('app_name');

export default function getPageTitle(key: any) {
    const hasKey = te(`route.${key}`);

    if (hasKey) {
        const pageName = t(`route.${key}`);
        return `${pageName} - ${title}`;
    }
    return `${title}`;
}

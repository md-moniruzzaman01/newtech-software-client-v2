export const shedAndSplit = (str: string = '') => {
    const removeSpaces = () => {
        let res = '';
        for (let i = 0; i < str.length; i++) {
            const el = str[i];
            if (el === ' ') {
                continue;
            }
            res += el;
        }
        return res;
    };
    const res = removeSpaces();
    return res.split(',');
};
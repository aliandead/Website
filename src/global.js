const settings = {};

export const setParam = (key, value) => {
    settings[key] = value;
};

export const getParam = (key) => {
    return settings[key];
};
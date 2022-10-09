import { atom } from 'recoil';

export const mbtiState = atom({
    key: 'mbti', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});

import YandexAPI from './yandex';

import { YandexAPIType } from "./yandex/types";

export type APIType = {
    yandex: YandexAPIType,
};

export default {
    yandex: YandexAPI,
} as APIType;
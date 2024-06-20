import YandexAPI from './yandex';
import GoogleAPI from './google';

import { YandexAPIType } from "./yandex/types";
import { GoogleAPIType } from "./google/types";

export type APIType = {
    yandex: YandexAPIType,
    google: GoogleAPIType,
};

export default {
    yandex: YandexAPI,
    google: GoogleAPI,
} as APIType;
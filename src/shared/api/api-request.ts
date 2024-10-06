import { AnyObjectType } from '../types/global.ts';
import { parseApiUrl } from '../utils/parse-api-url.ts';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface ApiRequestProps extends Omit<RequestInit, 'body'> {
  url: string;
  data?: unknown;
  params?: AnyObjectType;
  slug?: string;
}

export const BASE_URL = process.env.KINOPOISK_API_URL;

export const apiRequest = async ({
  url,
  params,
  headers,
  data,
  slug,
  ...options
}: ApiRequestProps) => {
  try {
    const authToken = await AsyncStorage.getItem('authToken');
    const fullUrl = parseApiUrl(params, url, slug);

    const isFormData = data instanceof FormData;

    const body = isFormData ? data : JSON.stringify(data);

    const response = await fetch(fullUrl, {
      headers: {
        ...(authToken && {
          Authorization: `Bearer ${authToken}`,
        }),
        ...(!isFormData && { 'Content-Type': 'application/json' }),
        ...headers,
      },
      ...((data && { body }) as Record<string, unknown>),
      ...options,
    });

    const resJson = await response.json();

    if (resJson.status === 403) {
      // window.location.replace(LINKS.error403);
      Toast.show({
        type: 'error',
        text1: resJson,
        position: 'top',
      });
      return;
    }

    return resJson;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};

import qs from 'qs';

type TFetchMethods = 'get' | 'post';
type TFetchParams = { [key: string]: string };

const $api = async <T>(method: TFetchMethods, path: string, revalidate: number, params?: TFetchParams[]): Promise<T> => {

    let modifiedParams = '';

    params?.map(param => modifiedParams += `${qs.stringify(param)}&`);

    const response = await fetch(`${process.env.API_URL}${path}?${modifiedParams}`, {
        method,
        next: {
            revalidate
        }
    })

    return response.json();
}

export default $api
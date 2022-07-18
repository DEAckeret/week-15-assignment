const APP_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class AppApi {
    get = async () => {
        try {
            const resp = await fetch(APP_ENDPOINT);
            const data = await resp.json();
            return data;
        } catch (e) {
            console.log('The app fetch did not work', e);
        }
    }

    put = async (candy) => {
        try{
            const resp = await fetch(`${APP_ENDPOINT}/${candy._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(candy)
            });
            return await resp.json();
        } catch (e) {
            console.log('The update did not work', e)
        }
    }
}

export const appApi = new AppApi();
class Polygon {

    generateURL(targetedURL, query){
        let domain = 'https://api.polygon.io/';
        return domain+targetedURL+query;
    }

    generateHeaders(method) {
        return {
            method: method, 
            headers: new Headers({
                'Authorization': 'Bearer kLe9CPi0VDWt5ElTfwGhC6gPCDnoQ0kD', 
            })
        };
    }

    getTickerDetails(ticker){
        if (ticker) {
            return fetch(
                this.generateURL(`v1/meta/symbols/${ticker}/company`, ``),
                this.generateHeaders('get')
                ).then(response => {
                    return response.json()
                });
        } else {
            return null;
        }
        
    }
}

export default Polygon;

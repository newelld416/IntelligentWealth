class Alpha {

    API_KEY = '8OY6KZTKBOCS0TE7';

    generateQueryString(func, symbol) {
        return `?apikey=${this.API_KEY}&function=${func}&symbol=${symbol}`;
    }
    
    generateURL(func, symbol, extra) {
        let domain = 'https://www.alphavantage.co/query';
        return `${domain}${this.generateQueryString(func, symbol)}${extra}`;
    }

    getAlphaData(unc, symbol, extra) {
        return fetch(this.generateURL(unc, symbol, extra)
            ).then(response => {
                return response.json()
            })
    }

}

export default Alpha;

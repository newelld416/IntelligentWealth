class Ticker {

    ceo;
    description;
    employees;
    industry;
    logo;
    marketcap;
    url;

    constructor(props) {
        this.ceo = props.ceo;
        this.description = props.description;
        this.employees = props.employees;
        this.industry = props.industry;
        this.logo = props.logo;
        this.marketcap = props.marketcap;
        this.url = props.url;
    }

    getCeo() {
        return this.ceo;
    }

    setCeo(ceo) {
        this.ceo = ceo;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getEmployees() {
        return this.employees;
    }

    setEmployees(employees) {
        this.employees = employees;
    }

    getIndustry() {
        return this.industry;
    }

    setIndustry(industry) {
        this.industry = industry;
    }

    getLogo() {
        return this.logo;
    }

    setLogo(logo) {
        this.logo = logo;
    }

    getmarketcap() {
        return this.marketcap;
    }

    setMarketcap(marketcap) {
        this.marketcap = marketcap;
    }

    getUrl() {
        return this.url;
    }

    setUrl(url) {
        this.url = url;
    }
    
}

export default Ticker;

const app = new Vue({
    el: "#app",
    data: {
        urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        filmsData: [],  
        seriesData: [],
        searchString: "",
    },

    methods: {
        searching(){
            let fullUrlFilms = this.urlFilms + this.searchString;
            let fullUrlSeries = this.urlSeries + this.searchString;

            axios
            .get(fullUrlFilms)
            .then(result => {
                this.filmsData = result.data.results;
            })
            .catch(e => {
                console.log(e);
            })

            axios
            .get(fullUrlSeries)
            .then(result => {
                this.seriesData = result.data.results;
            })
            .catch(e => {
                console.log(e);
            })
        }
    },

    mounted() {
    }
})
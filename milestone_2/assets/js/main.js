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

            getUrl(fullUrlFilms, this.filmsData)
            getUrl(fullUrlSeries, this.seriesData) 
        }
    },

    mounted() {
        function getUrl(url, list) {
            axios.get(url)
            .then(result => {
                list = result.data.results;
            })
            .catch(e => {
                console.log(e);
            })
        }
    }
})
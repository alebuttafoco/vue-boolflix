const app = new Vue({
    el: "#app",
    data: {
        urlFilms: 'https://api.themoviedb.org/3/search/movie?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        filmsData: null,  
        seriesData: null,
        searchString: "",
        error: null,

    },

    methods: {

        

        searching(){            
            const fullUrlFilms = this.urlFilms + this.searchString;
            const fullUrlSeries = this.urlSeries + this.searchString;

            /* ottiene film */
            axios.get(fullUrlFilms).then(result => {
                this.filmsData = result.data.results;
            })
            .catch(e => {
                console.error(e);
                this.error = "Errore", e;
            })

            /* ottiene serie tv */
            axios.get(fullUrlSeries).then(result => {
                this.seriesData = result.data.results;
            })
            .catch(e => {
                console.error(e);
                this.error = "Errore", e;
            })
            
        },

        getFlag(code){
            if (code == 'en') code = 'gb';
            if (code == 'ja') code = 'jp';
            if (code == 'ko') code = 'kr';
            if (code == 'cs') code = 'cz';
            if (code == 'da') code = 'dk';
            if (code == 'hi') code = 'in';
            if (code == 'el') code = 'gr';
            if (code == 'zh') code = 'cn';
            return `https://www.countryflags.io/${code}/flat/64.png`
        }
    },

    mounted() {

    }
})
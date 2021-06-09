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
        getData(url, data){
            axios.get(url).then(result => {
                data = result.data.results;
                //console.log(data);
            })
            .catch(e => {
                console.error(e);
                this.error = "Errore", e;
            })
            .finally(()=>{
                console.log(data);
                return data;
            })
        },

        searching(){            
            const fullUrlFilms = this.urlFilms + this.searchString;
            //const fullUrlSeries = this.urlSeries + this.searchString;

            this.getData(fullUrlFilms, this.filmsData)
            console.log(this.getData(fullUrlFilms, this.filmsData));
            //this.getData(fullUrlSeries, this.seriesData)
        }
    },

    mounted() {
       
    }
})
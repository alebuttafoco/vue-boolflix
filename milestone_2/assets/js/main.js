const app = new Vue({
    el: "#app",
    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        searchString: "",
        filmsData: [],
    },

    methods: {
        searching(){
            let fullUrl = this.url + this.searchString;

            axios
                .get(fullUrl)
                .then(result => {
                    this.filmsData = result.data.results;
                    console.log(this.filmsData);
                })
                .catch(e => {
                    console.log(e);
                })

        }
    },

    mounted() {
    }
})
const app = new Vue({
    el: "#app",
    data: {
        url: 'https://api.themoviedb.org/3/search/movie?api_key=0d8074b8bfe08af5bfdf6766d8596223&query=',
        searchString: "",
    },

    methods: {
        searching(){
            let fullUrl = this.url + this.searchString;

            axios
                .get(fullUrl)
                .then(result => {
                    console.log(result.data.results);
                })
                .catch(e => {
                    console.log(e);
                })

        }
    },

    mounted() {
    }
})

/* titolo
titolo originale
lingua
voto */
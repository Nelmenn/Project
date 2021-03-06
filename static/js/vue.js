var demo = new Vue({
    el: '#main',
    data: {
        searchString: "",

        articles: [
            {
                "title": "The first post",
                "url": "",
                "image": ""
            },
            {
                "title": "Second",
                "url": "",
                "image": ""
            },
           
        ]
    },
    computed: {
        filteredArticles: function () {
            var articles_array = this.articles,
                searchString = this.searchString;

            if (!searchString) {
                return articles_array;
            }

            searchString = searchString.trim().toLowerCase();

            articles_array = articles_array.filter(function (item) {
                if (item.title.toLowerCase().indexOf(searchString) !== -1) {
                    return item;
                }
            })
            return articles_array;;
        }
    }
});
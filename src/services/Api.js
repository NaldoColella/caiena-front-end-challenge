export default {
    getUsers(name, page = 1){
        //this.responseAvailable = false;
        let url = new URL("https://api.github.com/search/users"),
        params = {
            q: name,
            per_page: '20',
            page: page,
            order: 'asc'
        };
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

        return fetch(url, {
            "method": "GET",
            "headers": {
                'Accept' : 'application/vnd.github.v3+json',
                'Content-Type': 'application/json'
            },
            'mode': 'cors'
        })
        .then(response => { 
            if(response.ok){
                return response.json()    
            } else{
                alert("Server returned " + response.status + " : " + response.statusText);
            }                
        })
        .catch(err => {
            console.log(err);
        });
    }    
  }
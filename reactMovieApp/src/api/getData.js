export async function getData(url) {
    let data = [];
    
    try{
        let response = await fetch(url)
        .then(response => response.json())
        .then(data => { 
            return data.results;
        });
        data = response;
    } catch(err) { alert(err) }
    
    return data;
}
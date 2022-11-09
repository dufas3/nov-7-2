import ajaxService from "./ajaxService";

const searchCode = ()=>{
    document.querySelector(`form`).addEventListener(`submit`,(event)=>{
        event.preventDefault();
        const searchTerm = document.querySelector(".term").value;
        console.log(searchTerm);
        let searchResponse;
        ajaxService(searchTerm)
            .then(result=>searchResponse = result)
            .then(()=>console.log(searchResponse))
            .then(()=>{
                if (searchResponse.data[0] ==undefined){
                    document.querySelector(".result").value = "Netesisingas kodas"
                }
                else {
                document.querySelector('.result').value = searchResponse.data[0].post_code
                }
            })
    })
}

export default searchCode;
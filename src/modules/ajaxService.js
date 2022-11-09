// raktas:TYV2NK9t5i4z1wkuyieZ
const ajaxService = (term)=> {
    const url = "https://api.postit.lt/?term=";
    const key = "TYV2NK9t5i4z1wkuyieZ"

    return fetch(`${url}${term}&key=${key}`)
        .then(response =>response.json())

}

export default ajaxService
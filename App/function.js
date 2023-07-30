//create alert funtions


const inputRequered = (msg, type) => {

    return `
  
    <p class=" alert alert-${type} d-flex justify-content-between" > ${msg} <button class="btn-close" data-bs-dismiss="alert"></button></p>
  
  
    `

};

// set ls data

const setdataLS = (key, data) =>{

    localStorage.setItem(key, JSON.stringify(data));

};

// get data form Ls

const getdatals = (key) => {

    if (localStorage.getItem(key)) {
        return JSON.parse(localStorage.getItem(key));
    }else{
        return [];
    }

};

 
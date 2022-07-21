const setID = (object) => {
    window.localStorage.setItem('id', object.result);
};

const getID = () => {
    let string = '';
    if(window.localStorage.getItem('id')){
        string = window.localStorage.getItem('id').slice(14,35);
    }
}
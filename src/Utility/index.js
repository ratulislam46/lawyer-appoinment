
export const getBook = () => {
    const check = localStorage.getItem("booking");
    if(check) return JSON.parse(check)
        return []
}


export const addBook = Lawyer => {
    const check = getBook();
    const isExist = check.find(p=> p.id === Lawyer.id);
    if(isExist) return console.log('already acheee');
        check.push(Lawyer)
    localStorage.setItem("booking", JSON.stringify(check))
}


export const removeBook = id => {
    const check = getBook();
    const remainingBook = check.filter(book => book.id !==id);
    localStorage.setItem("booking", JSON.stringify(remainingBook))
}
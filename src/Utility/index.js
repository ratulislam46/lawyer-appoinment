import toast from "react-hot-toast";



export const getBook = () => {
    const check = localStorage.getItem("booking");
    if (check) return JSON.parse(check)
    return []
}


export const addBook = Lawyer => {
    const check = getBook();
    const isExist = check.find(p => p.id === Lawyer.id);
    if (isExist) return toast.error('Already booked your appointment');
    check.push(Lawyer)

    toast.success(`Successfully Booked your appointment near ${Lawyer.name}`)

    localStorage.setItem("booking", JSON.stringify(check));
}


export const removeBook = id => {
    let check = getBook();
    check = Array.isArray(check) ? check : [check]
    const remainingBook = check.filter(book => book.id !== id);
    localStorage.setItem("booking", JSON.stringify(remainingBook));
    toast.success('removed your appointment')
}
class Utilty {
    BearerToken (token){
        return `Bearer ${token}`
    }

    randomID(min, max){
        return Math.floor(Math.random() * (max -min) + min)
    }
}
export default Utilty;
class frutas{
#nombre = "def nombre";
getNombre (){
    return this.#nombre
}

setNombre(nombreNuevo){
    this.#nombre = nombreNuevo
}
}



const banana = new frutas();
banana.setNombre("banana");
console.log (banana.getNombre());

const manzana = new frutas();
manzana.setNombre("manzana");
console.log(manzana.getNombre());
// class Note{
//     constructor(id, libelle, valeur){
//         this.libelle = libelle
//         this.valeur = valeur
//         this.id = id
//     }
// }

// class Student{

//     #notes = [new Note(0,"math", 15)]

//     constructor(firstname, lastname){
//         this.firstname = firstname
//         this.lastname = lastname
//     }

//     get fullname(){
//         // `${this.firstname} ${this.lastname}`
//         return this.firstname+" "+this.lastname
//     }

//     get notes(){
//         return this.#notes
//     }
    
//     set name(name){
//         const names = name.split(" ")
//         this.firstname = names[0]
//         this.lastname = names[1]
//     }

//     addNote(libelle, valeur){
//         this.#notes.push(new Note(this.#notes.length,libelle, valeur))
//     }

//     deleteNote(id){
//         this.#notes = this.#notes.filter((note) => note.id != id)
//     }

// }

// class MaxStudent extends Student{
//     constructor(firstname, lastname, bonbon){
//         super(firstname, lastname)
//         this.bonbon = bonbon
//     }

//     addNote(libelle, valeur){
//         super.addNote(libelle, valeur)
//         this.bonbon++
//     }
// }

// const olga_ma_cooh = new Student("olga", "ma co'oo")
// const kemkeng = new MaxStudent("kemkeng", "le max", 5)

// kemkeng.addNote("ana", 18)
// console.log(kemkeng.bonbon)
// console.log(kemkeng.notes)
// console.log(olga_ma_cooh.bonbon)

const app = document.querySelector('#app')

class Counter{
    // definir des props et des functions
    constructor(init){
        this.init = init
        this.counter = init
        this.container = null
        this.state_counter = null
    }

    start(){
        app.insertAdjacentElement(
            'afterbegin',
            this.render()
        )
        this.decrement()
        // app.insertAdjacentHTML(
        //     'afterbegin',
        //     "<h1>6</h1>"
        // )
    }

    render(){
        const html = `
            <div>
                <h1>${this.counter}</h1>
                <button class='btn btn-save'>reload</button>
            </div>
        `
    
        this.container = document.createRange()
        .createContextualFragment(html)
        .firstElementChild

        this.container.querySelector('button')
        .addEventListener('click', this.reload.bind(this))

        return this.container
    }

    decrement(){
        this.state_counter = setInterval(
            () =>{
                this.counter--
                this.container.querySelector('h1')
                .innerHTML = `<h1>${this.counter}</h1>`
                if (this.counter == 0) {
                    clearInterval(this.state_counter)
                }
            },
            1000
        )
    }

    reload(){
        this.counter = this.init
        this.container.querySelector('h1')
            .innerHTML = `<h1>${this.counter}</h1>`
        clearInterval(this.state_counter)
        this.decrement()
    }
}

const counter1 = new Counter(5)
const counter2 = new Counter(10)
const counter3 = new Counter(50)

counter1.start()
counter2.start()
counter3.start()
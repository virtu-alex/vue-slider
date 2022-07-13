/*                             Consegna:
Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Le caratteristiche minime richieste sono:

////Immagine grande visibile quando attiva

////Lista di Thumbnails in basso

////Anche nelle thumbnails dobbiamo avere una classe active corrispondente all'immagine attiva in quel momento (lo stile è a vostra discrezione)

////Al click sulle freccette l'immagine principale deve cambiare (e la thumbnail corrispondente deve avere la classe active con conseguente effetto visivo)

////Implementare il ciclo infinito: se sono sulla prima immagine e clicco prev, devo ricominciare dall'ultima. Se sono sull'ultima e clicco next, devo ripartire dalla prima.

Bonus:
1- al click su una thumb, visualizzare in grande l'immagine corrispondente

se l'immagine della thumb corrisponde all'immagine del carosello mostrale entrambi

2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente (questo richiederà qualcosa che non abbiamo visto)
3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce (questo richiederà degli eventi che non abbiamo visto)
Consigli del giorno:
- regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
- il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)
- oltre a Vue, ora abbiamo diversi strumenti in più nelle nostre tasche, che possono tornarci utili per svolgere l'esercizio in una versione più evoluta ed efficace, soprattutto per quando riguarda la struttura dei dati. */

const root = new Vue({
    el: '#root',
    data: {
        currentIndex: 0,
        autoplay: undefined,
        images: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description:
                    'La Svezia è un paese scandinavo che comprende migliaia di isole lungo la costa e laghi nell entroterra, oltre a vaste foreste boreali e rilievi glaciali',
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description:
                    'Il Perù è una nazione sudamericana che ospita una parte della Foresta Amazzonica e Machu Picchu, l antica città inca situata sulla catena delle Ande.',
            },
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description:
                    'Il Cile è un paese lungo e stretto che si estende lungo il confine occidentale del Sud America, con più di 6000 km di costa affacciata sull Oceano Pacifico.',
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description:
                    'L Argentina è uno stato sudamericano molto esteso con un territorio che comprende la cordigliera delle Ande, laghi glaciali e le pianure della Pampa, il tradizionale terreno di pascolo dei famosi bovini da carne.',
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description:
                    'La Colombia è un paese che si trova sulla punta nord del Sud America.',
            },
        ]
    },
    methods: {
        goPrev() {
            this.currentIndex--
            if (this.currentIndex < 0) this.currentIndex = this.images.length - 1;

        },
        goNext() {
            this.currentIndex++
            if (this.currentIndex > this.images.length - 1) this.currentIndex = 0;

        },
        goToThis(i) {
            this.currentIndex = i
        },
        startAutoplay() {
            this.autoplay = setInterval(this.goNext, 3000)
        },
        stopAutoplay() {
            clearInterval(this.autoplay)
        },
        //LIFE CYCLE EVENT
        created() {
            this.startAutoplay()
        }
    }
})





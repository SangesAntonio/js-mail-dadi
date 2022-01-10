console.log('JS OK!')
/* Mail
Crea un array di email;
Chiedi all’utente la sua email.
controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato in console sull’esito del controllo.*/

// 1 crea un array di email 
// 2 chiedi tramite prompt la email all'utente
// 3 controlla che la email inserita sia nella lista
// 4 comunica il risultato del controllo

//array emails
const email = ['antonio@gmail.com','rosa@gmail.com','danilo@gmail.com','stefano@gmail.com'];

console.table(email);

//prompt richiesta email
let user = prompt('Inserisci la tua email','rosa@gmail.com');

//check email
let userEmail = email[i];

    if(user === userEmail){
        console.log('accesso riuscito');
        
    }else{

        console.log('utente non registrato');
    }


    
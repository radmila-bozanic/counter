let count=0;
// preko promenljive value uzimamo vrednost brojaca (0)
const value = document.querySelector("#value");
// preko promenljive btns uzimamo vrednost za tri dugmeta
// ali ne uzimamo jedno vec sva tri dugmeta, 
// to je bitno jer onda promenljiva btns koja cuva sva tri je zapravo data type NodeList
// pristupamo NodeList-i preko querySelectorAll
const btns = document.querySelectorAll(".btn");
console.log(btns);
// ovde pristupamo NodeList-i btns i posto je u pitanju data type NodeList koristimo forEach petlju
// forEach petlja prima kao parametar bezimenu funkciju (callback (callback je tip funkcije))
// Nasa bezimena f-ja prima parametar (proizvoljan naziv) koji nam omogucava da pristupimo 
// nekom elementu tj. tag-u i sistemskim funkcijama koje idu uz to,
// a u nasem slucaju taj element je <button></button>
btns.forEach(function(btn) {
    // Ovde osluskujemo dogadjaj "click", a potom uz pomoc bezimene f-je definisemo sta se dogadja kada se desi klik.
    btn.addEventListener("click", function(e) {
        // u promenljivu styles smestamo objekat (svi tagovi, odnosno elementi su objekti u DOM-u),
        // a objekat koji je smesten u styles je pozvan preko bezimene f-je koja aktivira event listener za taj objekat,
        // a to nam omogucava currentTarget funkcija.
        const styles = e.currentTarget.classList;
        console.log(e);
        // da li styles sadzi rec "decrease" - ispitujemo preko if-a
        if (styles.contains("decrease")) {
            // ako sadrzi oduzimamo 1 od trenutne vrednosti promenljive "count" (default vrednost je 0)
            count--;
        }
        // da li styles sadzi rec "increase" - ispitujemo preko else if-a
        else if (styles.contains("increase")){
            // ako sadrzi dodajemo 1 na trenutnu vrednost promenljive "count" 
            count++;
        }
        // ukoliko ne sadrzi nijednu od pomente dve reci onda resetuje vrednost na 0, odnosno ispituje da li je vrednost "reset"
        else {
            // resetujemo na podrazumevanu vrednost
            count = 0;
        }

        if (count>0) {
            value.style.color = "green";
        }
        if(count<0) {
            value.style.color = "red";
        }
        if (count===0) {
            value.style.color = "#222";
        }
        // preko sistemske funkcije textContent trenutnu vrednost promenljive count smestamo u DOM za prikaz na ekranu.
        value.textContent=count;
    });
});
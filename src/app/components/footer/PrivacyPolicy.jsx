import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import grey from "@material-ui/core/colors/grey";
import 'typeface-roboto'

const styles = theme => ({
  privacyContent: {
    fontFamily: "Roboto",
  },
  textMuted: {
    color: grey[500]
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
});

class PrivacyPolicy extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.privacyContent}>
        <p>
          Acest website foloseste cookie-uri pentru a furniza vizitatorilor o
          experienta mult mai buna de navigare si servicii adaptate nevoilor si
          interesului fiecaruia.
        </p>

        <p>
          "Cookie"-urile au rolul de a facilita accesul si livrarea serviciilor
          folosite de utilizator de internet, cum ar fi personalizarea anumitor
          setari (limba, tara, preturi afisante in moneda nationala.
          "Cookie"-urile, pe baza informatiilor pe care le aduna despre
          utilizatori, ii ajuta pe detinatorii de site-uri sa isi eficientizeze
          produsul astfel incat acesta sa fie cat mai usor accesat de catre
          utilizatori, de asemenea cresc gradul de eficienta a publicitatii
          online si nu in ultimul rand pot permite aplicatiilor multimedia sau
          de alt tip de pe alte site-uri sa fie incluse intr-un anumit site
          pentru a face navigarea mai utila.
        </p>

        <h4>Ce este un "cookie"?</h4>
        <p>
          Cookie ("browser cookie" sau "HTTP cookie") este un fisier de mici
          dimensiuni, format din litere si numere, care este stocat pe orice
          terminal cu acces la intrenet (computer, telefon mobil, tableta etc.)
          si este instalat prin solicitara emisa de catre un web-server unui
          browser (ex: Internet Explorer, Chrome). De retinut: "Cookie"-urile nu
          contin programe software, virusi sau spyware si nu pot accesa
          informatiile de pe hard drive-ul utilizatorului.
        </p>
        <p>
          Un cookie este format din nume si continut, durata de existenta a
          acestuia fiind determinata, putand fi accesat din nou de webserver in
          momentul in care un utilizator se intoarce pe website-ul asociat
          webserverului respectiv.
        </p>
        <p>
          Cookie-urile nu solicita informatii cu caracter personal si nu
          identifica personal utilizatorii de internet.
        </p>
        <p>
          Cookieuri de sesiune - acestea sunt stocate temporat in istoricul
          browser-ului care le memoreaza pana cand utilizatorul iese de pe
          web-siteul respectiv sau inchide fereastra browserului.
        </p>
        <p>
          Cookieuri Persistente - Acestea sunt stocate, in functie de durata
          prestabilita, pe hard-drive-ul unui computer sau echipament.
          Cookie-urile persistente le includ si pe cele plasate de un alt
          website decat cel pe care il viziteaza utilizatorul la momentul
          respectiv - cunoscute sub numele de "third party cookies" - care pot
          fi folosite in mod anonim pentru a memora interesele unui utilizator,
          astfel incat sa fie livrata publicitate cat mai relevanta pentru
          utilizatori.
        </p>

        <h4>Care sunt avantajele cookie-urilor?</h4>
        <p>
          Un cookie contine informatii care fac legatura intre utilizatori si un
          anume website. Daca un browser acceseaza acel web-server din nou,
          acesta poate citi informatia deja stocata si reactiona in consecinta.
        </p>

        <h4>Care este durata de viata a unui cookie?</h4>
        <p>
          Exista cookie-uri folosite exclusiv pentru o singura sesiune - acestea
          nu mai sunt retinute dupa ce utilizatorul iese de pe website.
          Cookie-uri permanente - sunt retinute si refolosite de fiecare data
          cand utilizatorul revine pe acel website, insa pot fi sterse oricand
          de utilizator
        </p>

        <h4>Ce sunt cookie-urile plasate de terti?</h4>
        <p>
          Parti de continut sau servicii pot fi plasate pe website-ul accesat,
          de catre terte parti prin intermediul bannerelor, boxurilor sau
          linkurilor - iar toate aceste instrumente pot contine cookie-uri. Ele
          se numesc "third party cookies" pentru ca nu sunt plasate de
          proprietarul website-ului respectiv, iar furnizorii terti se supun
          legilor in vigoare si politicilor de confidentialitate ale
          detinatorului site-ului.
        </p>

        <h4>Cum sunt folosite cookie-urile de catre acest site?</h4>
        <p>O vizita pe acest site poate plasa cookie-uri in scopuri de:</p>
        <ul>
          <li>Cookie-uri folosite pentru finalizarea unei donatii</li>
          <li>Cookie-uri de analiza a vizitatorilor</li>
          <li>Cookie-uri de inregistrare</li>
        </ul>

        <p className={classes.textMuted}>
          Unele cookie-uri pot proveni de la terti.
        </p>

        <h5>Cookie-uri folosite pentru finalizarea unei donatii</h5>
        <p>
          Completarea formularului de donatie cuprinde mai multi pasi. Pentru a
          tine evidenta unei persoane si pentru a-i oferi documentul necesar vom
          salva un fisier cookie ce ne ofera o metoda de a-l identifica (precum
          un numar de ordine). Pentru fiecare completare a formularului se va
          crea un cookie nou sau se va suprascrie cel deja existent.
        </p>

        <h5>Cookie-uri pentru analiza vizitatorilor</h5>
        <p>
          De fiecare data cand un utilizator viziteaza acest site softul de
          analytics furnizat de o terta parte genereaza un cookie de analiza a
          utilizatorului. Acest cookie ne spune daca ati mai vizitat acest site
          pana acum. Browser-ul ne va spune daca aveti acest cookie, iar daca
          nu, vom genera unul. Acesta permite monitorizarea utilizatorilor unici
          care ne viziteaza si cat de des o fac. Acest cookie nu poate fi
          folosit pentru a identifica persoanele fizice, ele sunt folosite doar
          in scop statistic.
        </p>

        <h5>Cookie-uri pentru inregistrare</h5>
        <p>
          Atunci cand va inregistrati pe acest site, generam un cookie cu datele
          de pe acesta. Cookie-ul ne ajuta in pasii urmatori pentru a comunica
          cu server-ul. Este posibil ca acesta sa ramana daca nu urmati toti
          pasii inregistrarii, dar el va fi rescris data urmatoare cand va veti
          inregistra din nou.
        </p>

        <h5>Alte cookie-uri ale tertelor parti</h5>
        <p>
          Pe unele pagini, tertii pot seta propriile cookie-uri anonime, in
          scopul de a urmari succesul unei aplicatii, sau pentru a customiza o
          aplicatie. Datorita modului de utilizare, acest site nu poate accesa
          aceste cookie-uri, la fel cum tertele parti nu pot accesa cookie-urile
          detinute de acest site. De exemplu, cand distribuiti o pagina folosind
          butonul pentru retelele sociale aflat pe acest site, acea retea
          sociala va inregistra activitatea dvs.
        </p>

        <h4>
          Ce tip de informatii sunt stocate si accesate prin intermediul
          cookie-urilor?
        </h4>
        <p>
          Cookie-urile pastreaza informatii intr-un fisier text de mici
          dimensiuni care permit unui website sa recunoasca un browser.
          Webserver-ul va recunoaste browserul pana cand cookie-ul expira sau
          este sters. Cookie-ul stocheaza informatii importante care
          imbunatatesc experienta de navigare pe Internet (ex: un numar de
          ordine pentru donatia ta).
        </p>

        <h4>De ce sunt cookie-urile importante pentru Internet?</h4>
        <p>
          Cookie-urile reprezinta punctul central al functionarii eficiente a
          Internetului, ajutand la generarea unei experiente de navigare
          prietenoase si adaptata preferintelor si intereselor fiecarui
          utilizator. Refuzarea sau dezactivarea cookieurilor poate face unele
          site-uri imposibil de folosit.
        </p>
        <p>
          Refuzarea sau dezactivarea cookie-urilor nu inseamna ca nu veti mai
          primi publicitate online - ci doar ca aceasta nu va mai putea tine
          cont de preferintele si interesele dvs, evidentiate prin
          comportamentul de navigare.
        </p>

        <h4>Securitate si probleme legate de confidentialitate</h4>
        <p>
          Cookie-urile NU sunt virusi! Ele folosesc formate tip plain text. Nu
          sunt alcatuite din bucati de cod asa ca nu pot fi executate nici nu
          pot auto-rula. In consecinta, nu se pot duplica sau replica pe alte
          retele pentru a se rula sau replica din nou. Deoarece nu pot indeplini
          aceste functii, nu pot fi considerate virusi.
        </p>
        <p>
          Cookie-urile pot fi totusi folosite pentru scopuri negative. Deoarece
          stocheaza informatii despre preferintele si istoricul de navigare al
          utilizatorilor, atat pe un anume site cat si pe mai multe alte
          siteuri, cookieurile pot fi folosite ca o forma de Spyware. Multe
          produse anti-spyware sunt constiente de acest fapt si in mod constant
          marcheaza cookie-urile pentru a fi sterse in cadrul procedurilor de
          stergere/scanare anti-virus/anti-spyware.
        </p>
        <p>
          In general browserele au integrate setari de confidentialitate care
          furnizeaza diferite nivele de acceptare a cookieurilor, perioada de
          valabilitate si stergere automata dupa ce utilizatorul a vizitat un
          anumit site.
        </p>

        <h4>Alte aspecte de securitate legate de cookie-uri</h4>
        <p>
          Deoarece protectia identitatii este foarte valoroasa si reprezinta
          dreptul fiecarui utilizator de internet, este indicat sa se stie ce
          eventuale probleme pot crea cookieurile. Pentru ca prin intermediul
          lor se transmit in mod constant in ambele sensuri informatii intre
          browser si website, daca un atacator sau persoana neautorizata
          intervine in parcursul de transmitere a datelor, informatiile
          continute de cookie pot fi interceptate. Desi foarte rar, acest lucru
          se poate intampla daca browserul se conecteaza la server folosind o
          retea necriptata (ex: o retea WiFi nesecurizata).
        </p>
        <p>
          Alte atacuri bazate pe cookie implica setari gresite ale cookieurilor
          pe servere. Daca un website nu solicita browserului sa foloseasca doar
          canale criptate, atacatorii pot folosi aceasta vulnerabilitate pentru
          a pacali browserele in a trimite informatii prin intermediul canalelor
          nesecurizate. Atacatorii utilizeaza apoi informatiile in scopuri de a
          accesa neautorizat anumite site-uri. Este foarte important sa fiti
          atenti in alegerea metodei celei mai potrivite de protectie a
          informatiilor personale.
        </p>

        <h4>
          Sfaturi pentru o navigare sigura si responsabila, bazata pe cookies
        </h4>
        <p>
          Datorita flexibilitatii lor si a faptului ca majoritatea dintre cele
          mai vizitate site-uri si cele mai mari folosesc cookieuri, acestea
          sunt aproape inevitabile. Dezactivarea cookie-urilor nu va permite
          accesul utilizatorului pe site-urile cele mai raspandite si utilizate
          printre care Youtube, Gmail, Yahoo si altele. Iata cateva sfaturi care
          va pot asigura ca navigati fara griji insa cu ajutorul cookie-urilor:
        </p>
        <ul>
          <li>
            Particularizati-va setarile browserului in ceea ce priveste
            cookie-urile pentru a reflecta un nivel confortabil pentru voi al
            securitatii utilizarii cookie-urilor. Daca nu va deranjeaza
            cookie-urile si sunteti singura persoana care utilizaeaza
            computerul, puteti seta termene lungi de expirare pentru stocarea
            istoricului de navigare si al datelor personale de acces. Daca
            impartiti accesul la calculator, puteti lua in considerare setarea
            browserului pentru a sterge datele individuale de navigare de
            fiecare data cand inchideti browserul. Aceasta este o varianta de a
            accesa site-urile care plaseaza cookie-uri si de a sterge orice
            informatie de vizitare la inchiderea sesiunii navigare.
          </li>
          <li>Instalati-va si updatati-va constant aplicatii antispyware.</li>
        </ul>
        <p>
          Multe dintre aplicatiile de detectare si prevenire a spyware-ului
          includ detectarea atacurilor pe site-uri. Astfel, impiedica browserul
          de la a accesa website-uri care ar putea sa exploateze
          vulnerabilitatile browserului sau sa descarce software periculos.
          Asigurati-va ca aveti browserul mereu updatat. Multe dintre atacurile
          bazate pe cookies se realizeaza exploatand punctele slabe ale
          versiunilor vechi ale browserelor.
        </p>
        <p>
          Cookie-urile sunt pretutindeni si nu pot fi evitate daca doriti sa va
          bucurati de acces pe cele mai bune si cele mai mari site-uri de pe
          Internet - locale sau internationale. Cu o intelegere clara a modului
          lor de operare si a beneficiilor pe care le aduc, puteti lua masurile
          necesare de securitate astel incat sa puteti naviga cu incredere pe
          internet.
        </p>

        <h4>Cum pot opri cookie-urile?</h4>
        <p>
          Dezactivarea si refuzul de a primi cookie-uri pot face anumite
          site-uri impracticabile sau dificil de vizitat si folosit. De
          asemenea, refuzul de a accepta cookie-uri nu inseamna ca nu veti mai
          primi/vedea publicitate online.
        </p>
        <p>
          Este posibila setarea din browser pentru ca aceste cookie-uri sa nu
          mai fie acceptate sau poti seta browserul sa accepte cookie-uri de la
          un site anume. Dar, de exemplu, daca nu doresti sa folosesti
          cookie-urile nu poti sa urmezi si pasii urmatori dupa inregistrarea
          completarea formularului.
        </p>
        <p>
          Toate browserele moderne ofera posibilitatea de a schimba setarile
          cookie-urilor. Aceste setari se gasesc de regula in "optiuni" sau in
          meniul de "preferinte" al browserului tau.
        </p>
        <p>
          Pentru setarile cookie-urilor generate de terti, si pentru mai multe
          informatii privind confidentialitatea legata de publicitatea online,
          IAB Romania pune la dispozitie urmatorul site:{" "}
          <a
            className={classes.link}
            href="http://www.youronlinechoices.com/ro/"
          >
            http://www.youronlinechoices.com/ro/
          </a>
        </p>
      </div>
    );
  }
}

PrivacyPolicy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrivacyPolicy);

import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from 'material-ui/Typography';


const styles = theme => ({
  titleMargin: {
    marginTop: 32,
  },
  paragraphMargin: {
    marginTop: 16,
  },
  link: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.dark
    }
  }
});

class Information extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1">Nota de informare</Typography>
        <Typography variant="title" className={classes.titleMargin}>Privind prelucrarea datelor cu caracter personal</Typography>

        <Typography variant="body1">
          “Redirectioneaza.ro” este o platformă online dezvoltată de Asociația
          Code for Romania (denumită în continuare “Code for Romania”) care vine
          în sprijinul acțiunilor civice de redirecționare a 2% din impozitul
          anual, având ca obiectiv facilitarea relației cu ONG-urile. În acest
          scop, Code for Romania colectează date personale conform acestei Note
          de informare, în calitate de operator de date.
        </Typography>

        <Typography variant="body1" className={classes.paragraphMargin}>
          Asociația Code for Romania este o persoană juridică, avand sediul in
          Mun. Bucuresti, Piata Alba Iulia nr. 7, bloc I6, etaj 1, ap. 6,
          inregistrata in registrul special, Partea A, sectiunea I
          67/06.07.2016.
        </Typography>

        <Typography variant="body1" className={classes.paragraphMargin}>
          Înțelegem că ești conștient despre și ai grija de propriile tale
          interese personale privind confidențialitatea și luam acest lucru în
          serios. Această Nota de informare descrie politicile și practicile
          Code for Romania privind colectarea și utilizarea datelor tale
          personale.
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>1. Datele personale prelucrate</Typography>
        <Typography variant="body1">
          Completând formularul pus la dispoziție în dreptul fiecărui ONG pe
          care l-ai selectat, putem colecta următoarele date cu caracter
          personal (denumite in continuare „Date personale”):
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          <li>numele și prenumele</li>
          <li>codul numeric personal</li>
          <li>adresa</li>
          <li>e-mailul</li>
          <li>numărul de telefon</li>
          <li>inițiala prenumelui tatălui</li>
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>2. Scop și temei</Typography>
        <Typography variant="body1">
          Code for Romania prelucrează date cu caracter personal doar în
          interesul utilizatorilor site-ului care își exprimă consimțământul cu
          privire la facilitarea completării formularului tip 230 de către Code
          for Romania sau dacă utilizatorii doresc transmiterea datelor lor
          către ONG-uri.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Code for Romania prelucrează Datele tale personale menționate mai sus
          doar dacă dorești ca preambulul formularului tip 230 sa fie
          precompletat de către noi cu datele necesare astfel încât formularul
          să fie valabil, conform prevederilor legale. În acest fel, formularul
          tip 230 se generează în format PDF, putând fi descărcat ulterior de
          către tine.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          În cazul în care nu dorești ca Datele tale personale să fie
          prelucrate, poți alege să redirecționezi cei 2% din impozit descărcând
          si completând chiar tu formularul tip 230 de pe site.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          De asemenea, poți alege să transmiți datele tale de contact către
          ONG-ul preferat, pentru ca aceștia să te poată contacta ulterior sau
          sa iți poată transmite alte materiale informative referitoare la
          activitatea lor. Aceste Date personale vor fi transmise direct către
          ONG, ele nu vor putea fi accesibile sau utilizate în vreun fel de Code
          for Romania.
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>3. Durata stocării</Typography>
        <Typography variant="body1">
          Datele personale furnizare sunt stocate temporar până la completarea
          formularului tip 230, urmând a fi șterse din evidențele Code for
          Romania imediat după ce formularul tip 230 a fost completat.
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>4. Transmiterea Datelor personale către terți</Typography>
        <Typography variant="body1">
          Code for Romania poate furniza Datele personale pe care le-ai oferit
          ONG-ului ales de tine. Acest lucru se întâmplă în temeiul unui
          angajament de confidențialitate din partea acestuia, prin care
          garantează că Datele personale sunt păstrate în siguranță.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Datele pot fi furnizate și către instituții sau autorități publice,
          precum și altor organe abilitate ale statului, în baza și în limitele
          prevederilor legale, ca urmare a unor cereri expres formulate de
          acestea.
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>5. Drepturile tale</Typography>
        <Typography variant="body1">
          În calitate de utilizator al platformei redirecționează.ro, potrivit
          Legii nr. 677/2001, precum și, începând cu 25 mai 2018, potrivit
          Regulamentului general privind protecția datelor, ai următoarele
          drepturi:
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          <li>
            Dreptul la informare cu privire la prelucrarea Datelor personale de
            către Code for Romania;
          </li>
          <li>
            Dreptul de acces la Datele personale, la cerere și în mod gratuit
            pentru o solicitare pe an;
          </li>
          <li>
            Dreptul de intervenție, rectificarea sau ștergerea Datelor
            personale, la cerere și în mod gratuit;
          </li>
          <li>
            Dreptul de a te adresa Autorității Naționale de Supraveghere privind
            Prelucrarea Datelor cu Caracter Personal (cu sediul în Bucureşti,
            sector 1, B-dul G-ral. Gheorghe Magheru, www.dataprotection.ro) sau
            justiției, pentru apărarea oricăror drepturi garantate de lege;
          </li>
          <li>
            începând cu 25 mai 2018, potrivit Regulamentului general privind
            protecția datelor, Dreptul la restricționarea prelucrării.
          </li>
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>6. Securitate și confidențialitate</Typography>
        <Typography variant="body1">
          Protecția informațiilor în cursul prelucrării Datelor tale personale
          este o preocupare majoră a Code for Romania, de aceea toate Datele
          personale colectate în cursul vizitelor pe redirectioneaza.ro sunt
          prelucrate conform prevederilor legale în vigoare în România. Code for
          Romania folosește tehnologii de ultimă generație și ia toate măsurile
          tehnice rezonabile pentru transmiterea și păstrarea Datelor personale
          în condiții de deplină securitate și confidențialitate.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Toate Datele personale de pe site sunt stocate și procesate pe servere
          situate în Uniunea Europeana, ce cad sub incidența legislației
          europene de protecție a datelor personale. Nicio informație oferită pe
          acest site nu părăsește teritoriul Uniunii Europene.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Code for Romania se angajează să nu dezvăluie Datele personale cu
          privire la vizitele tale pe redirectioneaza.ro, exceptând situațiile
          legale sau situațiile prezentate în această Notă de informare.
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Dacă descoperim un incident cu privire la securitatea datelor
          personale care prezintă un risc pentru drepturile și libertățile
          utilizatorilor noștri, vom notifica Autoritatea Națională de
          Supraveghere privind Prelucrarea Datelor cu Caracter Personale în
          termen de 72 de ore. Dacă incidentul de securitate este de natură să
          prezinte un risc ridicat pentru drepturile și libertățile tale, vei
          fi, de asemenea, notificat.
        </Typography>

        <Typography variant="title" className={classes.titleMargin}>7. Contactează Code for Romania</Typography>
        <Typography variant="body1">
          Pentru orice întrebări sau preocupări, precum și pentru exercitarea
          drepturilor tale legate de prelucrarea Datelor personale de către Code
          for Romania, ne poti contacta la:
        </Typography>
        <Typography variant="body1" className={classes.paragraphMargin}>
          Adresa: Piata Alba Iulia nr. 7, bloc I6, etaj 1, ap. 6, mun.
          Bucuresti, Romania <br />
          E-mail: <a href="mailto:redirectioneaza@code4.ro" className={classes.link}>redirectioneaza@code4.ro</a>
        </Typography>
      </div>
    );
  }
}

Information.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Information);

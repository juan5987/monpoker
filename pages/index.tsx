import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import img_chips from '../assets/images/card_chips.webp';
import img_tournament from '../assets/images/card_tournament.webp';
import img_timer from '../assets/images/card_timer.webp';
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <>
      <Head>
        <title>MONPOKER</title>
        <meta
          name='description'
          content='Votre gestionnaire pour organiser vos parties de poker'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.banner}>
          <h1 className={styles.title}>monpoker</h1>
          <h2 className={styles.subtitle}>
            Votre gestionnaire pour vos parties de poker entre amis
          </h2>
          <ul className={styles.list}>
            <li className={styles.element}>
              <p className={styles.description}>
                Fatigué de devoir calculer combien de jetons distribuer à chaque
                joueur ?
              </p>
            </li>
            <li className={styles.element}>
              <p className={styles.description}>
                Envie d&apos;organiser simplement et rapidement un tournoi de
                poker entre amis ?
              </p>
            </li>
            <li className={styles.element}>
              <p className={styles.description}>
                Besoin d&apos;un timer personnalisé qui s&apos;adapte à vos
                parties ?
              </p>
            </li>
          </ul>

          <Link href='/signup' className={styles.start}>
            Commencez
          </Link>
        </div>
        <span className={styles.about}>
          MONPOKER qu&apos;est ce que c&apos;est ?
        </span>
        <section className={styles.features}>
          <div className={styles.feature}>
            <Image
              src={img_chips}
              alt='jetons'
              className={styles.cardImg}
              placeholder='blur'
            />
            <h3 className={styles.featureTitle}>Gestion des jetons</h3>
            <p className={styles.featureDescription}>
              Virtualisez vos jetons de poker et laissez notre outil calculer
              pour vous combien de jetons distribuer à chaque joueur en
              fonctions de ceux que vous possédez physiquement.
            </p>
          </div>
          <div className={styles.feature}>
            <Image
              src={img_tournament}
              alt='tournois'
              className={styles.cardImg}
              placeholder='blur'
            />
            <h3 className={styles.featureTitle}>Gestion des tournois</h3>
            <p className={styles.featureDescription}>
              Organiser vos tournois n&apos;aura jamais été aussi simple.
              Laissez vous guider par notre outil pour pouvoir consulter les
              détails à n&apos;importe quel moment et avoir accès à
              l&apos;historique de vos tournois.
            </p>
          </div>
          <div className={styles.feature}>
            <Image
              src={img_timer}
              alt='tournois'
              className={styles.cardImg}
              placeholder='blur'
            />
            <h3 className={styles.featureTitle}>Timer personnalisé</h3>
            <p className={styles.featureDescription}>
              Un timer qui correspond parfaitement à vos parties de poker
              puisqu&apos;il est automatiquement paramétré lors du lancement
              d&apos;un tournoi. Un clic et c&apos;est parti !
            </p>
          </div>
        </section>
        <span className={styles.about}>Comment utiliser MONPOKER ?</span>
        <section className={styles.use}>
          <p className={styles.useText}>
            MONPOKER a été développé afin d&apos;offrir une expérience
            utilisateur simple et intuitive. Afin d&apos;avoir accès à toutes
            les fonctionnalités, vous devrez commencer par créer un compte
            utilisateur. Cette étape est obligatoire afin de stocker dans notre
            base de données sécurisée les données liées aux tournois que vous
            organiserez. Une fois inscrit et connecté, il vous suffit de lancer
            un de nos outils à partir de la barre de navigation puis de vous
            laisser guider.
          </p>
        </section>
        <p className={styles.signupText}>
          MONPOKER est complètement gratuit, alors n&apos;hésitez plus et
          laissez vous guider !
        </p>
        <Link href='/signup' className={styles.signup}>
          Créer mon compte
        </Link>
      </main>
    </>
  );
};

export default Home;

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Tournaments.module.css';

const Tournaments = () => {
  const [tournaments, setTournaments] = useState([
    {
      name: 'Poker chez Juan',
      date: '30-01-2023',
      statut: 'prévu',
    },
    {
      name: 'Poker chez Wills',
      date: '16-06-2023',
      statut: 'prévu',
    },
    {
      name: 'Poker du nouvel an',
      date: '01-01-2023',
      statut: 'terminé',
    },
    {
      name: 'Poker de noel',
      date: '25-12-2022',
      statut: 'prévu',
    },
    {
      name: 'Poker',
      date: '26-08-2023',
      statut: 'terminé',
    },
    {
      name: 'Poker chez Juan',
      date: '30-01-2023',
      statut: 'prévu',
    },
    {
      name: 'Poker chez Wills',
      date: '16-06-2023',
      statut: 'prévu',
    },
  ]);

  return (
    <div className={styles.tournaments}>
      <div className={styles.wrapper}>
        <div className={styles.bar}>
          <h2 className={styles.title}>Mes tournois</h2>
        </div>
        <div className={styles.filterBar}>
          <div className={styles.filterElements}>
            <div className={styles.filterElement}>
              <label className={styles.filterLabel} htmlFor='filter'>
                Trier par:
              </label>
              <select className={styles.filterSelect} name='filter' id='filter'>
                <option className={styles.filterOption} value='date'>
                  date
                </option>
                <option className={styles.filterOption} value='name'>
                  nom
                </option>
                <option className={styles.filterOption} value='status'>
                  statut
                </option>
              </select>
            </div>
            <div className={styles.filterElement}>
              <label className={styles.filterLabel} htmlFor='order'>
                Ordre:
              </label>
              <select className={styles.filterSelect} name='order' id='order'>
                <option className={styles.filterOption} value='ascending'>
                  croissant
                </option>
                <option className={styles.filterOption} value='descending'>
                  décroissant
                </option>
              </select>
            </div>
          </div>

          <Link href='/tournament/create' className={styles.add}>
            <div className={styles.addButton}>
              <div className={styles.addButtonBar}></div>
              <div className={styles.addButtonBar}></div>
            </div>
            <div className={styles.addText}>Créer un tournoi</div>
          </Link>
        </div>
        {tournaments.length > 0 ? (
          tournaments.map((tournament, i) => (
            <div
              className={
                tournament.statut === 'terminé'
                  ? styles.tournamentFinished
                  : styles.tournament
              }
              key={i}
            >
              <div className={styles.tournamentLeft}>
                <h3 className={styles.tournamentTitle}>{tournament.name}</h3>
                <span className={styles.tournamentDate}>{tournament.date}</span>
              </div>
              <div className={styles.tournamentRight}>
                <h3>statut</h3>
                <span className={styles.tournamentStatut}>
                  {tournament.statut}
                </span>
              </div>
            </div>
          ))
        ) : (
          <span className={styles.noTournament}>Aucun tournoi</span>
        )}
      </div>
    </div>
  );
};

export default Tournaments;

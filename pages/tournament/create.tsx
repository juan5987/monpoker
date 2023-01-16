import React from 'react';
import dateFormat from 'dateformat';
import styles from '../../styles/CreateTournaement.module.css';

const Create = () => {
  const [stage, setStage] = React.useState(0);
  const [rebuyChecked, setRebuyChecked] = React.useState(false);
  const [validated, setvalidated] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    name: 'Mon tournoi',
    date: dateFormat(new Date(), 'yyyy-mm-dd'),
    time: '00:00',
    location: '',
    nbPlayers: 2,
    startingStack: 1000,
    buyin: 0,
    rebuy: false,
    rebuyDuration: '00:00',
    numberOfRebuy: 1,
    addon: false,
    comment: '',
  });

  const [showInfo, setShowInfo] = React.useState({
    startingStack: false,
    buyin: false,
    name: false,
    date: false,
    location: false,
    nbPlayers: false,
    comment: false,
    time: false,
    rebuy: false,
    rebuyDuration: false,
    numberOfRebuy: false,
    addon: false,
  });

  const handleNext = () => {
    setStage(stage + 1);
  };
  const handlePrevious = () => {
    setStage(stage - 1);
  };
  const handleChange = (e: any) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setvalidated(true);
  };
  const handleCorrect = () => {
    setStage(0);
    setvalidated(false);
  };
  const handleShowInfo = (e: any) => {
    setShowInfo({
      ...showInfo,
      [e.target.dataset.info]: true,
    });
  };

  const handleHideInfo = (e: any) => {
    setShowInfo({
      ...showInfo,
      [e.target.dataset.info]: false,
    });
  };

  const handleAddRebuy = () => {
    setFormValues({ ...formValues, rebuy: true });
    setStage(stage + 1);
  };

  const handleRemoveRebuy = () => {
    setFormValues({ ...formValues, rebuy: false });
    setStage(stage + 1);
  };

  const handleAddAddon = () => {
    setFormValues({ ...formValues, addon: true });
    setStage(stage + 1);
  };

  const handleRemoveAddon = () => {
    setFormValues({ ...formValues, addon: false });
    setStage(stage + 1);
  };

  const handleCreateTournament = () => {};

  return (
    <div className={styles.createTournament}>
      {!validated ? (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Création d&apos;un tournoi</h2>
          <p className={styles.tuto}>
            Pour créer votre tournoi, complétez chaque champs jusqu&apos;au
            récapitulatif.
            <br /> Si vous avez besoin d&apos;aide, vous pouvez cliquer sur le
            point d&apos;interrogation pour obtenir des précisions.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.elements}>
              <div
                className={styles.element}
                style={{
                  right: stage.toString() + '00vw',
                  marginBottom: '5rem',
                }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='name' className={styles.label}>
                    Nom du tournoi
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='name'
                  >
                    ?
                  </span>
                </div>
                {showInfo.name && (
                  <div className={styles.infoBlock}>
                    Le nom qui apparaitra dans votre liste de tournois.
                  </div>
                )}
                <input
                  type='text'
                  className={styles.input}
                  id='name'
                  name='name'
                  placeholder='saisir un nom'
                  value={formValues.name}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='date' className={styles.label}>
                    Date
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='date'
                  >
                    ?
                  </span>
                </div>
                {showInfo.date && (
                  <div className={styles.infoBlock}>
                    La date à laquelle se déroulera le tournoi.
                  </div>
                )}

                <input
                  type='date'
                  className={styles.input}
                  id='date'
                  name='date'
                  value={formValues.date}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='time' className={styles.label}>
                    Heure
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='time'
                  >
                    ?
                  </span>
                </div>
                {showInfo.time && (
                  <div className={styles.infoBlock}>
                    L&apos;heure à laquelle se déroulera le tournoi.
                  </div>
                )}

                <input
                  type='time'
                  className={styles.input}
                  id='time'
                  name='time'
                  value={formValues.time}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='location' className={styles.label}>
                    Lieu
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='location'
                  >
                    ?
                  </span>
                </div>
                {showInfo.location && (
                  <div className={styles.infoBlock}>
                    Champ libre et facultatif: lieu où se déroulera le tournoi.
                    Vous pouvez indiquer par exemple: &quot; chez fred&quot; ou
                    renseigner une adresse
                  </div>
                )}

                <input
                  type='text'
                  className={styles.input}
                  id='location'
                  name='location'
                  placeholder='saisir un lieu'
                  value={formValues.location}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='nbPlayers' className={styles.label}>
                    Nombre de joueurs
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='nbPlayers'
                  >
                    ?
                  </span>
                </div>
                {showInfo.nbPlayers && (
                  <div className={styles.infoBlock}>
                    Le nombre de joueurs qui participeront au tournoi.
                  </div>
                )}

                <input
                  type='number'
                  className={styles.input}
                  id='nbPlayers'
                  name='nbPlayers'
                  placeholder='saisir le nom du tournoi'
                  value={formValues.nbPlayers}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='startingStack' className={styles.label}>
                    Tapis de départ
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='startingStack'
                  >
                    ?
                  </span>
                </div>
                {showInfo.startingStack && (
                  <div className={styles.infoBlock}>
                    Le tapis de départ correspond au montant de jetons que
                    chaque joueur possèdera au début de la partie.
                  </div>
                )}

                <input
                  type='number'
                  className={styles.input}
                  id='startingStack'
                  name='startingStack'
                  value={formValues.startingStack}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='buyin' className={styles.label}>
                    Prix d&apos;entrée
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='buyin'
                  >
                    ?
                  </span>
                </div>
                {showInfo.buyin && (
                  <div className={styles.infoBlock}>
                    Le prix d&apos;entrée ou buy-in est le montant en argent
                    réel que vous devrez payer pour participer au tournoi.
                  </div>
                )}
                <input
                  type='number'
                  className={styles.input}
                  id='buyin'
                  name='buyin'
                  value={formValues.buyin}
                  onChange={handleChange}
                />
                <button
                  className={styles.next}
                  type='button'
                  onClick={handleNext}
                >
                  Suivant
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <span
                  className={styles.info}
                  onMouseOver={handleShowInfo}
                  onMouseLeave={handleHideInfo}
                  data-info='rebuy'
                  style={{ marginBottom: '2rem' }}
                >
                  ?
                </span>
                <div className={styles.labelWrapper}>
                  <label htmlFor='rebuy' className={styles.label}>
                    Rebuy autorisé ?
                  </label>
                </div>

                {showInfo.rebuy && (
                  <div className={styles.infoBlock}>
                    Le rebuy est une période durant laquelle les joueurs
                    éliminés peuvent revenir dans la partie avec le tapis de
                    départ du tournoi en payant à nouveau le prix d&apos;entrée.
                  </div>
                )}
                <div className={styles.rebuy}>
                  <button
                    className={styles.no}
                    type='button'
                    onClick={handleRemoveRebuy}
                  >
                    Non
                  </button>
                  <button
                    className={styles.yes}
                    type='button'
                    onClick={handleAddRebuy}
                  >
                    Oui
                  </button>
                </div>

                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
              {formValues.rebuy && (
                <>
                  <div
                    className={styles.element}
                    style={{ right: stage.toString() + '00vw' }}
                  >
                    <span
                      className={styles.info}
                      onMouseOver={handleShowInfo}
                      onMouseLeave={handleHideInfo}
                      data-info='rebuy'
                      style={{ margin: '1rem auto' }}
                    >
                      ?
                    </span>
                    <div className={styles.labelWrapper}>
                      <label htmlFor='rebuy' className={styles.label}>
                        Durée du rebuy (en heures)
                      </label>
                    </div>
                    {showInfo.rebuy && (
                      <div
                        className={styles.infoBlock}
                        style={{ fontSize: '1.2rem', top: '4rem' }}
                      >
                        Le rebuy est une période durant laquelle les joueurs
                        éliminés peuvent revenir dans la partie avec le tapis de
                        départ du tournoi en payant à nouveau le prix
                        d&apos;entrée.
                        <br />
                        Vous vous pouvez autoriser un nombre de rebuy limité ou
                        illimité pendant toute la durée du rebuy.
                      </div>
                    )}

                    <input
                      type='time'
                      className={styles.input}
                      id='rebuyDuration'
                      name='rebuyDuration'
                      value={formValues.rebuyDuration}
                      onChange={handleChange}
                    />
                    <button
                      className={styles.next}
                      type='button'
                      onClick={handleNext}
                    >
                      Suivant
                    </button>
                    <button
                      className={styles.previous}
                      type='button'
                      onClick={handlePrevious}
                    >
                      retour
                    </button>
                  </div>
                  <div
                    className={styles.element}
                    style={{ right: stage.toString() + '00vw' }}
                  >
                    <div className={styles.labelWrapper}>
                      <label htmlFor='numberOfRebuy' className={styles.label}>
                        Nombre de rebuy
                      </label>
                      <span
                        className={styles.info}
                        onMouseOver={handleShowInfo}
                        onMouseLeave={handleHideInfo}
                        data-info='numberOfRebuy'
                      >
                        ?
                      </span>
                    </div>
                    {showInfo.numberOfRebuy && (
                      <div className={styles.infoBlock}>
                        Le nombre de fois que les joueurs pourront effectuer un
                        rebuy. Si illimité, les joueurs pourront effectuer un
                        rebuy autant de fois qu&apos;ils le souhaitent pendant
                        la durée du rebuy.
                      </div>
                    )}
                    <label
                      className={styles.checkboxWrapper}
                      htmlFor='checkbox'
                    >
                      <input
                        className={styles.checkboxInput}
                        type='checkbox'
                        id='checkbox'
                        onChange={() => setRebuyChecked(!rebuyChecked)}
                        checked={rebuyChecked}
                      />
                      <span className={styles.checkmark}></span>
                      <span className={styles.checkboxLabel}>Illimité</span>
                    </label>

                    <input
                      type='number'
                      className={styles.input}
                      id='numberOfRebuy'
                      name='numberOfRebuy'
                      value={rebuyChecked ? '' : formValues.numberOfRebuy}
                      onChange={handleChange}
                      disabled={rebuyChecked}
                    />
                    <button
                      className={styles.next}
                      type='button'
                      onClick={handleNext}
                    >
                      Suivant
                    </button>
                    <button
                      className={styles.previous}
                      type='button'
                      onClick={handlePrevious}
                    >
                      retour
                    </button>
                  </div>
                  <div
                    className={styles.element}
                    style={{ right: stage.toString() + '00vw' }}
                  >
                    <span
                      className={styles.info}
                      onMouseOver={handleShowInfo}
                      onMouseLeave={handleHideInfo}
                      data-info='addon'
                      style={{ marginBottom: '2rem' }}
                    >
                      ?
                    </span>
                    <div className={styles.labelWrapper}>
                      <label htmlFor='addon' className={styles.label}>
                        Add-on autorisé ?
                      </label>
                    </div>

                    {showInfo.addon && (
                      <div className={styles.infoBlock}>
                        Lorsque la période de rebuy est terminée, les joueurs
                        pourront choisir de payer le montant du buy-in pour
                        obtenir l&apos;équivalent du tapis de départ en jetons
                        (une seule fois).
                      </div>
                    )}
                    <div className={styles.rebuy}>
                      <button
                        className={styles.no}
                        type='button'
                        onClick={handleRemoveAddon}
                      >
                        Non
                      </button>
                      <button
                        className={styles.yes}
                        type='button'
                        onClick={handleAddAddon}
                      >
                        Oui
                      </button>
                    </div>

                    <button
                      className={styles.previous}
                      type='button'
                      onClick={handlePrevious}
                    >
                      retour
                    </button>
                  </div>
                </>
              )}

              <div
                className={styles.element}
                style={{ right: stage.toString() + '00vw' }}
              >
                <div className={styles.labelWrapper}>
                  <label htmlFor='comment' className={styles.label}>
                    Commentaire
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='comment'
                  >
                    ?
                  </span>
                </div>
                {showInfo.comment && (
                  <div className={styles.infoBlock}>
                    Commentaire libre et facultatif.
                  </div>
                )}

                <textarea
                  className={styles.input}
                  id='comment'
                  name='comment'
                  rows={3}
                  placeholder='Commentaire libre'
                  value={formValues.comment}
                  onChange={handleChange}
                  style={{ textAlign: 'left' }}
                ></textarea>
                <button className={styles.next} type='submit'>
                  Valider
                </button>
                <button
                  className={styles.previous}
                  type='button'
                  onClick={handlePrevious}
                >
                  retour
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Création d&apos;un tournoi</h2>
          <h3 className={styles.subtitle}>Récapitulatif</h3>
          <p className={styles.tuto}>
            Vérifiez votre saisie, corrigez la si besoin ou confirmez la
            création du tournoi. Vous serez redirigé vers vos tournois.
          </p>
          <div className={styles.recap}>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Nom</span>
              <span className={styles.recapElementValue}>
                {formValues.name ? formValues.name : 'Non renseigné'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Date</span>
              <span className={styles.recapElementValue}>
                {dateFormat(formValues.date, 'dd/mm/yyyy')}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Heure</span>
              <span className={styles.recapElementValue}>
                {formValues.time}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Lieu</span>
              <span className={styles.recapElementValue}>
                {formValues.location ? formValues.location : 'Non renseigné'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Joueurs</span>
              <span className={styles.recapElementValue}>
                {formValues.nbPlayers}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Tapis de départ</span>
              <span className={styles.recapElementValue}>
                {formValues.startingStack}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>
                Prix d&apos;entrée
              </span>
              <span className={styles.recapElementValue}>
                {formValues.buyin + ' €'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Rebuy</span>
              <span className={styles.recapElementValue}>
                {formValues.rebuy ? 'oui' : 'non'}
              </span>
            </div>
            {formValues.rebuy && (
              <>
                <div className={styles.recapElement}>
                  <span className={styles.recapElementName}>
                    Durée du rebuy (en heures)
                  </span>
                  <span className={styles.recapElementValue}>
                    {formValues.rebuyDuration}
                  </span>
                </div>
                <div className={styles.recapElement}>
                  <span className={styles.recapElementName}>
                    Nombre de rebuy
                  </span>
                  <span className={styles.recapElementValue}>
                    {rebuyChecked ? 'illimité' : formValues.numberOfRebuy}
                  </span>
                </div>
                <div className={styles.recapElement}>
                  <span className={styles.recapElementName}>Add-on</span>
                  <span className={styles.recapElementValue}>
                    {formValues.addon ? 'oui' : 'non'}
                  </span>
                </div>
              </>
            )}
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Commentaire</span>
              <span className={styles.recapElementValue}>
                {formValues.comment ? formValues.comment : 'aucun commentaire'}
              </span>
            </div>
            <div className={styles.buttons}>
              <button className={styles.correct} onClick={handleCorrect}>
                Corriger
              </button>
              <button
                className={styles.create}
                onClick={handleCreateTournament}
              >
                Confirmer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create;

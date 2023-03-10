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
    buyin: 0,
    rebuy: false,
    rebuyDuration: '00:00',
    numberOfRebuy: 1,
    addon: false,
    deep: 100,
    speed: 10,
    comment: '',
  });

  const [showInfo, setShowInfo] = React.useState({
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
    chips: false,
    deep: false,
    speed: false,
  });

  const [chips, setChips] = React.useState([]);

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
          <h2 className={styles.title}>Cr??ation d&apos;un tournoi</h2>
          <p className={styles.tuto}>
            Pour cr??er votre tournoi, compl??tez chaque champs jusqu&apos;au
            r??capitulatif.
            <br /> Si vous avez besoin d&apos;aide, vous pouvez cliquer sur le
            point d&apos;interrogation pour obtenir des pr??cisions.
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
                    La date ?? laquelle se d??roulera le tournoi.
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
                    L&apos;heure ?? laquelle se d??roulera le tournoi.
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
                    Champ libre et facultatif: lieu o?? se d??roulera le tournoi.
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
                  <label htmlFor='buyin' className={styles.label}>
                    Prix d&apos;entr??e
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
                    Le prix d&apos;entr??e ou buy-in est le montant en argent
                    r??el que vous devrez payer pour participer au tournoi.
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
                <div className={styles.labelWrapper}>
                  <label htmlFor='deep' className={styles.label}>
                    Profondeur
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='deep'
                  >
                    ?
                  </span>
                </div>
                {showInfo.deep && (
                  <div className={styles.infoBlock}>
                    La profondeur d&apos;un tournoi correspond au nombre de
                    blinds que vous aurez en d??but de partie. Un tournoi
                    deepstack d??butera avec 150 ?? 200 blinds en moyenne alors
                    qu&apos;un tournoi turbo d??butera avec 20 ?? 60 blinds en
                    moyenne.
                  </div>
                )}
                <span className={styles.sublabel}>Nombre de blinds</span>

                <input
                  type='number'
                  className={styles.input}
                  id='deep'
                  name='deep'
                  value={formValues.deep}
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
                  <label htmlFor='speed' className={styles.label}>
                    Vitesse
                  </label>
                  <span
                    className={styles.info}
                    onMouseOver={handleShowInfo}
                    onMouseLeave={handleHideInfo}
                    data-info='speed'
                  >
                    ?
                  </span>
                </div>
                {showInfo.speed && (
                  <div className={styles.infoBlock}>
                    La vitesse d&apos;un tournoi correspond au temps entre
                    chaque augmentation des blinds. Un tournoi classique
                    tournera autour de 10 minutes alors qu&apos;un tournoi lent
                    sera autour de 20 minutes ou plus.
                  </div>
                )}
                <span className={styles.sublabel}>Minutes</span>

                <input
                  type='number'
                  className={styles.input}
                  id='speed'
                  name='speed'
                  value={formValues.speed}
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
                    Rebuy autoris?? ?
                  </label>
                </div>

                {showInfo.rebuy && (
                  <div className={styles.infoBlock}>
                    Le rebuy est une p??riode durant laquelle les joueurs
                    ??limin??s peuvent revenir dans la partie avec le tapis de
                    d??part du tournoi en payant ?? nouveau le prix d&apos;entr??e.
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
                        Dur??e du rebuy (en heures)
                      </label>
                    </div>
                    {showInfo.rebuy && (
                      <div
                        className={styles.infoBlock}
                        style={{ fontSize: '1.2rem', top: '4rem' }}
                      >
                        Le rebuy est une p??riode durant laquelle les joueurs
                        ??limin??s peuvent revenir dans la partie avec le tapis de
                        d??part du tournoi en payant ?? nouveau le prix
                        d&apos;entr??e.
                        <br />
                        Vous vous pouvez autoriser un nombre de rebuy limit?? ou
                        illimit?? pendant toute la dur??e du rebuy.
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
                        rebuy. Si illimit??, les joueurs pourront effectuer un
                        rebuy autant de fois qu&apos;ils le souhaitent pendant
                        la dur??e du rebuy.
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
                      <span className={styles.checkboxLabel}>Illimit??</span>
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
                        Add-on autoris?? ?
                      </label>
                    </div>

                    {showInfo.addon && (
                      <div className={styles.infoBlock}>
                        Lorsque la p??riode de rebuy est termin??e, les joueurs
                        pourront choisir de payer le montant du buy-in pour
                        obtenir l&apos;??quivalent du tapis de d??part en jetons
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
          <h2 className={styles.title}>Cr??ation d&apos;un tournoi</h2>
          <h3 className={styles.subtitle}>R??capitulatif</h3>
          <p className={styles.tuto}>
            V??rifiez votre saisie, corrigez la si besoin ou confirmez la
            cr??ation du tournoi. Vous serez redirig?? vers vos tournois.
          </p>
          <div className={styles.recap}>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Nom</span>
              <span className={styles.recapElementValue}>
                {formValues.name ? formValues.name : 'Non renseign??'}
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
                {formValues.location ? formValues.location : 'Non renseign??'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Joueurs</span>
              <span className={styles.recapElementValue}>
                {formValues.nbPlayers}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>
                Prix d&apos;entr??e
              </span>
              <span className={styles.recapElementValue}>
                {formValues.buyin + ' ???'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>Profondeur</span>
              <span className={styles.recapElementValue}>
                {formValues.deep + ' blinds'}
              </span>
            </div>
            <div className={styles.recapElement}>
              <span className={styles.recapElementName}>
                Augmentation des blinds
              </span>
              <span className={styles.recapElementValue}>
                {formValues.speed + ' minutes'}
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
                    Dur??e du rebuy (en heures)
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
                    {rebuyChecked ? 'illimit??' : formValues.numberOfRebuy}
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

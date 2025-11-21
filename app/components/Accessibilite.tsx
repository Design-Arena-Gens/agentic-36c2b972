interface Props {
  formData: any
  updateFormData: (field: string, value: any) => void
}

export default function Accessibilite({ formData, updateFormData }: Props) {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🚶 Cheminement Extérieur et Stationnement
        </h2>

        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
          <p className="text-sm text-green-900">
            <strong>Référence:</strong> Arrêté du 8 décembre 2014 - Articles 1 à 3
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Cheminement extérieur accessible *</label>
            <textarea
              className="form-textarea"
              value={formData.cheminementExterieur}
              onChange={(e) => updateFormData('cheminementExterieur', e.target.value)}
              placeholder="Décrire: largeur minimale 1,40m, pente ≤ 5%, revêtement non meuble/glissant, sans ressaut > 2cm..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Depuis l'accès au terrain jusqu'à l'entrée du bâtiment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Stationnement *</label>
              <input
                type="text"
                className="form-input"
                value={formData.stationnement}
                onChange={(e) => updateFormData('stationnement', e.target.value)}
                placeholder="Ex: 50 places totales"
              />
            </div>

            <div>
              <label className="form-label">Places PMR adaptées *</label>
              <input
                type="text"
                className="form-input"
                value={formData.placesHandicapees}
                onChange={(e) => updateFormData('placesHandicapees', e.target.value)}
                placeholder="Ex: 2 places (min. 2% du total)"
              />
              <p className="text-xs text-gray-500 mt-1">
                Dimensions 3,30m x 5m, signalisation verticale et horizontale
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🏛️ Entrée et Accueil
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Référence:</strong> Arrêté du 8 décembre 2014 - Article 4
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Entrée principale *</label>
            <textarea
              className="form-textarea"
              value={formData.entree}
              onChange={(e) => updateFormData('entree', e.target.value)}
              placeholder="Largeur ≥ 1,40m, porte automatique ou manuel avec effort < 50N, ressaut ≤ 2cm, signalétique..."
            />
          </div>

          <div>
            <label className="form-label">Accueil et banque d'accueil *</label>
            <textarea
              className="form-textarea"
              value={formData.accueil}
              onChange={(e) => updateFormData('accueil', e.target.value)}
              placeholder="Hauteur maximale 0,80m, largeur 0,60m minimum, espace libre sous banque 0,70m..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Prévoir un dispositif permettant le dialogue avec les personnes malentendantes (BIM)
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🔄 Circulations Intérieures
        </h2>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p className="text-sm text-purple-900">
            <strong>Référence:</strong> Arrêté du 8 décembre 2014 - Articles 5 et 6
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Circulations horizontales *</label>
            <textarea
              className="form-textarea"
              value={formData.circulations}
              onChange={(e) => updateFormData('circulations', e.target.value)}
              placeholder="Largeur ≥ 1,40m (0,90m si longueur < 4m), ressauts ≤ 2cm, pente ≤ 5%, zones de retournement..."
            />
          </div>

          <div>
            <label className="form-label">Ascenseur *</label>
            <select
              className="form-select"
              value={formData.ascenseur}
              onChange={(e) => updateFormData('ascenseur', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="PRESENT">Ascenseur présent et accessible</option>
              <option value="NON_REQUIS">Non requis (plain-pied)</option>
              <option value="ABSENT">Absent (dérogation à prévoir)</option>
            </select>
          </div>

          {formData.ascenseur === 'PRESENT' && (
            <div>
              <label className="form-label">Caractéristiques de l'ascenseur</label>
              <textarea
                className="form-input"
                value={formData.ascenseurDetails}
                onChange={(e) => updateFormData('ascenseurDetails', e.target.value)}
                placeholder="Dimensions cabine (1,40m x 1,10m min.), largeur porte ≥ 0,80m, boutons en relief, signaux sonores, miroir..."
              />
            </div>
          )}

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-sm text-yellow-900">
              <strong>Escaliers:</strong> Main courante de chaque côté à 0,80-1,00m,
              contremarches pleines, nez de marche contrasté et non glissant,
              éveil de vigilance en haut et bas de l'escalier.
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🚻 Sanitaires Accessibles
        </h2>

        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
          <p className="text-sm text-indigo-900">
            <strong>Référence:</strong> Arrêté du 8 décembre 2014 - Article 12
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Sanitaires standard *</label>
            <input
              type="text"
              className="form-input"
              value={formData.sanitaires}
              onChange={(e) => updateFormData('sanitaires', e.target.value)}
              placeholder="Nombre et localisation"
            />
          </div>

          <div>
            <label className="form-label">Sanitaires adaptés PMR *</label>
            <textarea
              className="form-textarea"
              value={formData.sanitairesAdaptes}
              onChange={(e) => updateFormData('sanitairesAdaptes', e.target.value)}
              placeholder="Nombre, dimensions (1,50m x 1,80m min.), équipements (barres d'appui, lave-mains accessible, cuvette WC hauteur 0,45-0,50m)..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Au moins 1 cabinet par niveau (ou sexe si plusieurs par sexe)
            </p>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          📋 Signalisation et Équipements
        </h2>

        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
          <p className="text-sm text-teal-900">
            <strong>Référence:</strong> Arrêté du 8 décembre 2014 - Articles 13 et 14
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Signalisation et informations *</label>
            <textarea
              className="form-textarea"
              value={formData.signalisation}
              onChange={(e) => updateFormData('signalisation', e.target.value)}
              placeholder="Signalétique contrastée, lisible (police Arial ou équivalent), positionnée entre 0,90m et 1,60m, pictogrammes normalisés..."
            />
          </div>

          <div>
            <label className="form-label">Équipements et mobilier *</label>
            <textarea
              className="form-textarea"
              value={formData.equipements}
              onChange={(e) => updateFormData('equipements', e.target.value)}
              placeholder="Hauteur des commandes entre 0,90m et 1,30m, contrastes visuels, commandes manœuvrables en position debout/assis..."
            />
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          ♿ Dispositions Spécifiques par Type de Handicap
        </h2>

        <div className="space-y-6">
          <div>
            <label className="form-label">Handicap moteur *</label>
            <textarea
              className="form-textarea"
              value={formData.handicapMoteur}
              onChange={(e) => updateFormData('handicapMoteur', e.target.value)}
              placeholder="Synthèse des dispositions pour fauteuil roulant: largeurs, espaces de manœuvre, ressauts..."
            />
          </div>

          <div>
            <label className="form-label">Handicap visuel *</label>
            <textarea
              className="form-textarea"
              value={formData.handicapVisuel}
              onChange={(e) => updateFormData('handicapVisuel', e.target.value)}
              placeholder="Bandes de guidage podotactiles, contrastes visuels, éclairage adapté, absence d'obstacles en hauteur..."
            />
          </div>

          <div>
            <label className="form-label">Handicap auditif *</label>
            <textarea
              className="form-textarea"
              value={formData.handicapAuditif}
              onChange={(e) => updateFormData('handicapAuditif', e.target.value)}
              placeholder="Boucle magnétique à l'accueil, alarmes visuelles, information écrite, dispositifs de communication adaptés..."
            />
          </div>

          <div>
            <label className="form-label">Handicap mental *</label>
            <textarea
              className="form-textarea"
              value={formData.handicapMental}
              onChange={(e) => updateFormData('handicapMental', e.target.value)}
              placeholder="Signalétique simplifiée avec pictogrammes, cheminement intuitif, éclairage homogène..."
            />
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          ✅ Conformité et Dérogations
        </h2>

        <div className="space-y-6">
          <div>
            <label className="form-label">Conformité au Code de la Construction *</label>
            <textarea
              className="form-textarea"
              value={formData.conformiteCCH}
              onChange={(e) => updateFormData('conformiteCCH', e.target.value)}
              placeholder="Articles R111-19 et suivants du CCH - Préciser la conformité globale"
            />
          </div>

          <div>
            <label className="form-label">Conformité aux arrêtés spécifiques *</label>
            <textarea
              className="form-textarea"
              value={formData.conformiteArrete}
              onChange={(e) => updateFormData('conformiteArrete', e.target.value)}
              placeholder="Arrêté du 8 décembre 2014 (ERP) ou 24 décembre 2015 (Habitation) - Préciser les points de conformité"
            />
          </div>

          <div>
            <label className="form-label">Dérogations éventuelles</label>
            <select
              className="form-select"
              value={formData.derogations}
              onChange={(e) => updateFormData('derogations', e.target.value)}
            >
              <option value="">Aucune dérogation</option>
              <option value="DEMANDEES">Dérogations demandées</option>
            </select>
          </div>

          {formData.derogations === 'DEMANDEES' && (
            <div>
              <label className="form-label">Détail des dérogations demandées</label>
              <textarea
                className="form-textarea"
                value={formData.derogationsDetails}
                onChange={(e) => updateFormData('derogationsDetails', e.target.value)}
                placeholder="Préciser l'article concerné, la nature de la dérogation, les motifs (impossibilité technique, contraintes du bâti existant...) et les mesures compensatoires proposées"
              />
              <p className="text-xs text-gray-500 mt-1">
                Les dérogations doivent être dûment justifiées et validées par la commission d'accessibilité
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="section-card bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          📝 Observations et Remarques Complémentaires
        </h2>

        <div>
          <label className="form-label">Observations générales</label>
          <textarea
            className="form-textarea"
            rows={6}
            value={formData.observations}
            onChange={(e) => updateFormData('observations', e.target.value)}
            placeholder="Ajouter toute information complémentaire pertinente pour le bureau de contrôle ou la commission de sécurité..."
          />
        </div>
      </div>

      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-900 mb-2">Rappels importants 📌</h3>
        <ul className="list-disc list-inside text-sm text-green-800 space-y-1">
          <li>Tous les niveaux accessibles au public doivent être desservis</li>
          <li>Les aménagements doivent permettre une circulation en toute autonomie</li>
          <li>La chaîne de déplacement doit être continue (de l'extérieur aux locaux)</li>
          <li>Prévoir un registre d'accessibilité (obligatoire depuis septembre 2017)</li>
          <li>Formation du personnel à l'accueil des personnes handicapées recommandée</li>
        </ul>
      </div>
    </div>
  )
}

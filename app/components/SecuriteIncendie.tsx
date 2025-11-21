interface Props {
  formData: any
  updateFormData: (field: string, value: any) => void
}

export default function SecuriteIncendie({ formData, updateFormData }: Props) {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🧱 Construction et Stabilité au Feu
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
          <p className="text-sm text-red-900">
            <strong>Référence:</strong> Articles CO 10 à CO 14 de l'arrêté du 25 juin 1980 modifié
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Isolement par rapport aux tiers *</label>
            <textarea
              className="form-textarea"
              value={formData.isolementParRapportTiers}
              onChange={(e) => updateFormData('isolementParRapportTiers', e.target.value)}
              placeholder="Ex: Bâtiment isolé / Murs coupe-feu 2h / Distance > 8m / etc."
            />
            <p className="text-xs text-gray-500 mt-1">
              Préciser les distances, la nature des parois séparatives (CF, REI)
            </p>
          </div>

          <div>
            <label className="form-label">Résistance au feu de la structure *</label>
            <select
              className="form-select"
              value={formData.resistanceStructure}
              onChange={(e) => updateFormData('resistanceStructure', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="R60">R 60 (1 heure)</option>
              <option value="R90">R 90 (1h30)</option>
              <option value="R120">R 120 (2 heures)</option>
              <option value="R180">R 180 (3 heures)</option>
              <option value="STABLE_FEU">Stable au feu selon catégorie</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Structure principale (poteaux, poutres, planchers)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Réaction au feu des matériaux *</label>
              <input
                type="text"
                className="form-input"
                value={formData.reactionFeu}
                onChange={(e) => updateFormData('reactionFeu', e.target.value)}
                placeholder="Ex: A2-s2,d0 / B-s1,d0 / M0, M1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Revêtements muraux, sols, plafonds (Euroclasses ou M)
              </p>
            </div>

            <div>
              <label className="form-label">Cloisons de distribution *</label>
              <input
                type="text"
                className="form-input"
                value={formData.cloisons}
                onChange={(e) => updateFormData('cloisons', e.target.value)}
                placeholder="Ex: CF 1/2h ou EI 30"
              />
            </div>

            <div>
              <label className="form-label">Couverture *</label>
              <input
                type="text"
                className="form-input"
                value={formData.couverture}
                onChange={(e) => updateFormData('couverture', e.target.value)}
                placeholder="Ex: BROOF (t3) / Incombustible"
              />
            </div>

            <div>
              <label className="form-label">Façades *</label>
              <input
                type="text"
                className="form-input"
                value={formData.facades}
                onChange={(e) => updateFormData('facades', e.target.value)}
                placeholder="Ex: C+D / Classe de réaction au feu"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🚪 Distribution Intérieure et Dégagements
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Référence:</strong> Articles CO 34 à CO 58 - Dégagements, issues, circulations
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Description générale des dégagements *</label>
            <textarea
              className="form-textarea"
              value={formData.degagements}
              onChange={(e) => updateFormData('degagements', e.target.value)}
              placeholder="Décrire l'organisation des circulations horizontales et verticales, les issues de secours..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Nombre de sorties / issues *</label>
              <input
                type="text"
                className="form-input"
                value={formData.nombreSorties}
                onChange={(e) => updateFormData('nombreSorties', e.target.value)}
                placeholder="Ex: 2 sorties sur voirie"
              />
            </div>

            <div>
              <label className="form-label">Distance maximale de parcours *</label>
              <input
                type="text"
                className="form-input"
                value={formData.distanceParcours}
                onChange={(e) => updateFormData('distanceParcours', e.target.value)}
                placeholder="Ex: < 30m / < 50m selon locaux"
              />
              <p className="text-xs text-gray-500 mt-1">
                Distance entre tout point et une issue
              </p>
            </div>

            <div>
              <label className="form-label">Largeurs des dégagements *</label>
              <input
                type="text"
                className="form-input"
                value={formData.largeurDegagements}
                onChange={(e) => updateFormData('largeurDegagements', e.target.value)}
                placeholder="Ex: 2 UP (1,40m) minimum"
              />
              <p className="text-xs text-gray-500 mt-1">
                1 UP = 0,60m (ou 0,90m pour la première UP)
              </p>
            </div>

            <div>
              <label className="form-label">Portes *</label>
              <input
                type="text"
                className="form-input"
                value={formData.portes}
                onChange={(e) => updateFormData('portes', e.target.value)}
                placeholder="Ex: CF 1/2h, anti-panique, ouverture vers sortie"
              />
            </div>

            <div className="md:col-span-2">
              <label className="form-label">Escaliers *</label>
              <textarea
                className="form-input"
                value={formData.escaliers}
                onChange={(e) => updateFormData('escaliers', e.target.value)}
                placeholder="Nombre, type (protégé/encloisonné), largeur, matériaux..."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          💨 Désenfumage
        </h2>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
          <p className="text-sm text-purple-900">
            <strong>Référence:</strong> Articles DF 1 à DF 11 - Désenfumage des locaux
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Type de désenfumage requis *</label>
            <select
              className="form-select"
              value={formData.desenfumageType}
              onChange={(e) => updateFormData('desenfumageType', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="NATUREL">Désenfumage naturel</option>
              <option value="MECANIQUE">Désenfumage mécanique</option>
              <option value="MIXTE">Mixte (naturel + mécanique)</option>
              <option value="NON_REQUIS">Non requis</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.desenfumageNaturel}
                onChange={(e) => updateFormData('desenfumageNaturel', e.target.checked)}
                className="rounded"
              />
              <span>Désenfumage naturel (exutoires, ouvrants en façade)</span>
            </label>

            {formData.desenfumageNaturel && (
              <textarea
                className="form-textarea ml-6"
                value={formData.desenfumageNaturelDetails}
                onChange={(e) => updateFormData('desenfumageNaturelDetails', e.target.value)}
                placeholder="Préciser: surface utile d'évacuation (SUE), commande, zones désenfumées..."
              />
            )}

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.desenfumageMecanique}
                onChange={(e) => updateFormData('desenfumageMecanique', e.target.checked)}
                className="rounded"
              />
              <span>Désenfumage mécanique (extracteurs)</span>
            </label>
          </div>

          <div>
            <label className="form-label">Dispositions de désenfumage *</label>
            <textarea
              className="form-textarea"
              value={formData.desenfumageDetails}
              onChange={(e) => updateFormData('desenfumageDetails', e.target.value)}
              placeholder="Détailler les locaux concernés, les débits, les commandes (DAS), canton de désenfumage..."
            />
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🧯 Moyens de Secours
        </h2>

        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-6">
          <p className="text-sm text-orange-900">
            <strong>Référence:</strong> Articles MS 1 à MS 73 - Moyens de secours
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="form-label">Extincteurs *</label>
            <input
              type="text"
              className="form-input"
              value={formData.extincteurs}
              onChange={(e) => updateFormData('extincteurs', e.target.value)}
              placeholder="Ex: 1 par 200 m², type ABC, 6 litres minimum"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.ria}
                onChange={(e) => updateFormData('ria', e.target.checked)}
                className="rounded"
              />
              <span>RIA (Robinet Incendie Armé)</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.colonneSeche}
                onChange={(e) => updateFormData('colonneSeche', e.target.checked)}
                className="rounded"
              />
              <span>Colonne sèche</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.colonneHumide}
                onChange={(e) => updateFormData('colonneHumide', e.target.checked)}
                className="rounded"
              />
              <span>Colonne humide</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.detecteursFumee}
                onChange={(e) => updateFormData('detecteursFumee', e.target.checked)}
                className="rounded"
              />
              <span>Détecteurs de fumée</span>
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={formData.sprinklers}
                onChange={(e) => updateFormData('sprinklers', e.target.checked)}
                className="rounded"
              />
              <span>Sprinklers</span>
            </label>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="form-label">Système de Sécurité Incendie (SSI) *</label>
              <select
                className="form-select"
                value={formData.ssi}
                onChange={(e) => updateFormData('ssi', e.target.value)}
              >
                <option value="">Sélectionner...</option>
                <option value="CATEGORIE_A">Catégorie A (SDI + CMSI + DAS)</option>
                <option value="CATEGORIE_B">Catégorie B (SDI + CMSI)</option>
                <option value="CATEGORIE_C">Catégorie C (CMSI seul)</option>
                <option value="CATEGORIE_D">Catégorie D (Équipement d'alarme type 4)</option>
                <option value="CATEGORIE_E">Catégorie E (Équipement d'alarme type 3 ou 4)</option>
                <option value="NON_REQUIS">Non requis</option>
              </select>
            </div>

            <div>
              <label className="form-label">Système d'alarme *</label>
              <select
                className="form-select"
                value={formData.alarme}
                onChange={(e) => updateFormData('alarme', e.target.value)}
              >
                <option value="">Sélectionner...</option>
                <option value="TYPE1">Type 1 (diffusion générale et zonée)</option>
                <option value="TYPE2a">Type 2a (diffusion générale)</option>
                <option value="TYPE2b">Type 2b (diffusion générale manuelle)</option>
                <option value="TYPE3">Type 3 (sirène + bouton)</option>
                <option value="TYPE4">Type 4 (cloche/sirène)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="form-label">Éclairage de sécurité *</label>
            <input
              type="text"
              className="form-input"
              value={formData.eclairageSecurite}
              onChange={(e) => updateFormData('eclairageSecurite', e.target.value)}
              placeholder="Ex: Évacuation + Ambiance / BAES / LSC"
            />
            <p className="text-xs text-gray-500 mt-1">
              Blocs autonomes (BAES/BAEH) ou source centralisée (LSC)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <h3 className="font-semibold text-red-900 mb-2">Points de vigilance ⚠️</h3>
        <ul className="list-disc list-inside text-sm text-red-800 space-y-1">
          <li>Vérifier la cohérence entre les plans et la notice descriptive</li>
          <li>S'assurer que tous les textes réglementaires applicables sont respectés</li>
          <li>Prévoir les avis techniques (ATEC) pour les systèmes innovants</li>
          <li>Vérifier les distances d'accessibilité pour les engins de secours</li>
          <li>Prévoir les essais et vérifications réglementaires avant ouverture</li>
        </ul>
      </div>
    </div>
  )
}

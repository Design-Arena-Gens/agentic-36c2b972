interface Props {
  formData: any
  updateFormData: (field: string, value: any) => void
}

export default function InfoGenerales({ formData, updateFormData }: Props) {
  return (
    <div className="space-y-6">
      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          🏢 Identification du Projet
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Nom du projet *</label>
            <input
              type="text"
              className="form-input"
              value={formData.nomProjet}
              onChange={(e) => updateFormData('nomProjet', e.target.value)}
              placeholder="Ex: Résidence Les Jardins"
            />
          </div>
          <div>
            <label className="form-label">Adresse complète *</label>
            <input
              type="text"
              className="form-input"
              value={formData.adresse}
              onChange={(e) => updateFormData('adresse', e.target.value)}
              placeholder="Ex: 15 rue Victor Hugo, 75001 Paris"
            />
          </div>
          <div>
            <label className="form-label">Maître d'ouvrage *</label>
            <input
              type="text"
              className="form-input"
              value={formData.maitreDOuvrage}
              onChange={(e) => updateFormData('maitreDOuvrage', e.target.value)}
              placeholder="Nom du maître d'ouvrage"
            />
          </div>
          <div>
            <label className="form-label">Architecte *</label>
            <input
              type="text"
              className="form-input"
              value={formData.architecte}
              onChange={(e) => updateFormData('architecte', e.target.value)}
              placeholder="Votre nom ou cabinet"
            />
          </div>
          <div>
            <label className="form-label">N° d'inscription à l'Ordre *</label>
            <input
              type="text"
              className="form-input"
              value={formData.ordreArchitecte}
              onChange={(e) => updateFormData('ordreArchitecte', e.target.value)}
              placeholder="Ex: S12345"
            />
          </div>
          <div>
            <label className="form-label">Date de dépôt du dossier</label>
            <input
              type="date"
              className="form-input"
              value={formData.dateDepot}
              onChange={(e) => updateFormData('dateDepot', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">
          📊 Classification du Bâtiment
        </h2>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
          <p className="text-sm text-blue-900">
            <strong>Important:</strong> La classification détermine les règles applicables.
            Référez-vous au Code de la Construction et de l'Habitation (CCH) et aux arrêtés spécifiques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">Type de bâtiment *</label>
            <select
              className="form-select"
              value={formData.typeERP}
              onChange={(e) => updateFormData('typeERP', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="J">Type J - Structures d'accueil pour personnes âgées</option>
              <option value="L">Type L - Salles d'auditions, conférences, spectacles</option>
              <option value="M">Type M - Magasins de vente, centres commerciaux</option>
              <option value="N">Type N - Restaurants, débits de boissons</option>
              <option value="O">Type O - Hôtels et pensions de famille</option>
              <option value="P">Type P - Salles de danse et salles de jeux</option>
              <option value="R">Type R - Établissements d'enseignement</option>
              <option value="S">Type S - Bibliothèques, centres de documentation</option>
              <option value="T">Type T - Salles d'expositions</option>
              <option value="U">Type U - Établissements sanitaires</option>
              <option value="V">Type V - Établissements de culte</option>
              <option value="W">Type W - Administrations, banques, bureaux</option>
              <option value="X">Type X - Établissements sportifs couverts</option>
              <option value="Y">Type Y - Musées</option>
              <option value="HABITATION">Habitation</option>
              <option value="IGH">Immeuble de Grande Hauteur (IGH)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Catégorie ERP *</label>
            <select
              className="form-select"
              value={formData.categorieERP}
              onChange={(e) => updateFormData('categorieERP', e.target.value)}
            >
              <option value="">Sélectionner...</option>
              <option value="1">1ère catégorie (≥ 1 500 personnes)</option>
              <option value="2">2ème catégorie (701 à 1 500 personnes)</option>
              <option value="3">3ème catégorie (301 à 700 personnes)</option>
              <option value="4">4ème catégorie (≤ 300 personnes, sauf 5ème)</option>
              <option value="5">5ème catégorie (voir seuils par type)</option>
              <option value="NA">Non applicable (habitation)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Nature de l'activité *</label>
            <input
              type="text"
              className="form-input"
              value={formData.activite}
              onChange={(e) => updateFormData('activite', e.target.value)}
              placeholder="Ex: Résidence pour personnes âgées"
            />
          </div>

          <div>
            <label className="form-label">Effectif du public *</label>
            <input
              type="number"
              className="form-input"
              value={formData.effectifPublic}
              onChange={(e) => updateFormData('effectifPublic', e.target.value)}
              placeholder="Nombre de personnes"
            />
          </div>

          <div>
            <label className="form-label">Effectif du personnel</label>
            <input
              type="number"
              className="form-input"
              value={formData.effectifPersonnel}
              onChange={(e) => updateFormData('effectifPersonnel', e.target.value)}
              placeholder="Nombre de personnes"
            />
          </div>

          <div>
            <label className="form-label">Nombre de niveaux *</label>
            <input
              type="text"
              className="form-input"
              value={formData.niveaux}
              onChange={(e) => updateFormData('niveaux', e.target.value)}
              placeholder="Ex: RDC + 3 étages + 1 sous-sol"
            />
          </div>

          <div className="md:col-span-2">
            <label className="form-label">Surface totale (SHON) *</label>
            <input
              type="text"
              className="form-input"
              value={formData.surfaceTotale}
              onChange={(e) => updateFormData('surfaceTotale', e.target.value)}
              placeholder="Ex: 2 450 m²"
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800">
              Rappel Important
            </h3>
            <p className="mt-2 text-sm text-yellow-700">
              Les informations saisies doivent être conformes aux plans et pièces graphiques du dossier.
              Cette notice sera examinée par le bureau de contrôle et la commission de sécurité.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

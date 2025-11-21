import jsPDF from 'jspdf'

export function generatePDF(formData: any) {
  const doc = new jsPDF()

  let yPosition = 20
  const lineHeight = 7
  const pageHeight = 280
  const marginLeft = 15
  const marginRight = 195

  // Helper function to add text with auto page break
  const addText = (text: string, fontSize: number = 10, isBold: boolean = false) => {
    if (yPosition > pageHeight) {
      doc.addPage()
      yPosition = 20
    }
    doc.setFontSize(fontSize)
    doc.setFont('helvetica', isBold ? 'bold' : 'normal')
    const lines = doc.splitTextToSize(text, marginRight - marginLeft)
    doc.text(lines, marginLeft, yPosition)
    yPosition += lines.length * (fontSize / 2.5)
  }

  const addSection = (title: string) => {
    yPosition += 5
    if (yPosition > pageHeight) {
      doc.addPage()
      yPosition = 20
    }
    doc.setFillColor(66, 139, 202)
    doc.rect(marginLeft - 5, yPosition - 5, marginRight - marginLeft + 10, 10, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text(title, marginLeft, yPosition)
    doc.setTextColor(0, 0, 0)
    yPosition += 10
  }

  const addField = (label: string, value: string) => {
    if (!value || value.trim() === '') return
    if (yPosition > pageHeight - 10) {
      doc.addPage()
      yPosition = 20
    }
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(label + ':', marginLeft, yPosition)
    yPosition += 5
    doc.setFont('helvetica', 'normal')
    const lines = doc.splitTextToSize(value, marginRight - marginLeft)
    doc.text(lines, marginLeft + 5, yPosition)
    yPosition += lines.length * 5 + 3
  }

  // EN-TÊTE
  doc.setFillColor(41, 98, 255)
  doc.rect(0, 0, 210, 40, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text('NOTICE DE SÉCURITÉ INCENDIE', 105, 15, { align: 'center' })
  doc.text('ET ACCESSIBILITÉ', 105, 25, { align: 'center' })
  doc.setFontSize(10)
  doc.text('Conforme aux normes françaises en vigueur', 105, 33, { align: 'center' })
  doc.setTextColor(0, 0, 0)

  yPosition = 50

  // 1. INFORMATIONS GÉNÉRALES
  addSection('1. IDENTIFICATION DU PROJET')
  addField('Nom du projet', formData.nomProjet)
  addField('Adresse', formData.adresse)
  addField('Maître d\'ouvrage', formData.maitreDOuvrage)
  addField('Architecte', formData.architecte)
  addField('N° d\'inscription à l\'Ordre des Architectes', formData.ordreArchitecte)
  addField('Date de dépôt', formData.dateDepot)

  addSection('2. CLASSIFICATION DU BÂTIMENT')
  addField('Type de bâtiment', formData.typeERP)
  addField('Catégorie', formData.categorieERP)
  addField('Nature de l\'activité', formData.activite)
  addField('Effectif du public', formData.effectifPublic)
  addField('Effectif du personnel', formData.effectifPersonnel)
  addField('Nombre de niveaux', formData.niveaux)
  addField('Surface totale', formData.surfaceTotale)

  // 2. SÉCURITÉ INCENDIE
  doc.addPage()
  yPosition = 20

  addSection('3. CONSTRUCTION ET STABILITÉ AU FEU')
  addText('Conformément aux articles CO 10 à CO 14 de l\'arrêté du 25 juin 1980 modifié :', 9)
  yPosition += 3
  addField('Isolement par rapport aux tiers', formData.isolementParRapportTiers)
  addField('Résistance au feu de la structure', formData.resistanceStructure)
  addField('Réaction au feu des matériaux', formData.reactionFeu)
  addField('Cloisons de distribution', formData.cloisons)
  addField('Couverture', formData.couverture)
  addField('Façades', formData.facades)

  addSection('4. DISTRIBUTION INTÉRIEURE ET DÉGAGEMENTS')
  addText('Conformément aux articles CO 34 à CO 58 :', 9)
  yPosition += 3
  addField('Description des dégagements', formData.degagements)
  addField('Nombre de sorties/issues', formData.nombreSorties)
  addField('Distance maximale de parcours', formData.distanceParcours)
  addField('Largeur des dégagements', formData.largeurDegagements)
  addField('Portes', formData.portes)
  addField('Escaliers', formData.escaliers)

  addSection('5. DÉSENFUMAGE')
  addText('Conformément aux articles DF 1 à DF 11 :', 9)
  yPosition += 3
  addField('Type de désenfumage', formData.desenfumageType)
  if (formData.desenfumageNaturel) {
    addField('Désenfumage naturel', formData.desenfumageNaturelDetails)
  }
  if (formData.desenfumageMecanique) {
    addText('✓ Désenfumage mécanique prévu', 10)
    yPosition += 5
  }
  addField('Dispositions de désenfumage', formData.desenfumageDetails)

  // 3. MOYENS DE SECOURS
  doc.addPage()
  yPosition = 20

  addSection('6. MOYENS DE SECOURS')
  addText('Conformément aux articles MS 1 à MS 73 :', 9)
  yPosition += 3
  addField('Extincteurs', formData.extincteurs)

  const moyens = []
  if (formData.ria) moyens.push('RIA (Robinet Incendie Armé)')
  if (formData.colonneSeche) moyens.push('Colonne sèche')
  if (formData.colonneHumide) moyens.push('Colonne humide')
  if (formData.detecteursFumee) moyens.push('Détecteurs de fumée')
  if (formData.sprinklers) moyens.push('Installation sprinkler')

  if (moyens.length > 0) {
    addField('Moyens de secours supplémentaires', moyens.join(', '))
  }

  addField('Système de Sécurité Incendie (SSI)', formData.ssi)
  addField('Système d\'alarme', formData.alarme)
  addField('Éclairage de sécurité', formData.eclairageSecurite)

  // 4. ACCESSIBILITÉ PMR
  doc.addPage()
  yPosition = 20

  addSection('7. ACCESSIBILITÉ - CHEMINEMENT ET STATIONNEMENT')
  addText('Conformément à l\'arrêté du 8 décembre 2014 :', 9)
  yPosition += 3
  addField('Cheminement extérieur', formData.cheminementExterieur)
  addField('Stationnement total', formData.stationnement)
  addField('Places PMR adaptées', formData.placesHandicapees)

  addSection('8. ENTRÉE ET ACCUEIL')
  addField('Entrée principale', formData.entree)
  addField('Accueil', formData.accueil)

  addSection('9. CIRCULATIONS INTÉRIEURES')
  addField('Circulations horizontales', formData.circulations)
  addField('Ascenseur', formData.ascenseur)
  if (formData.ascenseurDetails) {
    addField('Caractéristiques de l\'ascenseur', formData.ascenseurDetails)
  }

  addSection('10. SANITAIRES')
  addField('Sanitaires standard', formData.sanitaires)
  addField('Sanitaires adaptés PMR', formData.sanitairesAdaptes)

  // 5. DISPOSITIONS SPÉCIFIQUES
  doc.addPage()
  yPosition = 20

  addSection('11. SIGNALISATION ET ÉQUIPEMENTS')
  addField('Signalisation', formData.signalisation)
  addField('Équipements et mobilier', formData.equipements)

  addSection('12. DISPOSITIONS PAR TYPE DE HANDICAP')
  addField('Handicap moteur', formData.handicapMoteur)
  addField('Handicap visuel', formData.handicapVisuel)
  addField('Handicap auditif', formData.handicapAuditif)
  addField('Handicap mental', formData.handicapMental)

  // 6. CONFORMITÉ
  addSection('13. CONFORMITÉ RÉGLEMENTAIRE')
  addField('Conformité au CCH', formData.conformiteCCH)
  addField('Conformité aux arrêtés', formData.conformiteArrete)

  if (formData.derogations === 'DEMANDEES') {
    addField('Dérogations', 'DÉROGATIONS DEMANDÉES')
    addField('Détail des dérogations', formData.derogationsDetails)
  } else {
    addText('Aucune dérogation demandée. Le projet est conforme à l\'ensemble des textes applicables.', 10)
    yPosition += 5
  }

  if (formData.observations) {
    addSection('14. OBSERVATIONS COMPLÉMENTAIRES')
    addField('Remarques', formData.observations)
  }

  // PIED DE PAGE FINAL
  doc.addPage()
  yPosition = 20

  addSection('15. ENGAGEMENT DE L\'ARCHITECTE')

  addText('Je soussigné(e) ' + (formData.architecte || '_______________') + ', architecte inscrit(e) à l\'Ordre sous le numéro ' + (formData.ordreArchitecte || '_______________') + ', certifie que le présent projet respecte les dispositions réglementaires en matière de sécurité incendie et d\'accessibilité aux personnes handicapées applicables à ce type d\'établissement.', 10)
  yPosition += 10

  addText('Les dispositions constructives et les aménagements prévus sont conformes aux textes réglementaires en vigueur, notamment :', 10)
  yPosition += 5

  const listeTextes = [
    '• Code de la Construction et de l\'Habitation (CCH), articles R111-19 et suivants',
    '• Arrêté du 25 juin 1980 modifié (sécurité incendie ERP)',
    '• Arrêté du 8 décembre 2014 (accessibilité ERP)',
    '• Arrêté du 31 mai 1994 modifié (habitation)',
    '• Loi n°2005-102 du 11 février 2005 pour l\'égalité des droits et des chances'
  ]

  listeTextes.forEach(texte => {
    addText(texte, 9)
  })

  yPosition += 10
  addText('Fait à _________________, le ' + new Date().toLocaleDateString('fr-FR'), 10)
  yPosition += 20
  addText('Signature de l\'architecte', 10)
  addText('(précédée de la mention "Lu et approuvé")', 9)

  // FOOTER sur toutes les pages
  const pageCount = doc.getNumberOfPages()
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(128, 128, 128)
    doc.text(`Notice de sécurité incendie et accessibilité - ${formData.nomProjet || 'Projet'}`, 105, 290, { align: 'center' })
    doc.text(`Page ${i}/${pageCount}`, 195, 290, { align: 'right' })
  }

  // Génération du PDF
  const fileName = `Notice_Securite_${formData.nomProjet?.replace(/\s+/g, '_') || 'Projet'}_${new Date().toISOString().split('T')[0]}.pdf`
  doc.save(fileName)
}

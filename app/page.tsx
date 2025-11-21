'use client'

import { useState } from 'react'
import InfoGenerales from './components/InfoGenerales'
import SecuriteIncendie from './components/SecuriteIncendie'
import Accessibilite from './components/Accessibilite'
import { generatePDF } from './utils/pdfGenerator'

export default function Home() {
  const [activeTab, setActiveTab] = useState<'info' | 'incendie' | 'accessibilite'>('info')
  const [formData, setFormData] = useState({
    // Informations générales
    nomProjet: '',
    adresse: '',
    maitreDOuvrage: '',
    architecte: '',
    ordreArchitecte: '',
    dateDepot: '',

    // Classification
    typeERP: '',
    categorieERP: '',
    activite: '',
    effectifPublic: '',
    effectifPersonnel: '',
    niveaux: '',
    surfaceTotale: '',

    // Sécurité Incendie
    isolementParRapportTiers: '',
    resistanceStructure: '',
    reactionFeu: '',
    cloisons: '',
    couverture: '',
    facades: '',

    // Distribution intérieure
    degagements: '',
    nombreSorties: '',
    distanceParcours: '',
    largeurDegagements: '',
    portes: '',
    escaliers: '',

    // Désenfumage
    desenfumageType: '',
    desenfumageNaturel: false,
    desenfumageNaturelDetails: '',
    desenfumageMecanique: false,
    desenfumageDetails: '',

    // Moyens de secours
    extincteurs: '',
    ria: false,
    colonneSeche: false,
    colonneHumide: false,
    detecteursFumee: false,
    sprinklers: false,
    ssi: '',
    alarme: '',
    eclairageSecurite: '',

    // Accessibilité
    cheminementExterieur: '',
    stationnement: '',
    placesHandicapees: '',
    entree: '',
    accueil: '',
    circulations: '',
    ascenseur: '',
    ascenseurDetails: '',
    sanitaires: '',
    sanitairesAdaptes: '',
    signalisation: '',
    equipements: '',

    // Dispositions spécifiques handicap
    handicapMoteur: '',
    handicapVisuel: '',
    handicapAuditif: '',
    handicapMental: '',

    // Conformité
    conformiteCCH: '',
    conformiteArrete: '',
    derogations: '',
    derogationsDetails: '',

    // Observations
    observations: '',
  })

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGeneratePDF = () => {
    generatePDF(formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h1 className="text-3xl font-bold text-white">
              Générateur de Notices de Sécurité Incendie & Accessibilité
            </h1>
            <p className="text-blue-100 mt-2">
              Outil professionnel conforme aux normes françaises pour architectes
            </p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px">
              <button
                onClick={() => setActiveTab('info')}
                className={`py-4 px-8 text-center border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'info'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                📋 Informations Générales
              </button>
              <button
                onClick={() => setActiveTab('incendie')}
                className={`py-4 px-8 text-center border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'incendie'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                🔥 Sécurité Incendie
              </button>
              <button
                onClick={() => setActiveTab('accessibilite')}
                className={`py-4 px-8 text-center border-b-2 font-medium text-sm transition-colors ${
                  activeTab === 'accessibilite'
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                ♿ Accessibilité PMR
              </button>
            </nav>
          </div>

          {/* Content */}
          <div className="p-8">
            {activeTab === 'info' && (
              <InfoGenerales formData={formData} updateFormData={updateFormData} />
            )}
            {activeTab === 'incendie' && (
              <SecuriteIncendie formData={formData} updateFormData={updateFormData} />
            )}
            {activeTab === 'accessibilite' && (
              <Accessibilite formData={formData} updateFormData={updateFormData} />
            )}
          </div>

          {/* Footer Actions */}
          <div className="bg-gray-50 px-8 py-6 border-t border-gray-200 flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <span className="font-semibold">Note:</span> Tous les champs sont importants pour générer une notice complète
            </div>
            <button
              onClick={handleGeneratePDF}
              className="btn-primary flex items-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Générer la Notice PDF</span>
            </button>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-100 rounded-full p-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Normes CCH</h3>
                <p className="text-sm text-gray-600">Code de la Construction et de l'Habitation</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-red-100 rounded-full p-3">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Arrêtés Incendie</h3>
                <p className="text-sm text-gray-600">ERP & Habitation</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center space-x-3">
              <div className="bg-green-100 rounded-full p-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Accessibilité PMR</h3>
                <p className="text-sm text-gray-600">Loi du 11 février 2005</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

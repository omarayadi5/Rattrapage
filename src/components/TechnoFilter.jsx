import React, { useState } from 'react';

const technologies = [
  { name: 'HTML', year: 1993, periode: 'passé', categorie: 'web' },
  { name: 'JavaScript', year: 1995, periode: 'passé', categorie: 'web' },
  { name: 'Android', year: 2008, periode: 'passé', categorie: 'mobile' },
  { name: 'React', year: 2013, periode: 'présent', categorie: 'web' },
  { name: 'TensorFlow', year: 2015, periode: 'présent', categorie: 'ia' },
  { name: 'Ethereum', year: 2015, periode: 'présent', categorie: 'block chain' },
  { name: 'Flutter', year: 2017, periode: 'présent', categorie: 'mobile' },
  { name: 'Qiskit', year: 2017, periode: 'présent', categorie: 'quantique' },
  { name: 'ChatGPT', year: 2022, periode: 'futur', categorie: 'ia' },
];

const periodes = ['toutes', 'passé', 'présent', 'futur'];
const categories = ['toutes', 'web', 'mobile', 'ia', 'block chain', 'quantique'];

export default function TechnoFilter() {
  const [periode, setPeriode] = useState('toutes');
  const [categorie, setCategorie] = useState('toutes');

  const filteredTech = technologies.filter(tech => {
    const periodeMatch = periode === 'toutes' || tech.periode === periode;
    const categorieMatch = categorie === 'toutes' || tech.categorie === categorie;
    return periodeMatch && categorieMatch;
  });

  return (
    <div>
      <h2>Filtres</h2>
      <label>
        Période :
        <select value={periode} onChange={e => setPeriode(e.target.value)}>
          {periodes.map(p => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>
      <label>
        Catégorie :
        <select value={categorie} onChange={e => setCategorie(e.target.value)}>
          {categories.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>

      <h2>Technologies</h2>
      <ul>
        {filteredTech.map(tech => (
          <li key={tech.name}>
            {tech.name} ({tech.year}) - {tech.categorie} - {tech.periode}
          </li>
        ))}
      </ul>
    </div>
  );
}
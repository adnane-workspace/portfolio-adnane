# GUIDE DE DÉMARRAGE RAPIDE

## ⚠️ IMPORTANT - Problème PowerShell

Votre système Windows bloque l'exécution de scripts npm dans PowerShell.

## 🔧 SOLUTION RAPIDE

### Option 1: Utiliser CMD (Recommandé)

1. Appuyez sur `Win + R`
2. Tapez `cmd` et appuyez sur Entrée
3. Copiez-collez ces commandes une par une :

```cmd
cd "c:\1er CI\portfolio\p3"
npm install
npm run dev
```

### Option 2: Débloquer PowerShell (Nécessite Admin)

1. Clic droit sur PowerShell → **Exécuter en tant qu'administrateur**
2. Exécutez :
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Tapez `O` pour confirmer
4. Fermez et rouvrez PowerShell normalement
5. Exécutez :
```powershell
cd "c:\1er CI\portfolio\p3"
npm install
npm run dev
```

## 🚀 Après Installation

Une fois `npm install` terminé sans erreur :

```bash
npm run dev
```

Ouvrez votre navigateur sur : **http://localhost:5173**

## 📝 Personnalisation

Modifiez le fichier `src/data/portfolioData.js` avec vos informations :
- Nom, rôle, email
- Compétences
- Projets
- Expériences
- Liens réseaux sociaux

## 📚 Documentation Complète

Consultez le fichier [README.md](README.md) pour plus de détails.

---

**Besoin d'aide ?** Vérifiez que Node.js est bien installé avec `node --version`

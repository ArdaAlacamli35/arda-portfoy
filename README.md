# Arda Alaçamlı | Portföy (Next.js App Router)

## Yerelde çalıştırma
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # canlıya çıkmadan önce hatasız derlendiğini kontrol et
```

## GitHub + Vercel
1. Bu klasörde: `git init && git add . && git commit -m "ilk sürüm"`
2. GitHub'da boş bir repo aç, sonra:
   `git remote add origin https://github.com/<kullanici>/<repo>.git`
   `git branch -M main && git push -u origin main`
3. vercel.com → Add New → Project → repoyu seç → Framework: Next.js (otomatik) → Deploy.
4. Sonraki her `git push` otomatik yeni deploy üretir.

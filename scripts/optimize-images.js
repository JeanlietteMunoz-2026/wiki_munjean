import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcRoot = path.join(__dirname, '..', 'docs_munjean', 'img_munjean')
const outRoot = path.join(srcRoot, 'optimized')

function ensureDir(p){
  if(!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true })
}

async function processFile(file){
  const rel = path.relative(srcRoot, file)
  const dir = path.dirname(rel)
  const name = path.basename(file, path.extname(file))
  const outDir = path.join(outRoot, dir)
  ensureDir(outDir)
  const input = file
  const sizes = [800, 400]
  for(const w of sizes){
    const outWebp = path.join(outDir, `${name}-${w}.webp`)
    try{
      await sharp(input).resize({ width: w }).webp({ quality: 80 }).toFile(outWebp)
      console.log('created', outWebp)
    }catch(e){
      console.error('failed', input, e.message)
    }
  }
}

function walk(dir){
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  for(const e of entries){
    const full = path.join(dir, e.name)
    if(e.isDirectory()) walk(full)
    else if(/\.(png|jpe?g)$/i.test(e.name)) processFile(full)
  }
}

ensureDir(outRoot)
walk(srcRoot)

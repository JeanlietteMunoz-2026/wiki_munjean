import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.join(__dirname, '..', 'docs_munjean', 'img_munjean')
const dest = path.join(__dirname, '..', 'public', 'img_munjean')

function copyDir(srcDir, destDir){
  if(!fs.existsSync(srcDir)){
    console.error('Source not found:', srcDir)
    process.exit(1)
  }
  if(!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true })
  const entries = fs.readdirSync(srcDir, { withFileTypes: true })
  for(const e of entries){
    const s = path.join(srcDir, e.name)
    const d = path.join(destDir, e.name)
    if(e.isDirectory()) copyDir(s,d)
    else fs.copyFileSync(s,d)
  }
}

try{
  copyDir(src,dest)
  console.log('Images copied to', dest)
}catch(e){
  console.error('Copy failed:', e.message)
  process.exit(1)
}

import './style.css'
import { marked } from 'marked'

const editor = document.getElementById('editor')
const preview = document.getElementById('preview')

const updatePreview = () => {
  preview.innerHTML = marked.parse(editor.value)
}

editor.addEventListener('input', updatePreview)

// Render initial preview if editor has default content
updatePreview()

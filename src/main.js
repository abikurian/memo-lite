import './style.css'
import { marked } from 'marked'

const STORAGE_KEY = 'memo-content'

const editor = document.getElementById('editor')
const preview = document.getElementById('preview')

const updatePreview = () => {
  preview.innerHTML = marked.parse(editor.value)
}

// Restore saved content on initial load if available
const savedContent = localStorage.getItem(STORAGE_KEY)
if (savedContent !== null) {
  editor.value = savedContent
}

// Render preview
updatePreview()

// Save to localStorage and update preview on input
editor.addEventListener('input', () => {
  localStorage.setItem(STORAGE_KEY, editor.value)
  updatePreview()
})


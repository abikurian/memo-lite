import './style.css'
import { marked } from 'marked'

const STORAGE_KEY = 'memo-content'

const editor = document.getElementById('editor')
const preview = document.getElementById('preview')
const downloadBtn = document.getElementById('download-btn')
const clearBtn = document.getElementById('clear-btn')

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

// Download markdown file
downloadBtn.addEventListener('click', () => {
  const blob = new Blob([editor.value], { type: 'text/markdown' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = 'memo.md'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
})

// Clear editor content, localStorage, and preview
clearBtn.addEventListener('click', () => {
  editor.value = ''
  localStorage.removeItem(STORAGE_KEY)
  preview.innerHTML = ''
})




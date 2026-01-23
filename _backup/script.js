
// DOM Elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const uploadBtn = document.getElementById('uploadBtn');
const editorContainer = document.getElementById('editorContainer');
const previewImage = document.getElementById('previewImage');
const widthInput = document.getElementById('widthInput');
const heightInput = document.getElementById('heightInput');
const qualitySlider = document.getElementById('qualitySlider');
const qualityValue = document.getElementById('qualityValue');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');
const aspectRatioLock = document.getElementById('aspectRatioLock');
const formatBtns = document.querySelectorAll('.format-btn');
const originalDims = document.getElementById('originalDims');
const fileSizeDisplay = document.getElementById('fileSize');

// State
let originalImage = null;
let originalFile = null;
let aspectRatio = 0;
let isRatioLocked = true;
let currentFormat = 'image/jpeg';
let currentQuality = 0.9;

// ---- Event Listeners ----

// Upload interactions
uploadBtn.addEventListener('click', () => fileInput.click());

fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) handleFile(e.target.files[0]);
});

dropZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropZone.classList.add('drag-active');
});

dropZone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-active');
});

dropZone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropZone.classList.remove('drag-active');
    if (e.dataTransfer.files.length) handleFile(e.dataTransfer.files[0]);
});

// Controls interactions
widthInput.addEventListener('input', () => {
    if (isRatioLocked && aspectRatio) {
        heightInput.value = Math.round(widthInput.value / aspectRatio);
    }
});

heightInput.addEventListener('input', () => {
    if (isRatioLocked && aspectRatio) {
        widthInput.value = Math.round(heightInput.value * aspectRatio);
    }
});

aspectRatioLock.addEventListener('click', () => {
    isRatioLocked = !isRatioLocked;
    aspectRatioLock.classList.toggle('active', isRatioLocked);
    // Re-sync if re-locking
    if (isRatioLocked && aspectRatio && widthInput.value) {
        heightInput.value = Math.round(widthInput.value / aspectRatio);
    }
    // Update icon to show state (optional visual cue, currently relying on opacity/color via class)
});

qualitySlider.addEventListener('input', (e) => {
    currentQuality = e.target.value / 100;
    qualityValue.textContent = `${e.target.value}%`;
});

formatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFormat = btn.dataset.format;
    });
});

resetBtn.addEventListener('click', () => {
    if (originalImage) {
        resetControls();
    }
});

downloadBtn.addEventListener('click', processAndDownload);


// ---- Core Functions ----

function handleFile(file) {
    if (!file.type.match('image.*')) {
        alert('Please upload an image file (PNG, JPG, WebP)');
        return;
    }

    originalFile = file;
    const reader = new FileReader();

    reader.onload = (e) => {
        originalImage = new Image();
        originalImage.onload = () => {
            initializeEditor();
        };
        originalImage.src = e.target.result;
    };

    reader.readAsDataURL(file);
}

function initializeEditor() {
    // Show editor, hide dropzone (or keep upload accessible? Design implies single flow)
    // For now we assume we load one image.
    editorContainer.classList.remove('hidden');
    dropZone.style.display = 'none'; // OR move it to a smaller state. Let's hide it for "Single Page App" feel.

    // Set preview
    previewImage.src = originalImage.src;

    // Calculate Aspect Ratio
    aspectRatio = originalImage.width / originalImage.height;

    // Set initial values
    originalDims.textContent = `Original: ${originalImage.width} x ${originalImage.height}`;
    fileSizeDisplay.textContent = `Size: ${(originalFile.size / 1024).toFixed(1)} KB`;

    resetControls();

    // Animate
    editorContainer.style.animation = 'fadeIn 0.5s ease-out';
}

function resetControls() {
    widthInput.value = originalImage.width;
    heightInput.value = originalImage.height;
    qualitySlider.value = 90;
    qualityValue.textContent = '90%';
    currentQuality = 0.9;

    // Reset Aspect Ratio lock visual
    isRatioLocked = true;
    aspectRatioLock.classList.add('active');
}

function processAndDownload() {
    const width = parseInt(widthInput.value);
    const height = parseInt(heightInput.value);

    if (!width || !height) {
        alert('Please enter valid dimensions');
        return;
    }

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');

    // High quality scaling
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.drawImage(originalImage, 0, 0, width, height);

    // Convert to blob and download
    canvas.toBlob((blob) => {
        if (!blob) {
            alert('Error processing image');
            return;
        }

        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');

        // Construct filename: original_resized.ext
        const originalName = originalFile.name.split('.')[0];
        const ext = currentFormat.split('/')[1];

        link.download = `${originalName}_resized.${ext}`;
        link.href = url;
        link.click();

        // Cleanup
        setTimeout(() => URL.revokeObjectURL(url), 1000);

    }, currentFormat, currentQuality);
}


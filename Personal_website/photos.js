const photos = [
    'assets/jsa3.jpeg',
    'assets/jsa4.jpeg',
    'assets/mau.JPG',
    'assets/hbs.jpeg',
    'assets/excel.jpg'
];

const summaries = [
    "1 of 5: working with team on Case Competion, JSA", 
    "2 of 5: providing presentation feedback to fellow JSA participants",
    "3 of 5: arguing my stance during the executive committee meeting, IMAU",
    "4 of 5: HBS CORe Certification",
    "5 of 5: iAct Excel Certification",
]

let currentIndex = 0;

function showPhoto(index) {
    const photoElement = document.getElementById('current-photo');
    const summaryElement = document.getElementById('photo-summary');
    photoElement.src = photos[index];
    summaryElement.textContent = summaries[index];
}

function nextPhoto() {
    currentIndex = (currentIndex + 1) % photos.length;
    showPhoto(currentIndex);
}

function prevPhoto() {
    currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    showPhoto(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showPhoto(currentIndex);
});

function login() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "Pookie" && password === "pacarhaphap") {
        document.getElementById('loginPage').classList.add('fadeOut');

        setTimeout(function () {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('mainPage').style.display = 'flex';
            document.getElementById('mainPage').classList.add('fadeIn');
        }, 1000);
    } else {
        var errorMessage = document.getElementById('errorMessage');
        errorMessage.style.display = 'block';
        errorMessage.classList.add('fadeIn');
        setTimeout(function () {
            errorMessage.classList.remove('fadeIn');
        }, 3000);
    }
}

function showLargePicture() {
    var modal = document.getElementById('modal');
    var modalPicture = document.getElementById('modal-picture');
    var profilePicture = document.getElementById('profile-picture');

    modalPicture.src = profilePicture.src;
    modal.style.display = 'flex'; // Pastikan ini aktifkan modal
}

function closeLargePicture() {
    var modal = document.getElementById('modal');
    modal.style.display = 'none'; // Menutup modal
}

// Fungsi untuk galeri foto
function showGalleryPhoto(src) {
    var modal = document.getElementById('modal-photo');
    var modalImg = document.getElementById('modal-photo-img');
    modalImg.src = src;
    modal.classList.add('show'); // Efek transisi untuk galeri
}

function closeModalPhoto() {
    var modal = document.getElementById('modal-photo');
    modal.classList.remove('show');
}

// Efek transisi untuk fadeIn dan fadeOut
function addFadeEffects() {
    var style = document.createElement('style');
    style.innerHTML = `
        .fadeIn {
            animation: fadeIn 0.5s;
        }

        .fadeOut {
            animation: fadeOut 0.5s;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
        }
    `;
    document.head.appendChild(style);
}

// Tambahkan efek transisi saat halaman dimuat
document.addEventListener('DOMContentLoaded', addFadeEffects);


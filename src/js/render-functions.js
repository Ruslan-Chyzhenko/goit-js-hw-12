// render-functions
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function displayImages(images, gallery, lightbox) {
    gallery.innerHTML = '';

    const imageCards = images.map(image => {
        const card = document.createElement('div');
        card.classList.add('card');

        card.innerHTML = `
            <a href="${image.largeImageURL}">
                <img src="${image.webformatURL}" alt="${image.tags}" title="${image.tags}">
            </a>
            <div class="overlay">
                <div class="details">
                    <p>Likes: ${image.likes}</p>
                    <p>Views: ${image.views}</p>
                    <p>Comments: ${image.comments}</p>
                    <p>Downloads: ${image.downloads}</p>
                </div>
            </div>
        `;

        return card;
    });

    imageCards.forEach(card => {
        gallery.appendChild(card);
    });

    lightbox.refresh();
}

export function toastError(message) {
    iziToast.error({
        title: 'Error',
        message: message,
        backgroundColor: '#EF4040',
        progressBarColor: '#FFE0AC',
        icon: 'icon-close',
        position: 'topRight',
        displayMode: 'replace',
        closeOnEscape: true,
        pauseOnHover: false,
        maxWidth: 432,
        messageSize: '16px',
        messageLineHeight: '24px',
    });
}

export function showLoader(loader) {
    loader.classList.remove('hidden');
}

export function hideLoader(loader) {
    loader.classList.add('hidden');
}

export function resetForm(form) {
    form.reset();
}
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { searchImages, fetchNextPage } from './js/pixabay-api'; 

const lightbox = new SimpleLightbox('.gallery a');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const form = document.querySelector('.search-form');
const loadMoreBtn = document.querySelector('.load-more-btn');

loadMoreBtn.addEventListener('click', async () => {
    try {
        const images = await fetchNextPage();
        appendImages(images);
        smoothScrollToNextGroup();
    } catch (error) {
        console.error('Error fetching next page:', error.message);
    }
});

document.addEventListener('DOMContentLoaded', async () => {
    initializeSearch(form);
});

async function initializeSearch(form) {
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        const query = form.querySelector('input').value.trim();
        if (!query) return;
        try {
            const images = await searchImages(query);
            appendImages(images);
            showLoadMoreBtn();
            smoothScrollToNextGroup();
        } catch (error) {
            console.error('Error searching images:', error.message);
        }
    });
}

function appendImages(images) {    
}

function showLoadMoreBtn(images) {
    const totalHits = images.totalHits || 0;
    if (totalHits > 0 && gallery.children.length >= totalHits) {
        loadMoreBtn.classList.add('hidden');
        console.log("We're sorry, but you've reached the end of search results.");
    }
}

function smoothScrollToNextGroup() {
    if (gallery.firstElementChild) {
        const cardHeight = gallery.firstElementChild.getBoundingClientRect().height;
        window.scrollBy({
            top: cardHeight * 2,
            behavior: 'smooth'
        });
    }
}
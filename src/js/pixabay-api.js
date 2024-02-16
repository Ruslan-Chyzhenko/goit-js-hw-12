import axios from 'axios';
import { hideLoader } from './render-functions'; 

let currentPage = 1;
let currentQuery = '';
const perPage = 15; 

export async function searchImages(query) {
    currentQuery = query;
    currentPage = 1;
    return fetchImages(query, currentPage);
}

export async function fetchNextPage() {
    currentPage++;
    return fetchImages(currentQuery, currentPage);
}

async function fetchImages(query, page) {
    const API_KEY = '42262858-7b31826aafbc45fb5436f2ee9';
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;

    try {
        const response = await axios.get(url);
        hideLoader(); 
        return response.data.hits;
    } catch (error) {
        console.error('Error fetching images:', error.message);
        throw new Error(`Error fetching images: ${error}`);
    }
}
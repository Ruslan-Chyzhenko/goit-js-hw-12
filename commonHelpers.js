import{a as h,S as m}from"./assets/vendor-b621e60e.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function g(t){t.classList.add("hidden")}let c=1,l="";const y=15;async function p(t){return l=t,c=1,u(t,c)}async function L(){return c++,u(l,c)}async function u(t,o){const n=`https://pixabay.com/api/?key=42262858-7b31826aafbc45fb5436f2ee9&q=${encodeURIComponent(t)}&image_type=photo&orientation=horizontal&safesearch=true&page=${o}&per_page=${y}`;try{const e=await h.get(n);return g(),e.data.hits}catch(e){throw console.error("Error fetching images:",e.message),new Error(`Error fetching images: ${e}`)}}new m(".gallery a");const a=document.querySelector(".gallery");document.querySelector(".loader");const E=document.querySelector(".search-form"),d=document.querySelector(".load-more-btn");d.addEventListener("click",async()=>{try{const t=await L();f()}catch(t){console.error("Error fetching next page:",t.message)}});document.addEventListener("DOMContentLoaded",async()=>{b(E)});async function b(t){t.addEventListener("submit",async o=>{o.preventDefault();const s=t.querySelector("input").value.trim();if(s)try{const n=await p(s);w(),f()}catch(n){console.error("Error searching images:",n.message)}})}function w(t){const o=t.totalHits||0;o>0&&a.children.length>=o&&(d.classList.add("hidden"),console.log("We're sorry, but you've reached the end of search results."))}function f(){if(a.firstElementChild){const t=a.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map
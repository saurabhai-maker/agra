/**
 * TAJ & AGRA — The Grand Royal Guide & Planner
 * Application Logic & Dynamic Interactions
 */

import { ATTRACTIONS, HOTELS, FOODS, TRANSPORT_OPTIONS, TRAVEL_TIPS, COST_CONFIG, GROUP_TICKET_MULTIPLIER } from './data.js';

// --- Global State ---
const state = {
  currency: 'INR', // 'INR', 'USD', 'EUR'
  exchangeRates: {
    INR: { rate: 1, symbol: '₹' },
    USD: { rate: 0.012, symbol: '$' },
    EUR: { rate: 0.011, symbol: '€' }
  },
  savedPlaces: JSON.parse(localStorage.getItem('taj_saved_places') || '[]'),
  activeAttractionFilter: 'all',
  activeHotelFilter: 'all',
  activeFoodFilter: 'all',
  searchQuery: '',
  // Budget calculator inputs
  budget: {
    days: 2,
    travelers: 2,
    origin: 'indian', // 'indian' or 'foreign'
    stayTier: 'medium', // 'low', 'medium', 'high'
    foodTier: 'medium',
    transitTier: 'medium'
  }
};

// --- Currency Formatter ---
function formatPrice(amountInINR) {
  const curr = state.exchangeRates[state.currency];
  const converted = Math.round(amountInINR * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// --- Toast Notification Helper ---
function showToast(message, icon = '✨') {
  let container = document.getElementById('toastContainer');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toastContainer';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// --- Saved Bookmarks Handling ---
function toggleSavePlace(id, type, name, image) {
  const existsIndex = state.savedPlaces.findIndex(p => p.id === id);
  if (existsIndex >= 0) {
    state.savedPlaces.splice(existsIndex, 1);
    showToast(`Removed "${name}" from your saved list`, '🗑️');
  } else {
    state.savedPlaces.push({ id, type, name, image, addedAt: new Date().toISOString() });
    showToast(`Saved "${name}" to your wishlist!`, '💖');
  }
  localStorage.setItem('taj_saved_places', JSON.stringify(state.savedPlaces));
  updateSavedBadge();
  renderSavedDrawer();
  updateBookmarkButtons();
}

function updateSavedBadge() {
  const badge = document.getElementById('savedCountBadge');
  if (badge) {
    badge.textContent = state.savedPlaces.length;
    badge.style.display = state.savedPlaces.length > 0 ? 'inline-block' : 'none';
  }
}

function updateBookmarkButtons() {
  document.querySelectorAll('.card-bookmark-btn').forEach(btn => {
    const id = btn.getAttribute('data-id');
    const isSaved = state.savedPlaces.some(p => p.id === id);
    if (isSaved) {
      btn.classList.add('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    } else {
      btn.classList.remove('active');
      btn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    }
  });
}

// --- Render Monuments & Attractions ---
function renderMonuments() {
  const container = document.getElementById('monumentsGrid');
  if (!container) return;

  const query = state.searchQuery.toLowerCase().trim();
  const filter = state.activeAttractionFilter;
  const sortMode = document.getElementById('monumentSortSelect')?.value || 'popularity';

  let list = ATTRACTIONS.filter(item => {
    // Category match
    const matchesCategory = (filter === 'all') ||
      (filter === 'Monument' && item.category === 'Monument') ||
      (filter === 'Garden' && item.category === 'Garden') ||
      (filter === 'Market' && item.category === 'Market') ||
      (filter === 'Religious' && item.category === 'Religious') ||
      (filter === 'Day Trip' && item.category === 'Day Trip');

    // Query match
    const matchesQuery = !query || 
      item.name.toLowerCase().includes(query) ||
      item.shortDescription.toLowerCase().includes(query) ||
      item.area.toLowerCase().includes(query) ||
      item.interests.some(i => i.toLowerCase().includes(query));

    return matchesCategory && matchesQuery;
  });

  // Sorting
  if (sortMode === 'popularity') {
    list.sort((a, b) => a.popularityRank - b.popularityRank);
  } else if (sortMode === 'price-low') {
    list.sort((a, b) => a.ticketPrice.indian - b.ticketPrice.indian);
  } else if (sortMode === 'time-short') {
    list.sort((a, b) => a.durationHours - b.durationHours);
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 1.4rem; font-family: var(--font-serif-royal); color: var(--color-gold); margin-bottom: 0.5rem;">No Imperial Wonders Found</p>
        <p>Try clearing your search query or switching categories.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(item => {
    const isSaved = state.savedPlaces.some(p => p.id === item.id);
    const priceText = item.ticketPrice.indian === 0 ? 'Free Entry' : `${formatPrice(item.ticketPrice.indian)} (Ind) / ${formatPrice(item.ticketPrice.foreign)} (Int)`;
    
    // Check if Taj Mahal or specific monuments should use local hero photo as fallback/enhancement
    let photoUrl = item.image;
    if (item.id === 'attr_taj_mahal') {
      photoUrl = 'images/taj_mahal_hero.jpg';
    }

    return `
      <article class="monument-card" data-id="${item.id}">
        <div class="card-image-box">
          <img src="${photoUrl}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.onerror=null;this.src='images/hero.jpg';">
          <div class="card-gradient-vignette"></div>
          <span class="card-badge-top-left">${item.category}</span>
          <button class="card-bookmark-btn ${isSaved ? 'active' : ''}" data-id="${item.id}" data-type="attraction" data-name="${item.name}" data-img="${photoUrl}" title="Save to My Trip">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </button>
          <div class="card-timing-overlay">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
            <span>Best: ${item.bestTimeToVisit}</span>
          </div>
        </div>
        <div class="card-body">
          <div class="card-header-row">
            <h3 class="card-title">${item.name}</h3>
            <span class="card-price-badge">${priceText}</span>
          </div>
          <p class="card-desc">${item.shortDescription}</p>
          <div class="card-meta-chips">
            <span class="meta-chip">📍 ${item.area}</span>
            <span class="meta-chip">⏱️ ${item.durationHours} hrs</span>
            ${item.closedOn.length > 0 ? `<span class="meta-chip" style="color: #fca5a5;">⚠️ Closed ${item.closedOn.join(', ')}</span>` : '<span class="meta-chip" style="color: #86efac;">Open Daily</span>'}
          </div>
          <div class="card-footer">
            <button class="btn-card-details" onclick="window.openAttractionModal('${item.id}')">
              Explore History & Guide →
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');

  // Attach bookmark events
  container.querySelectorAll('.card-bookmark-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      const type = btn.getAttribute('data-type');
      const name = btn.getAttribute('data-name');
      const img = btn.getAttribute('data-img');
      toggleSavePlace(id, type, name, img);
    });
  });
}

// --- Modal for Attraction Details ---
window.openAttractionModal = function(id) {
  const item = ATTRACTIONS.find(a => a.id === id);
  if (!item) return;

  const modal = document.getElementById('detailsModal');
  const modalContent = document.getElementById('detailsModalContent');
  if (!modal || !modalContent) return;

  let photoUrl = item.image;
  if (item.id === 'attr_taj_mahal') {
    photoUrl = 'images/taj_mahal_hero.jpg';
  }

  // Find nearby foods
  const foodsHTML = item.nearbyFood.map(fid => {
    const f = FOODS.find(fd => fd.id === fid);
    return f ? `<span class="meta-chip" style="background: rgba(212,175,55,0.15); color: var(--color-gold-light);">🍲 ${f.name}</span>` : '';
  }).join(' ');

  modalContent.innerHTML = `
    <div style="position: relative; height: 320px; overflow: hidden; border-radius: var(--radius-xl) var(--radius-xl) 0 0;">
      <img src="${photoUrl}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
      <div style="position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(12,18,30,0.95) 100%);"></div>
      <div style="position: absolute; bottom: 1.5rem; left: 2rem; right: 2rem;">
        <span class="card-badge-top-left" style="position: static; margin-bottom: 0.5rem; display: inline-block;">${item.category}</span>
        <h2 style="font-family: var(--font-serif-royal); font-size: 2.2rem; color: #fff; line-height: 1.1;">${item.name}</h2>
        <p style="color: var(--color-gold-light); font-size: 0.95rem;">📍 ${item.area} • Rank #${item.popularityRank} in Agra</p>
      </div>
    </div>
    <div style="padding: 2rem;">
      <div style="margin-bottom: 1.8rem;">
        <h4 style="font-family: var(--font-serif-royal); color: var(--color-gold); font-size: 1.1rem; margin-bottom: 0.6rem;">Historical Narrative & Highlights</h4>
        <p style="color: var(--color-text-secondary); line-height: 1.7; font-size: 0.96rem;">${item.fullDescription}</p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.8rem; background: rgba(255,255,255,0.03); padding: 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--color-surface-border);">
        <div>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Ticket Pricing</p>
          <p style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem;">
            Indian: <span style="color: var(--color-gold);">${formatPrice(item.ticketPrice.indian)}</span> | Foreigner: <span style="color: var(--color-gold);">${formatPrice(item.ticketPrice.foreign)}</span>
          </p>
        </div>
        <div>
          <p style="font-size: 0.8rem; color: var(--color-text-muted); text-transform: uppercase;">Opening Schedule</p>
          <p style="font-size: 1.05rem; font-weight: 700; color: #fff; margin-top: 0.2rem;">${item.openingHours}</p>
          ${item.closedOn.length > 0 ? `<p style="font-size: 0.82rem; color: #ef4444; font-weight: 600;">Closed every: ${item.closedOn.join(', ')}</p>` : ''}
        </div>
      </div>

      <div style="margin-bottom: 1.8rem;">
        <h4 style="font-family: var(--font-serif-royal); color: var(--color-gold); font-size: 1.1rem; margin-bottom: 0.8rem;">Insider Travel Tips</h4>
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.6rem;">
          ${item.tips.map(tip => `
            <li style="display: flex; align-items: flex-start; gap: 0.6rem; font-size: 0.9rem; color: var(--color-text-secondary);">
              <span style="color: var(--color-gold);">✦</span> <span>${tip}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div style="margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-serif-royal); color: var(--color-gold); font-size: 1.1rem; margin-bottom: 0.6rem;">Recommended Food Nearby</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
          ${foodsHTML || '<span style="color: var(--color-text-muted); font-size: 0.85rem;">Local street vendors around the entrance gates</span>'}
        </div>
      </div>

      <div style="display: flex; gap: 1rem; border-top: 1px solid var(--color-surface-border); padding-top: 1.5rem; justify-content: flex-end;">
        <a href="https://maps.google.com/?q=${encodeURIComponent(item.name + ' Agra India')}" target="_blank" rel="noopener noreferrer" class="btn-secondary">
          🗺️ Open in Google Maps
        </a>
        <button class="btn-cta-nav" onclick="window.quickSaveAndClose('${item.id}')">
          💖 Save to Itinerary
        </button>
      </div>
    </div>
  `;

  modal.classList.add('active');
};

window.quickSaveAndClose = function(id) {
  const item = ATTRACTIONS.find(a => a.id === id);
  if (item) {
    toggleSavePlace(item.id, 'attraction', item.name, item.image);
  }
  closeModals();
};

function closeModals() {
  document.querySelectorAll('.modal-backdrop').forEach(m => m.classList.remove('active'));
}

// --- Render Luxury & Heritage Stays ---
function renderStays() {
  const container = document.getElementById('staysGrid');
  if (!container) return;

  const filter = state.activeHotelFilter;

  let list = HOTELS.filter(item => {
    if (filter === 'all') return true;
    return item.category.toLowerCase() === filter.toLowerCase();
  });

  container.innerHTML = list.map(item => {
    const isSaved = state.savedPlaces.some(p => p.id === item.id);
    const badgeClass = item.category === 'Luxury' ? 'badge-luxury' : (item.category === 'Comfort' ? 'badge-comfort' : 'badge-budget');
    
    // For luxury hotel showcase, also highlight palace image
    let photo = item.image;
    if (item.id === 'stay_009' || item.id === 'stay_012') {
      photo = 'images/mughal_palace.jpg';
    }

    return `
      <article class="stay-card" data-id="${item.id}">
        <div class="stay-img-box">
          <img src="${photo}" alt="${item.name}" class="stay-img" loading="lazy" onerror="this.onerror=null;this.src='images/mughal_palace.jpg';">
          <span class="stay-category-badge ${badgeClass}">${item.category}</span>
          <span class="stay-distance-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            ${item.distanceFromTajKm} km from Taj Mahal
          </span>
        </div>
        <div class="stay-body">
          <h3 class="stay-title">${item.name}</h3>
          <p class="stay-best-for">“${item.bestFor}”</p>
          <p class="stay-desc">${item.description}</p>
          <div class="stay-facilities">
            ${item.facilities.map(f => `<span class="facility-pill">✓ ${f}</span>`).join('')}
          </div>
          <div class="stay-footer">
            <div class="stay-price-box">
              <span class="stay-price-from">Nightly from</span>
              <span class="stay-price-amount">${formatPrice(item.pricePerNight.min)}</span>
              <span class="stay-price-per">up to ${formatPrice(item.pricePerNight.max)}</span>
            </div>
            <button class="btn-book-stay" onclick="window.openBookingModal('${item.id}')">
              Check Dates & Rates
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- Stay Booking Inquiry Simulator Modal ---
window.openBookingModal = function(stayId) {
  const stay = HOTELS.find(h => h.id === stayId);
  if (!stay) return;

  const modal = document.getElementById('bookingModal');
  const modalContent = document.getElementById('bookingModalContent');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div style="padding: 2.5rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; border-bottom: 1px solid var(--color-surface-border); padding-bottom: 1rem;">
        <div>
          <span class="section-label" style="margin-bottom: 0.2rem;">Reservation Inquiry</span>
          <h2 style="font-family: var(--font-serif-royal); font-size: 1.8rem; color: #fff;">${stay.name}</h2>
          <p style="color: var(--color-gold-light); font-size: 0.9rem;">📍 ${stay.area} • ${stay.distanceFromTajKm} km to Taj Mahal</p>
        </div>
        <div style="text-align: right;">
          <span style="font-size: 0.8rem; color: var(--color-text-muted);">Starting at</span>
          <p style="font-family: var(--font-serif-royal); font-size: 1.6rem; color: var(--color-gold); font-weight: 700;">${formatPrice(stay.pricePerNight.min)}<span style="font-size: 0.85rem; color: var(--color-text-muted);">/night</span></p>
        </div>
      </div>

      <form id="stayInquiryForm" onsubmit="event.preventDefault(); window.submitStayInquiry('${stay.name}');">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 1.2rem;">
          <div>
            <label style="display: block; font-size: 0.82rem; color: var(--color-text-secondary); margin-bottom: 0.4rem;">Check-in Date</label>
            <input type="date" required style="width: 100%; background: rgba(12,18,30,0.8); border: 1px solid var(--color-surface-border); border-radius: var(--radius-sm); padding: 0.7rem; color: #fff; outline: none;">
          </div>
          <div>
            <label style="display: block; font-size: 0.82rem; color: var(--color-text-secondary); margin-bottom: 0.4rem;">Check-out Date</label>
            <input type="date" required style="width: 100%; background: rgba(12,18,30,0.8); border: 1px solid var(--color-surface-border); border-radius: var(--radius-sm); padding: 0.7rem; color: #fff; outline: none;">
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 1.5rem;">
          <div>
            <label style="display: block; font-size: 0.82rem; color: var(--color-text-secondary); margin-bottom: 0.4rem;">Guests</label>
            <select style="width: 100%; background: rgba(12,18,30,0.8); border: 1px solid var(--color-surface-border); border-radius: var(--radius-sm); padding: 0.7rem; color: #fff; outline: none;">
              <option>1 Solo Traveler</option>
              <option selected>2 Guests (Couple)</option>
              <option>3 Guests</option>
              <option>4 Guests (Family Suite)</option>
            </select>
          </div>
          <div>
            <label style="display: block; font-size: 0.82rem; color: var(--color-text-secondary); margin-bottom: 0.4rem;">Taj View Preference</label>
            <select style="width: 100%; background: rgba(12,18,30,0.8); border: 1px solid var(--color-surface-border); border-radius: var(--radius-sm); padding: 0.7rem; color: #fff; outline: none;">
              <option>Direct Taj Mahal Balcony View</option>
              <option>Courtyard & Garden View</option>
              <option>Standard Deluxe Room</option>
            </select>
          </div>
        </div>

        <div style="background: rgba(212,175,55,0.08); border: 1px dashed var(--color-gold); border-radius: var(--radius-md); padding: 1rem; margin-bottom: 1.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.88rem; color: var(--color-text-secondary);">Direct Hotel Concierge Booking Advantage:</span>
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--color-gold-light);">Free Sunrise Taj Gate Shuttle Included</span>
        </div>

        <button type="submit" class="btn-book-calculated-trip">
          Confirm Royal Booking Inquiry
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');
};

window.submitStayInquiry = function(stayName) {
  closeModals();
  showToast(`Booking inquiry sent for ${stayName}! Check your email for confirmation.`, '🛎️');
};

// --- Render Mughal Gastronomy & Food ---
function renderFoods() {
  const container = document.getElementById('foodGrid');
  if (!container) return;

  const filter = state.activeFoodFilter;

  let list = FOODS.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'veg') return item.foodType === 'Vegetarian';
    if (filter === 'nonveg') return item.foodType === 'Non-Vegetarian';
    if (filter === 'breakfast') return item.mealType.includes('Breakfast');
    if (filter === 'dessert') return item.mealType.includes('Dessert') || item.mealType.includes('Snacks');
    return true;
  });

  container.innerHTML = list.map(item => {
    const isVeg = item.foodType === 'Vegetarian';
    return `
      <article class="food-card">
        <div class="food-img-box">
          <img src="${item.image}" alt="${item.name}" class="food-img" loading="lazy" onerror="this.onerror=null;this.src='images/mughal_palace.jpg';">
          <div class="food-type-indicator ${isVeg ? 'food-type-veg' : 'food-type-nonveg'}" title="${item.foodType}"></div>
          <span class="food-price-tag">${item.priceRange}</span>
        </div>
        <div class="food-body">
          <h3 class="food-title">${item.name}</h3>
          <p class="food-desc">${item.description}</p>
          <div class="food-spots">
            <strong>Must-try at:</strong> ${item.bestPlaces}
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// --- Render Transit Guide ---
function renderTransit() {
  const container = document.getElementById('transitGrid');
  if (!container) return;

  container.innerHTML = TRANSPORT_OPTIONS.map(item => {
    return `
      <div class="transit-card">
        <div class="transit-header">
          <div class="transit-icon-box">${item.icon}</div>
          <div>
            <h3 class="transit-name">${item.name}</h3>
            <span class="transit-fare">${item.averageFare}</span>
          </div>
        </div>
        <ul class="transit-list">
          ${item.pros.slice(0, 3).map(p => `<li><span style="color: #22c55e;">✓</span> <span>${p}</span></li>`).join('')}
          ${item.cons.slice(0, 2).map(c => `<li><span style="color: #f59e0b;">!</span> <span>${c}</span></li>`).join('')}
        </ul>
        <div class="transit-tips">
          💡 <strong>Pro Tip:</strong> ${item.tips[0]}
        </div>
      </div>
    `;
  }).join('');
}

// --- Render Travel Intelligence & Tips ---
function renderTips() {
  const container = document.getElementById('tipsGrid');
  if (!container) return;

  container.innerHTML = TRAVEL_TIPS.map(tip => {
    return `
      <div class="tip-card">
        <div class="tip-header">
          <span class="tip-icon">${tip.icon}</span>
          <div>
            <span class="section-label" style="font-size: 0.7rem; margin-bottom: 0;">${tip.category}</span>
            <h3 class="tip-title">${tip.title}</h3>
          </div>
        </div>
        <p class="tip-desc">${tip.description}</p>
      </div>
    `;
  }).join('');
}

// --- Interactive Trip Planner Engine ---
function generateItinerary() {
  const days = parseInt(document.getElementById('planDaysSelect')?.value || '2', 10);
  const group = document.getElementById('planGroupSelect')?.value || 'couple';
  const pace = document.getElementById('planPaceSelect')?.value || 'balanced';
  const style = document.getElementById('planStyleSelect')?.value || 'comfort';

  const outputContainer = document.getElementById('itineraryOutput');
  if (!outputContainer) return;

  const dayPlans = [];

  // Day 1: The Crown Jewel & Imperial Fortress
  dayPlans.push({
    day: 1,
    title: 'The Eternal Wonder & Red Sandstone Fort',
    subtitle: 'From Sunrise Silhouette to Sunset Glow',
    slots: [
      {
        time: '05:45 AM – 08:30 AM',
        phase: 'Sunrise Dawn',
        title: 'Taj Mahal at First Light',
        type: 'Monument',
        desc: 'Experience the Taj Mahal before the daytime crowds. Watch the white Makrana marble transform from pearlescent gray to soft rose and radiant gold in the early morning sunlight.',
        tip: 'Pre-book online tickets at asi.payumoney.com. Shoe covers and water bottle are complimentary at the main gate.'
      },
      {
        time: '09:00 AM – 10:15 AM',
        phase: 'Heritage Breakfast',
        title: 'Bedhai & Golden Jalebi Feast',
        type: 'Food',
        desc: 'Savor Agra’s iconic breakfast tradition: crisp urad-dal stuffed puris (bedhai) with spicy potato curry and warm syrup-drenched jalebis at Deviram Sweets.',
        tip: 'Pair with hot spiced chai in an authentic clay kulhad.'
      },
      {
        time: '10:45 AM – 01:15 PM',
        phase: 'Midday Wonder',
        title: 'Agra Fort (Red Fort of Agra)',
        type: 'Monument',
        desc: 'Walk the palatial halls where Mughal emperors ruled. Marvel at the Diwan-i-Khas, Jahangiri Mahal, and stand at the Musamman Burj where Shah Jahan gazed upon his beloved Taj during his final years.',
        tip: 'Hire an ASI-certified guide at the Amar Singh Gate for captivating palace folklore.'
      },
      {
        time: '01:30 PM – 03:00 PM',
        phase: 'Royal Lunch & Rest',
        title: 'Dum Biryani & Charcoal Kebabs',
        type: 'Food',
        desc: 'Relax in air-conditioned comfort with fragrant dum biryani, melt-in-mouth galouti kebabs, and mint lassi at Pinch of Spice or Peshawri.',
        tip: 'Take a relaxed 1-hour midday break at your hotel during peak afternoon heat.'
      },
      {
        time: '04:45 PM – 06:45 PM',
        phase: 'Golden Hour Sunset',
        title: 'Mehtab Bagh (Moonlight Garden)',
        type: 'Monument',
        desc: 'Cross to the opposite bank of the Yamuna River. Catch the breathtaking reflection and dusky silhouette of the Taj Mahal as the sky turns crimson and violet.',
        tip: 'Bring a camera or phone with night-mode capability for blue-hour reflections.'
      },
      {
        time: '07:30 PM – 09:30 PM',
        phase: 'Evening Bazaar',
        title: 'Sadar Bazaar & Petha Tasting',
        type: 'Relax',
        desc: 'Stroll the bustling illuminated avenues. Sample authentic Agra Petha (Kesar, Angoori, Paan) from the legendary Panchi Petha and browse handcrafted marble pietra dura crafts.',
        tip: 'Bargain politely at artisan shops; government emporiums offer fixed certification.'
      }
    ]
  });

  // Day 2: The Jewel Box & Old City Heritage
  if (days >= 2) {
    dayPlans.push({
      day: 2,
      title: 'The Jewel Box & Old Agra Cultural Heart',
      subtitle: 'Pietra Dura Mastery, Grand Mosques & Riverfront Serenity',
      slots: [
        {
          time: '08:30 AM – 10:00 AM',
          phase: 'Morning Masterpiece',
          title: 'Tomb of Itimad-ud-Daulah (Baby Taj)',
          type: 'Monument',
          desc: 'Known as the "Jewel Box", this exquisite marble tomb built by Empress Nur Jahan features the world’s most delicate inlay floral gemstone work and latticed marble screens.',
          tip: 'Far less crowded than the main Taj Mahal — perfect for calm, serene photography.'
        },
        {
          time: '10:30 AM – 11:30 AM',
          phase: 'Hidden Heritage',
          title: 'Chini ka Rauza & Ram Bagh',
          type: 'Monument',
          desc: 'Discover Agra’s hidden gem: the Persian-glazed tilework tomb of Afzal Khan and India’s oldest surviving Mughal terraced garden laid out by Babur in 1528.',
          tip: 'Virtually crowd-free; entry is completely free at Chini ka Rauza.'
        },
        {
          time: '12:00 PM – 01:30 PM',
          phase: 'Lunch Experience',
          title: 'Authentic Stuffed Parathas',
          type: 'Food',
          desc: 'Feast on 16 varieties of tawa-crisped stuffed parathas with fresh curd and spicy homemade pickles at the historic Ram Babu Paranthe Wala.',
          tip: 'Try the famous mooli-paneer and dry fruit paratha.'
        },
        {
          time: '02:00 PM – 04:00 PM',
          phase: 'Spiritual Grandeur',
          title: 'Jama Masjid & Kinari Bazaar Walk',
          type: 'Monument',
          desc: 'Explore the 1648 red sandstone Jama Masjid built by Shah Jahan’s daughter Jahanara, then wander through the narrow historic lanes of Kinari Bazaar known for zari embroidery.',
          tip: 'Remember to remove shoes and dress respectfully when entering the mosque.'
        },
        {
          time: '05:30 PM – 07:00 PM',
          phase: 'Dusk Panorama',
          title: 'Yamuna River Sunset Point & Chai',
          type: 'Relax',
          desc: 'Soak in the gentle evening breeze as local wooden boats drift quietly across the Yamuna while the dusk sky mirrors the grand domes.',
          tip: 'Sip hot ginger tea from riverside stalls.'
        },
        {
          time: '08:00 PM – 10:00 PM',
          phase: 'Royal Dinner',
          title: 'Mughal Feast with Taj Rooftop View',
          type: 'Food',
          desc: 'Conclude your second evening with royal mutton korma, saffron naan, and pistachio kulfi on a panoramic rooftop overlooking the illuminated city skyline.',
          tip: 'Book rooftop seating in advance during peak tourist months.'
        }
      ]
    });
  }

  // Day 3: The Grand Ghost City Expedition
  if (days >= 3) {
    dayPlans.push({
      day: 3,
      title: 'Fatehpur Sikri — The Ghost City of Akbar',
      subtitle: 'UNESCO World Heritage Excursion & Buland Darwaza',
      slots: [
        {
          time: '08:00 AM – 09:15 AM',
          phase: 'Morning Journey',
          title: 'Scenic Drive to Fatehpur Sikri (37 km)',
          type: 'Relax',
          desc: 'Travel comfortably by private AC taxi through the rural plains of Uttar Pradesh toward Emperor Akbar’s abandoned red sandstone capital.',
          tip: 'Book a round-trip cab in advance for a fixed convenient fare.'
        },
        {
          time: '09:30 AM – 12:30 PM',
          phase: 'Imperial Marvel',
          title: 'Fatehpur Sikri & The Palaces',
          type: 'Monument',
          desc: 'Explore the hauntingly preserved city: the five-storey Panch Mahal, Jodha Bai’s Palace, Diwan-i-Khas with its single massive carved lotus pillar, and the monumental 54m Buland Darwaza.',
          tip: 'Wear good walking shoes as the palace complex is expansive and requires extensive strolling.'
        },
        {
          time: '01:00 PM – 02:30 PM',
          phase: 'Countryside Lunch',
          title: 'Kachori, Lassi & Rajasthani Thali',
          type: 'Food',
          desc: 'Enjoy authentic regional dhabas near Fatehpur Sikri featuring piping-hot dal kachoris, paneer sabzi, and thick clay-pot sweet lassi.',
          tip: 'Clean, family-friendly heritage garden restaurants surround the highway exit.'
        },
        {
          time: '03:30 PM – 05:30 PM',
          phase: 'Artisan Encounter',
          title: 'Marble Inlay Workshop Experience',
          type: 'Relax',
          desc: 'Watch 6th-generation artisan descendants of the original Taj Mahal craftsmen carve semi-precious stones (lapis lazuli, malachite, jasper) into pure white marble.',
          tip: 'Look for government certification labels for genuine pietra dura keepsakes.'
        },
        {
          time: '07:30 PM – 10:00 PM',
          phase: 'Farewell Gala',
          title: 'Palatial Heritage Resort Candlelit Dinner',
          type: 'Food',
          desc: 'Celebrate the grand finale of your Agra journey in an opulent palatial courtyard with classical sitar performances, floral fountains, and royal Mughlai fine dining.',
          tip: 'Check with hotel concierge for private romantic terrace arrangements.'
        }
      ]
    });
  }

  outputContainer.innerHTML = `
    <div style="background: rgba(212,175,55,0.08); border: 1px solid var(--color-surface-border); border-radius: var(--radius-lg); padding: 1.2rem 1.8rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
      <div>
        <h3 style="font-family: var(--font-serif-royal); font-size: 1.3rem; color: #fff;">
          Generated ${days}-Day Royal Itinerary
        </h3>
        <p style="font-size: 0.88rem; color: var(--color-gold-light);">
          Personalized for: <strong>${group.toUpperCase()}</strong> • Style: <strong>${style.toUpperCase()}</strong> • Pace: <strong>${pace.toUpperCase()}</strong>
        </p>
      </div>
      <div style="display: flex; gap: 0.8rem;">
        <button class="btn-secondary" onclick="window.printItinerary()">
          🖨️ Print / Save PDF
        </button>
      </div>
    </div>

    ${dayPlans.map(dp => `
      <div class="itinerary-day-card">
        <div class="itinerary-day-header">
          <div class="itinerary-day-title">
            <span>Day ${dp.day}: ${dp.title}</span>
          </div>
          <span class="itinerary-day-badge">${dp.subtitle}</span>
        </div>
        <div class="itinerary-timeline">
          ${dp.slots.map(s => {
            const badgeClass = s.type === 'Monument' ? 'badge-monument' : (s.type === 'Food' ? 'badge-food' : 'badge-relax');
            return `
              <div class="timeline-slot">
                <div class="slot-time">
                  <span class="slot-hour">${s.time}</span>
                  <span class="slot-phase">${s.phase}</span>
                </div>
                <div class="slot-content">
                  <div class="slot-heading">
                    <span>${s.title}</span>
                    <span class="slot-type-badge ${badgeClass}">${s.type}</span>
                  </div>
                  <p class="slot-details">${s.desc}</p>
                  <div class="slot-tip">💡 ${s.tip}</div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `).join('')}
  `;

  showToast(`Created custom ${days}-Day Itinerary!`, '🗺️');
}

window.printItinerary = function() {
  window.print();
};

// --- Live Budget Calculator Logic ---
function calculateLiveBudget() {
  const days = parseInt(document.getElementById('budgetDaysSlider')?.value || '2', 10);
  const travelers = parseInt(document.getElementById('budgetTravelersSlider')?.value || '2', 10);
  const origin = state.budget.origin;
  const stayTier = state.budget.stayTier;
  const foodTier = state.budget.foodTier;
  const transitTier = state.budget.transitTier;

  // Update slider badges
  const daysBadge = document.getElementById('budgetDaysBadge');
  const travelersBadge = document.getElementById('budgetTravelersBadge');
  if (daysBadge) daysBadge.textContent = `${days} Days`;
  if (travelersBadge) travelersBadge.textContent = `${travelers} Travelers`;

  // Stays calculation:
  // 1 room for 1-2 people, 2 rooms for 3-4, etc.
  const roomsNeeded = Math.ceil(travelers / 2);
  const nights = Math.max(1, days - 1);
  const stayCostPerNight = COST_CONFIG.stay[stayTier].typical;
  const totalStay = roomsNeeded * nights * stayCostPerNight;

  // Food calculation:
  const foodCostPerDayPerPerson = COST_CONFIG.food[foodTier].perDay;
  const totalFood = foodCostPerDayPerPerson * travelers * days;

  // Transit calculation:
  const transitCostPerDay = COST_CONFIG.transport[transitTier].perDay;
  const totalTransit = transitCostPerDay * days;

  // Monument tickets calculation:
  // Taj Mahal + Agra Fort + Mehtab Bagh + Baby Taj + (Fatehpur Sikri if 3+ days)
  let baseTicketPerPerson = 0;
  if (origin === 'indian') {
    baseTicketPerPerson = 50 + 40 + 25 + 20; // 135
    if (days >= 3) baseTicketPerPerson += 40; // 175
  } else {
    baseTicketPerPerson = 1100 + 600 + 200 + 310; // 2210
    if (days >= 3) baseTicketPerPerson += 600; // 2810
  }
  const totalTickets = baseTicketPerPerson * travelers;

  const grandTotal = totalStay + totalFood + totalTransit + totalTickets;
  const perPerson = Math.round(grandTotal / travelers);

  // Update DOM
  const totalEl = document.getElementById('budgetGrandTotal');
  const perPersonEl = document.getElementById('budgetPerPerson');
  if (totalEl) totalEl.textContent = formatPrice(grandTotal);
  if (perPersonEl) perPersonEl.textContent = `(${formatPrice(perPerson)} per traveler)`;

  // Breakdown amounts and progress bars
  const stayAmtEl = document.getElementById('breakdownStayAmt');
  const ticketAmtEl = document.getElementById('breakdownTicketAmt');
  const foodAmtEl = document.getElementById('breakdownFoodAmt');
  const transitAmtEl = document.getElementById('breakdownTransitAmt');

  if (stayAmtEl) stayAmtEl.textContent = formatPrice(totalStay);
  if (ticketAmtEl) ticketAmtEl.textContent = formatPrice(totalTickets);
  if (foodAmtEl) foodAmtEl.textContent = formatPrice(totalFood);
  if (transitAmtEl) transitAmtEl.textContent = formatPrice(totalTransit);

  const pStay = Math.round((totalStay / grandTotal) * 100);
  const pTicket = Math.round((totalTickets / grandTotal) * 100);
  const pFood = Math.round((totalFood / grandTotal) * 100);
  const pTransit = Math.round((totalTransit / grandTotal) * 100);

  document.getElementById('barFillStay')?.setAttribute('style', `width: ${pStay}%;`);
  document.getElementById('barFillTicket')?.setAttribute('style', `width: ${pTicket}%;`);
  document.getElementById('barFillFood')?.setAttribute('style', `width: ${pFood}%;`);
  document.getElementById('barFillTransit')?.setAttribute('style', `width: ${pTransit}%;`);
}

// --- Render Saved Drawer ---
function renderSavedDrawer() {
  const container = document.getElementById('savedDrawerList');
  if (!container) return;

  if (state.savedPlaces.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: var(--color-text-muted);">
        <p style="font-size: 2rem; margin-bottom: 0.5rem;">💌</p>
        <p style="font-size: 1.1rem; color: var(--color-gold-light); font-family: var(--font-serif-royal);">Your Wishlist is Empty</p>
        <p style="font-size: 0.85rem; margin-top: 0.3rem;">Tap the heart icon on any monument, hotel, or food to collect your favorites here.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = state.savedPlaces.map(item => {
    return `
      <div class="saved-item-row">
        <img src="${item.image}" alt="${item.name}" class="saved-item-thumb" onerror="this.onerror=null;this.src='images/hero.jpg';">
        <div class="saved-item-info">
          <p class="saved-item-name">${item.name}</p>
          <span class="saved-item-cat">${item.type.toUpperCase()}</span>
        </div>
        <button class="saved-item-remove" onclick="window.removeSavedPlace('${item.id}', '${item.name}')" title="Remove">
          ✕
        </button>
      </div>
    `;
  }).join('');
}

window.removeSavedPlace = function(id, name) {
  const idx = state.savedPlaces.findIndex(p => p.id === id);
  if (idx >= 0) {
    state.savedPlaces.splice(idx, 1);
    localStorage.setItem('taj_saved_places', JSON.stringify(state.savedPlaces));
    updateSavedBadge();
    renderSavedDrawer();
    updateBookmarkButtons();
    showToast(`Removed "${name}" from saved list`, '🗑️');
  }
};

window.clearAllSaved = function() {
  if (state.savedPlaces.length === 0) return;
  state.savedPlaces = [];
  localStorage.setItem('taj_saved_places', JSON.stringify([]));
  updateSavedBadge();
  renderSavedDrawer();
  updateBookmarkButtons();
  showToast('Cleared your saved items', '🧹');
};

// --- Initial Event Setup ---
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial renders
  renderMonuments();
  renderStays();
  renderFoods();
  renderTransit();
  renderTips();
  generateItinerary();
  calculateLiveBudget();
  updateSavedBadge();
  renderSavedDrawer();

  // 2. Currency Selector
  const currencySelect = document.getElementById('currencySelect');
  if (currencySelect) {
    currencySelect.addEventListener('change', (e) => {
      state.currency = e.target.value;
      renderMonuments();
      renderStays();
      calculateLiveBudget();
      showToast(`Currency changed to ${state.currency} (${state.exchangeRates[state.currency].symbol})`, '💱');
    });
  }

  // 3. Header Scroll Behavior
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 4. Hero Search
  const heroSearchInput = document.getElementById('heroSearchInput');
  const heroSearchBtn = document.getElementById('heroSearchBtn');
  const runHeroSearch = () => {
    const val = heroSearchInput?.value || '';
    state.searchQuery = val;
    const inlineInput = document.getElementById('inlineSearchInput');
    if (inlineInput) inlineInput.value = val;
    renderMonuments();
    document.getElementById('monuments')?.scrollIntoView({ behavior: 'smooth' });
  };
  heroSearchBtn?.addEventListener('click', runHeroSearch);
  heroSearchInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') runHeroSearch();
  });

  // 5. Inline Search in Monuments section
  const inlineInput = document.getElementById('inlineSearchInput');
  inlineInput?.addEventListener('input', (e) => {
    state.searchQuery = e.target.value;
    renderMonuments();
  });

  // 6. Monument Sort
  const sortSelect = document.getElementById('monumentSortSelect');
  sortSelect?.addEventListener('change', () => {
    renderMonuments();
  });

  // 7. Monument Category Filter Pills
  document.querySelectorAll('[data-monument-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-monument-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeAttractionFilter = pill.getAttribute('data-monument-filter');
      renderMonuments();
    });
  });

  // 8. Hotel Filters
  document.querySelectorAll('[data-hotel-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-hotel-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeHotelFilter = pill.getAttribute('data-hotel-filter');
      renderStays();
    });
  });

  // 9. Food Filters
  document.querySelectorAll('[data-food-filter]').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('[data-food-filter]').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      state.activeFoodFilter = pill.getAttribute('data-food-filter');
      renderFoods();
    });
  });

  // 10. Planner Controls
  document.getElementById('btnGeneratePlan')?.addEventListener('click', generateItinerary);

  // 11. Budget Sliders & Tiers
  document.getElementById('budgetDaysSlider')?.addEventListener('input', calculateLiveBudget);
  document.getElementById('budgetTravelersSlider')?.addEventListener('input', calculateLiveBudget);

  // Origin Toggles
  document.querySelectorAll('[data-budget-origin]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-budget-origin]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.budget.origin = btn.getAttribute('data-budget-origin');
      calculateLiveBudget();
    });
  });

  // Stay Tier Toggles
  document.querySelectorAll('[data-budget-stay]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-budget-stay]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.budget.stayTier = btn.getAttribute('data-budget-stay');
      calculateLiveBudget();
    });
  });

  // Food Tier Toggles
  document.querySelectorAll('[data-budget-food]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-budget-food]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.budget.foodTier = btn.getAttribute('data-budget-food');
      calculateLiveBudget();
    });
  });

  // Transit Tier Toggles
  document.querySelectorAll('[data-budget-transit]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-budget-transit]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.budget.transitTier = btn.getAttribute('data-budget-transit');
      calculateLiveBudget();
    });
  });

  // 12. Modals & Drawer Event Listeners
  const savedDrawerBtn = document.getElementById('btnOpenSavedDrawer');
  const drawerBackdrop = document.getElementById('savedDrawerBackdrop');
  const closeDrawerBtn = document.getElementById('btnCloseDrawer');

  savedDrawerBtn?.addEventListener('click', () => {
    drawerBackdrop?.classList.add('active');
  });

  closeDrawerBtn?.addEventListener('click', () => {
    drawerBackdrop?.classList.remove('active');
  });

  drawerBackdrop?.addEventListener('click', (e) => {
    if (e.target === drawerBackdrop) drawerBackdrop.classList.remove('active');
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(mb => {
    mb.addEventListener('click', (e) => {
      if (e.target === mb) closeModals();
    });
  });

  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNavMenu = document.getElementById('navMenu');
  mobileMenuBtn?.addEventListener('click', () => {
    if (mobileNavMenu) {
      if (mobileNavMenu.style.display === 'flex') {
        mobileNavMenu.style.display = 'none';
      } else {
        mobileNavMenu.style.display = 'flex';
        mobileNavMenu.style.flexDirection = 'column';
        mobileNavMenu.style.position = 'absolute';
        mobileNavMenu.style.top = '100%';
        mobileNavMenu.style.left = '0';
        mobileNavMenu.style.right = '0';
        mobileNavMenu.style.background = 'rgba(8, 12, 20, 0.98)';
        mobileNavMenu.style.padding = '1.5rem';
        mobileNavMenu.style.borderBottom = '1px solid var(--color-surface-border)';
      }
    }
  });
});

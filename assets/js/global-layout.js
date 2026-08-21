document.addEventListener('DOMContentLoaded', () => {
  // 1. Header component HTML
  const headerHTML = `
    <div class="topbar-wrapper">
      <div class="topbar-container">
        <!-- Club Phone Numbers -->
        <div class="topbar-item">
          <svg class="w-3 h-3 shrink-0" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Club: <a href="tel:8333923377">8333923377</a>, <a href="tel:8332923377">8332923377</a></span>
        </div>

        <!-- Room Phone Numbers -->
        <div class="topbar-item">
          <svg class="w-3 h-3 shrink-0" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Rooms: <a href="tel:7901223377">7901223377</a>, <a href="tel:7901225577">7901225577</a></span>
        </div>

        <!-- Email -->
        <div class="topbar-item">
          <svg class="w-3 h-3 shrink-0" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <a href="mailto:cosmobvrm@gmail.com">cosmobvrm@gmail.com</a>
        </div>

        <!-- Location -->
        <div class="topbar-item">
          <svg class="w-3 h-3 shrink-0" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Suryanarayana Puram, Bhimavaram</span>
        </div>

        <!-- Hours -->
        <div class="topbar-item">
          <svg class="w-3 h-3 shrink-0" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>7am - 10 pm</span>
        </div>
      </div>
    </div>

    <div class="brand-header-wrapper">
      <div class="brand-header-inner">
        <a href="index.html" class="brand-lockup">
          <div class="brand-logo-wrap">
            <img src="assets/img/cosmoclub-logo.png" alt="CosmoPolitan Club Logo" class="brand-logo" />
          </div>
          <div class="brand-title-block">
            <span class="site-brand-title">THE COSMOPOLITAN CLUB</span>
            <span class="brand-location-tag">Bhimavaram &mdash; Est. 1972</span>
            <div class="brand-divider">
              <div class="brand-divider-line"></div>
              <svg class="brand-crown" viewBox="0 0 48 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M4 24 L4 10 L14 18 L24 4 L34 18 L44 10 L44 24 Z" stroke="#c5a880" stroke-width="1.6" stroke-linejoin="round" fill="none"/>
                <rect x="2" y="23" width="44" height="3" rx="1.5" fill="#c5a880" opacity="0.6"/>
                <circle cx="4" cy="10" r="2" fill="#c5a880"/>
                <circle cx="24" cy="4" r="2" fill="#c5a880"/>
                <circle cx="44" cy="10" r="2" fill="#c5a880"/>
              </svg>
              <div class="brand-divider-line"></div>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="nav-bar-wrapper">
      <div class="nav-bar-inner">
        <button class="mobile-menu-toggle" aria-label="Toggle navigation">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <nav id="header-nav" aria-label="Primary navigation" class="nav-shell">
          <!-- Home -->
          <div class="nav-item">
            <a href="index.html" class="nav-link" data-nav="home">HOME</a>
          </div>

          <!-- The Club Dropdown -->
          <div class="nav-item" data-dropdown>
            <span class="nav-link" data-nav="the-club">
              THE CLUB 
              <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="dropdown-menu">
              <a href="about-us.html" class="dropdown-item">About Us</a>
              <a href="club-committee.html" class="dropdown-item">Management Committee</a>
              <a href="club-secretariat.html" class="dropdown-item">Secretariat &amp; Administration</a>
              <a href="cosmo-sports-trust.html" class="dropdown-item">Cosmo Sports Trust</a>
            </div>
          </div>

          <!-- Facilities Dropdown -->
          <div class="nav-item" data-dropdown>
            <span class="nav-link" data-nav="facilities">
              FACILITIES 
              <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="dropdown-menu" style="min-width: 15rem;">
              <div class="dropdown-header">Dining &amp; Recreation</div>
              <a href="bar-restaurant.html" class="dropdown-item">Dining &amp; Lounge Bar</a>
              <a href="cards-room.html" class="dropdown-item">Cards Room</a>
              <a href="ladies-recreation-hall.html" class="dropdown-item">Ladies Recreation Hall</a>
              <a href="walking-track.html" class="dropdown-item">Walking Track</a>
              <a href="indoor-auditorium.html" class="dropdown-item">Indoor Auditorium</a>
              <div class="dropdown-header">Guest Rooms</div>
              <a href="deluxe-room.html" class="dropdown-item">Deluxe Room</a>
              <a href="suite-room.html" class="dropdown-item">Suite Room</a>
              <a href="maharaja-suite-room.html" class="dropdown-item">Maharaja Suite Room</a>
              <a href="chakravarthi-suite-room.html" class="dropdown-item">Chakravarthi Suite Room</a>
            </div>
          </div>

          <!-- Sports Dropdown -->
          <div class="nav-item" data-dropdown>
            <span class="nav-link" data-nav="sports">
              SPORTS 
              <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="dropdown-menu">
              <a href="tennis.html" class="dropdown-item">Tennis Courts</a>
              <a href="table-tennis.html" class="dropdown-item">Table Tennis</a>
              <a href="billiards.html" class="dropdown-item">Billiards &amp; Snooker</a>
              <a href="caroms.html" class="dropdown-item">Caroms Room</a>
              <a href="gym.html" class="dropdown-item">Fitness Center &amp; Gym</a>
              <a href="shuttle.html" class="dropdown-item">Badminton &amp; Shuttle</a>
              <a href="swimming.html" class="dropdown-item">Swimming Pool</a>
            </div>
          </div>

          <!-- Membership Dropdown -->
          <div class="nav-item" data-dropdown>
            <span class="nav-link" data-nav="membership">
              MEMBERSHIP 
              <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="dropdown-menu">
              <a href="types-of-memberships.html" class="dropdown-item">Membership Categories</a>
              <a href="rules-regulations.html" class="dropdown-item">Rules &amp; Regulations</a>
            </div>
          </div>

          <!-- Events Dropdown -->
          <div class="nav-item" data-dropdown>
            <span class="nav-link" data-nav="events">
              EVENTS 
              <svg class="nav-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M6 9l6 6 6-6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="dropdown-menu">
              <a href="photo-gallery.html" class="dropdown-item">Photo Gallery</a>
              <a href="events-activities.html" class="dropdown-item">Events &amp; Activities</a>
            </div>
          </div>

          <!-- Affiliations -->
          <div class="nav-item">
            <a href="affiliations.html" class="nav-link" data-nav="affiliations">AFFILIATIONS</a>
          </div>

          <!-- Contact Us -->
          <div class="nav-item">
            <a href="contact-us.html" class="nav-link" data-nav="contact-us">CONTACT US</a>
          </div>

          <!-- Member Login CTA -->
          <div class="nav-item">
            <a href="contact-us.html" class="nav-link nav-link-cta" data-nav="member-login">MEMBER LOGIN</a>
          </div>
        </nav>
      </div>
    </div>
  `;

  // 2. Footer component HTML
  const footerHTML = `
    <div class="hp-inner">
      <div class="hp-footer-grid">
        <div class="hp-footer-col">
          <a href="index.html" class="hp-footer-brand-title">COSMOPOLITAN<br>CLUB</a>
          <p class="hp-footer-brand-desc">Bhimavaram's most distinguished members' club &mdash; a legacy of sport, culture and community for all its members and their families.</p>
          <p class="hp-footer-tagline">Suryanarayana Puram, Bhimavaram</p>
        </div>
        <div class="hp-footer-col">
          <h4 class="hp-footer-col-title">Quick Links</h4>
          <ul class="hp-footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="bar-restaurant.html">Facilities</a></li>
            <li><a href="tennis.html">Sports</a></li>
            <li><a href="types-of-memberships.html">Membership</a></li>
            <li><a href="events-activities.html">Events</a></li>
          </ul>
        </div>
        <div class="hp-footer-col">
          <h4 class="hp-footer-col-title">Useful Links</h4>
          <ul class="hp-footer-links">
            <li><a href="affiliations.html">Affiliations</a></li>
            <li><a href="photo-gallery.html">Photo Gallery</a></li>
            <li><a href="contact-us.html">Contact Us</a></li>
            <li><a href="rules-regulations.html">Rules &amp; Regulations</a></li>
            <li><a href="club-committee.html">Management Committee</a></li>
          </ul>
        </div>
        <div class="hp-footer-col">
          <h4 class="hp-footer-col-title">Contact</h4>
          <ul class="hp-footer-contact-list">
            <li>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href="tel:8333923377">8333923377 / 8332923377</a>
            </li>
            <li>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <a href="mailto:cosmobvrm@gmail.com">cosmobvrm@gmail.com</a>
            </li>
            <li>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>7:00 AM - 10:00 PM Daily</span>
            </li>
            <li>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Suryanarayana Puram, Bhimavaram</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="hp-footer-bottom">
        <p class="hp-footer-copy">&copy; 2026 CosmoPolitan Club, Bhimavaram. All rights reserved.</p>
        <p class="hp-footer-copy">West Godavari District, Andhra Pradesh, India.</p>
      </div>
    </div>
  `;

  // 3. Inject shared content into DOM elements
  const siteHeaderEl = document.getElementById('site-header');
  if (siteHeaderEl) {
    siteHeaderEl.innerHTML = headerHTML;
  }

  const siteFooterEl = document.querySelector('.hp-footer');
  if (siteFooterEl) {
    siteFooterEl.innerHTML = footerHTML;
  }

  // 4. Auto-detect active page link
  const currentPath = window.location.pathname.toLowerCase();
  const currentFilename = currentPath.split('/').pop() || 'index.html';

  let activeNav = 'home';
  if (['about-us.html', 'club-committee.html', 'club-secretariat.html', 'cosmo-sports-trust.html'].includes(currentFilename)) {
    activeNav = 'the-club';
  } else if (['bar-restaurant.html', 'cards-room.html', 'ladies-recreation-hall.html', 'walking-track.html', 'indoor-auditorium.html', 'deluxe-room.html', 'suite-room.html', 'maharaja-suite-room.html', 'chakravarthi-suite-room.html'].includes(currentFilename)) {
    activeNav = 'facilities';
  } else if (['tennis.html', 'table-tennis.html', 'billiards.html', 'caroms.html', 'gym.html', 'shuttle.html', 'swimming.html'].includes(currentFilename)) {
    activeNav = 'sports';
  } else if (['types-of-memberships.html', 'rules-regulations.html'].includes(currentFilename)) {
    activeNav = 'membership';
  } else if (['photo-gallery.html', 'events-activities.html'].includes(currentFilename)) {
    activeNav = 'events';
  } else if (currentFilename === 'affiliations.html') {
    activeNav = 'affiliations';
  } else if (currentFilename === 'contact-us.html') {
    activeNav = 'contact-us';
  } else if (currentFilename === 'index.html' || currentFilename === '') {
    activeNav = 'home';
  }

  const activeLink = document.querySelector(`[data-nav="${activeNav}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // 5. Mobile Menu Toggle Click Handler
  const toggleBtn = document.querySelector('.mobile-menu-toggle');
  const navShell = document.querySelector('.nav-shell');

  if (toggleBtn && navShell) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      navShell.classList.toggle('is-open');
    });

    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (!navShell.contains(e.target) && !toggleBtn.contains(e.target)) {
        navShell.classList.remove('is-open');
      }
    });
  }

  // 6. Mobile Dropdown Toggle Click Handler (for touch support)
  if (window.innerWidth <= 1024) {
    const dropdownItems = document.querySelectorAll('[data-dropdown]');
    dropdownItems.forEach(item => {
      const link = item.querySelector('.nav-link');
      if (link) {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Close all other dropdowns
          dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
              otherItem.classList.remove('is-open');
            }
          });

          // Toggle current dropdown
          item.classList.toggle('is-open');
        });
      }
    });
  }
});

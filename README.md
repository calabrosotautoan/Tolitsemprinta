[index.html](https://github.com/user-attachments/files/25833363/index.html)
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tolits Emprińta | Premium Custom Printing Services</title>
  <meta name="description" content="Tolits Emprińta - Your trusted partner for premium custom printing. T-shirts, banners, stickers, business cards, and more.">
  <link rel="icon" type="image/jpeg" href="https://yt3.ggpht.com/WXt1osvzYAZ4WDB1Yq7T2rxzfNY5l1MRiCiBtEMNuh0edohqtIu9Z23hB0CWrPwkgkXF4U92H8gpt7A=s640-c-fcrop64=1,05b40000fa4bffff-rw-nd-v1">
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  
  <!-- Navbar -->
  <nav class="navbar">
    <div class="container">
      <a href="#home" class="navbar-brand" onclick="scrollToSection('home')">
        <img src="https://yt3.ggpht.com/WXt1osvzYAZ4WDB1Yq7T2rxzfNY5l1MRiCiBtEMNuh0edohqtIu9Z23hB0CWrPwkgkXF4U92H8gpt7A=s640-c-fcrop64=1,05b40000fa4bffff-rw-nd-v1">
        <span class="font-display text-gradient">TOLITS</span>
        <span class="font-display">EMPRIŃTA</span>
      </a>

      <div class="nav-links" id="navLinks">
        <button class="nav-link" onclick="scrollToSection('home')">Home</button>
        <button class="nav-link" onclick="scrollToSection('services')">Services</button>
        <button class="nav-link" onclick="scrollToSection('portfolio')">Portfolio</button>
        <button class="nav-link" onclick="scrollToSection('about')">About</button>
        <button class="nav-link" onclick="scrollToSection('contact')">Contact</button>

        <!-- Admin Panel Button (visible only to admin) -->
        <button class="nav-link admin-btn" id="adminBtn" onclick="openAdminPanel()" style="display:none;">⚙️ Admin Panel</button>

        <!-- User Menu -->
        <div class="user-menu">
          <button class="user-menu-btn" id="userMenuBtn" onclick="toggleUserDropdown()">
            <span id="userGreetingDesktop">Hi, Guest</span>
            <span class="user-avatar">👤</span>
          </button>

          <div class="user-dropdown" id="userDropdown">
            <div class="dropdown-header">
              <div class="user-avatar-large">👤</div>
              <div>
                <h4 id="profileName">Guest User</h4>
                <p id="profileEmail">guest@example.com</p>
              </div>
            </div>
            <div class="dropdown-links">
              <button class="dropdown-link" onclick="openProfileModal()">👤 Edit Profile</button>
              <button class="dropdown-link logout-btn" onclick="logout()">🚪 Log Out</button>
            </div>
          </div>
        </div>
      </div>

      <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>

      <div id="mobileNav" class="mobile-nav">
        <button class="nav-link mobile-nav-link admin-btn" onclick="openAdminPanel(); toggleMenu()" style="display:none;">⚙️ Admin Panel</button>
        <button class="nav-link mobile-nav-link" onclick="scrollToSection('home'); toggleMenu()">Home</button>
        <button class="nav-link mobile-nav-link" onclick="scrollToSection('services'); toggleMenu()">Services</button>
        <button class="nav-link mobile-nav-link" onclick="scrollToSection('portfolio'); toggleMenu()">Portfolio</button>
        <button class="nav-link mobile-nav-link" onclick="scrollToSection('about'); toggleMenu()">About</button>
        <button class="nav-link mobile-nav-link" onclick="scrollToSection('contact'); toggleMenu()">Contact</button>

        <div class="mobile-user-section">
          <button class="mobile-user-btn" onclick="openProfileModal(); toggleMenu()">
            <span class="user-avatar">👤</span>
            <span id="userGreetingMobile">Hi, Guest</span>
          </button>
          <button class="nav-link mobile-nav-link logout-btn" onclick="logout()">🚪 Log Out</button>
        </div>

        <button class="btn btn-primary mobile-nav-btn" onclick="scrollToSection('contact'); toggleMenu()">Get Quote</button>
      </div>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero" id="home">
    <div class="hero-bg">
      <div class="blob blob-1"></div>
      <div class="blob blob-2"></div>
    </div>
    <div class="hero-content">
      <div class="hero-badge">✨ Premium Quality Printing</div>
      <h1 class="font-display">
        <span>YOUR IDEAS,</span><br>
        <span class="text-gradient">PERFECTLY PRINTED</span>
      </h1>
      <p>From custom t-shirts to banners, stickers, and business cards — we bring your creative visions to life with precision and vibrant colors.</p>
      <div class="hero-buttons">
        <button class="btn btn-primary" onclick="scrollToSection('contact')">Get a Quote</button>
        <button class="btn btn-outline" onclick="scrollToSection('portfolio')">View Portfolio</button>
      </div>
    </div>
  </section>

  <!-- Services -->
  <section class="section" id="services">
    <div class="container">
      <div class="section-header">
        <span class="section-label">What We Do</span>
        <h2 class="section-title font-display">OUR SERVICES</h2>
        <p class="section-desc">From concept to creation, we offer comprehensive printing solutions tailored to your needs.</p>
      </div>
      <div class="services-grid">
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">👕</div>
          <h3 class="font-display">T-Shirt Printing</h3>
          <p>Custom t-shirts with screen printing, DTG, and heat transfer methods.</p>
          <span class="service-link">Get Quote →</span>
        </div>
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">🚩</div>
          <h3 class="font-display">Banners & Signage</h3>
          <p>Eye-catching vinyl banners, roll-ups, and outdoor signage.</p>
          <span class="service-link">Get Quote →</span>
        </div>
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">🏷️</div>
          <h3 class="font-display">Stickers & Labels</h3>
          <p>Die-cut stickers, labels, and decals in any shape or size.</p>
          <span class="service-link">Get Quote →</span>
        </div>
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">💳</div>
          <h3 class="font-display">Business Cards</h3>
          <p>Premium business cards with matte, glossy, embossed finishes.</p>
          <span class="service-link">Get Quote →</span>
        </div>
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">📄</div>
          <h3 class="font-display">Flyers & Brochures</h3>
          <p>High-quality marketing materials for your business.</p>
          <span class="service-link">Get Quote →</span>
        </div>
        <div class="service-card" onclick="scrollToSection('contact')">
          <div class="service-icon">🎁</div>
          <h3 class="font-display">Custom Merchandise</h3>
          <p>Mugs, caps, bags, and more custom items.</p>
          <span class="service-link">Get Quote →</span>
        </div>
      </div>
    </div>
  </section>

  <!-- Portfolio -->
  <section class="section" id="portfolio">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Our Work</span>
        <h2 class="section-title font-display">PORTFOLIO</h2>
        <p class="section-desc">A showcase of our finest printing projects.</p>
      </div>
      <div class="filter-tabs">
        <button class="filter-btn active" onclick="filterPortfolio('All')">All</button>
        <button class="filter-btn" onclick="filterPortfolio('T-Shirts')">T-Shirts</button>
        <button class="filter-btn" onclick="filterPortfolio('Banners')">Banners</button>
        <button class="filter-btn" onclick="filterPortfolio('Stickers')">Stickers</button>
        <button class="filter-btn" onclick="filterPortfolio('ID Slings')">ID Slings / Lanyard Cards</button>
      </div>
      <div class="portfolio-grid" id="portfolioGrid"></div>
    </div>
  </section>

  <!-- About -->
  <section class="section" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-visual">
          <div class="years">
            <div class="years-number font-display text-gradient">25</div>
            <p class="years-text">Years of Excellence</p>
          </div>
        </div>
        <div class="about-content">
          <span class="label">About Us</span>
          <h2 class="font-display">PRINTING WITH PASSION</h2>
          <p>Tolits Emprińta has been the trusted name in custom printing for over 25 years.</p>
          <p>Whether you're a small business or an individual with a creative vision, we have the expertise to make it happen.</p>
          <div class="features-list">
            <div class="feature-item"><div class="feature-check">✓</div><span>State-of-the-art equipment</span></div>
            <div class="feature-item"><div class="feature-check">✓</div><span>Eco-friendly ink options</span></div>
            <div class="feature-item"><div class="feature-check">✓</div><span>Fast turnaround times</span></div>
            <div class="feature-item"><div class="feature-check">✓</div><span>Competitive pricing</span></div>
            <div class="feature-item"><div class="feature-check">✓</div><span>Expert design assistance</span></div>
            <div class="feature-item"><div class="feature-check">✓</div><span>Quality guarantee</span></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact -->
  <section class="section" id="contact">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Get In Touch</span>
        <h2 class="section-title font-display">CONTACT US</h2>
        <p class="section-desc">Ready to start your printing project?</p>
      </div>
      <div class="contact-grid">
        <div class="contact-form-card">
          <h3 class="font-display">SEND US A MESSAGE</h3>
          <form id="contactForm" onsubmit="handleMessengerSubmit(event)">
            <div class="form-row">
              <div class="form-group">
                <label>Name</label>
                <input type="text" id="contactName" placeholder="Your name" required>
              </div>
              <div class="form-group">
                <label>Phone Number</label>
                <input type="tel" id="contactPhone" placeholder="+63 9XX XXX XXXX" required>
              </div>
            </div>
            <div class="form-group">
              <label>Subject</label>
              <input type="text" id="contactSubject" placeholder="e.g. T-shirt Printing Quote" required>
            </div>
            <div class="form-group">
              <label>Message</label>
              <textarea id="contactMessage" placeholder="Tell us about your project (size, quantity, design details)..." required rows="5"></textarea>
            </div>
            <div class="form-group">
              <label>Attach Reference Image (optional)</label>
              <input type="file" id="contactImage" accept="image/*" style="width:100%; padding:0.5rem;">
              <small style="color:var(--muted-foreground);">JPG, PNG — attach it manually in Messenger after clicking Send</small>
            </div>
            <button type="submit" class="btn btn-primary" style="width:100%; margin-top:1.5rem;">📩 Send via Messenger</button>
          </form>
        </div>

        <div class="contact-info">
          <div class="contact-info-list">
            <div class="contact-info-item">
              <div class="contact-info-icon">📍</div>
              <div>
                <div class="label">Address</div>
                <a href="https://maps.app.goo.gl/JwZo9oL4oKMf1jqY9" target="_blank">
                  Tolits Emprińta - Tambongon, San Remigio, Cebu
                </a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">📞</div>
              <div>
                <div class="label">Phone</div>
                <a href="tel:+639677247749">+63 967 724 7749</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">✉️</div>
              <div>
                <div class="label">Email</div>
                <a href="mailto:tolitsemprinta2010@gmail.com">tolitsemprinta2010@gmail.com</a>
              </div>
            </div>
            <div class="contact-info-item">
              <div class="contact-info-icon">🕐</div>
              <div>
                <div class="label">Hours</div>
                <span>Mon - Sat: 8AM - 5PM</span>
              </div>
            </div>
          </div>

          <div class="social-cta">
            <p>Message us directly on Facebook!</p>
            <div class="social-links">
              <a href="https://www.facebook.com/messages/t/100094006965519" target="_blank" class="social-link">📘 Open Messenger</a>
            </div>
          </div>

          <div class="social-cta">
            <p>Follow us on social media!</p>
            <div class="social-links">
              <a href="https://www.facebook.com/2litsEmprintaAndSchoolSupply" target="_blank" class="social-link">📘 Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <a href="#home" class="footer-brand" onclick="scrollToSection('home')">
        <img src="https://scontent.fmnl9-3.fna.fbcdn.net/v/t39.30808-1/356230615_108772785599620_7986125659895052271_n.jpg?stp=c19.0.815.815a_dst-jpg_s200x200_tt6&_nc_cat=102&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFM71D1R_4eeDk8z1ePNqs6cGUFSXWwZZdwZQVJdbBllyTgTf_JRd-ZVWZGWZY5XbUHUx9BEFMIcMPndLDc5rU4&_nc_ohc=LNOcr5KQAsEQ7kNvwEpfuvT&_nc_oc=Admrz8Rpn6dI3Ysf5jLSmhHcidXBEwY_Zrq0NIAUbhFVVkEl2--G50Qx58NIIbjm7bU&_nc_zt=24&_nc_ht=scontent.fmnl9-3.fna&_nc_gid=PGPprnqXuOwcPRVvr8W-IA&oh=00_Afph3kEv4VpodWefQmb6OJbhuP7K0728SWpfDyBIY1sE7Q&oe=696197B2" alt="Logo">
        <span class="font-display text-gradient">TOLITS</span>
        <span class="font-display">EMPRIŃTA</span>
      </a>
      <p class="footer-copyright">© <script>document.write(new Date().getFullYear())</script> Tolits Emprińta. All rights reserved.</p>
      <a href="#home" class="back-to-top" onclick="scrollToSection('home')">Back to Top ↑</a>
    </div>
  </footer>

  <!-- Profile Modal -->
  <div class="modal" id="profileModal">
    <div class="modal-content profile-modal-content" style="max-width:380px;">
      <div class="modal-header profile-header">
        <button class="modal-close" onclick="closeProfileModal()">✕</button>
      </div>
      <div class="modal-body profile-body" style="padding:2.5rem 1.5rem 1.5rem;">
        <div class="profile-avatar-large">👤</div>
        <form id="editProfileForm" onsubmit="saveProfileChanges(event)">
          <h2 class="font-display" id="modalProfileName" style="font-size:1.6rem;margin:1rem 0 0.5rem;">Guest User</h2>
          <p id="modalProfileEmail" style="color:var(--muted-foreground);margin-bottom:1.5rem;">guest@example.com</p>
          <div class="form-group">
            <label for="editName">Full Name</label>
            <input type="text" id="editName" required placeholder="Your full name">
          </div>
          <div class="form-group">
            <label for="editEmail">Email</label>
            <input type="email" id="editEmail" required placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label for="editPhone">Phone (Optional)</label>
            <input type="tel" id="editPhone" placeholder="+63 967 724 7749">
          </div>
          <div class="profile-info" style="margin:1.5rem 0 1rem;padding:0.75rem;font-size:0.9rem;">
            <div class="info-item"><span class="label">Member Since</span><span id="memberSince">January 2026</span></div>
            <div class="info-item"><span class="label">Account Type</span><span>Customer</span></div>
          </div>
          <div class="profile-actions" style="gap:0.75rem;">
            <button type="submit" class="btn btn-primary" style="width:100%;">💾 Save Changes</button>
            <button type="button" class="btn btn-outline" style="width:100%;" onclick="closeProfileModal()">Cancel</button>
            <button type="button" class="btn btn-primary" style="width:100%;background:#bd0000;" onclick="logout()">🚪 Log Out</button>
          </div>
        </form>
      </div>
    </div>
  </div>

  <!-- Portfolio Lightbox Modal -->
  <div class="modal" id="portfolioModal">
    <div class="modal-content portfolio-modal-content">
      <button class="modal-close" onclick="closePortfolioModal()">✕</button>
      <button class="modal-nav modal-prev" onclick="navigatePortfolio(-1)">‹</button>
      <button class="modal-nav modal-next" onclick="navigatePortfolio(1)">›</button>
      <img id="modalProjectImg" src="" alt="Project">
      <div class="modal-caption">
        <span id="modalCat" class="category"></span>
        <h3 id="modalTitle" class="font-display"></h3>
      </div>
    </div>
  </div>

  <!-- Admin Panel Modal -->
  <div class="modal" id="adminModal">
    <div class="modal-content" style="max-width:1000px; max-height:90vh; display:flex; flex-direction:column;">
      <div class="modal-header profile-header" style="flex-shrink:0;">
        <h2 class="font-display">⚙️ Admin Control Panel</h2>
        <button class="modal-close" onclick="closeAdminPanel()">✕</button>
      </div>
      <div class="modal-body" style="padding:2rem; flex:1; overflow-y:auto;">
        <div class="admin-tabs" style="margin-bottom:2rem;">
          <button class="tab-btn active" onclick="showAdminTab('portfolio')">Portfolio Control (<span id="projectCount">0</span>)</button>
          <button class="tab-btn" onclick="showAdminTab('users')">Users (<span id="userCount">0</span>)</button>
        </div>

        <!-- Portfolio Tab -->
        <div id="admin-portfolio" class="admin-tab">
          <div style="background:var(--card); padding:1.5rem; border-radius:1rem; margin-bottom:2rem; border:1px solid var(--border);">
            <h3>Add New Project</h3>
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem; margin:1.5rem 0;">
              <div class="form-group">
                <label>Image URL (from Facebook)</label>
                <input type="text" id="newImg" placeholder="https://scontent..." style="width:100%; padding:0.75rem; border-radius:0.5rem; border:1px solid var(--border); background:var(--muted); color:var(--foreground);">
              </div>
              <div class="form-group">
                <label>Title</label>
                <input type="text" id="newTitle" placeholder="e.g. Team Jersey" style="width:100%; padding:0.75rem; border-radius:0.5rem; border:1px solid var(--border); background:var(--muted); color:var(--foreground);">
              </div>
              <div class="form-group">
                <label>Category</label>
                <select id="newCat" style="width:100%; padding:0.75rem; border-radius:0.5rem; border:1px solid var(--border); background:var(--muted); color:var(--foreground);">
                  <option>T-Shirts</option>
                  <option>Banners</option>
                  <option>Stickers</option>
                  <option>ID Slings</option>
                </select>
              </div>
            </div>
            <button class="btn btn-primary" onclick="addPortfolioItem()" style="padding:1rem 2rem;">➕ Add Project</button>
          </div>

          <h3>Current Projects</h3>
          <div id="adminPortfolioList" style="display:grid; grid-template-columns:repeat(auto-fit, minmax(320px,1fr)); gap:1.5rem; margin-top:1rem;"></div>
        </div>

        <!-- Users Tab -->
        <div id="admin-users" class="admin-tab" style="display:none;">
          <h3>Registered Users</h3>
          <div id="adminUserList" style="margin-top:1rem; display:grid; gap:1rem;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast -->
  <div class="toast" id="toast">
    <h4>Message Sent!</h4>
    <p>We'll get back to you soon.</p>
  </div>

  <script>
    // Utility Functions
    function scrollToSection(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    }

    function toggleMenu() {
      document.getElementById('mobileNav').classList.toggle('active');
    }

    function toggleUserDropdown() {
      document.getElementById('userDropdown').classList.toggle('active');
    }

    // Portfolio & Admin System
    let portfolioItems = [];
    let filteredItems = [];
    let currentModalIndex = 0;

    function loadPortfolio() {
      portfolioItems = JSON.parse(localStorage.getItem("tolitsPortfolio") || "[]");
      if (portfolioItems.length === 0) {
        portfolioItems = [
          { id: 1, img: "https://yt3.ggpht.com/UqXsOXLiZKjiZY3t3XQ7T0nGmFMnNScGntYPP3Ql5MpDREPVrw-PhToHk_nFl8JfF6thIAUO5F12Ww=s640-c-fcrop64=1,00002000ffffdfff-rw-nd-v1", title: "Team Sports Jersey", cat: "T-Shirts" },
          { id: 2, img: "https://yt3.ggpht.com/cq3KP8k3q7txgDtaQwz1ipZIDsZYcdhS4LOwYGkZ--JwLs5V6T7YGinSUP3piAgXERTd_U2rM1kLxg=s640-c-fcrop64=1,2ab00000d54fffff-rw-nd-v1", title: "Event Banner Design", cat: "Banners" },
          { id: 3, img: "https://yt3.ggpht.com/qln6xVlueAS92-FeEOIaWdc7rTJvqHI1xV4HfL3vGx3i-oyaICst5-cdQKOg1Ug5QI-jNGgTSO0kyQ=s640-c-fcrop64=1,00002000ffffdfff-rw-nd-v1", title: "Brand Sticker Pack", cat: "Stickers" },
          { id: 4, img: "https://yt3.ggpht.com/MMqrWqW-qPmLjK5rVYjlBuCsqyTYN0hBJ-4h4N2H_BO1iOGF0kopkc8ZQEEuQ0_19HhvOEtXEM58OXs=s640-c-fcrop64=1,00002000ffffdfff-rw-nd-v1", title: "ID Slings / Lanyard Cards", cat: "ID Slings" },
          { id: 5, img: "https://yt3.ggpht.com/B2TcHAHVUIRPNM8n7-eVouBEdRA21v1toqk7c8_SEcbJKzehKmnv8bGtKiN86HpR-9JrlxwqKU_3C_0=s640-c-fcrop64=1,00002000ffffdfff-rw-nd-v1", title: "Polo Shirt", cat: "T-Shirts" },
          { id: 6, img: "https://yt3.ggpht.com/Q4iidMTaGQE0RsyFyDrog9xIHzQdXttg1PLkNFxjL_PQIu-M2mji12o7GxkOAXLpXKfRsCwXfGx0=s640-c-fcrop64=1,20000000dfffffff-rw-nd-v1", title: "Store Front Signage", cat: "Banners" }
        ];
        localStorage.setItem("tolitsPortfolio", JSON.stringify(portfolioItems));
      }
      filteredItems = [...portfolioItems];
    }

    function renderPortfolio() {
      loadPortfolio();
      const grid = document.getElementById("portfolioGrid");
      if (filteredItems.length === 0) {
        grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted-foreground);">No projects in this category yet.</p>';
        return;
      }
      grid.innerHTML = filteredItems.map((item, index) => `
        <div class="portfolio-item" onclick="openPortfolioModal(${index})">
          <img src="${item.img}" alt="${item.title}" loading="lazy">
          <div class="gradient-bg"></div>
          <div class="content">
            <span class="category">${item.cat}</span>
            <h3 class="font-display">${item.title}</h3>
          </div>
          <div class="overlay"><span class="overlay-btn">View Project →</span></div>
        </div>
      `).join("");
    }

    function filterPortfolio(category) {
      document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");
      filteredItems = category === "All" ? [...portfolioItems] : portfolioItems.filter(item => item.cat === category);
      renderPortfolio();
    }

    function openPortfolioModal(index) {
      currentModalIndex = index;
      const item = filteredItems[index];
      document.getElementById("modalProjectImg").src = item.img;
      document.getElementById("modalTitle").textContent = item.title;
      document.getElementById("modalCat").textContent = item.cat;
      document.getElementById("portfolioModal").classList.add("active");
    }

    function closePortfolioModal() {
      document.getElementById("portfolioModal").classList.remove("active");
    }

    function navigatePortfolio(direction) {
      let newIndex = currentModalIndex + direction;
      if (newIndex < 0) newIndex = filteredItems.length - 1;
      if (newIndex >= filteredItems.length) newIndex = 0;
      openPortfolioModal(newIndex);
    }

    // Admin System
    function isAdmin() {
      const user = JSON.parse(localStorage.getItem("tolitsUser"));
      return user && user.email === "tolitsemprinta@gmail.com";
    }

    function deleteUser(index) {
      if (!confirm("Delete this user permanently? This cannot be undone.")) return;
      
      let users = JSON.parse(localStorage.getItem("tolitsLocalUsers") || "[]");
      if (index < 0 || index >= users.length) return;
      
      if (users[index].email === "admin@tolitsemprinta.com") {
        alert("Cannot delete the main admin account!");
        return;
      }
      
      users.splice(index, 1);
      localStorage.setItem("tolitsLocalUsers", JSON.stringify(users));
      
      renderAdminUsers();
      document.getElementById("userCount").textContent = users.length;
      
      alert("User deleted successfully!");
    }

    function loadAdminData() {
      document.querySelectorAll(".admin-btn").forEach(btn => btn.style.display = isAdmin() ? "block" : "none");
      const localUsers = JSON.parse(localStorage.getItem("tolitsLocalUsers") || "[]");
      document.getElementById("userCount").textContent = localUsers.length;
      document.getElementById("projectCount").textContent = portfolioItems.length;
    }

    function openAdminPanel() {
      if (!isAdmin()) return alert("Access Denied: Admin Only");
      document.getElementById("adminModal").classList.add("active");
      renderAdminPortfolio();
      renderAdminUsers();
    }

    function closeAdminPanel() {
      document.getElementById("adminModal").classList.remove("active");
    }

    function showAdminTab(tab) {
      document.querySelectorAll(".admin-tab").forEach(t => t.style.display = "none");
      document.getElementById(`admin-${tab}`).style.display = "block";
      document.querySelectorAll(".admin-tabs .tab-btn").forEach(b => b.classList.remove("active"));
      event.target.classList.add("active");
    }

    function addPortfolioItem() {
      const img = document.getElementById("newImg").value.trim();
      const title = document.getElementById("newTitle").value.trim();
      const cat = document.getElementById("newCat").value;
      if (!img || !title) return alert("Image URL and Title required!");
      const newItem = { id: Date.now(), img, title, cat };
      portfolioItems.push(newItem);
      localStorage.setItem("tolitsPortfolio", JSON.stringify(portfolioItems));
      renderPortfolio();
      renderAdminPortfolio();
      document.getElementById("newImg").value = "";
      document.getElementById("newTitle").value = "";
      alert("Project added!");
    }

    function editPortfolioItem(id) {
      const item = portfolioItems.find(i => i.id === id);
      const newTitle = prompt("Edit Title:", item.title);
      if (newTitle === null) return;
      const newCat = prompt("Edit Category:", item.cat);
      if (newCat === null) return;
      const newImg = prompt("Edit Image URL (leave blank to keep):", item.img);
      item.title = newTitle.trim() || item.title;
      item.cat = newCat.trim() || item.cat;
      if (newImg && newImg.trim()) item.img = newImg.trim();
      localStorage.setItem("tolitsPortfolio", JSON.stringify(portfolioItems));
      renderPortfolio();
      renderAdminPortfolio();
      alert("Project updated!");
    }

    function deletePortfolioItem(id) {
      if (!confirm("Permanently delete?")) return;
      portfolioItems = portfolioItems.filter(i => i.id !== id);
      localStorage.setItem("tolitsPortfolio", JSON.stringify(portfolioItems));
      renderPortfolio();
      renderAdminPortfolio();
      alert("Project deleted!");
    }

    function renderAdminPortfolio() {
      const list = document.getElementById("adminPortfolioList");
      if (portfolioItems.length === 0) {
        list.innerHTML = "<p style='grid-column:1/-1;text-align:center;'>No projects yet. Add one!</p>";
        return;
      }
      list.innerHTML = portfolioItems.map(item => `
        <div style="background:var(--card);border:1px solid var(--border);border-radius:1rem;overflow:hidden;display:flex;flex-direction:column;">
          <img src="${item.img}" alt="${item.title}" loading="lazy" style="width:100%;height:250px;object-fit:cover;">
          <div style="padding:1.5rem;flex-grow:1;display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <span style="font-size:0.9rem;color:var(--primary);">${item.cat}</span>
              <h3 style="margin:0.75rem 0;font-size:1.4rem;">${item.title}</h3>
            </div>
            <div style="display:flex;gap:1rem;margin-top:auto;">
              <button onclick="editPortfolioItem(${item.id})" style="flex:1;background:#0066ff;color:white;border:none;padding:0.75rem;border-radius:0.5rem;">✏️ Edit</button>
              <button onclick="deletePortfolioItem(${item.id})" style="flex:1;background:#bd0000;color:white;border:none;padding:0.75rem;border-radius:0.5rem;">🗑️ Delete</button>
            </div>
          </div>
        </div>
      `).join("");
      document.getElementById("projectCount").textContent = portfolioItems.length;
    }

    function renderAdminUsers() {
      const users = JSON.parse(localStorage.getItem("tolitsLocalUsers") || "[]");
      const list = document.getElementById("adminUserList");
      
      if (users.length === 0) {
        list.innerHTML = "<p>No registered users yet.</p>";
        return;
      }
      
      list.innerHTML = users.map((u, i) => `
        <div style="background:var(--card);padding:1.5rem;border-radius:1rem;border:1px solid var(--border); display:flex; justify-content:space-between; align-items:center;">
          <div>
            <strong style="font-size:1.2rem;">${u.name}</strong><br>
            <span style="color:var(--muted-foreground);">${u.email}</span><br>
            <small>Provider: ${u.provider || 'local'} | User #${i+1} ${
              u.email === "admin@tolitsemprinta.com" ? "👑 ADMIN" : ""
            }</small>
          </div>
          
          <div>
            ${
              u.email === "admin@tolitsemprinta.com" 
                ? '<span style="color:#666; font-style:italic;">Main Admin</span>'
                : `<button onclick="deleteUser(${i})" style="background:#bd0000; color:white; border:none; padding:0.6rem 1.2rem; border-radius:0.5rem; cursor:pointer;">🗑️ Delete</button>`
            }
          </div>
        </div>
      `).join("");
    }

    function logout() {
      if (confirm("Are you sure you want to log out?")) {
        localStorage.removeItem("tolitsUser");
        window.location.href = "login.html";
      }
    }

    function openProfileModal() {
      const user = JSON.parse(localStorage.getItem("tolitsUser")) || { name: "Guest User", email: "guest@example.com" };
      document.getElementById("modalProfileName").textContent = user.name;
      document.getElementById("modalProfileEmail").textContent = user.email;
      document.getElementById("editName").value = user.name;
      document.getElementById("editEmail").value = user.email;
      document.getElementById("editPhone").value = user.phone || "";
      document.getElementById("memberSince").textContent = user.memberSince || "January 2026";
      document.getElementById("profileModal").classList.add("active");
      document.getElementById("userDropdown")?.classList.remove("active");
    }

    function closeProfileModal() {
      document.getElementById("profileModal").classList.remove("active");
    }

    function saveProfileChanges(e) {
      e.preventDefault();
      const newName = document.getElementById("editName").value.trim();
      const newEmail = document.getElementById("editEmail").value.trim().toLowerCase();
      const newPhone = document.getElementById("editPhone").value.trim();
      if (!newName || !newEmail) return alert("Name and email are required!");
      const user = { name: newName, email: newEmail, phone: newPhone, memberSince: "January 2026" };
      localStorage.setItem("tolitsUser", JSON.stringify(user));
      const firstName = newName.split(" ")[0];
      document.getElementById("userGreetingDesktop").textContent = `Hi, ${firstName}`;
      document.getElementById("userGreetingMobile").textContent = `Hi, ${firstName}`;
      document.getElementById("profileName").textContent = newName;
      document.getElementById("profileEmail").textContent = newEmail;
      document.getElementById("modalProfileName").textContent = newName;
      document.getElementById("modalProfileEmail").textContent = newEmail;
      const toast = document.getElementById("toast");
      toast.innerHTML = `<h4>Profile updated!</h4><p>Welcome back, ${firstName}!</p>`;
      toast.classList.add("active");
      setTimeout(() => toast.classList.remove("active"), 3000);
      closeProfileModal();
    }

    // Note: handleMessengerSubmit is referenced but not defined in the code.
    // If you have it in another file, keep it. Otherwise add a placeholder:
    function handleMessengerSubmit(e) {
      e.preventDefault();
      const toast = document.getElementById("toast");
      toast.innerHTML = `<h4>Redirecting to Messenger...</h4><p>Please attach images manually after we open Messenger.</p>`;
      toast.classList.add("active");
      setTimeout(() => {
        toast.classList.remove("active");
        window.open("https://www.facebook.com/messages/t/100094006965519", "_blank");
      }, 2000);
      // Optional: You can collect form data here if you want to pre-fill Messenger later
    }

    // Initialization
    document.addEventListener("DOMContentLoaded", () => {
      const user = JSON.parse(localStorage.getItem("tolitsUser")) || { name: "Guest", email: "guest@example.com" };
      const firstName = user.name.split(" ")[0] || "Guest";
      document.getElementById("userGreetingDesktop").textContent = `Hi, ${firstName}`;
      document.getElementById("userGreetingMobile").textContent = `Hi, ${firstName}`;
      document.getElementById("profileName").textContent = user.name;
      document.getElementById("profileEmail").textContent = user.email;

      renderPortfolio();
      loadAdminData();
    });

    window.onclick = function(e) {
      if (e.target.classList.contains('modal')) {
        e.target.classList.remove('active');
      }
    };
  </script>
  
</body>
</html>234we

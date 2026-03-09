// Static Portfolio Data - Real projects from Tolits Emprińta (URLs fixed & cleaned)
const portfolioItems = [
  {
    id: 1,
    cat: "T-Shirts",
    title: "Team Sports Jersey",
    src: "https://yt3.ggpht.com/UqXsOXLiZKjiZY3t3XQ7T0nGmFMnNScGntYPP3Ql5MpDREPVrw-PhToHk_nFl8JfF6thIAUO5F12Ww=s640-c-fcrop64=1,00002000ffffdfff-rw-nd-v1",
  },
  {
    id: 2,
    cat: "Banners",
    title: "Event Banner Design",
    img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/470538549_471303412679887_2838144606843178474_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG8lQnSZDOE5hb4a8_kWDPjRK29FO9xIZNErb0U73Ehkziy6yGQ9icsh6HuNuYEc7JdlhslW6AuHB1pWoKdB94a&_nc_ohc=vdW0rQhS9m0Q7kNvwEjfwp_&_nc_oc=Adm6Z5-UDbqZfeo_VKqXMuhW4Sku5HWYG5JkMj6AIHeutbrqyly2calmq4wJqCWCCiI&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AfrDrI3g-PgiyXJ7xf7H1v1ZAKtaBOhFJHy-3x7-0nnm9Q&oe=69627A16",
  },
  {
    id: 3,
    cat: "Stickers",
    title: "Brand Sticker Pack",
    img: "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/472481423_486220424521519_8137823478158742210_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEnZMN5x2Q5RimkzlDfRz3sTjh-s1yZdNZOOH6zXJl01rsPnVz8tMREauhQ5GBxoYS7ePYBXT4x7zGI4EQJtwwu&_nc_ohc=sF0zQUMlrFMQ7kNvwEh9k47&_nc_oc=Adk-9s52Ds0aY_Bv9TonFZ3hN3HQ9dOOmUqdkpnDLsxXwndnvAPP9TCXEeDEax_6a68&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&oh=00_Afq4_vDk_u9bVsmInwH7y8Pd03ZyHJRWfTNqFfmhOwo3ew&oe=69624B85",
  },
  {
    id: 4,
    cat: "ID Slings",
    title: "ID Slings / Lanyard Cards",
    img: "https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/550258268_691166797360213_478138595249889518_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHtNMDQL-jEOYsoxiDKu78UMIbPeknWU6Uwhs96SdZTpbZ7f79NpFOuG9B_lq9nX2sPiOM-0Bk0jMrXohWJOyp4&_nc_ohc=zV5GcNmK7YoQ7kNvwF0Eo8P&_nc_oc=AdkACFxH5_Y7j6ezc9Wr31RSRJbWTrVOx_EPLNuGrNhs5iwnHHpaTFeV3wKV7axssu0&_nc_zt=23&_nc_ht=scontent.fceb2-1.fna&oh=00_AfoqLUp4_qi3s1bjop1DLF6G3aEL0XuR8ds7AIt7ufD6GA&oe=6962814A",
  },
  {
    id: 5,
    cat: "T-Shirts",
    title: "Polo Shirt",
    img: "https://scontent.fceb6-3.fna.fbcdn.net/v/t39.30808-6/474791046_495761353567426_8196992300876930958_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFFIkH9f79XAS1y6s-mPaND3u94DMSs26Xe73gMxKzbpaZ2q110pz4miNpZujyraQASH29q6ixr78DGZaHEodgY&_nc_ohc=RmohKm8HaeoQ7kNvwETx9xO&_nc_oc=AdnXn0E5yX9cFCD5Of6SaqOfOTE3Om3WhU_3tbX7wLpmKK1mLZbK0q5U_SUYlbzKwMM&_nc_zt=23&_nc_ht=scontent.fceb6-3.fna&oh=00_Afohg7aJUf7y_DSHbfvdIVOCP1sQMtPX7-FdiuHSIgbBaQ&oe=69626F24",
  },
  {
    id: 6,
    cat: "Banners",
    title: "Store Front Signage",
    img: "https://scontent.fceb6-4.fna.fbcdn.net/v/t39.30808-6/470155275_467019576441604_311208652156125007_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEhv7ug8zwl7CsJnyPxtp3Z2YgIzMITWjzZiAjMwhNaPH8BnRMo0oOFLkvbYO8Ht2wad6gY1KYNH0jhu4A_8bwq&_nc_ohc=fobGQUAMRrsQ7kNvwHNIIrs&_nc_oc=AdlyMjiY5pP9wXhvvuVqnTSm8SaS_OrOUtPK6rh01I1cI5bmvVth7VMxAkI-eK2eLzM&_nc_zt=23&_nc_ht=scontent.fceb6-4.fna&oh=00_Afrgq6sP5S6XsN8KP0fw7UGb4bLdEjW4LMhoKkzfr0Yo6A&oe=69624DF4",
  },
];

let currentFilter = "All";
let currentModalIndex = -1;  // Better than ID for filtered navigation

// Render portfolio based on current filter
function renderPortfolio() {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const filtered = currentFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === currentFilter);

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--muted-foreground);">No projects in this category yet.</p>';
    return;
  }

  grid.innerHTML = filtered.map((item, index) => `
    <div class="portfolio-item" onclick="openModal(${index})">
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

// Filter handling
function filterPortfolio(category) {
  currentFilter = category;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.trim() === category);
  });
  renderPortfolio();
}

// Smooth scroll + mobile menu close
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
  document.getElementById("mobileNav")?.classList.remove("active");
}

// Mobile menu toggle
function toggleMenu() {
  document.getElementById("mobileNav")?.classList.toggle("active");
}

// User dropdown
function toggleUserDropdown() {
  document.getElementById("userDropdown")?.classList.toggle("active");
}

// Open portfolio modal (now uses index in filtered list)
function openModal(filteredIndex) {
  const filtered = currentFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === currentFilter);

  if (filteredIndex < 0 || filteredIndex >= filtered.length) return;

  currentModalIndex = filteredIndex;
  const item = filtered[filteredIndex];

  document.getElementById("modalProjectImg").src = item.img;
  document.getElementById("modalProjectImg").alt = item.title;
  document.getElementById("modalCat").textContent = item.cat;
  document.getElementById("modalTitle").textContent = item.title;

  // Optional blurred background header (if you have #modalHeader)
  const modalHeader = document.getElementById("modalHeader");
  if (modalHeader) {
    modalHeader.style.backgroundImage = `url(${item.img})`;
  }

  document.getElementById("portfolioModal").classList.add("active");
  updateNavButtons();
}

// Navigation in modal (within current filter)
function navigateModal(direction) {
  if (currentModalIndex === -1) return;

  const filtered = currentFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === currentFilter);

  let newIndex = currentModalIndex + direction;
  if (newIndex < 0) newIndex = filtered.length - 1;
  if (newIndex >= filtered.length) newIndex = 0;

  openModal(newIndex);
}

function updateNavButtons() {
  const prev = document.querySelector(".modal-prev");
  const next = document.querySelector(".modal-next");
  if (!prev || !next) return;

  const filtered = currentFilter === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.cat === currentFilter);

  prev.disabled = currentModalIndex === 0;
  next.disabled = currentModalIndex === filtered.length - 1;
}

function closeModal() {
  document.getElementById("portfolioModal")?.classList.remove("active");
  currentModalIndex = -1;
}

// Profile Modal
function openProfileModal() {
  const user = JSON.parse(localStorage.getItem("tolitsUser"));
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  document.getElementById("modalProfileName").textContent = user.name || "User";
  document.getElementById("modalProfileEmail").textContent = user.email || "Not provided";
  document.getElementById("editName").value = user.name || "";
  document.getElementById("editEmail").value = user.email || "";
  document.getElementById("editPhone").value = user.phone || "";
  document.getElementById("memberSince").textContent = user.memberSince || "January 2026";

  document.getElementById("profileModal").classList.add("active");
  document.getElementById("userDropdown")?.classList.remove("active");
}

function closeProfileModal() {
  document.getElementById("profileModal")?.classList.remove("active");
}

function saveProfileChanges(e) {
  e.preventDefault();

  const newName = document.getElementById("editName")?.value.trim();
  const newEmail = document.getElementById("editEmail")?.value.trim().toLowerCase();
  const newPhone = document.getElementById("editPhone")?.value.trim();

  if (!newName || !newEmail) {
    alert("Name and email are required!");
    return;
  }

  let user = JSON.parse(localStorage.getItem("tolitsUser")) || {};
  user.name = newName;
  user.email = newEmail;
  user.phone = newPhone;
  localStorage.setItem("tolitsUser", JSON.stringify(user));

  const firstName = newName.split(" ")[0];
  document.getElementById("userGreetingDesktop").textContent = `Hi, ${firstName}`;
  document.getElementById("userGreetingMobile").textContent = `Hi, ${firstName}`;
  document.getElementById("profileName").textContent = newName;
  document.getElementById("profileEmail").textContent = newEmail;
  document.getElementById("modalProfileName").textContent = newName;
  document.getElementById("modalProfileEmail").textContent = newEmail;

  showToast(`Profile updated! Welcome back, ${firstName}!`);
  closeProfileModal();
}

// Logout
function logout() {
  if (confirm("Are you sure you want to log out?")) {
    localStorage.removeItem("tolitsUser");
    window.location.href = "login.html";
  }
}

// Silent admin account creation (only once)
(function createDefaultAdmin() {
  let users = JSON.parse(localStorage.getItem("tolitsLocalUsers") || "[]");
  if (!users.some(u => u.email === "admin@tolitsemprinta.com")) {
    users.push({
      name: "Admin Tolits",
      email: "admin@tolitsemprinta.com",
      pass: "admin2026", // ← CHANGE THIS IN PRODUCTION! Never store plain text passwords
      provider: "local",
      isAdmin: true,
      memberSince: "January 2026"
    });
    localStorage.setItem("tolitsLocalUsers", JSON.stringify(users));
    console.log("Default admin account created (email: admin@tolitsemprinta.com)");
  }
})();

// WhatsApp Contact Handler
function handleContactSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("contactName")?.value.trim();
  const phone = document.getElementById("contactPhone")?.value.trim();
  const subject = document.getElementById("contactSubject")?.value.trim();
  const message = document.getElementById("contactMessage")?.value.trim();
  const fileInput = document.getElementById("contactImage");
  const hasFile = fileInput?.files?.length > 0;

  if (!name || !phone || !subject || !message) {
    alert("Please fill all required fields!");
    return;
  }

  const whatsappNumber = "+639677247749";

  let text = `*New Quote Request from Website*\n\n` +
             `Name: ${name}\n` +
             `Phone/WhatsApp: ${phone}\n` +
             `Subject: ${subject}\n\n` +
             `Message:\n${message}`;

  if (hasFile) {
    text += `\n\n📸 Reference image attached in form — please see my message!`;
    alert("Image selected!\n\nAfter OK, WhatsApp will open.\nAttach the image manually (paperclip icon).");
  }

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  window.open(whatsappUrl, "_blank");

  showToast("Redirecting to WhatsApp! We'll continue there.");
  e.target.reset();
  if (fileInput) fileInput.value = "";
}

// Messenger Contact Handler
function handleMessengerSubmit(e) {
  e.preventDefault();

  const name = document.getElementById("contactName")?.value.trim();
  const phone = document.getElementById("contactPhone")?.value.trim();
  const subject = document.getElementById("contactSubject")?.value.trim();
  const message = document.getElementById("contactMessage")?.value.trim();
  const fileInput = document.getElementById("contactImage");
  const hasFile = fileInput?.files?.length > 0;

  if (!name || !phone || !subject || !message) {
    alert("Please fill all required fields!");
    return;
  }

  let text = `*New Printing Inquiry from Website*\n\n` +
             `Name: ${name}\n` +
             `Phone: ${phone}\n` +
             `Subject: ${subject}\n\n` +
             `Message:\n${message}`;

  if (hasFile) {
    text += `\n\n📸 Reference image attached — please attach it in your next message!`;
    alert("Image selected!\n\nMessenger will open.\nAttach image using paperclip 📎");
  }

  const messengerUrl = `https://www.facebook.com/messages/t/100094006965519?text=${encodeURIComponent(text)}`;
  window.open(messengerUrl, "_blank");

  showToast("Redirecting to Messenger! We'll continue there.");
  e.target.reset();
  if (fileInput) fileInput.value = "";
}

// Simple reusable toast function
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.innerHTML = `<h4>${message}</h4>`;
  toast.classList.add("active");
  setTimeout(() => toast.classList.remove("active"), 4500);
}

// Initialization
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("tolitsUser"));

  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const firstName = user.name?.split(" ")[0] || "Guest";

  const desktopGreeting = document.getElementById("userGreetingDesktop");
  const mobileGreeting = document.getElementById("userGreetingMobile");
  if (desktopGreeting) desktopGreeting.textContent = `Hi, ${firstName}`;
  if (mobileGreeting) mobileGreeting.textContent = `Hi, ${firstName}`;

  const profileName = document.getElementById("profileName");
  const profileEmail = document.getElementById("profileEmail");
  if (profileName) profileName.textContent = user.name || "User";
  if (profileEmail) profileEmail.textContent = user.email || "user@email.com";

  // Welcome toast
  showToast(`Welcome back, ${firstName}!`);

  renderPortfolio();
});

// Close modals on outside click
window.onclick = function(e) {
  if (e.target.classList.contains("modal")) {
    if (e.target.id === "portfolioModal") closeModal();
    if (e.target.id === "profileModal") closeProfileModal();
  }
};
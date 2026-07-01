let currentUser = null;
let jobs = [
    { id: 1, title: "Senior Frontend Developer", company: "Systems Ltd", salary: "150,000 - 250,000", location: "Lahore" },
    { id: 2, title: "Digital Marketing Manager", company: "Netsol", salary: "120,000 - 180,000", location: "Karachi" },
    { id: 3, title: "Data Analyst", company: "Careem", salary: "80,000 - 130,000", location: "Islamabad" }
];

function showSection(section) {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById(section + '-section').classList.remove('hidden');
    if (section === 'home') renderFeaturedJobs();
}

function renderFeaturedJobs() {
    const container = document.getElementById('featured-jobs');
    container.innerHTML = jobs.map(job => `
        <div onclick="viewJob(${job.id})" class="job-card bg-white rounded-3xl p-6 shadow cursor-pointer">
            <h3 class="font-semibold text-lg">${job.title}</h3>
            <p class="text-gray-600">${job.company}</p>
            <p class="text-blue-600 font-medium mt-4">${job.salary}</p>
            <p class="text-sm text-gray-500">${job.location}</p>
        </div>
    `).join('');
}

function renderCategories() {
    const cats = ["Software Development", "Marketing", "Finance", "Teaching", "Sales"];
    const container = document.getElementById('categories');
    container.innerHTML = cats.map(cat => `
        <div onclick="filterCategory('${cat}')" class="bg-white p-6 rounded-3xl text-center cursor-pointer hover:bg-blue-50 transition">
            <p class="font-medium">${cat}</p>
        </div>
    `).join('');
}

function filterCategory(cat) {
    alert(`Showing jobs in ${cat} (Demo)`);
}

function viewJob(id) {
    const job = jobs.find(j => j.id === id);
    if (job) {
        alert(`📋 Job Details:\n\n${job.title}\n${job.company}\n${job.salary}\n\nApply Now? (Demo)`);
    }
}

function showPostJob() {
    if (!currentUser) {
        alert("Please login first");
        showLoginModal();
        return;
    }
    document.getElementById('post-job-modal').classList.remove('hidden');
    document.getElementById('post-job-modal').classList.add('flex');
}

function postJob() {
    const title = document.getElementById('job-title').value;
    const salary = document.getElementById('job-salary').value;
    
    if (title && salary) {
        jobs.unshift({
            id: Date.now(),
            title: title,
            company: "Your Company",
            salary: salary,
            location: "Pakistan"
        });
        alert("✅ Job posted successfully!");
        document.getElementById('post-job-modal').classList.add('hidden');
        document.getElementById('post-job-modal').classList.remove('flex');
        renderFeaturedJobs();
    }
}

function searchContent() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const filtered = jobs.filter(j => j.title.toLowerCase().includes(query));
    const container = document.getElementById('featured-jobs');
    container.innerHTML = filtered.map(job => `
        <div onclick="viewJob(${job.id})" class="job-card bg-white rounded-3xl p-6 shadow cursor-pointer">
            <h3 class="font-semibold">${job.title}</h3>
            <p class="text-blue-600 font-medium">${job.salary}</p>
        </div>
    `).join('');
}

function showLoginModal() {
    document.getElementById('login-modal').classList.remove('hidden');
    document.getElementById('login-modal').classList.add('flex');
}

function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
}

function login() {
    currentUser = "JobSeekerPK";
    document.getElementById('login-btn').innerHTML = `👋 ${currentUser}`;
    closeLoginModal();
    alert("✅ Logged in successfully!");
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    showSection('home');
    renderCategories();
    renderFeaturedJobs();
});
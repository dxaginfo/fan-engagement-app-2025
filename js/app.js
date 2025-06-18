/**
 * Fan Engagement Idea Generator - Application Logic
 * Handles form input, idea filtering, and display of results
 */

document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const form = document.getElementById('idea-generator-form');
    const resultsContainer = document.getElementById('results-container');
    const ideasContainer = document.getElementById('ideas-container');
    const initialMessage = document.getElementById('initial-message');
    const loadingIndicator = document.getElementById('loading-indicator');
    const savedIdeasBtn = document.getElementById('saved-ideas-btn');
    const savedIdeasContainer = document.getElementById('saved-ideas-container');
    const noSavedIdeasMessage = document.getElementById('no-saved-ideas');
    const clearSavedIdeasBtn = document.getElementById('clear-saved-ideas');
    const downloadPdfBtn = document.getElementById('download-pdf');
    
    // Initialize saved ideas from localStorage
    let savedIdeas = JSON.parse(localStorage.getItem('savedIdeas')) || [];
    
    // Event Listeners
    form.addEventListener('submit', handleFormSubmit);
    savedIdeasBtn.addEventListener('click', showSavedIdeasModal);
    clearSavedIdeasBtn.addEventListener('click', clearSavedIdeas);
    downloadPdfBtn.addEventListener('click', generatePDF);
    
    // Handle form submission
    function handleFormSubmit(e) {
        e.preventDefault();
        
        // Show loading indicator
        initialMessage.classList.add('d-none');
        resultsContainer.classList.add('d-none');
        loadingIndicator.classList.remove('d-none');
        
        // Get form values
        const productType = document.getElementById('product-type').value;
        const budgetRange = document.getElementById('budget-range').value;
        const primaryGoal = document.getElementById('goal-select').value;
        
        // Get selected age ranges
        const selectedAges = [];
        document.querySelectorAll('input[id^="age-"]:checked').forEach(checkbox => {
            selectedAges.push(checkbox.value);
        });
        
        // Get engagement type preferences
        const engagementTypes = [];
        document.querySelectorAll('input[id^="type-"]:checked').forEach(checkbox => {
            engagementTypes.push(checkbox.value);
        });
        
        // Filter ideas based on form inputs
        const filteredIdeas = filterIdeas(productType, budgetRange, primaryGoal, selectedAges, engagementTypes);
        
        // Simulate processing delay for better UX
        setTimeout(() => {
            loadingIndicator.classList.add('d-none');
            
            if (filteredIdeas.length > 0) {
                displayIdeas(filteredIdeas);
                resultsContainer.classList.remove('d-none');
            } else {
                // No matching ideas found
                ideasContainer.innerHTML = `
                    <div class="col-12 text-center py-5">
                        <p class="text-muted">No matching ideas found. Try adjusting your criteria.</p>
                        <button class="btn btn-outline-primary mt-3" onclick="document.getElementById('idea-generator-form').reset();">Reset Filters</button>
                    </div>
                `;
                resultsContainer.classList.remove('d-none');
            }
        }, 1500);
    }
    
    // Filter ideas based on user inputs
    function filterIdeas(productType, budgetRange, primaryGoal, ages, types) {
        if (!window.ENGAGEMENT_IDEAS) return [];
        
        return window.ENGAGEMENT_IDEAS.filter(idea => {
            // Product type match
            const productMatch = idea.productTypes.includes(productType);
            
            // Budget match (low, medium, high)
            const budgetMatch = idea.budgetLevel === budgetRange;
            
            // Primary goal match
            const goalMatch = idea.goals.includes(primaryGoal);
            
            // Age range match (any selected age range is sufficient)
            const ageMatch = ages.length === 0 || 
                            idea.audienceAges.some(age => ages.includes(age));
            
            // Engagement type match (category should be in selected types)
            const typeMatch = types.length === 0 || 
                             types.includes(idea.category) || 
                             (idea.category === 'community' && types.includes('inperson')) ||
                             (idea.category === 'social' && types.includes('digital'));
            
            return productMatch && budgetMatch && goalMatch && ageMatch && typeMatch;
        });
    }
    
    // Display filtered ideas
    function displayIdeas(ideas) {
        ideasContainer.innerHTML = '';
        
        // Sort ideas by relevance (can be enhanced with more sophisticated algorithms)
        const sortedIdeas = [...ideas].sort((a, b) => (a.id - b.id));
        
        // Limit to maximum 6 ideas
        const displayIdeas = sortedIdeas.slice(0, 6);
        
        // Create and append idea cards
        displayIdeas.forEach(idea => {
            const ideaCard = createIdeaCard(idea);
            ideasContainer.appendChild(ideaCard);
        });
    }
    
    // Create an idea card element
    function createIdeaCard(idea) {
        // Clone the template
        const template = document.getElementById('idea-card-template');
        const ideaCard = template.content.cloneNode(true);
        
        // Set card content
        const cardElement = ideaCard.querySelector('.idea-card');
        const titleElement = ideaCard.querySelector('.idea-title');
        const descriptionElement = ideaCard.querySelector('.idea-description');
        const categoryBadge = ideaCard.querySelector('.category-badge');
        const tipsContainer = ideaCard.querySelector('.implementation-tips');
        const budgetElement = ideaCard.querySelector('.budget-level');
        const difficultyElement = ideaCard.querySelector('.difficulty-level');
        const saveButton = ideaCard.querySelector('.save-idea-btn');
        
        // Populate with idea data
        titleElement.textContent = idea.title;
        descriptionElement.textContent = idea.description;
        
        // Set category badge
        categoryBadge.textContent = getCategoryDisplayName(idea.category);
        categoryBadge.classList.add(idea.category);
        
        // Set implementation tips
        tipsContainer.innerHTML = '';
        idea.implementationTips.forEach(tip => {
            const li = document.createElement('li');
            li.textContent = tip;
            tipsContainer.appendChild(li);
        });
        
        // Set budget and difficulty
        budgetElement.textContent = `Budget: ${formatBudgetLevel(idea.budgetLevel)}`;
        difficultyElement.textContent = `Difficulty: ${formatDifficultyLevel(idea.difficultyLevel)}`;
        
        // Check if idea is already saved
        const isIdeaSaved = savedIdeas.some(savedIdea => savedIdea.id === idea.id);
        if (isIdeaSaved) {
            saveButton.classList.add('saved');
            saveButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
            `;
        }
        
        // Add save button functionality
        saveButton.dataset.ideaId = idea.id;
        saveButton.addEventListener('click', function() {
            toggleSavedIdea(idea);
            this.classList.toggle('saved');
            
            if (this.classList.contains('saved')) {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                    </svg>
                `;
            } else {
                this.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark-plus" viewBox="0 0 16 16">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                        <path d="M8 4a.5.5 0 0 1 .5.5V6H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V7H6a.5.5 0 0 1 0-1h1.5V4.5A.5.5 0 0 1 8 4z"/>
                    </svg>
                `;
            }
        });
        
        return ideaCard;
    }
    
    // Toggle saving/unsaving an idea
    function toggleSavedIdea(idea) {
        const index = savedIdeas.findIndex(savedIdea => savedIdea.id === idea.id);
        
        if (index === -1) {
            // Save idea
            savedIdeas.push(idea);
            showToast('Idea saved!');
        } else {
            // Remove idea
            savedIdeas.splice(index, 1);
            showToast('Idea removed from saved list');
        }
        
        // Update localStorage
        localStorage.setItem('savedIdeas', JSON.stringify(savedIdeas));
    }
    
    // Show saved ideas modal
    function showSavedIdeasModal() {
        updateSavedIdeasDisplay();
        
        // Show the modal using Bootstrap's modal API
        const savedIdeasModal = new bootstrap.Modal(document.getElementById('savedIdeasModal'));
        savedIdeasModal.show();
    }
    
    // Update the saved ideas display in the modal
    function updateSavedIdeasDisplay() {
        savedIdeasContainer.innerHTML = '';
        
        if (savedIdeas.length === 0) {
            noSavedIdeasMessage.classList.remove('d-none');
            return;
        }
        
        noSavedIdeasMessage.classList.add('d-none');
        
        savedIdeas.forEach(idea => {
            const ideaCard = createIdeaCard(idea);
            savedIdeasContainer.appendChild(ideaCard);
        });
    }
    
    // Clear all saved ideas
    function clearSavedIdeas() {
        if (confirm('Are you sure you want to clear all saved ideas?')) {
            savedIdeas = [];
            localStorage.removeItem('savedIdeas');
            updateSavedIdeasDisplay();
            noSavedIdeasMessage.classList.remove('d-none');
            showToast('All saved ideas cleared');
        }
    }
    
    // Generate PDF of results (stub - would need a PDF library in production)
    function generatePDF() {
        showToast('PDF generation would be implemented with a library like jsPDF');
        // In a real implementation, you would:
        // 1. Format the current ideas for PDF output
        // 2. Use a library like jsPDF to generate the PDF
        // 3. Trigger download
    }
    
    // Helper: Show a toast notification
    function showToast(message) {
        // Simple alert for now - would be replaced with a proper toast component
        alert(message);
    }
    
    // Helper: Get display name for category
    function getCategoryDisplayName(category) {
        const categoryNames = {
            'digital': 'Digital',
            'inperson': 'In-Person',
            'merchandise': 'Merchandise',
            'experiential': 'Experience',
            'social': 'Social Media',
            'community': 'Community'
        };
        
        return categoryNames[category] || category;
    }
    
    // Helper: Format budget level
    function formatBudgetLevel(level) {
        return level.charAt(0).toUpperCase() + level.slice(1);
    }
    
    // Helper: Format difficulty level
    function formatDifficultyLevel(level) {
        return level.charAt(0).toUpperCase() + level.slice(1);
    }
});
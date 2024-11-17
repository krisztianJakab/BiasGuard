// Helper function to generate a progress bar dynamically based on percentage
function createProgressBar(container, percent) {
    const progressBar = document.createElement('div');
    progressBar.classList.add('progress-bar');

    const progressBarFilled = document.createElement('div');
    progressBarFilled.classList.add('progress-bar-filled');
    progressBarFilled.style.width = `${percent}%`;

    // Change color from red to green based on percentage
    progressBarFilled.style.backgroundColor = `rgb(${255 - (percent * 2.55)}, ${percent * 2.55}, 0)`;

    progressBar.appendChild(progressBarFilled);

    const percentageText = document.createElement('div');
    percentageText.classList.add('progress-percentage');
    percentageText.textContent = `${percent}%`;

    container.appendChild(progressBar);
    container.appendChild(percentageText);
}

// Initialize progress bars
document.querySelectorAll('.progress-container').forEach(container => {
    const percent = container.getAttribute('data-percent');
    createProgressBar(container, percent);
});

function showDetails(metric) {
    const detailsWindow = document.getElementById('details-window');
    const detailsTitle = document.getElementById('details-title');
    const detailsText = document.getElementById('details-text');

    if (metric === 'bias') {
        detailsTitle.textContent = 'Bias Details';
        detailsText.textContent = 'This section provides insight into detected biases. High scores indicate strong biases in the data.';
    } else if (metric === 'accuracy') {
        detailsTitle.textContent = 'Accuracy Details';
        detailsText.textContent = 'This section provides details on the accuracy of the information provided. Mid-range scores may indicate potential errors.';
    } else if (metric === 'conciseness') {
        detailsTitle.textContent = 'Conciseness Details';
        detailsText.textContent = 'This section checks if the response is concise and to the point. High scores mean good conciseness.';
    } else if (metric === 'relevance') {
        detailsTitle.textContent = 'Relevance Details';
        detailsText.textContent = 'This section evaluates how relevant the response is to the original query. High scores mean highly relevant content.';
    } else if (metric === 'clarity') {
        detailsTitle.textContent = 'Clarity Details';
        detailsText.textContent = 'This section checks the clarity of the response. High clarity scores indicate clear and understandable content.';
    }

    detailsWindow.style.display = 'block';
}

function closeDetails() {
    document.getElementById('details-window').style.display = 'none';
}

function openReportWindow() {
    document.getElementById('report-window').style.display = 'block';
}

function closeReportWindow() {
    document.getElementById('report-window').style.display = 'none';
}

function submitReport() {
    const metric = document.getElementById('metric-select').value;
    const reportText = document.getElementById('report-text').value;
    
    if (reportText.trim() === '') {
        alert('Please provide a description of the issue.');
        return;
    }
    
    // You can extend this to send the report to a server or process it further.
    alert(`Report Submitted for ${metric}: ${reportText}`);
    closeReportWindow();
}

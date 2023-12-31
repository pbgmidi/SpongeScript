// List of HTML files (replace with your own file URLs)
const files = [
's01/e01',
's01/e02',
's01/e03',
's01/e04',
's01/e05',
's01/e06',
's01/e07',
's01/e08',
's01/e09',
's01/e10',
's01/e11',
's01/e12',
's01/e13',
's01/e14',
's01/e15',
's01/e16',
's01/e17',
's01/e18',
's01/e19',
's01/e20',
's01/e21',
's01/e22',
's01/e23',
's01/e24',
's01/e25',
's01/e26',
's01/e27',
's01/e28',
's01/e29',
's01/e30',
's01/e31',
's01/e32',
's01/e33',
's01/e34',
's01/e35',
's01/e36',
's01/e37',
's01/e38',
's01/e39',
's01/e40',
's01/e41',
's02/e01',
's02/e02',
's02/e03',
's02/e04',
's02/e05',
's02/e06',
's02/e07',
's02/e08',
's02/e09',
's02/e10',
's02/e11',
's02/e12',
's02/e13',
's02/e14',
's02/e15',
's02/e16',
's02/e17',
's02/e18',
's02/e19',
's02/e20',
's02/e21',
's02/e22',
's02/e23',
's02/e24',
's02/e25',
's02/e26',
's02/e27',
's02/e28',
's02/e29',
's02/e30',
's02/e31',
's02/e32',
's02/e33',
's02/e34',
's02/e35',
's02/e36',
's02/e37',
's02/e38',
's02/e39',
's03/e01',
's03/e02',
's03/e03',
's03/e04',
's03/e05',
's03/e06',
's03/e07',
's03/e08',
's03/e09',
's03/e10',
's03/e11',
's03/e12',
's03/e13',
's03/e14',
's03/e15',
's03/e16',
's03/e17',
's03/e18',
's03/e19',
's03/e20',
's03/e21',
's03/e22',
's03/e23',
's03/e24',
's03/e25',
's03/e26',
's03/e27',
's03/e28',
's03/e29',
's03/e30',
's03/e31',
's03/e32',
's03/e33',
's03/e34',
's03/e35',
's03/e36',
's03/e37',
's04/e01',
's04/e02',
's04/e03',
's04/e04',
's04/e05',
's04/e06',
's04/e07',
's04/e08',
's04/e09',
's04/e10',
's04/e11',
's04/e12',
's04/e13',
's04/e14',
's04/e15',
's04/e16',
's04/e17',
's04/e18',
's04/e19',
's04/e20',
's04/e21',
's04/e22',
's04/e23',
's04/e24',
's04/e25',
's04/e26',
's04/e27',
's04/e28',
's04/e29',
's04/e30',
's04/e31',
's04/e32',
's04/e33',
's04/e34',
's04/e35',
's04/e36',
's04/e37',
's04/e38',
's05/e01',
's05/e02',
's05/e03',
's05/e04',
's05/e05',
's05/e06',
's05/e07',
's05/e08',
's05/e09',
's05/e10',
's05/e11',
's05/e12',
's05/e13',
's05/e14',
's05/e15',
's05/e16',
's05/e17',
's05/e18',
's05/e19',
's05/e20',
's05/e21',
's05/e22',
's05/e23',
's05/e24',
's05/e25',
's05/e26',
's05/e27',
's05/e28',
's05/e29',
's05/e30',
's05/e31',
's05/e32',
's05/e33',
's05/e34',
's05/e35',
's05/e36',
's05/e37',
's05/e38',
's05/e39',
's05/e40',
's05/e41',
's06/e01',
's06/e02',
's06/e03',
's06/e04',
's06/e05',
's06/e06',
's06/e07',
's06/e08',
's06/e09',
's06/e10',
's06/e11',
's06/e12',
's06/e13',
's06/e14',
's06/e15',
's06/e16',
's06/e17',
's06/e18',
's06/e19',
's06/e20',
's06/e21',
's06/e22',
's06/e23',
's06/e24',
's06/e25',
's06/e26',
's06/e27',
's06/e28',
's06/e29',
's06/e30',
's06/e31',
's06/e32',
's06/e33',
's06/e34',
's06/e35',
's06/e36',
's06/e37',
's06/e38',
's06/e39',
's06/e40',
's06/e41',
's06/e42',
's06/e43',
's06/e44',
's06/e45',
's06/e46',
 ];

 // Function to load and search HTML files
 async function searchHTMLFiles() {
     const searchQuery = document.getElementById('searchInput').value.toLowerCase();
     const resultsContainer = document.getElementById('results');
     resultsContainer.innerHTML = '';

     let colorClassIndex = 0;
     let progress = 0;
     const progressBar = document.querySelector('.progress-bar-inner');
     progressBar.style.width = '0%';

     for (const file of files) {
         const response = await fetch(file);
         const htmlContent = await response.text();

         const parser = new DOMParser();
         const doc = parser.parseFromString(htmlContent, 'text/html');

         const text = doc.body.textContent.toLowerCase();
         const index = text.indexOf(searchQuery);

         if (index !== -1) {
             const startIndex = Math.max(0, index - 100);
             const endIndex = Math.min(text.length, index + searchQuery.length + 10);

             const surroundingText = text.substring(startIndex, endIndex);
             const highlightedText = surroundingText.replace(
                 new RegExp(`(${searchQuery})`, 'gi'),
                 '<strong style="font-size: 16px; background-color: red; color: white;">$1</strong>'
             );

             const episodeNumber = file.match(/e(\d+)/)[1];
             const seasonNumber = file.match(/s(\d+)/)[1];
             const formattedFileName = `S${seasonNumber}/E${episodeNumber}`;

             const colorClass = getColorClass(colorClassIndex++);
             resultsContainer.innerHTML += `<p class="result ${colorClass}"><a href="javascript:void(0);" class="file-link" onclick="createHighlightedPage('${file}', '${searchQuery}')">${formattedFileName}</a>: ${highlightedText}</p>`;
         }

         // Update progress
         progress = ((files.indexOf(file) + 1) / files.length) * 100;
         progressBar.style.width = `${progress}%`;
         progressBar.textContent = `${Math.round(progress)}%`;
     }

     // Search is complete, reset progress bar
     progressBar.style.width = '0%';
 }

 // Function to create a new temporary HTML page with highlighted text
 function createHighlightedPage(file, searchQuery) {
     const windowName = 'highlightedPage';
     const newPage = window.open('', windowName, 'width=600,height=400');
     const url = file;

     fetch(url)
         .then((response) => response.text())
         .then((htmlContent) => {
             const highlightedText = htmlContent.replace(
                 new RegExp(`(${searchQuery})`, 'gi'),
                 '<strong style="font-size: 15px; background-color: black; color: white;">$1</strong>'
             );
             newPage.document.open();
             newPage.document.write(highlightedText);
             newPage.document.close();
         });
 }

 // Function to rotate background colors
 function getColorClass(index) {
     const colors = ['pink-bg', 'yellow-bg', 'brown-bg'];
     return colors[index % colors.length];
 }

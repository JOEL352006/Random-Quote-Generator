document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
    const body = document.body;

    async function fetchQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            quoteText.textContent = `"${data.content}"`;
            authorText.textContent = `- ${data.author}`;

            // Generate a random number between 1 and 50 to select a background color class
            const randomColor = Math.floor(Math.random() * 50) + 1;
            switch (randomColor) {
                case 1:
                    body.className = 'background-aliceblue';
                    break;
                case 2:
                    body.className = 'background-antiquewhite';
                    break;
                case 3:
                    body.className = 'background-aqua';
                    break;
                case 4:
                    body.className = 'background-aquamarine';
                    break;
                case 5:
                    body.className = 'background-azure';
                    break;
                case 6:
                    body.className = 'background-beige';
                    break;
                case 7:
                    body.className = 'background-bisque';
                    break;
                case 8:
                    body.className = 'background-black';
                    break;
                case 9:
                    body.className = 'background-blanchedalmond';
                    break;
                case 10:
                    body.className = 'background-blue';
                    break;
                case 11:
                    body.className = 'background-blueviolet';
                    break;
                case 12:
                    body.className = 'background-brown';
                    break;
                case 13:
                    body.className = 'background-burlywood';
                    break;
                case 14:
                    body.className = 'background-cadetblue';
                    break;
                case 15:
                    body.className = 'background-chartreuse';
                    break;
                case 16:
                    body.className = 'background-chocolate';
                    break;
                case 17:
                    body.className = 'background-coral';
                    break;
                case 18:
                    body.className = 'background-cornflowerblue';
                    break;
                case 19:
                    body.className = 'background-cornsilk';
                    break;
                case 20:
                    body.className = 'background-crimson';
                    break;
                case 21:
                    body.className = 'background-cyan';
                    break;
                case 22:
                    body.className = 'background-darkblue';
                    break;
                case 23:
                    body.className = 'background-darkcyan';
                    break;
                case 24:
                    body.className = 'background-darkgoldenrod';
                    break;
                case 25:
                    body.className = 'background-darkgray';
                    break;
                case 26:
                    body.className = 'background-darkgreen';
                    break;
                case 27:
                    body.className = 'background-darkkhaki';
                    break;
                case 28:
                    body.className = 'background-darkmagenta';
                    break;
                case 29:
                    body.className = 'background-darkolivegreen';
                    break;
                case 30:
                    body.className = 'background-darkorange';
                    break;
                case 31:
                    body.className = 'background-darkorchid';
                    break;
                case 32:
                    body.className = 'background-darkred';
                    break;
                case 33:
                    body.className = 'background-darksalmon';
                    break;
                case 34:
                    body.className = 'background-darkseagreen';
                    break;
                case 35:
                    body.className = 'background-darkslateblue';
                    break;
                case 36:
                    body.className = 'background-darkslategray';
                    break;
                case 37:
                    body.className = 'background-darkturquoise';
                    break;
                case 38:
                    body.className = 'background-darkviolet';
                    break;
                case 39:
                    body.className = 'background-deeppink';
                    break;
                case 40:
                    body.className = 'background-deepskyblue';
                    break;
                case 41:
                    body.className = 'background-dimgray';
                    break;
                case 42:
                    body.className = 'background-dodgerblue';
                    break;
                case 43:
                    body.className = 'background-firebrick';
                    break;
                case 44:
                    body.className = 'background-floralwhite';
                    break;
                case 45:
                    body.className = 'background-forestgreen';
                    break;
                case 46:
                    body.className = 'background-fuchsia';
                    break;
                case 47:
                    body.className = 'background-gainsboro';
                    break;
                case 48:
                    body.className = 'background-ghostwhite';
                    break;
                case 49:
                    body.className = 'background-gold';
                    break;
                case 50:
                    body.className = 'background-goldenrod';
                    break;
                default:
                    body.className = 'background-aliceblue'; // Default to AliceBlue
            }
        } catch (error) {
            quoteText.textContent = 'An error occurred. Please try again later.';
            authorText.textContent = '';
        }
    }

    newQuoteButton.addEventListener('click', fetchQuote);

    // Fetch a quote immediately when the page loads
    fetchQuote();

    // Automatically fetch a new quote every 7 seconds
    setInterval(fetchQuote, 7000);
});

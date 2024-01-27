document.addEventListener('DOMContentLoaded', function () {
    let cards = document.querySelectorAll('.slider');
    let count = 0;

    cards.forEach(function (card, index) {
        card.style.left = `${index * 100}%`;
    });

    function updateSlider() {
        cards.forEach(function (curVal) {
            curVal.style.transform = `translateX(-${100 * count}%)`;
        });
    }

    setInterval(function () {
        count = (count + 1) % cards.length;
        updateSlider();
    }, 2000);

    document.querySelectorAll('.card').forEach(function (challengeCard) {
        challengeCard.addEventListener('click', function () {
            // Create a new div for challenge details
            let detailDiv = document.createElement('div');
            detailDiv.classList.add('detailCard');

            // Populate the detailDiv with content (modify as needed)
            detailDiv.innerHTML = `
                <h2>Challenges</h2>
                <p>12 weeks</p>
                <img src="${challengeCard.querySelector('img').src}" alt="">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button>Join</button>
                <a href="#" onclick="location.reload()">Back</a>`;

            // Append the detailDiv to a specific section/div in your HTML
            document.getElementById('challengeDetails').appendChild(detailDiv);
        });
    });

    document.getElementById('contact').addEventListener('click', function () {
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let pass = document.getElementById('pass').value;

        if (name === '' || email === '' || pass === '') {
            alert('Please enter all details');
        } else {
            alert('Thank you for contacting');
        }
    });
});

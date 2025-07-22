document.getElementById('About').addEventListener('click', function(e) {
    // Show the profile pic in the about section
    document.getElementById('about-pic').classList.add('show');
});

const text = "A passionate Software Developer from India.";
let i = 0;
function typeWriter() {
    if (i < text.length) {
        document.querySelector('.typing').textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
    }
}
window.onload = typeWriter;